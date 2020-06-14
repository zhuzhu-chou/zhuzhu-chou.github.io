(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{282:function(_,v,t){"use strict";t.r(v);var e=t(0),i=Object(e.a)({},(function(){var _=this.$createElement;this._self._c;return this._m(0)}),[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"tcp-报文头部字段的介绍（牢记）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-报文头部字段的介绍（牢记）"}},[_._v("#")]),_._v(" "),t("strong",[_._v("TCP 报文头部字段的介绍")]),_._v("（牢记）")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/TCP%E6%8A%A5%E6%96%87.jpg",alt:""}})]),_._v(" "),t("ul",[t("li",[t("p",[_._v("**源端口、目标端口（各2字节）：**TCP 连接的"),t("code",[_._v("四元组")]),_._v("——源 IP、源端口、目标 IP 和目标端口。用来唯一标识一个连接。")]),_._v(" "),t("p",[_._v("那 TCP 报文怎么没有源 IP 和目标 IP 呢？这是因为在 IP 层就已经处理了 IP 。TCP 只需要记录两者的端口即可。")])]),_._v(" "),t("li",[t("p",[_._v("**序列号（4个字节）：**序列号是一个长为 4 个字节，也就是 32 位的无符号整数，表示范围为 0 ~ 2^32 - 1。如果到达最大值了后就循环到0。")]),_._v(" "),t("p",[_._v("TCP 是"),t("strong",[_._v("面向字节流")]),_._v("的。**首部中的序号字段值则指的是本报文段锁发送的数据的第一个字节的序号。**例如，一报文段的序列号字段值是301，而携带的数据共用100字节。这就表明：本报文段的数据的第一个字节的序号是301，最后一个是400。显然，下一个报文段（如果还有的话）的数据序号应从401开始。")]),_._v(" "),t("p",[t("strong",[_._v("序列号在 TCP 通信的过程中有两个作用:")])]),_._v(" "),t("ul",[t("li",[_._v("在 SYN 报文中交换彼此的初始序列号。")]),_._v(" "),t("li",[_._v("保证数据包按正确的顺序组装。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("ISN")]),_._v("："),t("code",[_._v("Initial Sequence Number（初始序列号）")]),_._v("。整个要传递的字节流的起始序号必须在连接建立时设置。在三次握手的过程当中，双方会用过"),t("code",[_._v("SYN")]),_._v("报文来交换彼此的 "),t("code",[_._v("ISN")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("ISN是固定的吗")])]),_._v(" "),t("p",[_._v("当一端为建立连接而发送它的SYN时，它为连接选择一个初始序号。ISN随时间而变化，因此每个连接都将具有不同的ISN。ISN可以看作是一个32比特的计数器，每4ms加1 。这样选择序号的目的在于防止在网络中被延迟的分组在以后又被传送，而导致某个连接的一方对它做错误的解释。")]),_._v(" "),t("p",[t("strong",[_._v("三次握手的其中一个重要功能是客户端和服务端交换 ISN")]),_._v("，以便让对方知道接下来接收数据的时候如何按序列号组装数据。如果 ISN 是固定的，攻击者很容易猜出后续的确认号，因此 ISN 是动态生成的。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("确认号："),t("strong",[_._v("指期")]),_._v("望收到对方下一个报文段的第一个数据字节的序号")]),_._v("。")]),_._v(" "),t("p",[_._v("比如：B 正确收到 A 发送过来的一个报文段，其序列号值是 501，数据长度为200字节，这表明 B 正确收到 A 发送的序号 700　为止的数据。因此，B 期望收到的下一个数据序号为 701，于是 B 在发送 给 A 的确认报文段中把确认号置为 701（ack = 701）。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("控制位：")])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("确认ACK")]),_._v("：ACK = 1 时确认号(ack)才有效，ACK = 0 确认号无效。TCP 规定，在连接建立后所有传送的报文段都必须把 ACK 置 1。")]),_._v(" "),t("li",[t("code",[_._v("同步SYN")]),_._v("：SYN 置为 1，就表示这是一个连接请求或连接接受请求。")]),_._v(" "),t("li",[t("code",[_._v("终止FIN")]),_._v("：FIN = 1，表示发送方准备断开连接。")]),_._v(" "),t("li",[t("code",[_._v("复位RST")]),_._v("：ReSet。RST = 1，表示 TCP 连接中出现严重差错，用来强制断开连接。")]),_._v(" "),t("li",[t("code",[_._v("推送PSH")]),_._v("：PuSH。PSH = 1，表示告知对方这些数据包收到后应该马上交给上层的应用，不能缓存。")])])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("窗口大小：")])]),_._v(" "),t("blockquote",[t("p",[_._v("窗口字段明确指出了现在允许对方发送的数据量。窗口值经常在动态变化着。")])]),_._v(" "),t("p",[_._v("窗口指的是发送本报文段的一方的"),t("strong",[_._v("接收窗口")]),_._v("（而不是自己的发送窗口）。窗口值告诉对方：从本报文段首部中的确认号算起，接收方目前允许对方发送的数据量。之所以有这个限制，是因为缓存空间是有限的。")]),_._v(" "),t("p",[_._v("占用两个字节，也就是 16 位，但实际上是不够用的。因此 TCP 引入了"),t("strong",[_._v("窗口缩放")]),_._v("的选项，作为窗口缩放的比例因子，这个"),t("strong",[_._v("比例因子")]),_._v("的范围在 0 ~ 14，比例因子可以将窗口的值扩大为原来的 2 ^ n 次方。")])]),_._v(" "),t("li",[t("p",[_._v("**校验和：**防止传输过程中数据包有损坏，如果遇到校验和有差错的报文，TCP 直接丢弃之，等待重传。")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("可选项：")])]),_._v(" "),t("p",[_._v("可选项的格式如下:")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/006.jpg",alt:""}})])])]),_._v(" "),t("p",[_._v("常用的可选项有以下几个:")]),_._v(" "),t("ul",[t("li",[t("p",[t("code",[_._v("TimeStamp")]),_._v(": TCP 时间戳。")]),_._v(" "),t("p",[t("strong",[_._v("作用：")])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("MSS")]),_._v(": 指的是 TCP 允许的从对方接收的最大报文段。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("SACK")]),_._v(": 选择确认选项。")])]),_._v(" "),t("li",[t("p",[t("code",[_._v("Window Scale")]),_._v("： 窗口缩放选项。")])])])])}],!1,null,null,null);v.default=i.exports}}]);