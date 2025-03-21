// this is to get the vote Data from the weibo content whose response cannot parse the vote data directly
import fs from "fs";
import { fetchData } from "./getVoteDataFromList";
import { WeiboTypes } from "./typings";

export const getVoteOptionList = async (voteUrl: string) => {
  const response = await fetch(voteUrl, {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      pragma: "no-cache",
      priority: "u=0, i",
      "sec-ch-ua": '"Not:A-Brand";v="24", "Chromium";v="134"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      cookie: process.env.cookie1 as string,
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
  });
  const html = await response.text();
  const match = html.match(/window\.__DATA__ = (\{[\s\S]*?\}) \|\| '';/);
  if (!match) {
    throw new Error("Could not find __DATA__");
  }
  const jsonData = JSON.parse(match[1]);
  if (!jsonData?.vote_info?.option_list) {
    console.log("🚀 ~ :37 ~ getVoteOptionList ~ jsonData:", jsonData);
    return [];
  }

  return jsonData.vote_info.option_list;
};

const main = async () => {
  const voteDataJson = fs.readFileSync("resultNewFinal.json", "utf-8");
  // filter the vote data
  const voteData = JSON.parse(voteDataJson);

  const voteItemListWithOutVoteData: WeiboTypes.WithVoteData[] =
    voteData.filter((item: WeiboTypes.WithVoteData) => !item.VoteList.length);
  console.log(
    "🚀 ~ :49 ~ main ~ voteItemListWithOutVoteData:",
    voteItemListWithOutVoteData.map(
      (item: WeiboTypes.WithVoteData) => item.Chapter
    )
  );
  debugger;

  const findVoteUrlFromResponse = async (response: WeiboTypes.RootObject) => {
    // method 1 get the vote url from the weibo content
    let optionList: WeiboTypes.Votelist[] = [];

    let url_struct = response?.longText?.url_struct;
    if (!url_struct) {
      url_struct = response?.url_struct;
    }
    if (url_struct) {
      const voteUrlItem = url_struct.find((urlItem: WeiboTypes.Urlstruct) =>
        urlItem.long_url.startsWith("https://vote.weibo.com")
      );
      if (!voteUrlItem) {
        return [];
      }
      optionList = await getVoteOptionList(voteUrlItem?.long_url || "");
    }
    return optionList;
  };

  for (const weibo of voteItemListWithOutVoteData) {
    const response = await fetchData(weibo.Link);
    const optionList = await findVoteUrlFromResponse(response);
    weibo.VoteList = optionList;
    const keyOfVoteData = voteData.findIndex(
      (item: WeiboTypes.WithVoteData) => item.Link === weibo.Link
    );
    voteData[keyOfVoteData] = weibo;
  }
  fs.writeFileSync("resultNew.json", JSON.stringify(voteData, null, 2));
};

main();
