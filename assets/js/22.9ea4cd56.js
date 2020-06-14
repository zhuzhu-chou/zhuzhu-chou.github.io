(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{295:function(s,n,e){"use strict";e.r(n);var t=e(0),a=Object(t.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("div",{staticClass:"content"},[e("p",[s._v("HTTP采取范围请求，来应对大文件传输的场景，允许客户端仅仅请求一个资源的一部分。")]),s._v(" "),e("h2",{attrs:{id:"如何支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何支持"}},[s._v("#")]),s._v(" 如何支持")]),s._v(" "),e("p",[s._v("当然，前提是服务器要支持"),e("strong",[s._v("范围请求")]),s._v("，要支持这个功能，就必须加上这样一个响应头:")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Accept-Ranges: none\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("用来告知客户端这边是支持范围请求的。")]),s._v(" "),e("h2",{attrs:{id:"range-字段拆解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#range-字段拆解"}},[s._v("#")]),s._v(" Range 字段拆解")]),s._v(" "),e("p",[s._v("而对于客户端而言，它需要指定请求哪一部分，通过"),e("code",[s._v("Range")]),s._v("这个请求头字段确定，格式为"),e("code",[s._v("bytes=x-y")]),s._v("。接下来就来讨论一下这个 Range 的书写格式:")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("0-499")]),s._v("表示从开始到第 499 个字节。")]),s._v(" "),e("li",[e("strong",[s._v("500")]),s._v("- 表示从第 500 字节到文件终点。")]),s._v(" "),e("li",[e("strong",[s._v("-100")]),s._v("表示文件的最后100个字节。")])]),s._v(" "),e("p",[s._v("服务器收到请求之后，首先验证范围"),e("strong",[s._v("是否合法")]),s._v("，如果越界了那么返回"),e("code",[s._v("416")]),s._v("错误码，否则读取相应片段，返回"),e("code",[s._v("206")]),s._v("状态码。")]),s._v(" "),e("p",[s._v("同时，服务器需要添加"),e("code",[s._v("Content-Range")]),s._v("字段，这个字段的格式根据请求头中"),e("code",[s._v("Range")]),s._v("字段的不同而有所差异。")]),s._v(" "),e("p",[s._v("具体来说，请求"),e("code",[s._v("单段数据")]),s._v("和请求"),e("code",[s._v("多段数据")]),s._v("，响应头是不一样的。")]),s._v(" "),e("p",[s._v("举个例子:")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单段数据")]),s._v("\nRange"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 多段数据")]),s._v("\nRange"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("接下来我们就分别来讨论着两种情况。")]),s._v(" "),e("h2",{attrs:{id:"单段数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单段数据"}},[s._v("#")]),s._v(" 单段数据")]),s._v(" "),e("p",[s._v("对于"),e("code",[s._v("单段数据")]),s._v("的请求，返回的响应如下:")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("HTTP/1.1 206 Partial Content\nContent-Length: 10\nAccept-Ranges: bytes\nContent-Range: bytes 0-9/100\n\ni am xxxxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("值得注意的是"),e("code",[s._v("Content-Range")]),s._v("字段，"),e("code",[s._v("0-9")]),s._v("表示请求的返回，"),e("code",[s._v("100")]),s._v("表示资源的总大小，很好理解。")]),s._v(" "),e("h2",{attrs:{id:"多段数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多段数据"}},[s._v("#")]),s._v(" 多段数据")]),s._v(" "),e("p",[s._v("接下来我们看看多段请求的情况。得到的响应会是下面这个形式:")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("HTTP/1.1 206 Partial Content\nContent-Type: multipart/byteranges; boundary=00000010101\nContent-Length: 189\nConnection: keep-alive\nAccept-Ranges: bytes\n\n\n--00000010101\nContent-Type: text/plain\nContent-Range: bytes 0-9/96\n\ni am xxxxx\n--00000010101\nContent-Type: text/plain\nContent-Range: bytes 20-29/96\n\neex jspy e\n--00000010101--\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("这个时候出现了一个非常关键的字段"),e("code",[s._v("Content-Type: multipart/byteranges;boundary=00000010101")]),s._v("，它代表了信息量是这样的:")]),s._v(" "),e("ul",[e("li",[s._v("请求一定是多段数据请求")]),s._v(" "),e("li",[s._v("响应体中的分隔符是 00000010101")])]),s._v(" "),e("p",[s._v("因此，在响应体中各段数据之间会由这里指定的分隔符分开，而且在最后的分隔末尾添上"),e("code",[s._v("--")]),s._v("表示结束。")]),s._v(" "),e("p",[s._v("以上就是 http 针对大文件传输所采用的手段。")])])}],!1,null,null,null);n.default=a.exports}}]);