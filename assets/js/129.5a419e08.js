(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{195:function(s,v,_){"use strict";_.r(v);var e=_(0),t=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,v=s.$createElement,_=s._self._c||v;return _("div",{staticClass:"content"},[_("p",[s._v("CDN 网络是在用户和服务器之间增加 Cache 层，如何将用户的请求引导到 Cache 上获得源服务器的数据，主要是"),_("strong",[s._v("通过接管 DNS 实现，这就是 CDN 的最基本的原理")]),s._v("。")]),s._v(" "),_("p",[_("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/CDNa.png",alt:""}})]),s._v(" "),_("p",[s._v("用户在首次访问 "),_("code",[s._v("https://assets-cdn.github.com/pinned-octocat.svg")]),s._v(" , "),_("strong",[s._v("假设不委托local DNS服务器递归查询")]),s._v("，会经历以下几个过程：")]),s._v(" "),_("ul",[_("li",[s._v("进行对"),_("code",[s._v("assets-cdn.github.com")]),s._v("的 DNS 查询，获得一个 "),_("strong",[_("code",[s._v("CNAME 记录")])]),s._v(", "),_("code",[s._v("igithub.map.fastly.net")]),s._v(",值得注意的是，多个加速域名可以解析到同一个 CNAME，CDN 回源和缓存的时候考虑到了hostname（由请求头的 host header 指定）。")]),s._v(" "),_("li",[s._v("进行对"),_("code",[s._v("github.map.fastly.net")]),s._v("的 DNS 查询，获得一个 "),_("strong",[_("code",[s._v("A/AAAA 记录")])]),s._v("，给出地址"),_("code",[s._v("103.245.222.133")]),s._v("（视网站不同返回的不一样，可以有多个）, 这一步对CDN来说时十分重要的，它给出了离用户最近的边缘节点。")]),s._v(" "),_("li",[s._v("浏览器进行真正的http请求，开始向"),_("code",[s._v("103.245.222.133")]),s._v("握手，握手完了把http请求头也发给了该边缘服务器。")]),s._v(" "),_("li",[s._v("边缘服务器检查自己的cache里面有没有"),_("code",[s._v("https://assets-cdn.github.com/pinned-octocat.svg")]),s._v("这个资源，有则返回给用户，如果没有，向CDN中心服务器发起请求。")]),s._v(" "),_("li",[s._v("CDN 中心服务器检查自己的cache里面有没有这个资源，有则返回给边缘服务器，没有则回源。")]),s._v(" "),_("li",[s._v("中心服务器发现客户配置了"),_("code",[s._v("github.map.fastly.net")]),s._v("的回源地址 (这个只有 CDN 会知道，假设是"),_("code",[s._v("xxx.xxx.xxx.xxx")]),s._v(")，就把 http 请求发到源站地址上，源站返回后返回给请求方。")])]),s._v(" "),_("p",[_("strong",[s._v("有 "),_("code",[s._v("localDNS")]),s._v(" 作委托")])]),s._v(" "),_("p",[_("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/ct+cdn.png",alt:""}})]),s._v(" "),_("ul",[_("li",[s._v("用户输入访问的域名，操作系统向 LocalDns 查询域名的 ip 地址；")]),s._v(" "),_("li",[s._v("LocalDns 向 ROOT DNS 查询域名的授权服务器 (这里假设LocalDns缓存过期)，获取到根域名地址；")]),s._v(" "),_("li",[s._v("继续向域名授权 dns 查询域名的 ip 地址；")]),s._v(" "),_("li",[s._v("LocalDns得到域名的授权dns记录后,继续向域名授权dns查询域名的ip地址；")]),s._v(" "),_("li",[s._v("域名授权dns 查询域名记录后(一般是CNAME)，回应给 LocalDns；")]),s._v(" "),_("li",[s._v("LocalDns 得到域名记录后，向"),_("strong",[s._v("智能调度 DNS")]),s._v(" 查询域名的ip地址；")]),s._v(" "),_("li",[s._v("智能调度DNS 根据一定的算法和策略(比如静态拓扑，容量等),将最适合的CDN节点ip地址回应给 LocalDns；")]),s._v(" "),_("li",[s._v("LocalDns 将得到的域名ip地址，缓存后回应给用户端；")]),s._v(" "),_("li",[s._v("用户得到域名ip地址后，访问站点服务器。")])]),s._v(" "),_("blockquote",[_("p",[s._v("这里简单解释一下 **"),_("code",[s._v("CNAME记录")]),s._v("**和 "),_("strong",[_("code",[s._v("A记录")])])])]),s._v(" "),_("ul",[_("li",[_("p",[_("strong",[s._v("A记录")])]),s._v(" "),_("p",[s._v("可以理解为一种指向关系：")]),s._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[s._v("域名 www.xx.com → 111.111.111.111\n主机名 DD → 222.222.222.222\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br")])])]),s._v(" "),_("li",[_("p",[_("strong",[_("code",[s._v("CNAME")])])]),s._v(" "),_("p",[s._v("也叫别名记录，相当于给A记录中的域名起个小名儿。，比如 "),_("code",[s._v("www.xx.com")]),s._v(" 的小名儿就叫 "),_("code",[s._v("www.yy.com")]),s._v(" 好了")]),s._v(" "),_("p",[s._v("比如：")]),s._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[s._v("www.yy.com → www.xx.com → 111.111.111.111\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br")])]),_("p",[s._v("会有疑问：直接 "),_("code",[s._v("www.xx.com → 111.111.111.111")]),s._v("，为什么要多此一举。")]),s._v(" "),_("p",[s._v("假如这个时候我又想给原域名取几个小名儿，分别叫 "),_("code",[s._v("www.cc.com")]),s._v(" 和 "),_("code",[s._v("www.kk.com")]),s._v(" 那么存在下列指向关系：")]),s._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[s._v("www.yy.com → www.xx.com → 111.111.111.111\nwww.cc.com → www.xx.com → 111.111.111.111\nwww.kk.com → www.xx.com → 111.111.111.111\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br")])]),_("p",[s._v("突然服务器的IP地址因为一些不可描述的原因要换了，不再是"),_("strong",[s._v("111.111.111.111")]),s._v("了，换成了"),_("code",[s._v("333.333.333.333")]),s._v("，这时候你发现，只要把 "),_("code",[s._v("www.xx.com")]),s._v(" 的指向修改一下即可：")]),s._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[s._v("域名 www.xx.com → 333.333.333.333\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br")])]),_("p",[s._v("这时候你又发现了，原来他的小名儿不需要做更改，直接就能访问服务器，因为他们都只指向了 "),_("code",[s._v("www.xx.com")]),s._v(" ，服务器 IP 改没改它们不管。")]),s._v(" "),_("p",[s._v("那么假如不用 "),_("strong",[_("code",[s._v("CNAME")])]),s._v("，直接做 "),_("strong",[s._v("A记录")]),s._v(" 会怎样？")]),s._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[s._v("www.yy.com → 111.111.111.111\nwww.cc.com → 111.111.111.111\nwww.xx.com → 111.111.111.111\nwww.kk.com → 111.111.111.111\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br")])]),_("p",[s._v("那么当"),_("strong",[s._v("111.111.111.111")]),s._v("更改的时候，全部相关A记录指向关系都要做更改。")])])])])}],!1,null,null,null);v.default=t.exports}}]);