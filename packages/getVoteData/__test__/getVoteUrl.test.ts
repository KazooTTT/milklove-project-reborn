import { expect, test } from "vitest";
import { WeiboTypes } from "../src/typings";

const response = {
  visible: {
    type: 0,
    list_id: 0,
  },
  created_at: "Fri Mar 07 13:40:31 +0800 2025",
  id: 5141556386336514,
  idstr: "5141556386336514",
  mid: "5141556386336514",
  mblogid: "Phr4qqApQ",
  user: {
    id: 2646283691,
    idstr: "2646283691",
    pc_new: 7,
    screen_name: "安风AnFeng_",
    profile_image_url:
      "https://tvax3.sinaimg.cn/crop.0.0.1080.1080.50/9dbb15ably8h42sqlsgzxj20u00u00wr.jpg?KID=imgbed,tva&Expires=1742493774&ssig=JpXrF7%2BKqI",
    profile_url: "/u/2646283691",
    verified: true,
    verified_type: 0,
    domain: "",
    weihao: "",
    verified_type_ext: 2,
    status_total_counter: {
      total_cnt_format: "17.6万",
      comment_cnt: "31,168",
      repost_cnt: "11,252",
      like_cnt: "133,571",
      total_cnt: "175,991",
    },
    avatar_large:
      "https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/9dbb15ably8h42sqlsgzxj20u00u00wr.jpg?KID=imgbed,tva&Expires=1742493774&ssig=tGHOCP4G2u",
    avatar_hd:
      "https://tvax3.sinaimg.cn/crop.0.0.1080.1080.1024/9dbb15ably8h42sqlsgzxj20u00u00wr.jpg?KID=imgbed,tva&Expires=1742493774&ssig=rwcbvWpBn4",
    follow_me: false,
    following: false,
    mbrank: 6,
    mbtype: 12,
    v_plus: 0,
    user_ability: 10749448,
    planet_video: false,
    icon_list: [
      {
        type: "vip",
        data: {
          mbrank: 6,
          mbtype: 12,
          svip: 0,
          vvip: 0,
        },
      },
    ],
  },
  can_edit: false,
  textLength: 144,
  annotations: [
    {
      oid: "1022:2309405141556389609508",
      type: "article",
    },
    {
      super_tag_id: "5042014587584703",
    },
    {
      shooting: 1,
      client_mblogid: "iPhone-097F421A-70F2-4D63-BF2C-4161CAF7A15F",
    },
    {
      source_text: "",
      phone_id: "1399",
    },
    {
      mapi_request: true,
    },
  ],
  source: "iPhone客户端",
  favorited: false,
  rid: "0_0_0_5058885117164206024_0_0_0",
  cardid: "star_1618",
  pic_ids: [],
  pic_num: 0,
  is_paid: false,
  pic_bg_new:
    "https://n.sinaimg.cn/default/944aebbe/20231129/pic_hypertalk_silver.png",
  mblog_vip_type: 0,
  number_display_strategy: {
    apply_scenario_flag: 19,
    display_text_min_number: 1000000,
    display_text: "100万+",
  },
  title_source: {
    name: "milklove超话",
    url: "sinaweibo://pageinfo?pageid=1008086a3f910bdc5fcd535fb9aeffdffc75ff&extparam=milklove",
    image:
      "http://wx1.sinaimg.cn/thumbnail/006jTSuHly8hys436j9bkj30rf0rfq5b.jpg",
  },
  reposts_count: 19,
  comments_count: 61,
  attitudes_count: 1067,
  attitudes_status: 0,
  isLongText: false,
  mlevel: 0,
  content_auth: 0,
  is_show_bulletin: 3,
  comment_manage_info: {
    comment_permission_type: -1,
    approval_comment_type: 0,
    comment_sort_type: 0,
  },
  screen_name_suffix_new: [
    {
      content: "安风AnFeng_",
      remark: "",
      color: "FF333333",
      dark_color: "FFD3D3D3",
      type: 1,
      icons: [
        {
          name: "vip",
          url: "https://h5.sinaimg.cn/upload/116/1347/2021/04/27/vip6.png",
          scheme:
            "sinaweibo://mppopupwindow?wbx_hide_close_btn=true&wbx_bg_view_dismiss=true&scheme=sinaweibo%3A%2F%2Fwbox%3Fid%3Dc5morp96wq%26page%3Dpages%2Ffunction%2Findex%26config_id%3D21%26F%3Dtq_zsbs_xhgxcx%26customclose%3D1",
        },
        {
          url: "https://h5.sinaimg.cn/upload/1000/808/2020/02/17/andriod_chaohua_header.png",
          scheme:
            "sinaweibo://pageinfo?pageid=1008086a3f910bdc5fcd535fb9aeffdffc75ff&extparam=milklove",
        },
      ],
      icons_location: 1,
      truncation: {
        mode: 1,
      },
    },
    {
      content: "milklove超话",
      color: "FF507DAF",
      dark_color: "FF7691b9",
      type: 2,
      scheme:
        "sinaweibo://pageinfo?pageid=1008086a3f910bdc5fcd535fb9aeffdffc75ff&extparam=milklove&extension=%7B%22mblog_object_ref%22%3A%22topic%22%7D",
      truncation: {
        mode: 1,
        keep_end_size: 2,
      },
      actionlog: {
        act_code: 1404,
        oid: "1022:1008086a3f910bdc5fcd535fb9aeffdffc75ff",
        uicode: null,
        luicode: null,
        fid: null,
        ext: "mid:5141556386336514|source_type:3|uid:7796753876|analysis_extra:|new_style:1",
      },
    },
  ],
  share_repost_type: 0,
  url_struct: [
    {
      url_title: "07",
      url_type_pic:
        "https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_article.png",
      ori_url:
        "sinaweibo://articlebrowser?object_id=1022%3A2309405141556389609508&url=https%3A%2F%2Fweibo.com%2Fttarticle%2Fx%2Fm%2Fshow%23%2Fid%3D2309405141556389609508%26_wb_client_%3D1&extparam=lmid--5141556386336514",
      page_id: "2309405141556389609508",
      short_url: "http://t.cn/A6Bhtmuh",
      long_url: "https://weibo.com/ttarticle/p/show?id=2309405141556389609508",
      url_type: 39,
      result: false,
      actionlog: {
        act_type: 1,
        act_code: 1423,
        oid: "1022:2309405141556389609508",
        uuid: 5141556389478564,
        cardid: "",
        lcardid: "",
        uicode: "",
        luicode: "",
        fid: "",
        lfid: "",
        ext: "uid:2646283691|mid:5141556386336514|rootuid:2646283691|rootmid:5141556386336514|objectid:1022:2309405141556389609508||vuid:7796753876",
        source: "article",
        fromlog: "",
      },
      storage_type: "",
      hide: 0,
      object_type: "",
      h5_target_url:
        "https://weibo.com/ttarticle/x/m/show#/id=2309405141556389609508&_wb_client_=1",
      need_save_obj: 0,
    },
    {
      url_title: "安风AnFeng_的微博投票",
      url_type_pic:
        "https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_web.png",
      ori_url:
        "https://vote.weibo.com/h5/index/index?vote_id=2025_658735_-_5f7620&from=1FFFF96039&weiboauthoruid=2646283691",
      page_id: "2317162025_658735_-_5f7620",
      short_url: "http://t.cn/A6Bhtm3b",
      long_url:
        "https://vote.weibo.com/h5/index/index?vote_id=2025_658735_-_5f7620",
      url_type: 39,
      result: true,
      actionlog: {
        act_type: 1,
        act_code: 300,
        oid: "1022:2317162025_658735_-_5f7620",
        uuid: 5141556389478700,
        cardid: "",
        lcardid: "",
        uicode: "",
        luicode: "",
        fid: "",
        lfid: "",
        ext: "mid:5141556386336514|rid:0_0_0_5058885117164206024_0_0_0|short_url:http://t.cn/A6Bhtm3b|long_url:https://vote.weibo.com/h5/index/index?vote_id=2025_658735_-_5f7620|comment_id:|miduid:2646283691|rootmid:5141556386336514|rootuid:2646283691|authorid:|uuid:5141556389478700|is_ad_weibo:0|analysis_card:url_struct",
      },
      storage_type: "",
      hide: 0,
      object_type: "",
      h5_target_url:
        "https://vote.weibo.com/h5/index/index?vote_id=2025_658735_-_5f7620&from=1FFFF96039&weiboauthoruid=2646283691",
      need_save_obj: 0,
      log: "su=A6Bhtm3b&mark=&mid=5141556386336514",
    },
    {
      url_title: "微博正文",
      url_type_pic:
        "https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_weibo.png",
      ori_url: "sinaweibo://detail?mblogid=5141239977217903",
      page_id: "1000007906190340_5141239977217903",
      short_url: "http://t.cn/A61sFeJb",
      long_url: "https://weibo.com/7906190340/5141239977217903",
      url_type: 0,
      result: false,
      actionlog: {
        act_type: 1,
        act_code: 300,
        oid: "",
        uuid: "",
        cardid: "",
        lcardid: "",
        uicode: "",
        luicode: "",
        fid: "",
        lfid: "",
        ext: "mid:5141556386336514|rid:0_0_0_5058885117164206024_0_0_0|short_url:http://t.cn/A61sFeJb|long_url:https://weibo.com/7906190340/5141239977217903|comment_id:|miduid:2646283691|rootmid:5141556386336514|rootuid:2646283691|authorid:|uuid:|is_ad_weibo:0|analysis_card:url_struct",
      },
      storage_type: "",
      hide: 0,
      object_type: "",
      need_save_obj: 0,
    },
    {
      url_title: "milklove超话",
      url_type_pic:
        "https://h5.sinaimg.cn/upload/100/959/2020/05/09/timeline_card_small_super.png",
      ori_url:
        "sinaweibo://pageinfo?containerid=1008086a3f910bdc5fcd535fb9aeffdffc75ff&extparam=milklove&extension=%7B%22mblog_object_ref%22%3A%22content%22%7D",
      page_id: "1008086a3f910bdc5fcd535fb9aeffdffc75ff",
      short_url: "#milklove[超话]#",
      long_url: "",
      url_type: "",
      result: false,
      actionlog: {
        act_type: 1,
        act_code: 300,
        oid: "1022:1008086a3f910bdc5fcd535fb9aeffdffc75ff",
        uuid: 3832998960086983,
        cardid: "",
        lcardid: "",
        uicode: "",
        luicode: "",
        fid: "",
        lfid: "",
        ext: "mid:5141556386336514|rid:0_0_0_5058885117164206024_0_0_0|short_url:|long_url:|comment_id:|miduid:2646283691|rootmid:5141556386336514|rootuid:2646283691|authorid:|uuid:3832998960086983|is_ad_weibo:0|analysis_card:url_struct",
      },
      storage_type: "",
      hide: 0,
      object_type: "",
      h5_target_url:
        "https://huati.weibo.com/k/milklove?from=1FFFF96039&weiboauthoruid=2646283691",
      need_save_obj: 0,
    },
  ],
  title: {
    text: "公开",
    base_color: 1,
    icon_url:
      "http://h5.sinaimg.cn/upload/2015/07/14/34/timeline_title_public.png",
  },
  mblogtype: 0,
  showFeedRepost: false,
  showFeedComment: false,
  pictureViewerSign: false,
  showPictureViewer: false,
  rcList: [],
  can_remark: true,
  common_struct: [
    {
      url: "sinaweibo://tabbar?containerid=100803_-_super&no_cache=1&extparam=topic_to_1008086a3f910bdc5fcd535fb9aeffdffc75ff&forwardscheme=sinaweibo%253A%252F%252Fpageinfo%253Fcontainerid%253D1008086a3f910bdc5fcd535fb9aeffdffc75ff%2526extparam%253Dmid_5141556386336514",
      name: "【超话】milklove",
      desc: "14.6万帖子 8万MuvMuv",
      img: "http://wx1.sinaimg.cn/thumbnail/006jTSuHly8hys436j9bkj30rf0rfq5b.jpg",
      type: 1,
      btn_show_type: "1",
      page_id: "1008086a3f910bdc5fcd535fb9aeffdffc75ff",
      actionlog: {
        act_code: "300",
        uid: "7796753876",
        mid: 5141556386336514,
        oid: "1022:1008086a3f910bdc5fcd535fb9aeffdffc75ff",
        uicode: null,
        cardid: "",
        fid: null,
        luicode: null,
        lfid: null,
        ext: "common_struct:topic|containerid:100808|uid:7796753876|mid:5141556386336514|analysis_card:common_struct|sceneComments:",
        source: "wbcc_product",
      },
      buttons: [
        {
          name: "进入",
          pic: "https://n.sinaimg.cn/photo/ab36dac5/20170616/follow_hollow.png",
          type: "link",
          params: {
            uid: "1022:1008086a3f910bdc5fcd535fb9aeffdffc75ff",
            scheme:
              "sinaweibo://pageinfo?containerid=1008086a3f910bdc5fcd535fb9aeffdffc75ff",
            type: "page",
          },
          actionlog: {
            act_code: 577,
            uid: "7796753876",
            mid: 5141556386336514,
            oid: "1022:1008086a3f910bdc5fcd535fb9aeffdffc75ff",
            uicode: null,
            cardid: "",
            fid: null,
            luicode: null,
            lfid: null,
            ext: "common_struct:topic|containerid:100808|uid:7796753876|mid:5141556386336514|analysis_card:common_struct|sceneComments:|sceneComments:|clickbtn:1",
            source: "wbcc_product",
          },
        },
      ],
      hidden: 1,
    },
  ],
  analysis_extra: "",
  readtimetype: "mblog",
  mixed_count: 0,
  is_show_mixed: false,
  isSinglePayAudio: false,
  text: '<a target="_blank" href="https://weibo.com/p/1008086a3f910bdc5fcd535fb9aeffdffc75ff"><img class="icon-link" title="#milklove[超话]#" src="https://h5.sinaimg.cn/upload/100/959/2020/05/09/timeline_card_small_super_default.png"/>milklove超话</a>  <br />《重生计划》07<br />前文：<a target="_blank" href="https://weibo.com/7906190340/5141239977217903"><img class="icon-link" title="http://t.cn/A61sFeJb" src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_weibo_default.png"/>微博正文</a><br /><br />下一棒：<a href=/n/默名_04 usercard="name=@默名_04">@默名_04</a> <br /><br /> <a target="_blank" href="https://weibo.com/ttarticle/p/show?id=2309405141556389609508"><img class="icon-link" title="http://t.cn/A6Bhtmuh" src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_article_default.png"/>07</a> <br />—————<br />挖坑挖坑 <a target="_blank" href="https://vote.weibo.com/h5/index/index?vote_id=2025_658735_-_5f7620"><img class="icon-link" title="http://t.cn/A6Bhtm3b" src="https://h5.sinaimg.cn/upload/2015/09/25/3/timeline_card_small_web_default.png"/>安风AnFeng_的微博投票</a> ​​​',
  text_raw:
    "#milklove[超话]#  \n《重生计划》07\n前文：http://t.cn/A61sFeJb\n\n下一棒：@默名_04 \n\n http://t.cn/A6Bhtmuh \n—————\n挖坑挖坑 http://t.cn/A6Bhtm3b ​​​",
  region_name: "发布于 浙江",
  page_info: {
    type: "24",
    page_id: "2309405141556389609508",
    object_type: "article",
    page_desc: "",
    oid: "2646283691",
    page_title: "@ 安风AnFeng_ ",
    page_pic:
      "https://wx3.sinaimg.cn/wap720/9dbb15abgy1hz8coplmc2j20zu0k7aca.jpg",
    type_icon:
      "https://h5.sinaimg.cn/upload/2016/12/28/14/feed_headlines_icon_flash20161228_3.png",
    page_url:
      "sinaweibo://articlebrowser?object_id=1022%3A2309405141556389609508&url=https%3A%2F%2Fweibo.com%2Fttarticle%2Fx%2Fm%2Fshow%23%2Fid%3D2309405141556389609508%26_wb_client_%3D1&extparam=lmid--5141556386336514",
    object_id: "1022:2309405141556389609508",
    author_id: "2646283691",
    authorid: "2646283691",
    content1: "07",
    content2: "",
    content3: "安风AnFeng_",
    preload: false,
    content4: "",
    user: {
      id: "2646283691",
      screen_name: " 安风AnFeng_",
      profile_image_url:
        "https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/9dbb15ably8h42sqlsgzxj20u00u00wr.jpg?KID=imgbed,tva&Expires=1742493774&ssig=tGHOCP4G2u",
      avatar_large:
        "https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/9dbb15ably8h42sqlsgzxj20u00u00wr.jpg?KID=imgbed,tva&Expires=1742493774&ssig=tGHOCP4G2u",
    },
    pic_info: {
      pic_big: {
        height: "333",
        url: "https://wx3.sinaimg.cn/wap720/9dbb15abgy1hz8coplmc2j20zu0k7aca.jpg",
        width: "592",
      },
    },
    source_type: "article",
    button_type: "follow",
    button_follow_uid: "2646283691",
    need_lmid: "1",
    show_button: 1,
    actionlog: {
      act_type: 1,
      act_code: 1423,
      oid: "1022:2309405141556389609508",
      uuid: 5141556389478564,
      cardid: "",
      lcardid: "",
      uicode: "",
      luicode: "",
      fid: "",
      lfid: "",
      ext: "uid:2646283691|mid:5141556386336514|rootuid:2646283691|rootmid:5141556386336514|objectid:1022:2309405141556389609508||vuid:7796753876|analysis_card:page_info",
      source: "article",
      fromlog: "",
    },
    transition_pics: [
      {
        pic_big: {
          height: "333",
          url: "https://wx3.sinaimg.cn/wap720/9dbb15abgy1hz8coplmc2j20zu0k7aca.jpg",
          width: "592",
        },
      },
    ],
    alpha_time: "700",
    pause_time: "650",
    buttons: [
      {
        skip_format: 1,
        type: "follow",
        name: "加关注",
        params: {
          uid: "2646283691",
        },
        actionlog: {
          act_code: 577,
          oid: "2309405141556389609508",
          cardid: "",
          uicode: "",
          fid: "",
          ext: "mid:5141556386336514|rid:0_0_0_5058885117164206024_0_0_0|third_party_scheme_protocol:|action:加关注",
        },
      },
    ],
  },
  ok: 1,
};

const getUrlStruct = (response: WeiboTypes.RootObject) => {
  console.log(
    "🚀 ~ :452 ~ getUrlStruct ~ response?.longText:",
    response?.longText
  );
  return response?.longText?.url_struct ?? response?.url_struct;
};

test("getUrlStruct should return the correct option_list", async () => {
  const urlStruct = getUrlStruct(response as unknown as WeiboTypes.RootObject);
  console.log("🚀 ~ :455 ~ test ~ urlStruct:", urlStruct);
  expect(urlStruct?.length).not.toBe(0);
});
