import { expect, test } from "vitest";
import { getVoteOptionList } from "../src/getVoteDataFromVoteUrl";

test("getVoteHtml should return the correct option_list", async () => {
  const expectedOptionList = [
    {
      id: "2039937",
      title: "拉开门",
      pic: "",
      selected: "0",
      part_num: "638票",
      part_ratio: "83.29",
      tick_icon:
        "https://h5.sinaimg.cn/upload/100/1497/2022/10/24/choose_f.png",
      content_style: "0",
    },
    {
      id: "2039938",
      title: "不拉开",
      pic: "",
      selected: "0",
      part_num: "128票",
      part_ratio: "16.71",
      tick_icon:
        "https://h5.sinaimg.cn/upload/100/1497/2022/10/24/choose_f.png",
      content_style: "0",
    },
  ];
  const actualOptionList = await getVoteOptionList(
    'https://vote.weibo.com/h5/index/index?vote_id=2025_650973_-_76357e"'
  );
  expect(actualOptionList).toEqual(expectedOptionList);
});
