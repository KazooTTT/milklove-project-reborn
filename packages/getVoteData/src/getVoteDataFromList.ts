import fs from "fs";
import { weiboList } from "../constant";
import { WeiboTypes } from "./typings";

export const fetchData = async (
  weiboLink: string
): Promise<WeiboTypes.RootObject> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "client-version": "v2.47.43",
      dnt: "1",
      pragma: "no-cache",
      priority: "u=1, i",
      referer: "https://weibo.com/7906190340/5141159233719310",
      "sec-ch-ua": '"Not:A-Brand";v="24", "Chromium";v="134"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "server-version": "v2025.03.20.2",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest",
      "x-xsrf-token": "vlZUXSj8CSoFYiXa-tRPN1PF",
      cookie: process.env.cookie as string,
    },
  };

  const id = weiboLink.split("/").pop();

  const response = await fetch(
    `https://weibo.com/ajax/statuses/show?id=${id}&locale=zh-CN&isGetLongText=true`,
    options
  );

  return response.json();
};

function getVoteListFromResponse(
  rootObject: WeiboTypes.RootObject
): WeiboTypes.Votelist[] | undefined {
  if (rootObject?.page_info?.card_info?.vote_object) {
    return rootObject.page_info.card_info.vote_object.vote_list;
  } else if (rootObject?.longText?.page_info?.card_info?.vote_object) {
    return rootObject.longText.page_info.card_info.vote_object.vote_list;
  } else {
    return undefined;
  }
}

const getVoteLists = async () => {
  const result: WeiboTypes.WithVoteData[] = [];
  for (const weibo of weiboList) {
    const response = await fetchData(weibo.Link);
    const voteList = getVoteListFromResponse(response);
    result.push({ ...weibo, VoteList: voteList || [] });
  }
  return result;
};

const main = async () => {
  const result = await getVoteLists();
  // save the result to a json file
  fs.writeFileSync("result.json", JSON.stringify(result, null, 2));
  console.log(result);
};

main();
