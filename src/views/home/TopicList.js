import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd'
import TextTag from 'components/TextTag'

const data = {
  success: true,
  data: [
    {
      "id": "5bd4772a14e994202cd5bdb7",
      "author_id": "504c28a2e2b845157708cb61",
      "tab": "share",
      "content": "<div class=\"markdown-text\"><p>2018年10月27日晚上，突然收到服务器不能访问的告警通知，拜托了狼叔 <a href=\"/user/i5ting\">@i5ting</a> 帮忙看看，结果登不上也ping不通。\n后来收到短信，发现是被ucloud封了，短信内容如下：</p>\n<blockquote>\n<p>【UCloud】尊敬的UCloud用户，您的IP：123.59.77.142  存在URL ：<a href=\"https://cnodejs.org/topic/57239bce5a26c4a841ecbf01\">https://cnodejs.org/topic/57239bce5a26c4a841ecbf01</a> （详细信息请查看邮箱）包含违禁内容（包括但不限于翻墙等），违反了国家有关法律法规。目前依主管单位要求，对您的IP予以封停，请您尽快处理违规内容。待处理完成后请联系技术支持重新开启业务。[4000188113]</p>\n</blockquote>\n<p>然后联系了ucloud的客服，一下就打通了，对方态度挺好处理问题也快。ucloud说是运营商那边封的，不是他们的检测机制。所以需要联系运营商解决。\n考虑到各位亲爱的网友们的行为我无法控制，那么一直跟越来越严格的审查系统对抗只会让自己疲惫，所以我就站点迁到国外。来到了aws jp。</p>\n<p>我大致测了测，电信和移动的访问速度非常快，100ms以内，联通会慢一点，400ms以内吧。</p>\n<p>建议翻墙访问。</p>\n</div>",
      "title": "服务器迁移至 aws 日本机房",
      "last_reply_at": "2019-09-09T07:21:41.870Z",
      "good": false,
      "top": true,
      "reply_count": 205,
      "visit_count": 100536,
      "create_at": "2018-10-27T14:33:14.694Z",
      "author": {
        "loginname": "alsotang",
        "avatar_url": "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120"
      }
    },
    {
    "id": "5d5bed6ed53e9171e98a975b",
    "author_id": "516f989a6d38277306ae8c1b",
    "tab": "ask",
    "content": "<div class=\"markdown-text\"><p>这是一次硬核的地下铁沙龙，\n我们深入 Node.js 运行时底层，\n来讨论如何进行运行时的优化和诊断，\n让它可以在 Serverless，IoT 等等场景释放更大的价值。</p>\n<p>五位重量级的嘉宾，\n有 Node.js 技术委员会（TSC）成员，\n有来自浏览器厂商的骨灰级技术专家，\n还有阿里、Rokid 的大牛。</p>\n<p>欢迎你和我们一起，进入深海。</p>\n<p><strong>Agenda</strong>\n<img src=\"https://img.alicdn.com/tfs/TB10BqFdLb2gK0jSZK9XXaEgFXa-1408-2040.png\" alt=\"Agenda\"></p>\n<p>时 间：2019.09.08 下午 2 点\n地 点：杭州·玉泉饭店（具体地址详见邀约）</p>\n<p>报 名 链 接: <a href=\"https://survey.alibaba.com/apps/zhiliao/QlwUc77lF\">https://survey.alibaba.com/apps/zhiliao/QlwUc77lF</a>\n活 动 主 页: <a href=\"https://fed.taobao.org/subway/\">https://fed.taobao.org/subway/</a></p>\n<p><strong>已经报名的可以查看报名时的填写的邮箱，了解最新情况。</strong></p>\n</div>",
    "title": "Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep",
    "last_reply_at": "2019-09-09T05:12:46.292Z",
    "good": false,
    "top": false,
    "reply_count": 16,
    "visit_count": 12598,
    "create_at": "2019-08-20T12:54:06.836Z",
    "author": {
      "loginname": "mariodu",
      "avatar_url": "//gravatar.com/avatar/1cb272a2b4347c9a15b502ce7e4802ba?size=48"
      }
    },
    {
      "id": "5d78b4c7d50f572345913afb",
      "author_id": "5d1f295271951f750ccb8e7b",
      "tab": "share",
      "content": "<div class=\"markdown-text\"><p>大家好，我们是吸瓜app团队。</p>\n<p>我们是一群重度的资讯吸收和讨论者，关注了各种各样的公众号、论坛和app。但与内容相比，我们很少见到Hacker News那样高质量的讨论。因此，我们有了一个做高质量内容讨论社区的想法。</p>\n<p>截至目前，吸瓜分别有5个板块，分别是“Hacker News最热帖”、“硅谷二三事”、“程序员的日常”、“新产品”和“喵星人”。我们根据自己的爱好选了这些话题，并希望在以后能够根据用户的爱好进行拓展（例如曼联、Pink Floyd等等等），让大家能在一个app上面就自己感兴趣的话题与同好进行高质量的讨论。</p>\n<p>如果大家有希望增添的板块，可以在app内部或者通过下述的方法联系我们。</p>\n<p>二、下载地址</p>\n<p>（1）iOS系统</p>\n<p>I.下载苹果官方的测试用app testflight</p>\n<p><a href=\"https://apps.apple.com/cn/app/testflight/id899247664\">Testflight地址</a></p>\n<p>II. 点击我们的测试版邀请链接，开始使用\n<a href=\"https://testflight.apple.com/join/cfZT3RC2\">Testflight邀请链接</a></p>\n<p>（2）安卓系统</p>\n<p>请复制下述网址并在手机浏览器中打开\n<a href=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/xigua.apk\">https://xigua-release.oss-cn-beijing.aliyuncs.com/xigua.apk</a></p>\n<p>三、联系我们</p>\n<p>我们很希望能够听到您的反馈，欢迎添加我们的客服微信：\n<img src=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/%E5%90%B8%E7%93%9C%E5%AE%A2%E6%9C%8D.jpg?x-oss-process=image/resize,h_100\" alt=\"吸瓜客服.jpg\"></p>\n<p>或者直接扫码加入我们的beta用户微信群猛烈地吐槽我们：\n<img src=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/%E5%90%B8%E7%93%9C%E5%AE%A2%E6%9C%8D.jpg?x-oss-process=image/resize,h_100\" alt=\"吸瓜用户吐槽群 2019-09-11生成.jpg\"></p>\n<p>谢谢~~</p>\n</div>",
      "title": "吸瓜 互联网高质量内容讨论社区",
      "last_reply_at": "2019-09-11T11:44:20.247Z",
      "good": false,
      "top": false,
      "reply_count": 1,
      "visit_count": 80,
      "create_at": "2019-09-11T08:48:07.040Z",
      "author": {
          "loginname": "bobmoorebob",
          "avatar_url": "https://avatars2.githubusercontent.com/u/50433908?v=4&s=120"
      }
    },
    {
      "id": "5d784a29a7474a231a58ad80",
      "author_id": "5becd64fbe1b120abac597f4",
      "tab": "job",
      "content": "<div class=\"markdown-text\"><p><strong>Egg.js</strong>是《阿里旗下产品》基于Node.js 和 Koa的一个Nodejs的企业级应用开发框架，它可以帮助开发团队及开发人员降低开发和维护成本。它类似于 Ruby 的 Ruby On Rails、Python 的 Django、Php 的 Laravel，是一款值得深入研究的框架。</p>\n<p><strong>大地老师Egg.js仿小米商城项目已更新130讲</strong>，仿小米商城项目不是一个简单的管理系统，完全的仿小米商城项目实战，RBAC权限管理、商品管理、用户管理、导航管理、文章管理、订单管理、支付宝支付、微信支付…</p>\n<p><strong>完整目录访问：</strong> <a href=\"https://www.itying.com/goods-941.html\">https://www.itying.com/goods-941.html</a></p>\n<p><strong>eggjs 10讲免费入门教程访问：</strong> <a href=\"http://bbs.itying.com/topic/5bcd6da2dc95510a3063e10d\">http://bbs.itying.com/topic/5bcd6da2dc95510a3063e10d</a></p>\n<p><strong>Egg.js基础教程包括:</strong>  Egg.js的基本使用、Egg.js中的路由 、Egg.js中的控制器、Egg.js中的服务、Egg.js中的Model、Egg.js中的Config 以及插件、Egg.js中的view模块引擎、Egg.js中的中间件 、Egg.js扩展 Extend、Egg.js CSRF 的防范、Egg Cookie、Egg Session、Egg.js 定时任务、Mongodb4.x、Mongoose、Egg.js+Mongoose、Egg.js中Mysql的使用、Sequelize ORM框架的使用等…</p>\n<p><strong>Egg.js仿小米商城项目包括:</strong>  Egg.js基础的应用 、egg-view多模板引擎、Egg中Md5的使用、Egg生成验证码、数据库ER图、用户RBAC权限管理（不同角色用户登录后台显示不同菜单，涉及角色、权限、用户的增删改查以及关联）、公共的Ajax改变状态、Ajax双击更改数量、Ajax双击排序、图片上传、生成缩略图、wysiwyg-editor的使用、商品管理中动态生成商品属性表单、批量上传图片插件、redis 的使用、Egg.js发送短信、Pc端微信支付、Pc端支付宝支付、Elasticsearch全文搜索引擎、Socket.io机器人 、Socket.io多人聊天室、Socket.io群聊、前后端分离 RESTful API Api接口、购买域名 服务器、域名备案、nginx负载均衡、SSL证书Https配置等等…</p>\n<p><img src=\"//static.cnodejs.org/Fp8erhbPkGZrsYFsd-gxn2z4Gssb\" alt=\"1.png\"></p>\n<p><img src=\"//static.cnodejs.org/FhCAuCKVwbQnTCJWtkGKv6ZR8toN\" alt=\"2.png\"></p>\n<p><img src=\"//static.cnodejs.org/FpnFP2WY9YBnPygNGT7y977hnQ5O\" alt=\"3.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fu_lhZW2WdVtE05rGRqtVWT42G9Q\" alt=\"4.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fq7M2FL4nsEbXvp_xOmW2RFZZn1m\" alt=\"5.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fk7rfDAEAhgo5IUiOH7phlC7MWpv\" alt=\"6.png\"></p>\n<p><img src=\"//static.cnodejs.org/FosTPjBgGJCq_UT87elcbwgUic6a\" alt=\"7.png\"></p>\n<p><img src=\"//static.cnodejs.org/FuKpyqW5SX_dzDkP_tUujD-OvkwJ\" alt=\"8.png\"></p>\n<p><img src=\"//static.cnodejs.org/FsphTYau58anhXz2x_SgCxbexsMT\" alt=\"9.png\"></p>\n<p><img src=\"//static.cnodejs.org/FofjI9KOV0_ZQwg-VzfYps51KsEk\" alt=\"10.png\"></p>\n</div>",
      "title": "Egg.js仿小米商城项目已更新130讲-RBAC权限管理、Mongoose、Sequelize、Elasticsearch、Socket.io、redis、Graphql你想要的都有讲",
      "last_reply_at": "2019-09-11T10:33:42.998Z",
      "good": false,
      "top": false,
      "reply_count": 1,
      "visit_count": 158,
      "create_at": "2019-09-11T01:13:13.414Z",
      "author": {
          "loginname": "magege666",
          "avatar_url": "https://avatars1.githubusercontent.com/u/45024820?v=4&s=120"
      }
    },
    {
      "id": "5bd4772a14e994202cd5bdb7",
      "author_id": "504c28a2e2b845157708cb61",
      "tab": "ask",
      "content": "<div class=\"markdown-text\"><p>2018年10月27日晚上，突然收到服务器不能访问的告警通知，拜托了狼叔 <a href=\"/user/i5ting\">@i5ting</a> 帮忙看看，结果登不上也ping不通。\n后来收到短信，发现是被ucloud封了，短信内容如下：</p>\n<blockquote>\n<p>【UCloud】尊敬的UCloud用户，您的IP：123.59.77.142  存在URL ：<a href=\"https://cnodejs.org/topic/57239bce5a26c4a841ecbf01\">https://cnodejs.org/topic/57239bce5a26c4a841ecbf01</a> （详细信息请查看邮箱）包含违禁内容（包括但不限于翻墙等），违反了国家有关法律法规。目前依主管单位要求，对您的IP予以封停，请您尽快处理违规内容。待处理完成后请联系技术支持重新开启业务。[4000188113]</p>\n</blockquote>\n<p>然后联系了ucloud的客服，一下就打通了，对方态度挺好处理问题也快。ucloud说是运营商那边封的，不是他们的检测机制。所以需要联系运营商解决。\n考虑到各位亲爱的网友们的行为我无法控制，那么一直跟越来越严格的审查系统对抗只会让自己疲惫，所以我就站点迁到国外。来到了aws jp。</p>\n<p>我大致测了测，电信和移动的访问速度非常快，100ms以内，联通会慢一点，400ms以内吧。</p>\n<p>建议翻墙访问。</p>\n</div>",
      "title": "服务器迁移至 aws 日本机房",
      "last_reply_at": "2019-09-09T07:21:41.870Z",
      "good": false,
      "top": false,
      "reply_count": 205,
      "visit_count": 100536,
      "create_at": "2018-10-27T14:33:14.694Z",
      "author": {
        "loginname": "alsotang",
        "avatar_url": "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120"
      }
    },
    {
    "id": "5d5bed6ed53e9171e98a975b",
    "author_id": "516f989a6d38277306ae8c1b",
    "tab": "share",
    "content": "<div class=\"markdown-text\"><p>这是一次硬核的地下铁沙龙，\n我们深入 Node.js 运行时底层，\n来讨论如何进行运行时的优化和诊断，\n让它可以在 Serverless，IoT 等等场景释放更大的价值。</p>\n<p>五位重量级的嘉宾，\n有 Node.js 技术委员会（TSC）成员，\n有来自浏览器厂商的骨灰级技术专家，\n还有阿里、Rokid 的大牛。</p>\n<p>欢迎你和我们一起，进入深海。</p>\n<p><strong>Agenda</strong>\n<img src=\"https://img.alicdn.com/tfs/TB10BqFdLb2gK0jSZK9XXaEgFXa-1408-2040.png\" alt=\"Agenda\"></p>\n<p>时 间：2019.09.08 下午 2 点\n地 点：杭州·玉泉饭店（具体地址详见邀约）</p>\n<p>报 名 链 接: <a href=\"https://survey.alibaba.com/apps/zhiliao/QlwUc77lF\">https://survey.alibaba.com/apps/zhiliao/QlwUc77lF</a>\n活 动 主 页: <a href=\"https://fed.taobao.org/subway/\">https://fed.taobao.org/subway/</a></p>\n<p><strong>已经报名的可以查看报名时的填写的邮箱，了解最新情况。</strong></p>\n</div>",
    "title": "Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep",
    "last_reply_at": "2019-09-09T05:12:46.292Z",
    "good": false,
    "top": false,
    "reply_count": 16,
    "visit_count": 12598,
    "create_at": "2019-08-20T12:54:06.836Z",
    "author": {
      "loginname": "mariodu",
      "avatar_url": "//gravatar.com/avatar/1cb272a2b4347c9a15b502ce7e4802ba?size=48"
      }
    },
    {
      "id": "5d78b4c7d50f572345913afb",
      "author_id": "5d1f295271951f750ccb8e7b",
      "tab": "share",
      "content": "<div class=\"markdown-text\"><p>大家好，我们是吸瓜app团队。</p>\n<p>我们是一群重度的资讯吸收和讨论者，关注了各种各样的公众号、论坛和app。但与内容相比，我们很少见到Hacker News那样高质量的讨论。因此，我们有了一个做高质量内容讨论社区的想法。</p>\n<p>截至目前，吸瓜分别有5个板块，分别是“Hacker News最热帖”、“硅谷二三事”、“程序员的日常”、“新产品”和“喵星人”。我们根据自己的爱好选了这些话题，并希望在以后能够根据用户的爱好进行拓展（例如曼联、Pink Floyd等等等），让大家能在一个app上面就自己感兴趣的话题与同好进行高质量的讨论。</p>\n<p>如果大家有希望增添的板块，可以在app内部或者通过下述的方法联系我们。</p>\n<p>二、下载地址</p>\n<p>（1）iOS系统</p>\n<p>I.下载苹果官方的测试用app testflight</p>\n<p><a href=\"https://apps.apple.com/cn/app/testflight/id899247664\">Testflight地址</a></p>\n<p>II. 点击我们的测试版邀请链接，开始使用\n<a href=\"https://testflight.apple.com/join/cfZT3RC2\">Testflight邀请链接</a></p>\n<p>（2）安卓系统</p>\n<p>请复制下述网址并在手机浏览器中打开\n<a href=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/xigua.apk\">https://xigua-release.oss-cn-beijing.aliyuncs.com/xigua.apk</a></p>\n<p>三、联系我们</p>\n<p>我们很希望能够听到您的反馈，欢迎添加我们的客服微信：\n<img src=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/%E5%90%B8%E7%93%9C%E5%AE%A2%E6%9C%8D.jpg?x-oss-process=image/resize,h_100\" alt=\"吸瓜客服.jpg\"></p>\n<p>或者直接扫码加入我们的beta用户微信群猛烈地吐槽我们：\n<img src=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/%E5%90%B8%E7%93%9C%E5%AE%A2%E6%9C%8D.jpg?x-oss-process=image/resize,h_100\" alt=\"吸瓜用户吐槽群 2019-09-11生成.jpg\"></p>\n<p>谢谢~~</p>\n</div>",
      "title": "吸瓜 互联网高质量内容讨论社区",
      "last_reply_at": "2019-09-11T11:44:20.247Z",
      "good": false,
      "top": false,
      "reply_count": 1,
      "visit_count": 80,
      "create_at": "2019-09-11T08:48:07.040Z",
      "author": {
          "loginname": "bobmoorebob",
          "avatar_url": "https://avatars2.githubusercontent.com/u/50433908?v=4&s=120"
      }
    },
    {
      "id": "5d784a29a7474a231a58ad80",
      "author_id": "5becd64fbe1b120abac597f4",
      "tab": "share",
      "content": "<div class=\"markdown-text\"><p><strong>Egg.js</strong>是《阿里旗下产品》基于Node.js 和 Koa的一个Nodejs的企业级应用开发框架，它可以帮助开发团队及开发人员降低开发和维护成本。它类似于 Ruby 的 Ruby On Rails、Python 的 Django、Php 的 Laravel，是一款值得深入研究的框架。</p>\n<p><strong>大地老师Egg.js仿小米商城项目已更新130讲</strong>，仿小米商城项目不是一个简单的管理系统，完全的仿小米商城项目实战，RBAC权限管理、商品管理、用户管理、导航管理、文章管理、订单管理、支付宝支付、微信支付…</p>\n<p><strong>完整目录访问：</strong> <a href=\"https://www.itying.com/goods-941.html\">https://www.itying.com/goods-941.html</a></p>\n<p><strong>eggjs 10讲免费入门教程访问：</strong> <a href=\"http://bbs.itying.com/topic/5bcd6da2dc95510a3063e10d\">http://bbs.itying.com/topic/5bcd6da2dc95510a3063e10d</a></p>\n<p><strong>Egg.js基础教程包括:</strong>  Egg.js的基本使用、Egg.js中的路由 、Egg.js中的控制器、Egg.js中的服务、Egg.js中的Model、Egg.js中的Config 以及插件、Egg.js中的view模块引擎、Egg.js中的中间件 、Egg.js扩展 Extend、Egg.js CSRF 的防范、Egg Cookie、Egg Session、Egg.js 定时任务、Mongodb4.x、Mongoose、Egg.js+Mongoose、Egg.js中Mysql的使用、Sequelize ORM框架的使用等…</p>\n<p><strong>Egg.js仿小米商城项目包括:</strong>  Egg.js基础的应用 、egg-view多模板引擎、Egg中Md5的使用、Egg生成验证码、数据库ER图、用户RBAC权限管理（不同角色用户登录后台显示不同菜单，涉及角色、权限、用户的增删改查以及关联）、公共的Ajax改变状态、Ajax双击更改数量、Ajax双击排序、图片上传、生成缩略图、wysiwyg-editor的使用、商品管理中动态生成商品属性表单、批量上传图片插件、redis 的使用、Egg.js发送短信、Pc端微信支付、Pc端支付宝支付、Elasticsearch全文搜索引擎、Socket.io机器人 、Socket.io多人聊天室、Socket.io群聊、前后端分离 RESTful API Api接口、购买域名 服务器、域名备案、nginx负载均衡、SSL证书Https配置等等…</p>\n<p><img src=\"//static.cnodejs.org/Fp8erhbPkGZrsYFsd-gxn2z4Gssb\" alt=\"1.png\"></p>\n<p><img src=\"//static.cnodejs.org/FhCAuCKVwbQnTCJWtkGKv6ZR8toN\" alt=\"2.png\"></p>\n<p><img src=\"//static.cnodejs.org/FpnFP2WY9YBnPygNGT7y977hnQ5O\" alt=\"3.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fu_lhZW2WdVtE05rGRqtVWT42G9Q\" alt=\"4.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fq7M2FL4nsEbXvp_xOmW2RFZZn1m\" alt=\"5.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fk7rfDAEAhgo5IUiOH7phlC7MWpv\" alt=\"6.png\"></p>\n<p><img src=\"//static.cnodejs.org/FosTPjBgGJCq_UT87elcbwgUic6a\" alt=\"7.png\"></p>\n<p><img src=\"//static.cnodejs.org/FuKpyqW5SX_dzDkP_tUujD-OvkwJ\" alt=\"8.png\"></p>\n<p><img src=\"//static.cnodejs.org/FsphTYau58anhXz2x_SgCxbexsMT\" alt=\"9.png\"></p>\n<p><img src=\"//static.cnodejs.org/FofjI9KOV0_ZQwg-VzfYps51KsEk\" alt=\"10.png\"></p>\n</div>",
      "title": "Egg.js仿小米商城项目已更新130讲-RBAC权限管理、Mongoose、Sequelize、Elasticsearch、Socket.io、redis、Graphql你想要的都有讲",
      "last_reply_at": "2019-09-11T10:33:42.998Z",
      "good": false,
      "top": false,
      "reply_count": 1,
      "visit_count": 158,
      "create_at": "2019-09-11T01:13:13.414Z",
      "author": {
          "loginname": "magege666",
          "avatar_url": "https://avatars1.githubusercontent.com/u/45024820?v=4&s=120"
      }
    },
    {
      "id": "5bd4772a14e994202cd5bdb7",
      "author_id": "504c28a2e2b845157708cb61",
      "tab": "share",
      "content": "<div class=\"markdown-text\"><p>2018年10月27日晚上，突然收到服务器不能访问的告警通知，拜托了狼叔 <a href=\"/user/i5ting\">@i5ting</a> 帮忙看看，结果登不上也ping不通。\n后来收到短信，发现是被ucloud封了，短信内容如下：</p>\n<blockquote>\n<p>【UCloud】尊敬的UCloud用户，您的IP：123.59.77.142  存在URL ：<a href=\"https://cnodejs.org/topic/57239bce5a26c4a841ecbf01\">https://cnodejs.org/topic/57239bce5a26c4a841ecbf01</a> （详细信息请查看邮箱）包含违禁内容（包括但不限于翻墙等），违反了国家有关法律法规。目前依主管单位要求，对您的IP予以封停，请您尽快处理违规内容。待处理完成后请联系技术支持重新开启业务。[4000188113]</p>\n</blockquote>\n<p>然后联系了ucloud的客服，一下就打通了，对方态度挺好处理问题也快。ucloud说是运营商那边封的，不是他们的检测机制。所以需要联系运营商解决。\n考虑到各位亲爱的网友们的行为我无法控制，那么一直跟越来越严格的审查系统对抗只会让自己疲惫，所以我就站点迁到国外。来到了aws jp。</p>\n<p>我大致测了测，电信和移动的访问速度非常快，100ms以内，联通会慢一点，400ms以内吧。</p>\n<p>建议翻墙访问。</p>\n</div>",
      "title": "服务器迁移至 aws 日本机房",
      "last_reply_at": "2019-09-09T07:21:41.870Z",
      "good": false,
      "top": false,
      "reply_count": 205,
      "visit_count": 100536,
      "create_at": "2018-10-27T14:33:14.694Z",
      "author": {
        "loginname": "alsotang",
        "avatar_url": "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120"
      }
    },
    {
    "id": "5d5bed6ed53e9171e98a975b",
    "author_id": "516f989a6d38277306ae8c1b",
    "tab": "share",
    "content": "<div class=\"markdown-text\"><p>这是一次硬核的地下铁沙龙，\n我们深入 Node.js 运行时底层，\n来讨论如何进行运行时的优化和诊断，\n让它可以在 Serverless，IoT 等等场景释放更大的价值。</p>\n<p>五位重量级的嘉宾，\n有 Node.js 技术委员会（TSC）成员，\n有来自浏览器厂商的骨灰级技术专家，\n还有阿里、Rokid 的大牛。</p>\n<p>欢迎你和我们一起，进入深海。</p>\n<p><strong>Agenda</strong>\n<img src=\"https://img.alicdn.com/tfs/TB10BqFdLb2gK0jSZK9XXaEgFXa-1408-2040.png\" alt=\"Agenda\"></p>\n<p>时 间：2019.09.08 下午 2 点\n地 点：杭州·玉泉饭店（具体地址详见邀约）</p>\n<p>报 名 链 接: <a href=\"https://survey.alibaba.com/apps/zhiliao/QlwUc77lF\">https://survey.alibaba.com/apps/zhiliao/QlwUc77lF</a>\n活 动 主 页: <a href=\"https://fed.taobao.org/subway/\">https://fed.taobao.org/subway/</a></p>\n<p><strong>已经报名的可以查看报名时的填写的邮箱，了解最新情况。</strong></p>\n</div>",
    "title": "Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep",
    "last_reply_at": "2019-09-09T05:12:46.292Z",
    "good": false,
    "top": false,
    "reply_count": 16,
    "visit_count": 12598,
    "create_at": "2019-08-20T12:54:06.836Z",
    "author": {
      "loginname": "mariodu",
      "avatar_url": "//gravatar.com/avatar/1cb272a2b4347c9a15b502ce7e4802ba?size=48"
      }
    },
    {
      "id": "5d78b4c7d50f572345913afb",
      "author_id": "5d1f295271951f750ccb8e7b",
      "tab": "share",
      "content": "<div class=\"markdown-text\"><p>大家好，我们是吸瓜app团队。</p>\n<p>我们是一群重度的资讯吸收和讨论者，关注了各种各样的公众号、论坛和app。但与内容相比，我们很少见到Hacker News那样高质量的讨论。因此，我们有了一个做高质量内容讨论社区的想法。</p>\n<p>截至目前，吸瓜分别有5个板块，分别是“Hacker News最热帖”、“硅谷二三事”、“程序员的日常”、“新产品”和“喵星人”。我们根据自己的爱好选了这些话题，并希望在以后能够根据用户的爱好进行拓展（例如曼联、Pink Floyd等等等），让大家能在一个app上面就自己感兴趣的话题与同好进行高质量的讨论。</p>\n<p>如果大家有希望增添的板块，可以在app内部或者通过下述的方法联系我们。</p>\n<p>二、下载地址</p>\n<p>（1）iOS系统</p>\n<p>I.下载苹果官方的测试用app testflight</p>\n<p><a href=\"https://apps.apple.com/cn/app/testflight/id899247664\">Testflight地址</a></p>\n<p>II. 点击我们的测试版邀请链接，开始使用\n<a href=\"https://testflight.apple.com/join/cfZT3RC2\">Testflight邀请链接</a></p>\n<p>（2）安卓系统</p>\n<p>请复制下述网址并在手机浏览器中打开\n<a href=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/xigua.apk\">https://xigua-release.oss-cn-beijing.aliyuncs.com/xigua.apk</a></p>\n<p>三、联系我们</p>\n<p>我们很希望能够听到您的反馈，欢迎添加我们的客服微信：\n<img src=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/%E5%90%B8%E7%93%9C%E5%AE%A2%E6%9C%8D.jpg?x-oss-process=image/resize,h_100\" alt=\"吸瓜客服.jpg\"></p>\n<p>或者直接扫码加入我们的beta用户微信群猛烈地吐槽我们：\n<img src=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/%E5%90%B8%E7%93%9C%E5%AE%A2%E6%9C%8D.jpg?x-oss-process=image/resize,h_100\" alt=\"吸瓜用户吐槽群 2019-09-11生成.jpg\"></p>\n<p>谢谢~~</p>\n</div>",
      "title": "吸瓜 互联网高质量内容讨论社区",
      "last_reply_at": "2019-09-11T11:44:20.247Z",
      "good": false,
      "top": false,
      "reply_count": 1,
      "visit_count": 80,
      "create_at": "2019-09-11T08:48:07.040Z",
      "author": {
          "loginname": "bobmoorebob",
          "avatar_url": "https://avatars2.githubusercontent.com/u/50433908?v=4&s=120"
      }
    },
    {
      "id": "5d784a29a7474a231a58ad80",
      "author_id": "5becd64fbe1b120abac597f4",
      "tab": "ask",
      "content": "<div class=\"markdown-text\"><p><strong>Egg.js</strong>是《阿里旗下产品》基于Node.js 和 Koa的一个Nodejs的企业级应用开发框架，它可以帮助开发团队及开发人员降低开发和维护成本。它类似于 Ruby 的 Ruby On Rails、Python 的 Django、Php 的 Laravel，是一款值得深入研究的框架。</p>\n<p><strong>大地老师Egg.js仿小米商城项目已更新130讲</strong>，仿小米商城项目不是一个简单的管理系统，完全的仿小米商城项目实战，RBAC权限管理、商品管理、用户管理、导航管理、文章管理、订单管理、支付宝支付、微信支付…</p>\n<p><strong>完整目录访问：</strong> <a href=\"https://www.itying.com/goods-941.html\">https://www.itying.com/goods-941.html</a></p>\n<p><strong>eggjs 10讲免费入门教程访问：</strong> <a href=\"http://bbs.itying.com/topic/5bcd6da2dc95510a3063e10d\">http://bbs.itying.com/topic/5bcd6da2dc95510a3063e10d</a></p>\n<p><strong>Egg.js基础教程包括:</strong>  Egg.js的基本使用、Egg.js中的路由 、Egg.js中的控制器、Egg.js中的服务、Egg.js中的Model、Egg.js中的Config 以及插件、Egg.js中的view模块引擎、Egg.js中的中间件 、Egg.js扩展 Extend、Egg.js CSRF 的防范、Egg Cookie、Egg Session、Egg.js 定时任务、Mongodb4.x、Mongoose、Egg.js+Mongoose、Egg.js中Mysql的使用、Sequelize ORM框架的使用等…</p>\n<p><strong>Egg.js仿小米商城项目包括:</strong>  Egg.js基础的应用 、egg-view多模板引擎、Egg中Md5的使用、Egg生成验证码、数据库ER图、用户RBAC权限管理（不同角色用户登录后台显示不同菜单，涉及角色、权限、用户的增删改查以及关联）、公共的Ajax改变状态、Ajax双击更改数量、Ajax双击排序、图片上传、生成缩略图、wysiwyg-editor的使用、商品管理中动态生成商品属性表单、批量上传图片插件、redis 的使用、Egg.js发送短信、Pc端微信支付、Pc端支付宝支付、Elasticsearch全文搜索引擎、Socket.io机器人 、Socket.io多人聊天室、Socket.io群聊、前后端分离 RESTful API Api接口、购买域名 服务器、域名备案、nginx负载均衡、SSL证书Https配置等等…</p>\n<p><img src=\"//static.cnodejs.org/Fp8erhbPkGZrsYFsd-gxn2z4Gssb\" alt=\"1.png\"></p>\n<p><img src=\"//static.cnodejs.org/FhCAuCKVwbQnTCJWtkGKv6ZR8toN\" alt=\"2.png\"></p>\n<p><img src=\"//static.cnodejs.org/FpnFP2WY9YBnPygNGT7y977hnQ5O\" alt=\"3.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fu_lhZW2WdVtE05rGRqtVWT42G9Q\" alt=\"4.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fq7M2FL4nsEbXvp_xOmW2RFZZn1m\" alt=\"5.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fk7rfDAEAhgo5IUiOH7phlC7MWpv\" alt=\"6.png\"></p>\n<p><img src=\"//static.cnodejs.org/FosTPjBgGJCq_UT87elcbwgUic6a\" alt=\"7.png\"></p>\n<p><img src=\"//static.cnodejs.org/FuKpyqW5SX_dzDkP_tUujD-OvkwJ\" alt=\"8.png\"></p>\n<p><img src=\"//static.cnodejs.org/FsphTYau58anhXz2x_SgCxbexsMT\" alt=\"9.png\"></p>\n<p><img src=\"//static.cnodejs.org/FofjI9KOV0_ZQwg-VzfYps51KsEk\" alt=\"10.png\"></p>\n</div>",
      "title": "Egg.js仿小米商城项目已更新130讲-RBAC权限管理、Mongoose、Sequelize、Elasticsearch、Socket.io、redis、Graphql你想要的都有讲",
      "last_reply_at": "2019-09-11T10:33:42.998Z",
      "good": false,
      "top": false,
      "reply_count": 1,
      "visit_count": 158,
      "create_at": "2019-09-11T01:13:13.414Z",
      "author": {
          "loginname": "magege666",
          "avatar_url": "https://avatars1.githubusercontent.com/u/45024820?v=4&s=120"
      }
    },
    {
      "id": "5bd4772a14e994202cd5bdb7",
      "author_id": "504c28a2e2b845157708cb61",
      "tab": "job",
      "content": "<div class=\"markdown-text\"><p>2018年10月27日晚上，突然收到服务器不能访问的告警通知，拜托了狼叔 <a href=\"/user/i5ting\">@i5ting</a> 帮忙看看，结果登不上也ping不通。\n后来收到短信，发现是被ucloud封了，短信内容如下：</p>\n<blockquote>\n<p>【UCloud】尊敬的UCloud用户，您的IP：123.59.77.142  存在URL ：<a href=\"https://cnodejs.org/topic/57239bce5a26c4a841ecbf01\">https://cnodejs.org/topic/57239bce5a26c4a841ecbf01</a> （详细信息请查看邮箱）包含违禁内容（包括但不限于翻墙等），违反了国家有关法律法规。目前依主管单位要求，对您的IP予以封停，请您尽快处理违规内容。待处理完成后请联系技术支持重新开启业务。[4000188113]</p>\n</blockquote>\n<p>然后联系了ucloud的客服，一下就打通了，对方态度挺好处理问题也快。ucloud说是运营商那边封的，不是他们的检测机制。所以需要联系运营商解决。\n考虑到各位亲爱的网友们的行为我无法控制，那么一直跟越来越严格的审查系统对抗只会让自己疲惫，所以我就站点迁到国外。来到了aws jp。</p>\n<p>我大致测了测，电信和移动的访问速度非常快，100ms以内，联通会慢一点，400ms以内吧。</p>\n<p>建议翻墙访问。</p>\n</div>",
      "title": "服务器迁移至 aws 日本机房",
      "last_reply_at": "2019-09-09T07:21:41.870Z",
      "good": false,
      "top": false,
      "reply_count": 205,
      "visit_count": 100536,
      "create_at": "2018-10-27T14:33:14.694Z",
      "author": {
        "loginname": "alsotang",
        "avatar_url": "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120"
      }
    },
    {
    "id": "5d5bed6ed53e9171e98a975b",
    "author_id": "516f989a6d38277306ae8c1b",
    "tab": "share",
    "content": "<div class=\"markdown-text\"><p>这是一次硬核的地下铁沙龙，\n我们深入 Node.js 运行时底层，\n来讨论如何进行运行时的优化和诊断，\n让它可以在 Serverless，IoT 等等场景释放更大的价值。</p>\n<p>五位重量级的嘉宾，\n有 Node.js 技术委员会（TSC）成员，\n有来自浏览器厂商的骨灰级技术专家，\n还有阿里、Rokid 的大牛。</p>\n<p>欢迎你和我们一起，进入深海。</p>\n<p><strong>Agenda</strong>\n<img src=\"https://img.alicdn.com/tfs/TB10BqFdLb2gK0jSZK9XXaEgFXa-1408-2040.png\" alt=\"Agenda\"></p>\n<p>时 间：2019.09.08 下午 2 点\n地 点：杭州·玉泉饭店（具体地址详见邀约）</p>\n<p>报 名 链 接: <a href=\"https://survey.alibaba.com/apps/zhiliao/QlwUc77lF\">https://survey.alibaba.com/apps/zhiliao/QlwUc77lF</a>\n活 动 主 页: <a href=\"https://fed.taobao.org/subway/\">https://fed.taobao.org/subway/</a></p>\n<p><strong>已经报名的可以查看报名时的填写的邮箱，了解最新情况。</strong></p>\n</div>",
    "title": "Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep",
    "last_reply_at": "2019-09-09T05:12:46.292Z",
    "good": false,
    "top": false,
    "reply_count": 16,
    "visit_count": 12598,
    "create_at": "2019-08-20T12:54:06.836Z",
    "author": {
      "loginname": "mariodu",
      "avatar_url": "//gravatar.com/avatar/1cb272a2b4347c9a15b502ce7e4802ba?size=48"
      }
    },
    {
      "id": "5d78b4c7d50f572345913afb",
      "author_id": "5d1f295271951f750ccb8e7b",
      "tab": "ask",
      "content": "<div class=\"markdown-text\"><p>大家好，我们是吸瓜app团队。</p>\n<p>我们是一群重度的资讯吸收和讨论者，关注了各种各样的公众号、论坛和app。但与内容相比，我们很少见到Hacker News那样高质量的讨论。因此，我们有了一个做高质量内容讨论社区的想法。</p>\n<p>截至目前，吸瓜分别有5个板块，分别是“Hacker News最热帖”、“硅谷二三事”、“程序员的日常”、“新产品”和“喵星人”。我们根据自己的爱好选了这些话题，并希望在以后能够根据用户的爱好进行拓展（例如曼联、Pink Floyd等等等），让大家能在一个app上面就自己感兴趣的话题与同好进行高质量的讨论。</p>\n<p>如果大家有希望增添的板块，可以在app内部或者通过下述的方法联系我们。</p>\n<p>二、下载地址</p>\n<p>（1）iOS系统</p>\n<p>I.下载苹果官方的测试用app testflight</p>\n<p><a href=\"https://apps.apple.com/cn/app/testflight/id899247664\">Testflight地址</a></p>\n<p>II. 点击我们的测试版邀请链接，开始使用\n<a href=\"https://testflight.apple.com/join/cfZT3RC2\">Testflight邀请链接</a></p>\n<p>（2）安卓系统</p>\n<p>请复制下述网址并在手机浏览器中打开\n<a href=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/xigua.apk\">https://xigua-release.oss-cn-beijing.aliyuncs.com/xigua.apk</a></p>\n<p>三、联系我们</p>\n<p>我们很希望能够听到您的反馈，欢迎添加我们的客服微信：\n<img src=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/%E5%90%B8%E7%93%9C%E5%AE%A2%E6%9C%8D.jpg?x-oss-process=image/resize,h_100\" alt=\"吸瓜客服.jpg\"></p>\n<p>或者直接扫码加入我们的beta用户微信群猛烈地吐槽我们：\n<img src=\"https://xigua-release.oss-cn-beijing.aliyuncs.com/%E5%90%B8%E7%93%9C%E5%AE%A2%E6%9C%8D.jpg?x-oss-process=image/resize,h_100\" alt=\"吸瓜用户吐槽群 2019-09-11生成.jpg\"></p>\n<p>谢谢~~</p>\n</div>",
      "title": "吸瓜 互联网高质量内容讨论社区",
      "last_reply_at": "2019-09-11T11:44:20.247Z",
      "good": true,
      "top": false,
      "reply_count": 1,
      "visit_count": 80,
      "create_at": "2019-09-11T08:48:07.040Z",
      "author": {
          "loginname": "bobmoorebob",
          "avatar_url": "https://avatars2.githubusercontent.com/u/50433908?v=4&s=120"
      }
    },
    {
      "id": "5d784a29a7474a231a58ad80",
      "author_id": "5becd64fbe1b120abac597f4",
      "tab": "dev",
      "content": "<div class=\"markdown-text\"><p><strong>Egg.js</strong>是《阿里旗下产品》基于Node.js 和 Koa的一个Nodejs的企业级应用开发框架，它可以帮助开发团队及开发人员降低开发和维护成本。它类似于 Ruby 的 Ruby On Rails、Python 的 Django、Php 的 Laravel，是一款值得深入研究的框架。</p>\n<p><strong>大地老师Egg.js仿小米商城项目已更新130讲</strong>，仿小米商城项目不是一个简单的管理系统，完全的仿小米商城项目实战，RBAC权限管理、商品管理、用户管理、导航管理、文章管理、订单管理、支付宝支付、微信支付…</p>\n<p><strong>完整目录访问：</strong> <a href=\"https://www.itying.com/goods-941.html\">https://www.itying.com/goods-941.html</a></p>\n<p><strong>eggjs 10讲免费入门教程访问：</strong> <a href=\"http://bbs.itying.com/topic/5bcd6da2dc95510a3063e10d\">http://bbs.itying.com/topic/5bcd6da2dc95510a3063e10d</a></p>\n<p><strong>Egg.js基础教程包括:</strong>  Egg.js的基本使用、Egg.js中的路由 、Egg.js中的控制器、Egg.js中的服务、Egg.js中的Model、Egg.js中的Config 以及插件、Egg.js中的view模块引擎、Egg.js中的中间件 、Egg.js扩展 Extend、Egg.js CSRF 的防范、Egg Cookie、Egg Session、Egg.js 定时任务、Mongodb4.x、Mongoose、Egg.js+Mongoose、Egg.js中Mysql的使用、Sequelize ORM框架的使用等…</p>\n<p><strong>Egg.js仿小米商城项目包括:</strong>  Egg.js基础的应用 、egg-view多模板引擎、Egg中Md5的使用、Egg生成验证码、数据库ER图、用户RBAC权限管理（不同角色用户登录后台显示不同菜单，涉及角色、权限、用户的增删改查以及关联）、公共的Ajax改变状态、Ajax双击更改数量、Ajax双击排序、图片上传、生成缩略图、wysiwyg-editor的使用、商品管理中动态生成商品属性表单、批量上传图片插件、redis 的使用、Egg.js发送短信、Pc端微信支付、Pc端支付宝支付、Elasticsearch全文搜索引擎、Socket.io机器人 、Socket.io多人聊天室、Socket.io群聊、前后端分离 RESTful API Api接口、购买域名 服务器、域名备案、nginx负载均衡、SSL证书Https配置等等…</p>\n<p><img src=\"//static.cnodejs.org/Fp8erhbPkGZrsYFsd-gxn2z4Gssb\" alt=\"1.png\"></p>\n<p><img src=\"//static.cnodejs.org/FhCAuCKVwbQnTCJWtkGKv6ZR8toN\" alt=\"2.png\"></p>\n<p><img src=\"//static.cnodejs.org/FpnFP2WY9YBnPygNGT7y977hnQ5O\" alt=\"3.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fu_lhZW2WdVtE05rGRqtVWT42G9Q\" alt=\"4.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fq7M2FL4nsEbXvp_xOmW2RFZZn1m\" alt=\"5.png\"></p>\n<p><img src=\"//static.cnodejs.org/Fk7rfDAEAhgo5IUiOH7phlC7MWpv\" alt=\"6.png\"></p>\n<p><img src=\"//static.cnodejs.org/FosTPjBgGJCq_UT87elcbwgUic6a\" alt=\"7.png\"></p>\n<p><img src=\"//static.cnodejs.org/FuKpyqW5SX_dzDkP_tUujD-OvkwJ\" alt=\"8.png\"></p>\n<p><img src=\"//static.cnodejs.org/FsphTYau58anhXz2x_SgCxbexsMT\" alt=\"9.png\"></p>\n<p><img src=\"//static.cnodejs.org/FofjI9KOV0_ZQwg-VzfYps51KsEk\" alt=\"10.png\"></p>\n</div>",
      "title": "Egg.js仿小米商城项目已更新130讲-RBAC权限管理、Mongoose、Sequelize、Elasticsearch、Socket.io、redis、Graphql你想要的都有讲",
      "last_reply_at": "2019-09-11T10:33:42.998Z",
      "good": false,
      "top": false,
      "reply_count": 1,
      "visit_count": 158,
      "create_at": "2019-09-11T01:13:13.414Z",
      "author": {
          "loginname": "magege666",
          "avatar_url": "https://avatars1.githubusercontent.com/u/45024820?v=4&s=120"
      }
    }
  ]
}

export default class TopicList extends Component {
  render() {
    return (
      <List
        dataSource={data.data}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={['回复：' + item.reply_count, '访问：' + item.visit_count]}>
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url}/>}
              title={<Link to={"/detail/" + item.id}><TextTag data={item}/>{item.title}</Link>}
              description={
                <p>
                  <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                  <span className="time">发表于：{item.create_at.split('T')[0]}</span>
                </p>}
            ></List.Item.Meta>
          </List.Item>
        )}>
      </List>
    )
  }
}
