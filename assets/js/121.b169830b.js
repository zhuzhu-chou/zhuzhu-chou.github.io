(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{272:function(e,t,o){"use strict";o.r(t);var v=o(0),_=Object(v.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("p",[e._v("15")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/React15.webp",alt:""}})]),e._v(" "),o("p",[e._v("16")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://zhuzhu-chou.github.io/images/React16.webp",alt:""}})]),e._v(" "),o("ul",[o("li",[o("code",[e._v("componentDidUpdate(prevProps, prevState, snapshot)")]),e._v("：用来执行 DOM 挂载完成之后的副作用")]),e._v(" "),o("li",[o("code",[e._v("shouldComponentUpdate(nextProps, nextState)")]),e._v("：此方法仅作为"),o("strong",[e._v("性能优化的方式")]),e._v("而存在。"),o("strong",[e._v("注意")]),e._v("：返回 false 并不会阻止子组件 state 改变进行更新，且不能调用 "),o("code",[e._v("this.setState()")]),e._v(" ，否则造成死循环。")]),e._v(" "),o("li",[o("code",[e._v("static getDerivedStateFromProps(props, state)")])]),e._v(" "),o("li",[o("code",[e._v("getSnapshotBeforeUpdate(prevProps, prevState)")])]),e._v(" "),o("li",[o("code",[e._v("componentDidCatch(error, info)")])])]),e._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("总结："),o("code",[e._v("React16")]),e._v(" （注意，"),o("code",[e._v("React16")]),e._v(" 加上 "),o("code",[e._v("UNSAFE")]),e._v(" 前缀后可以用，到 "),o("strong",[o("code",[e._v("React17")])]),e._v(" 才删除）弃用了 "),o("code",[e._v("UNSAFE_componentWillReceiveProps(nextProps)")]),e._v("、"),o("code",[e._v("UNSAFE_componentWillUpdate(nextProps, nextState)")]),e._v("、"),o("code",[e._v("UNSAFE_componentWillMount()")]),e._v("，（出现只是为了和  componentDidUpdate、componentDidMount对称，毫无意义）用"),o("code",[e._v("getDerivedStateFromProps")]),e._v("、 "),o("code",[e._v("getSnapshotBeforeUpdate")]),e._v(" 代替。")])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[o("code",[e._v("getDerivedStateFromProps")])]),e._v("：存在只有一个目的：让组件在 "),o("strong",[e._v("props 变化")]),e._v("时更新 state（派生 state）。")]),e._v(" "),o("p",[e._v("可以在里面返回一个对象更新 "),o("code",[e._v("state")]),e._v("，返回 "),o("code",[e._v("null")]),e._v(" 则不更新 "),o("code",[e._v("state")])]),e._v(" "),o("blockquote",[o("p",[e._v("在很长一段时间内，生命周期函数 "),o("code",[e._v("componentWillReceiveProps")]),e._v(" 是响应 Props 变化之后进行更新的唯一方式。")])]),e._v(" "),o("p",[e._v("派生 state 的问题参考：https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization")]),e._v(" "),o("p",[e._v("使用之前需要熟悉的一些"),o("strong",[e._v("替代方案")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v('只是想在 prop 更改时"重置"某些 state ，考虑使组件'),o("strong",[e._v("完全受控")]),e._v("或者"),o("strong",[e._v("使用 key 使组件完全不受控")])]),e._v(" "),o("blockquote",[o("p",[e._v("keys 一般用来渲染动态列表，但也可以用在普通组件上，key 变化时，React 会创建一个新的而不是更新一个既有的组件。")])])]),e._v(" "),o("li",[o("p",[e._v("如果只想在 "),o("strong",[e._v("prop 更改时重新计算某些数据")]),e._v("，请使用 "),o("strong",[o("code",[e._v("memoization helper")])]),e._v(" 代替。")])])])]),e._v(" "),o("li",[o("p",[o("strong",[o("code",[e._v("getSnapshotBeforeUpdate")])]),e._v("：触发时间: "),o("code",[e._v("update")]),e._v("发生的时候，在 "),o("code",[e._v("render")]),e._v("之后，在组件 "),o("code",[e._v("dom")]),e._v("渲染之前；返回一个值，作为 "),o("code",[e._v("componentDidUpdate")]),e._v("的第三个参数。配合 "),o("code",[e._v("componentDidUpdate")]),e._v(" 可以完全替代 "),o("code",[e._v("UNSAFE_componentWillUpdate")])])])])])}],!1,null,null,null);t.default=_.exports}}]);