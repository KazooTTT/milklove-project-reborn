
## 重生计划分支可视化

[milklove 重生计划-分支可视化](https://reborn.milklovemuv.com/)  

![](https://pictures.kazoottt.top/2025/03/20250321-1327dabf66342822b089a35fd2f9dac1.png)

使用 [vue flow](https://vueflow.dev/) 来实现

## 准备

[汇总原文](<https://weibo.com/7906190340/5141239977217903>)  

### 获取投票数据  

``` typescript
function getVoteList(rootObject: RootObject): Votelist[] | undefined {
  if (
    rootObject &&
    rootObject.page_info &&
    rootObject.page_info.card_info &&
    rootObject.page_info.card_info.vote_object
  ) {
    return rootObject.page_info.card_info.vote_object.vote_list;
  } else if (rootObject && rootObject.longText && rootObject.longText.page_info && rootObject.longText.page_info.card_info && rootObject.longText.page_info.card_info.vote_object) {
    return rootObject.longText.page_info.card_info.vote_object.vote_list;

  }
   else {
    return undefined;
  }
}

interface RootObject {
  visible: Visible;
  created_at: string;
  id: number;
  idstr: string;
  mid: string;
  mblogid: string;
  user: User;
  can_edit: boolean;
  textLength: number;
  annotations: Annotation[];
  source: string;
  favorited: boolean;
  rid: string;
  pic_num: number;
  is_paid: boolean;
  pic_bg_new: string;
  mblog_vip_type: number;
  number_display_strategy: Numberdisplaystrategy;
  title_source: Titlesource;
  reposts_count: number;
  comments_count: number;
  attitudes_count: number;
  attitudes_status: number;
  continue_tag: Continuetag;
  isLongText: boolean;
  longText: LongText;
  mlevel: number;
  content_auth: number;
  is_show_bulletin: number;
  comment_manage_info: Commentmanageinfo;
  screen_name_suffix_new: Screennamesuffixnew[];
  share_repost_type: number;
  url_struct: Urlstruct[];
  title: Title;
  mblogtype: number;
  showFeedRepost: boolean;
  showFeedComment: boolean;
  pictureViewerSign: boolean;
  showPictureViewer: boolean;
  rcList: any[];
  can_remark: boolean;
  common_struct: Commonstruct[];
  analysis_extra: string;
  readtimetype: string;
  mixed_count: number;
  is_show_mixed: boolean;
  isSinglePayAudio: boolean;
  text: string;
  text_raw: string;
  region_name: string;
  page_info: Pageinfo;
  ok: number;
}

interface Title {
  text: string;
  base_color: number;
  icon_url: string;
}

interface Screennamesuffixnew {
  content: string;
  remark?: string;
  color: string;
  dark_color: string;
  type: number;
  icons?: Icon[];
  icons_location?: number;
  truncation: Truncation;
  scheme?: string;
  actionlog?: Actionlog4;
}

interface Actionlog4 {
  act_code: number;
  oid: string;
  uicode: null;
  luicode: null;
  fid: null;
  ext: string;
}

interface Truncation {
  mode: number;
  keep_end_size?: number;
}

interface Icon {
  name?: string;
  url: string;
  scheme: string;
  length?: number;
}

interface Commentmanageinfo {
  comment_permission_type: number;
  approval_comment_type: number;
  comment_sort_type: number;
}

interface LongText {
  created_at: string;
  appid: number;
  annotations: Annotation[];
  mblog_vip_type: number;
  user: User2;
  weibo_position: number;
  level_new: Levelnew;
  show_attitude_bar: number;
  page_info: Pageinfo;
  url_struct: Urlstruct[];
  common_struct: Commonstruct[];
  content: string;
}

interface Commonstruct {
  url: string;
  name: string;
  desc: string;
  img: string;
  type: number;
  btn_show_type: string;
  page_id: string;
  actionlog: Actionlog2;
  buttons: Button[];
  hidden: number;
}

interface Button {
  name: string;
  pic: string;
  type: string;
  params: Params;
  actionlog: Actionlog3;
}

interface Actionlog3 {
  act_code: number;
  uid: string;
  mid: number;
  oid: string;
  uicode: null;
  cardid: string;
  fid: null;
  luicode: null;
  lfid: null;
  ext: string;
  source: string;
}

interface Params {
  uid: string;
  scheme: string;
  type: string;
}

interface Actionlog2 {
  act_code: string;
  uid: string;
  mid: number;
  oid: string;
  uicode: null;
  cardid: string;
  fid: null;
  luicode: null;
  lfid: null;
  ext: string;
  source: string;
}

interface Urlstruct {
  url_title: string;
  url_type_pic: string;
  ori_url: string;
  page_id: string;
  short_url: string;
  long_url: string;
  url_type: number | string;
  result: boolean;
  actionlog: Actionlog;
  storage_type: string;
  hide: number;
  object_type: string;
  h5_target_url: string;
  need_save_obj: number;
  log?: string;
}

interface Pageinfo {
  type: string;
  page_id: string;
  object_type: string;
  page_desc: string;
  page_title: string;
  page_pic: string;
  type_icon: string;
  page_url: string;
  object_id: string;
  actionlog: Actionlog;
  card_info: Cardinfo;
}

interface Cardinfo {
  card_type: number;
  page_id: string;
  vote_object: Voteobject;
}

interface Voteobject {
  id: string;
  target_url: string;
  content: string;
  share_scheme: string;
  user_id: number;
  user_nick: string;
  vote_type: number;
  state: number;
  show_type: number;
  vote_placeholder: string;
  expire_date: number;
  create_source: number;
  is_multi_select: number;
  minimum: number;
  maximum: number;
  participant_type_desc: string;
  verify_type: number;
  resultpage_type: number;
  report_url: string;
  part_num_unitname: string;
  part_info: number;
  parted: number;
  vote_list: Votelist[];
  object_id: string;
  pic_infos: any[];
  pic_ids: string[];
  choice_count: number;
}

interface Votelist {
  id: string;
  content: string;
  choice_icon: string;
  pic: string;
  pid: string;
  selected: number;
  part_num: string;
  part_ratio: string;
  is_answer: number;
  tick_icon: string;
  content_style: number;
  color?: Color;
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

interface Actionlog {
  act_type: number;
  act_code: number;
  oid: string;
  uuid: number;
  cardid: string;
  lcardid: string;
  uicode: string;
  luicode: string;
  fid: string;
  lfid: string;
  ext: string;
}

interface Levelnew {
  '20250303': number;
  '20250310': number;
}

interface User2 {
  id: number;
  idstr: string;
  class: number;
  screen_name: string;
  name: string;
  province: string;
  city: string;
  location: string;
  description: string;
  url: string;
  profile_image_url: string;
  light_ring: boolean;
  cover_image_phone: string;
  profile_url: string;
  domain: string;
  weihao: string;
  gender: string;
  followers_count: number;
  followers_count_str: string;
  friends_count: number;
  pagefriends_count: number;
  statuses_count: number;
  video_status_count: number;
  video_play_count: number;
  super_topic_not_syn_count: number;
  favourites_count: number;
  created_at: string;
  following: boolean;
  allow_all_act_msg: boolean;
  geo_enabled: boolean;
  verified: boolean;
  verified_type: number;
  remark: string;
  insecurity: Insecurity;
  ptype: number;
  allow_all_comment: boolean;
  avatar_large: string;
  avatar_hd: string;
  verified_reason: string;
  verified_trade: string;
  verified_reason_url: string;
  verified_source: string;
  verified_source_url: string;
  verified_state: number;
  verified_level: number;
  verified_type_ext: number;
  has_service_tel: boolean;
  verified_reason_modified: string;
  verified_contact_name: string;
  verified_contact_email: string;
  verified_contact_mobile: string;
  follow_me: boolean;
  like: boolean;
  like_me: boolean;
  online_status: number;
  bi_followers_count: number;
  lang: string;
  star: number;
  mbtype: number;
  mbrank: number;
  svip: number;
  vvip: number;
  mb_expire_time: number;
  block_word: number;
  block_app: number;
  level: number;
  type: number;
  ulevel: number;
  user_limit: number;
  badge: Badge;
  badge_top: string;
  has_ability_tag: number;
  extend: Extend;
  chaohua_ability: number;
  brand_ability: number;
  nft_ability: number;
  vplus_ability: number;
  wenda_ability: number;
  live_ability: number;
  gongyi_ability: number;
  paycolumn_ability: number;
  newbrand_ability: number;
  ecommerce_ability: number;
  hardfan_ability: number;
  wbcolumn_ability: number;
  interaction_user: number;
  audio_ability: number;
  place_ability: number;
  credit_score: number;
  user_ability: number;
  urank: number;
  story_read_state: number;
  verified_detail: Verifieddetail;
  vclub_member: number;
  is_teenager: number;
  is_guardian: number;
  is_teenager_list: number;
  pc_new: number;
  special_follow: boolean;
  planet_video: number;
  video_mark: number;
  live_status: number;
  user_ability_extend: number;
  video_cover: Videocover;
  status_total_counter: Statustotalcounter2;
  video_total_counter: Videototalcounter;
  brand_account: number;
  hongbaofei: number;
  tab_manage: string;
  reward_status: number;
  green_mode: number;
  urisk: number;
  unfollowing_recom_switch: number;
  avatar_type: number;
  is_big: number;
  auth_status: number;
  auth_realname: null;
  auth_career: null;
  auth_career_name: null;
  show_auth: number;
  is_auth: number;
  is_punish: number;
  avatar_hd_pid: string;
  like_display: number;
  comment_display: number;
}

interface Videototalcounter {
  play_cnt: number;
}

interface Statustotalcounter2 {
  total_cnt: number;
  repost_cnt: number;
  comment_cnt: number;
  like_cnt: number;
  comment_like_cnt: number;
}

interface Videocover {
  mid: number;
}

interface Verifieddetail {
  custom: number;
  data: Datum[];
}

interface Datum {
  key: number;
  sub_key: number;
  weight: number;
  desc: string;
  timestamp: number;
}

interface Extend {
  privacy: Privacy;
  mbprivilege: string;
}

interface Privacy {
  mobile: number;
}

interface Badge {
  uc_domain: number;
  enterprise: number;
  anniversary: number;
  taobao: number;
  gongyi: number;
  gongyi_level: number;
  bind_taobao: number;
  dailv: number;
  zongyiji: number;
  vip_activity1: number;
  unread_pool: number;
  daiyan: number;
  vip_activity2: number;
  fools_day_2016: number;
  uefa_euro_2016: number;
  unread_pool_ext: number;
  self_media: number;
  dzwbqlx_2016: number;
  discount_2016: number;
  follow_whitelist_video: number;
  league_badge: number;
  lol_msi_2017: number;
  super_star_2017: number;
  video_attention: number;
  travel_2017: number;
  lol_gm_2017: number;
  cz_wed_2017: number;
  inspector: number;
  panda: number;
  uve_icon: number;
  user_name_certificate: number;
  suishoupai_2018: number;
  wenda: number;
  wenchuan_10th: number;
  super_star_2018: number;
  worldcup_2018: number;
  wenda_v2: number;
  league_badge_2018: number;
  dailv_2018: number;
  asiad_2018: number;
  qixi_2018: number;
  yiqijuan_2018: number;
  meilizhongguo_2018: number;
  lol_s8: number;
  kpl_2018: number;
  national_day_2018: number;
  double11_2018: number;
  weibo_display_fans: number;
  relation_display: number;
  wbzy_2018: number;
  memorial_2018: number;
  v_influence_2018: number;
  hongbaofei_2019: number;
  status_visible: number;
  denglong_2019: number;
  fu_2019: number;
  womensday_2018: number;
  avengers_2019: number;
  suishoupai_2019: number;
  wusi_2019: number;
  earth_2019: number;
  hongrenjie_2019: number;
  dailv_2019: number;
  china_2019: number;
  hongkong_2019: number;
  jvhuasuan_2019: number;
  taohuayuan_2019: number;
  dzwbqlx_2019: number;
  rrgyj_2019: number;
  cishan_2019: number;
  family_2019: number;
  shouhuan_2019: number;
  ant_2019: number;
  weishi_2019: number;
  shuang11_2019: number;
  kdx_2019: number;
  wbzy_2019: number;
  starlight_2019: number;
  daqi_2019: number;
  gongjiri_2019: number;
  macao_2019: number;
  china_2019_2: number;
  hongbao_2020: number;
  feiyan_2020: number;
  hope_2020: number;
  kangyi_2020: number;
  daka_2020: number;
  green_2020: number;
  graduation_2020: number;
  pc_new: number;
  kfc_2020: number;
  dailv_2020: number;
  movie_2020: number;
  mi_2020: number;
  vpick_2020: number;
  cddyh_2020: number;
  nike_2020: number;
  school_2020: number;
  gongyi_2020: number;
  hongrenjie_2020: number;
  test_icon: number;
  china_2020: number;
  nissan_2020: number;
  zjszgf_2020: number;
  zaolang_2020: number;
  aizi_2020: number;
  wennuanji_2020: number;
  weibozhiye_2020: number;
  yijia7_2020: number;
  kfcflag_2021: number;
  hongbaofeifuniu_2021: number;
  cuccidlam20_2021: number;
  cuccidlam12_2021: number;
  cuccidlam25_2021: number;
  hongbaofeijika_2021: number;
  shequweiyuan_2021: number;
  weibozhiyexianxia_2021: number;
  zhongcaoguan_2021: number;
  nihaoshenghuojie_2021: number;
  lvzhilingyang_2021: number;
  xiaominewlogo_2021: number;
  disney5_2021: number;
  earthguarder_2021: number;
  yuanlongping_2021: number;
  ylpshuidao_2021: number;
  brand_account_2021: number;
  gaokao_2021: number;
  ouzhoubei_2021: number;
  biyeji_2021: number;
  party_cardid_state: number;
  hongrenjie_2021: number;
  aoyun_2021: number;
  zhongcaouser_2021: number;
  dailu_2021: number;
  companion_card: number;
  fishfarm_2021: number;
  kaixue21_2021: number;
  zhonghuacishanri_2021: number;
  renrengongyijie_2021: number;
  yinyuejie21_2021: number;
  qianbaofu_2021: number;
  yingxionglianmengs11_2021: number;
  yxlmlpl_2021: number;
  hongbaofei_2022: number;
  qichenqiche_2021: number;
  weibozhiye_2021: number;
  weibozhiyebobao_2021: number;
  social_content: number;
  hongbaofei2022_2021: number;
  dongaohui_2022: number;
  pc_experiment: number;
  youyic_2022: number;
  newdongaohui_2022: number;
  bddxrrdongaohui_2022: number;
  lvzhilingyang_2022: number;
  wenmingxiaobiaobing_2022: number;
  nihaochuntian_2022: number;
  video_visible: number;
  ceshiicon_2022: number;
  zuimeilaodongjie_2022: number;
  iplocationchange_2022: number;
  biyeji_2022: number;
  shuidao_2022: number;
  mengniu_2022: number;
  is_university: number;
  city_university: number;
  gaokao_2022: number;
  quanminjianshen_2022: number;
  hangmu_2022: number;
  guoqi_2022: number;
  gangqi_2022: number;
  dailv_2022: number;
  dailvmingxing_2022: number;
  comment_source: number;
  huoban_2022: number;
  zhongqiujie_2022: number;
  kaixueji_2022: number;
  renrengongyijie_2022: number;
  guoqing_2022: number;
  guoq_2022: number;
  s12_2022: number;
  clock_in_ug: number;
  hongrenjie_2022: number;
  pijingzhanji_2022: number;
  guangpanxingdong_2022: number;
  shijiebei_2022: number;
  hongrenjienew_2022: number;
  shijiebeigolden_2022: number;
  baokemeng_2022: number;
  moyudaka_2022: number;
  jiancjiyundong_2022: number;
  zhuijudaka_2022: number;
  shenyeshudongdaka_2022: number;
  suishoupaidaka_2022: number;
  meirimengchongdaka_2022: number;
  meirizaoqidaka_2022: number;
  meiriyicandaka_2022: number;
  ranghongbaofei_2023: number;
  pinganguo_2022: number;
  yuanshen_2023: number;
  chunjiesheyingdasai_2023: number;
  tuniandiyitiaoweibo_2023: number;
  xinyuncao_2023: number;
  taohua_2023: number;
  shangyeceshi1: number;
  shangyeceshi2: number;
  shangyeceshi3: number;
  shuimianri_2023: number;
  diqiuyixiaoshi_2023: number;
  star_crown: number;
  guangyuyexing_2023: number;
  yaya_panda: number;
  weixiaori_2023: number;
  muqinjie_2023: number;
  dumei_2022: number;
  biyeji_2023: number;
  gaokao_2023: number;
  duanwujie_2023: number;
  xuexidaka_2023: number;
  haowufenxiangdaka_2023: number;
  zhuifandaka_2023: number;
  nvzu_2023: number;
  guangyuye_2023: number;
  tfboy_2023: number;
  weilandangan_2023: number;
  qixi_2023: number;
  guangyuyezhilian_2023: number;
  renrengongyijie_2023: number;
  kaixueji_2023: number;
  yayunhui_2023: number;
  yayunhui_dianjing: number;
  laoshiyeyeni_2023: number;
  yayunhuiguoqi_2023: number;
  guangmingyueman_2023: number;
  s13_2023: number;
  wangzherongyao_2923: number;
  user_identity_auth: number;
  bawangchaji_2023: number;
  guangzhiye_2023: number;
  user_reality_auth: number;
  gaokaojiayou_2023: number;
  baokemeng_2023: number;
  haimianbaobaoguoshengdan_2023: number;
  xugexingyuan_2023: number;
  fendi_2023: number;
  lianyusheng1_2024: number;
  lianyusheng2_2024: number;
  lianyusheng3_2024: number;
  guangyuyezhilian_2024: number;
  article_visible: number;
  ganmaoling_2024: number;
  yuanmengzhixing_2024: number;
  nihaochuntian_2024: number;
  lvzhilingyang_2024: number;
  status_visible_y: number;
  hangmu_2024: number;
  guangyuye_2024: number;
  gaokao_2024: number;
  biyeji_2024: number;
  sqjnhdianshi_2024: number;
  purchased_paid_content: number;
  changxiangsi_2024: number;
  zhuamaomao_2024: number;
  aoyun_2024: number;
  xiariqingchunpaidui_2024: number;
  renrengongyijie_2024: number;
  kaixueji_2024: number;
  jiaoshijie_2024: number;
  zhongqiu_2024: number;
  ruyuan_2024: number;
  guoqi1001_2024: number;
  hepingjingying_2024: number;
  acg_2024: number;
  bawangchaji_2024: number;
  tymyd_2024: number;
  mrxy_2024: number;
  hrsj_2025: number;
  kxn_2025: number;
  cw_2025: number;
  lzly_2025: number;
}

interface Insecurity {
  sexual_content: boolean;
}

interface Continuetag {
  title: string;
  pic: string;
  scheme: string;
}

interface Titlesource {
  name: string;
  url: string;
  image: string;
}

interface Numberdisplaystrategy {
  apply_scenario_flag: number;
  display_text_min_number: number;
  display_text: string;
}

interface Annotation {
  super_tag_id?: string;
  super_exparams?: string;
  shooting?: number;
  client_mblogid?: string;
  source_text?: string;
  phone_id?: string;
  mapi_request?: boolean;
}

interface User {
  id: number;
  idstr: string;
  pc_new: number;
  screen_name: string;
  profile_image_url: string;
  profile_url: string;
  verified: boolean;
  verified_type: number;
  domain: string;
  weihao: string;
  verified_type_ext: number;
  status_total_counter: Statustotalcounter;
  avatar_large: string;
  avatar_hd: string;
  follow_me: boolean;
  following: boolean;
  mbrank: number;
  mbtype: number;
  v_plus: number;
  user_ability: number;
  planet_video: boolean;
  icon_list: Iconlist[];
}

interface Iconlist {
  type: string;
  data: Data;
}

interface Data {
  mbrank: number;
  mbtype: number;
  svip: number;
  vvip: number;
}

interface Statustotalcounter {
  total_cnt_format: string;
  comment_cnt: string;
  repost_cnt: string;
  like_cnt: string;
  total_cnt: string;
}

interface Visible {
  type: number;
  list_id: number;
}
```

### 结构（废弃）

``` ts
type Item = {
    id:string，// 唯一的 id
    date:string // 章节的日期
    index:number // 章节的索引
    title:string // 分支的标题
    url:string // 分支的链接
    author:string // 作者
    branch: Item & {
        count:number // 分支投票的数量
    }
}
```
