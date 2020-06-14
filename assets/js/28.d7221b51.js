(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{240:function(t,_,e){"use strict";e.r(_);var r=e(0),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("HTTP/2 中传输的帧结构如下图所示:")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://47.98.159.95/my_blog/http/010.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://47.98.159.95/my_blog/http/010.png",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("HTTP/2 其实也是借鉴了 TCP 状态变化的思想，根据帧的标志位来实现具体的状态改变。这里我们以一个普通的"),e("code",[t._v("请求-响应")]),t._v("过程为例来说明： "),e("a",{attrs:{href:"http://47.98.159.95/my_blog/http/012.jpg",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"http://47.98.159.95/my_blog/http/012.jpg",alt:"img"}}),e("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("如果下次要开启流，流 ID 需要自增，直到上限。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)])}),[function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"帧结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#帧结构"}},[this._v("#")]),this._v(" 帧结构")])},function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ul",[e("li",[e("strong",[t._v("帧类型")]),t._v("：大概分为"),e("strong",[t._v("数据帧")]),t._v("和"),e("strong",[t._v("控制帧")]),t._v("，数据帧存放 HTTP 报文。控制帧用来管理流的传输")]),t._v(" "),e("li",[e("strong",[t._v("帧标志")]),t._v("：常用的 "),e("strong",[e("code",[t._v("END_HEADERS")])]),t._v(" 表示头数据结束，"),e("strong",[e("code",[t._v("END_STREAM")])]),t._v(" 表示单方向数据发送结束")]),t._v(" "),e("li",[e("strong",[t._v("流标识符")]),t._v("：有了它，接收方就能从乱序的二进制帧中选择出 ID 相同的帧，按顺序组装成请求/响应报文。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"流的状态变化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流的状态变化"}},[this._v("#")]),this._v(" 流的状态变化")])},function(){var t=this.$createElement,_=this._self._c||t;return _("blockquote",[_("p",[this._v("流，其实就是二进制帧的双向传输序列。")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("以 "),_("strong",[this._v("请求-响应")]),this._v(" 举例：")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("最开始两者都是空闲状态，当客户端发送 "),_("strong",[this._v("Headers帧")]),this._v(" 后，开始分配 "),_("strong",[this._v("Stream ID")]),this._v("，此时客户端的流打开，服务端接收之后服务端的流也打开，之后就可以双向发送数据帧和控制帧了。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("当客户端要关闭时，向服务端发送 "),_("strong",[this._v("END_STREAM 帧")]),this._v("，进入半关闭状态，这个时候客户端只能接收二不能发送数据。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("服务端收到 "),_("strong",[this._v("END_STREAM 帧")]),this._v("后也进入半关闭状态，不过此时服务器和客户端情况相反，只能发送，不能接收。随后服务器也向客户端发送 "),_("strong",[this._v("END_STREAM 帧")]),this._v("，表示数据发送完毕，双方进入关闭状态。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("h2",{attrs:{id:"流的特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流的特性"}},[this._v("#")]),this._v(" 流的特性")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("刚刚谈到了流的状态变化过程，这里顺便就来总结一下"),_("code",[this._v("流")]),this._v("传输的特性:")])},function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ul",[e("li",[t._v("并发性。一个 HTTP/2 连接上可以同时发多个帧，这一点和 HTTP/1 不同。这也是实现"),e("strong",[t._v("多路")]),t._v("复用的基础。")]),t._v(" "),e("li",[t._v("自增性。流 ID 是不可重用的，而是会按顺序递增，达到上限之后又新开 TCP 连接从头开始。")]),t._v(" "),e("li",[t._v("双向性。客户端和服务端都可以创建流，互不干扰，双方都可以作为"),e("code",[t._v("发送方")]),t._v("或者"),e("code",[t._v("接收方")]),t._v("。")]),t._v(" "),e("li",[t._v("可设置优先级。可以设置数据帧的优先级，让服务端先处理重要资源，优化用户体验。")])])}],!1,null,null,null);_.default=s.exports}}]);