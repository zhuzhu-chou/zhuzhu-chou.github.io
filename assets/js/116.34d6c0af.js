(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{172:function(t,v,_){"use strict";_.r(v);var d=_(0),e=Object(d.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"content"},[_("h2",{attrs:{id:"virtual-dom"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),_("p",[_("strong",[t._v("Virtual DOM")]),t._v("：")]),t._v(" "),_("p",[t._v("每次创建 dom 的成本都很高，虚拟 dom 把 dom 的更新放到 JS 层来做，一次性更新到页面上。")]),t._v(" "),_("p",[t._v("那 Virtual Dom 的优势在哪？")]),t._v(" "),_("h3",{attrs:{id:"关于提升性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于提升性能"}},[t._v("#")]),t._v(" 关于提升性能")]),t._v(" "),_("blockquote",[_("p",[t._v("很多地方提到操作真实 DOM 慢，但测试结果却比 React 更快。")]),t._v(" "),_("p",[t._v("看一看 https://www.zhihu.com/question/31809713/answer/53544875 尤雨溪的回答")])]),t._v(" "),_("p",[_("code",[t._v("VitrualDom")]),t._v("的优势在于 "),_("code",[t._v("React")]),t._v("的 "),_("code",[t._v("Diff")]),t._v('算法和批处理策略（diff 过程）。先说一下如果是单纯的 dom 操作，dom 引擎和 JS 引擎虽然都在主线程中工作，但是是互斥的，JS 引擎执行的时候必须挂起 dom 引擎，执行完毕之后再激活 dom 引擎，若有频繁的 DOM API 调用，且浏览器厂商不做"批量处理"优化（chrome 有 flush 队列），'),_("strong",[t._v("引擎间切换的单位代价")]),t._v("将迅速积累若其中有"),_("strong",[t._v("强制重绘的 DOM API 调用")]),t._v("，"),_("strong",[t._v("重流")]),t._v("会引起更大的性能消耗。")]),t._v(" "),_("h3",{attrs:{id:"跨浏览器兼容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跨浏览器兼容"}},[t._v("#")]),t._v(" 跨浏览器兼容")]),t._v(" "),_("p",[_("code",[t._v("React")]),t._v("基于 "),_("code",[t._v("VitrualDom")]),t._v("实现了一套自己的事件机制，自己模拟了事件冒泡和捕获的过程，采用了事件代理，批量更新等方法，抹平了各个浏览器的事件兼容性问题。")]),t._v(" "),_("h3",{attrs:{id:"跨平台兼容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跨平台兼容"}},[t._v("#")]),t._v(" 跨平台兼容")]),t._v(" "),_("p",[_("code",[t._v("vDom")]),t._v(" 为 React 带来了跨平台渲染的能力，比如 "),_("code",[t._v("RN")]),t._v("。"),_("code",[t._v("React")]),t._v("根据 "),_("code",[t._v("VitrualDom")]),t._v("画出相应平台的 "),_("code",[t._v("ui")]),t._v("层。")]),t._v(" "),_("h2",{attrs:{id:"react-diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#react-diff"}},[t._v("#")]),t._v(" React Diff")]),t._v(" "),_("p",[t._v("React 对 diff 算法针对3种策略做了优化，复杂度降到了 "),_("code",[t._v("O(n)")]),t._v("。")]),t._v(" "),_("ol",[_("li",[t._v("策略一：Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。")]),t._v(" "),_("li",[t._v("React 是基于"),_("strong",[t._v("组件")]),t._v("构建应用的，对于组件间的比较所采取的策略也是简洁高效。")]),t._v(" "),_("li",[t._v("对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。")])]),t._v(" "),_("h3",{attrs:{id:"v-diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#v-diff"}},[t._v("#")]),t._v(" v diff")]),t._v(" "),_("p",[t._v("React 通过 "),_("strong",[_("code",[t._v("updateDepth")])]),t._v(" 对 "),_("code",[t._v("Virtual DOM")]),t._v(" 树进行层级控制。只会对同一父节点下所有子节点进行比较，如果发现某个子节点已经不存在了，React 会直接删除该节点，而不会继续往下比较。因此只需要遍历一遍。")]),t._v(" "),_("p",[_("strong",[t._v("对于跨层次比较：")])]),t._v(" "),_("div",{staticClass:"warning custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("只有删除和增加节点的操作")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/kua.png",alt:""}})]),t._v(" "),_("p",[t._v("React diff 的执行情况："),_("strong",[t._v("create A -> create B -> create C -> delete A")])]),t._v(" "),_("h3",{attrs:{id:"component-diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#component-diff"}},[t._v("#")]),t._v(" component diff")]),t._v(" "),_("ol",[_("li",[t._v("如果是同一类型的组件，按原策略继续比较 vDOM tree")]),t._v(" "),_("li",[t._v("如果不是，则将该组件判断为 dirty component，从而替换整个组件下的所有子节点")])]),t._v(" "),_("h3",{attrs:{id:"element-diff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#element-diff"}},[t._v("#")]),t._v(" element diff")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/diff01.png",alt:""}})]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("index")]),t._v(" "),_("th",[t._v("节点")]),t._v(" "),_("th",[t._v("oldIndex")]),t._v(" "),_("th",[t._v("lastIndex")]),t._v(" "),_("th",[t._v("操作")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("B")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("lastIndex = 1；")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("A")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("oldIndex < lastIndex，A-move(1)")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("D")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("lastIndex = 3;")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("C")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("oldIndex < lastIndex，C-move(2)")])])])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("index")]),t._v("：新集合的遍历下标")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("oldIndex")])]),t._v("：当前节点在旧集合中的下标")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("lastIndex")])]),t._v("：在新集合访问过的节点中，其在旧集合中的最大下标值")])]),t._v(" "),_("p",[t._v("操作一栏中只比较oldIndex和lastIndex：")]),t._v(" "),_("ul",[_("li",[t._v("当oldIndex>lastIndex时，将oldIndex的值赋值给lastIndex")]),t._v(" "),_("li",[t._v("当oldIndex=lastIndex时，不操作")]),t._v(" "),_("li",[t._v("当oldIndex<lastIndex时，将当前节点移动到index的位置")])]),t._v(" "),_("p",[_("strong",[t._v("以上主要分析新老集合中存在相同节点但位置不同时，对节点进行位置移动的情况，如果新集合中有新加入的节点且老集合存在需要删除的节点，那么 React diff 又是如何对比运作的呢？")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/diff02.png",alt:""}})]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("index")]),t._v(" "),_("th",[t._v("节点")]),t._v(" "),_("th",[t._v("oldIndex")]),t._v(" "),_("th",[t._v("lastIndex")]),t._v(" "),_("th",[t._v("操作")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("B")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("lastIndex = 1;")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("E")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("oldIndex 不存在，添加节点 E 至 index(1) 位置")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("C")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("不操作")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("A")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("oldIndex < lastIndex，A-move(3)的位置")])])])]),t._v(" "),_("ul",[_("li",[t._v("oldIndex 存在\n"),_("ol",[_("li",[t._v("当oldIndex > lastIndex时，将 oldIndex 的值赋值给 lastIndex")]),t._v(" "),_("li",[t._v("当oldIndex=lastIndex时，不操作")]),t._v(" "),_("li",[t._v("当oldIndex<lastIndex时，将当前节点移动到index的位置")])])]),t._v(" "),_("li",[t._v("oldIndex不存在\n"),_("ol",[_("li",[t._v("新增当前节点至index的位置")])])])]),t._v(" "),_("p",[t._v("但是 "),_("strong",[_("code",[t._v("diff")])]),t._v(" 有个缺陷，考虑下面的情况")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/diff03.png",alt:""}})]),t._v(" "),_("div",{staticClass:"tip custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("所以建议在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作。当节点数量过大或更新操作过于频繁时，这在一定程度上会影响React的渲染性能。")])])])}],!1,null,null,null);v.default=e.exports}}]);