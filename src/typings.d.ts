interface Node {
  Link: string;
  Author: string;
  Chapter: string;
  VoteList: VoteList[];
}

interface VoteList {
  id: string;
  content?: string;
  choice_icon?: string;
  pic: string;
  pid?: string;
  selected: number | string;
  part_num: string;
  part_ratio: string;
  is_answer?: number | string;
  tick_icon: string;
  content_style: number | string;
  color?: Color;
  title?: string;
}

interface Color {
  text_color: string;
  text_color_dark: string;
  border_color: string;
  border_color_dark: string;
  fill_color: string;
  fill_color_dark: string;
  bg_color: string;
  bg_color_dark: string;
  tick_icon: string;
}
