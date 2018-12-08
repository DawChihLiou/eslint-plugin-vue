(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{451:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",[t._m(2),t._v(" "),n("li",[t._v("🔧 The "),n("code",[t._v("--fix")]),t._v(" option on the "),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[t._v("command line"),n("OutboundLink")],1),t._v(" can automatically fix some of the problems reported by this rule.")])]),t._v(" "),n("p",[t._v("People have own preference about the location of closing brackets.\nThis rule enforces a line break (or no line break) before tag's closing brackets.")]),t._v(" "),t._m(3),t._m(4),t._v(" "),n("p",[t._v("This rule aims to warn the right angle brackets which are at the location other than the configured location.")]),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/html-closing-bracket-newline":["error"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <div id="foo" class="bar">\n  <div\n    id="foo"\n    class="bar"\n  >\n\n  \x3c!-- ✗ BAD --\x3e\n  <div id="foo" class="bar"\n  >\n  <div\n    id="foo"\n    class="bar">\n</template>\n')])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("Plus, you can use "),n("router-link",{attrs:{to:"./html-indent.html"}},[n("code",[t._v("vue/html-indent")])]),t._v(" rule to enforce indent-level of the closing brackets.")],1),t._v(" "),t._m(8),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/html-closing-bracket-newline":["error",{multiline:"never"}]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <div\n    id="foo"\n    class="bar">\n\n  \x3c!-- ✗ BAD --\x3e\n  <div\n    id="foo"\n    class="bar"\n  >\n</template>\n')])])])]),t._v(" "),t._m(9),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/html-closing-bracket-newline.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/html-closing-bracket-newline.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),n("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue-html-closing-bracket-newline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-html-closing-bracket-newline","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/html-closing-bracket-newline")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("require or disallow a line break before tag's closing brackets")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("⚙️ This rule is included in "),e("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),e("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- On the same line with the last attribute. --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- On the next line. --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue/html-closing-bracket-newline"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"singleline"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"never"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"multiline"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("code",[t._v("singleline")]),t._v(" ... the configuration for single-line elements. It's a single-line element if the element does not have attributes or the last attribute is on the same line as the opening bracket.\n"),n("ul",[n("li",[n("code",[t._v('"never"')]),t._v(" (default) ... disallow line breaks before the closing bracket.")]),t._v(" "),n("li",[n("code",[t._v('"always"')]),t._v(" ... require one line break before the closing bracket.")])])]),t._v(" "),n("li",[n("code",[t._v("multiline")]),t._v(" ... the configuration for multiline elements. It's a multiline element if the last attribute is not on the same line of the opening bracket.\n"),n("ul",[n("li",[n("code",[t._v('"never"')]),t._v(" ... disallow line breaks before the closing bracket.")]),t._v(" "),n("li",[n("code",[t._v('"always"')]),t._v(" (default) ... require one line break before the closing bracket.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"multiline-never"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiline-never","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v('"multiline": "never"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);s.options.__file="html-closing-bracket-newline.md";e.default=s.exports}}]);