(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{244:function(t,e,r){"use strict";r.r(e);var _=r(0),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("ul",[t._m(0),t._v(" "),r("li",[r("p",[t._v("**referer：**包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。")]),t._v(" "),r("p",[t._v("组成：协议+域名+端口号+路径+参数（注意，不包含 hash值）")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("**防盗链原理是：**当用户访问网页时，referer就是前一个网页的URL；如果是图片的话，通常指的就是图片所在的网页。当浏览器向服务器发送请求时，referer就自动携带在HTTP请求头了。 图片服务器根据这个请求头判断，如果 referer 不是自己的服务器，就将其拦截。")]),t._v(" "),r("p",[t._v("比如说掘金的图片：")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://user-gold-cdn.xitu.io/2019/9/23/16d5d0e6314aac90?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("user-gold-cdn.xitu.io/2019/9/23/1…"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("直接在浏览器中打开是可以访问的，因为此时 referer 不会被发送。")]),t._v(" "),r("p",[t._v("而如果把图片放到自己的网站下，是看不到正常图片的。")])]),t._v(" "),t._m(3)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("p",[r("strong",[t._v("host："),r("strong",[t._v("指明了请求服务器的")]),t._v("域名/IP地址")]),t._v("和"),r("strong",[t._v("端口号")]),t._v("。例如："),r("code",[t._v("test.com:1998")])]),t._v(" "),r("p",[r("strong",[t._v("用途：")])]),t._v(" "),r("p",[r("code",[t._v("Host")]),t._v(" 是 HTTP 1.1 协议中新增的一个请求头，主要用来实现"),r("strong",[t._v("虚拟主机技术")]),t._v("。"),r("code",[t._v("Host")]),t._v(" 请求头决定着访问哪个虚拟主机。")]),t._v(" "),r("p",[t._v("不同的域名通过 "),r("strong",[t._v("A 记录")]),t._v("或者 "),r("strong",[t._v("CNAME 方式")]),t._v("可以连接都同一个 IP 下，同一个 IP 也可以设置多个不同站点，那么访问不同的域名都转发到同一 IP ，怎么区分这些不同的站点呢，就是用的 Host 字段。")]),t._v(" "),r("p",[t._v("比如说有一台 ip 地址为 11.11.11.11 的服务器，在这台服务器上部署着淘宝、京东、拼多多的网站，并且配置了三个虚拟主机：a.com、b.com、c.com，这三个域名都指向 11.11.11.11。 当我们访问 c.com 的网站时，看到的是拼多多的页面而不是淘宝和京东的页面，原因就是 Host 请求头决定着访问哪个虚拟主机。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/host.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("例子："),e("code",[this._v("test.com/home")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("用途：服务端一般使用 Referer 首部识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等，还有个常见的用途是"),e("strong",[this._v("图片防盗链")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("**origin：**该首部用于 "),e("strong",[this._v("CORS 请求")]),this._v("或者 "),e("strong",[this._v("POST 请求")]),this._v("。只有跨域请求（可以看到 response 有对应的 header：Access-Control-Allow-Origin），或者同域时发送post请求，才会携带origin请求头。")])])}],!1,null,null,null);e.default=s.exports}}]);