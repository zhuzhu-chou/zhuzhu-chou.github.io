(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{180:function(v,_,a){"use strict";a.r(_);var e=a(0),t=Object(e.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("div",{staticClass:"content"},[a("p",[v._v("掘金学习链接:")]),v._v(" "),a("p",[v._v("https://juejin.im/post/5a673af06fb9a01c927ed880")]),v._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),a("p",[v._v("因为可能会直接使用副本免于重新发送请求或者仅仅确认资源没变无需重新传输资源实体，Web缓存可以减少延迟加快网页打开速度、重复利用资源减少网络带宽消耗、降低请求次数或者减少传输内容从而减轻服务器压力。")])]),v._v(" "),a("h2",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[v._v("#")]),v._v(" 强缓存")]),v._v(" "),a("p",[v._v("浏览器中的缓存作用分为两种情况，一种是需要发送"),a("code",[v._v("HTTP")]),v._v("请求，一种是不需要发送。")]),v._v(" "),a("p",[v._v("首先是检查强缓存，这个阶段"),a("code",[v._v("不需要")]),v._v("发送HTTP请求。")]),v._v(" "),a("p",[v._v("如何来检查呢？通过相应的字段来进行，但是说起这个字段就有点门道了。")]),v._v(" "),a("p",[v._v("在"),a("code",[v._v("HTTP/1.0")]),v._v("和"),a("code",[v._v("HTTP/1.1")]),v._v("当中，这个字段是不一样的。在早期，也就是"),a("code",[v._v("HTTP/1.0")]),v._v("时期，使用的是"),a("strong",[v._v("Expires")]),v._v("，而"),a("code",[v._v("HTTP/1.1")]),v._v("使用的是"),a("strong",[v._v("Cache-Control")]),v._v("。让我们首先来看看Expires。")]),v._v(" "),a("h3",{attrs:{id:"expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[v._v("#")]),v._v(" Expires")]),v._v(" "),a("p",[a("code",[v._v("Expires")]),v._v("即过期时间，存在于服务端返回的响应头中，告诉浏览器在这个过期时间之前可以直接从缓存里面获取数据，无需再次请求。比如下面这样:")]),v._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[v._v("Expires"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" Wed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(",")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("22")]),v._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("2019")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("08")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("41")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("00")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[v._v("GMT")]),v._v("\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br")])]),a("p",[v._v("表示资源在"),a("code",[v._v("2019年11月22号8点41分")]),v._v("过期，过期了就得向服务端发请求。")]),v._v(" "),a("p",[v._v("这个方式看上去没什么问题，合情合理，但其实潜藏了一个坑，那就是"),a("strong",[v._v("服务器的时间和浏览器的时间可能并不一致")]),v._v("，那服务器返回的这个过期时间可能就是不准确的。因此这种方式很快在后来的HTTP1.1版本中被抛弃了。")]),v._v(" "),a("h3",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[v._v("#")]),v._v(" Cache-Control")]),v._v(" "),a("p",[v._v("在HTTP1.1中，采用了一个非常关键的字段："),a("code",[v._v("Cache-Control")]),v._v("。这个字段也是存在于")]),v._v(" "),a("p",[v._v("它和"),a("code",[v._v("Expires")]),v._v("本质的不同在于它并没有采用"),a("code",[v._v("具体的过期时间点")]),v._v("这个方式，而是采用过期时长来控制缓存，对应的字段是"),a("strong",[v._v("max-age")]),v._v("。比如这个例子:")]),v._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[v._v("Cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("age"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("3600")]),v._v("\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br")])]),a("p",[a("strong",[v._v("no-cache")]),v._v(":\t跳过当前的强缓存，发送HTTP请求，即直接进入"),a("code",[v._v("协商缓存阶段")]),v._v("。")]),v._v(" "),a("p",[a("strong",[v._v("no-store")]),v._v("：表示禁止浏览器以及所有中间缓存存储任何版本的返回响应，一定不会出现强缓存和协商缓存，适合个人隐私数据或者经济类数据。")]),v._v(" "),a("p",[v._v("值得注意的是，当"),a("strong",[v._v("Expires")]),v._v("和"),a("strong",[v._v("Cache-Control")]),v._v("同时存在的时候，"),a("strong",[v._v("Cache-Control")]),v._v("会优先考虑。")]),v._v(" "),a("p",[v._v("当然，还存在一种情况，当资源缓存时间超时了，也就是"),a("code",[v._v("强缓存")]),v._v("失效了，接下来怎么办？没错，这样就进入到第二级屏障——"),a("strong",[v._v("协商缓存")]),v._v("了。")]),v._v(" "),a("h3",{attrs:{id:"pragma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pragma"}},[v._v("#")]),v._v(" "),a("strong",[v._v("Pragma")])]),v._v(" "),a("p",[a("code",[v._v("Pragma")]),v._v("是HTTP/1.1之前版本遗留的通用首部字段，"),a("strong",[v._v("仅作为于HTTP/1.0的向后兼容而使用")]),v._v("。虽然它是一个通用首部，但是它在响应报文中时的行为没有规范，依赖于浏览器的实现。RFC中该字段只有"),a("code",[v._v("no-cache")]),v._v("一个可选值，会通知浏览器不直接使用缓存，要求向服务器发请求校验新鲜度。因为它优先级最高，当存在时一定不会命中强缓存。")]),v._v(" "),a("h2",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[v._v("#")]),v._v(" 协商缓存")]),v._v(" "),a("p",[v._v("强缓存失效之后，浏览器在请求头中携带相应的"),a("code",[v._v("缓存tag")]),v._v("来向服务器发请求，由服务器根据这个tag，来决定是否使用缓存，这就是"),a("strong",[v._v("协商缓存")]),v._v("。")]),v._v(" "),a("p",[v._v("具体来说，这样的缓存tag分为两种: "),a("strong",[v._v("Last-Modified")]),v._v(" 和 "),a("strong",[v._v("ETag")]),v._v("。这两者各有优劣，并不存在谁对谁有"),a("code",[v._v("绝对的优势")]),v._v("，跟上面强缓存的两个 tag 不一样。")]),v._v(" "),a("h3",{attrs:{id:"last-modified"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[v._v("#")]),v._v(" Last-Modified")]),v._v(" "),a("p",[v._v("即最后修改时间。在浏览器第一次给服务器发送请求后，服务器会在响应头中加上这个字段。")]),v._v(" "),a("p",[v._v("浏览器接收到后，如果再次请求，会在请求头中携带"),a("code",[v._v("If-Modified-Since")]),v._v("字段，这个字段的值也就是服务器传来的最后修改时间。")]),v._v(" "),a("p",[v._v("服务器拿到请求头中的"),a("code",[v._v("If-Modified-Since")]),v._v("的字段后，其实会和这个服务器中"),a("code",[v._v("该资源的最后修改时间")]),v._v("对比:")]),v._v(" "),a("ul",[a("li",[v._v("如果请求头中的这个值小于最后修改时间，说明是时候更新了。返回新的资源，跟常规的HTTP请求响应的流程一样。")]),v._v(" "),a("li",[v._v("否则返回304，告诉浏览器直接用缓存。")])]),v._v(" "),a("h3",{attrs:{id:"etag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[v._v("#")]),v._v(" ETag")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/ETAG.png",alt:""}})]),v._v(" "),a("blockquote",[a("p",[v._v("ETag属性之间的比较采用的是"),a("strong",[v._v("弱比较算法")]),v._v("，即两个文件除了每个比特都相同外，内容一致也可以认为是相同的。例如，如果两个页面仅仅在页脚的生成时间有所不同，就可以认为二者是相同的。")])]),v._v(" "),a("h3",{attrs:{id:"两者对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两者对比"}},[v._v("#")]),v._v(" 两者对比")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("在"),a("code",[v._v("精准度")]),v._v("上，"),a("code",[v._v("ETag")]),v._v("优于"),a("code",[v._v("Last-Modified")]),v._v("。优于 ETag 是按照内容给资源上标识，因此能准确感知资源的变化。而 Last-Modified 就不一样了，它在一些特殊的情况并不能准确感知资源变化，主要有两种情况:")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("编辑了资源文件，但是文件内容并没有更改，这样也会造成缓存失效。")])]),v._v(" "),a("li",[a("p",[v._v("Last-Modified 能够感知的单位时间是秒，如果文件在 1 秒内改变了多次，那么这时候的 Last-Modified 并没有体现出修改了。")])])])]),v._v(" "),a("li",[a("p",[v._v("在性能上，"),a("code",[v._v("Last-Modified")]),v._v("优于"),a("code",[v._v("ETag")]),v._v("，也很简单理解，"),a("code",[v._v("Last-Modified")]),v._v("仅仅只是记录一个时间点，而 "),a("code",[v._v("Etag")]),v._v("需要根据文件的具体内容生成哈希值。")])])]),v._v(" "),a("p",[v._v("另外，如果两种方式都支持的话，服务器会优先考虑"),a("code",[v._v("ETag")]),v._v("。")]),v._v(" "),a("p",[v._v("总结流程如下：")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/huan002.png",alt:""}})]),v._v(" "),a("p",[a("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/huan001.png",alt:""}})]),v._v(" "),a("h2",{attrs:{id:"缓存位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[v._v("#")]),v._v(" 缓存位置")]),v._v(" "),a("p",[v._v("前面我们已经提到，当"),a("code",[v._v("强缓存")]),v._v("命中或者协商缓存中服务器返回304的时候，我们直接从缓存中获取资源。那这些资源究竟缓存在什么位置呢？")]),v._v(" "),a("p",[v._v("浏览器中的缓存位置一共有四种，按优先级从高到低排列分别是：")]),v._v(" "),a("ul",[a("li",[v._v("Service Worker")]),v._v(" "),a("li",[v._v("Memory Cache")]),v._v(" "),a("li",[v._v("Disk Cache")]),v._v(" "),a("li",[v._v("Push Cache")])]),v._v(" "),a("h3",{attrs:{id:"service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[v._v("#")]),v._v(" Service Worker")]),v._v(" "),a("p",[v._v("Service Worker 借鉴了 Web Worker的 思路，即让 JS 运行在主线程之外，由于它脱离了浏览器的窗体，因此无法直接访问"),a("code",[v._v("DOM")]),v._v("。虽然如此，但它仍然能帮助我们完成很多有用的功能，比如"),a("code",[v._v("离线缓存")]),v._v("、"),a("code",[v._v("消息推送")]),v._v("和"),a("code",[v._v("网络代理")]),v._v("等功能。其中的"),a("code",[v._v("离线缓存")]),v._v("就是 "),a("strong",[v._v("Service Worker Cache")]),v._v("。")]),v._v(" "),a("p",[v._v("Service Worker 同时也是 PWA 的重要实现机制，关于它的细节和特性，我们将会在后面的 PWA 的分享中详细介绍。")]),v._v(" "),a("h3",{attrs:{id:"memory-cache-和-disk-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache-和-disk-cache"}},[v._v("#")]),v._v(" Memory Cache 和 Disk Cache")]),v._v(" "),a("p",[a("strong",[v._v("Memory Cache")]),v._v("指的是内存缓存，从效率上讲它是最快的。但是从存活时间来讲又是最短的，当渲染进程结束后，内存缓存也就不存在了。")]),v._v(" "),a("p",[a("strong",[v._v("Disk Cache")]),v._v("就是存储在磁盘中的缓存，从存取效率上讲是比内存缓存慢的，但是他的优势在于存储容量和存储时长。稍微有些计算机基础的应该很好理解，就不展开了。")]),v._v(" "),a("p",[v._v("好，现在问题来了，既然两者各有优劣，那浏览器如何决定将资源放进内存还是硬盘呢？主要策略如下：")]),v._v(" "),a("ul",[a("li",[v._v("比较大的JS、CSS文件会直接被丢进磁盘，反之丢进内存")]),v._v(" "),a("li",[v._v("内存使用率比较高的时候，文件优先进入磁盘")])]),v._v(" "),a("h3",{attrs:{id:"push-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[v._v("#")]),v._v(" Push Cache")]),v._v(" "),a("p",[v._v("即推送缓存，这是浏览器缓存的最后一道防线。它是 "),a("code",[v._v("HTTP/2")]),v._v(" 中的内容，虽然现在应用的并不广泛，但随着 HTTP/2 的推广，它的应用越来越广泛。")])])}],!1,null,null,null);_.default=t.exports}}]);