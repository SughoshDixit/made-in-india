(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{221:function(n,e,t){var content=t(224);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(28).default)("896e03ac",content,!0,{sourceMap:!1})},222:function(n,e,t){var content=t(227);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(28).default)("6759f5ab",content,!0,{sourceMap:!1})},223:function(n,e,t){"use strict";var o=t(221);t.n(o).a},224:function(n,e,t){(e=t(27)(!1)).push([n.i,".product[data-v-69972a54]{background:#fff;padding:1rem;margin:1rem 0;border-radius:15px}",""]),n.exports=e},225:function(n,e){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"products"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"products"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:52}};t.loc.source={body:"query products {\n  products {\n    id\n    name\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var o={};function r(n,e){for(var i=0;i<n.definitions.length;i++){var element=n.definitions[i];if(element.name&&element.name.value==e)return element}}t.definitions.forEach((function(n){if(n.name){var e=new Set;!function n(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var o=e.type;"NamedType"===o.kind&&t.add(o.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){n(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){n(e,t)})),e.definitions&&e.definitions.forEach((function(e){n(e,t)}))}(n,e),o[n.name.value]=e}})),n.exports=t,n.exports.products=function(n,e){var t={kind:n.kind,definitions:[r(n,e)]};n.hasOwnProperty("loc")&&(t.loc=n.loc);var c=o[e]||new Set,d=new Set,f=new Set;for(c.forEach((function(n){f.add(n)}));f.size>0;){var l=f;f=new Set,l.forEach((function(n){d.has(n)||(d.add(n),(o[n]||new Set).forEach((function(n){f.add(n)})))}))}return d.forEach((function(e){var o=r(n,e);o&&t.definitions.push(o)})),t}(t,"products")},226:function(n,e,t){"use strict";var o=t(222);t.n(o).a},227:function(n,e,t){(e=t(27)(!1)).push([n.i,"",""]),n.exports=e},228:function(n,e,t){"use strict";t.r(e);var o=t(3),r=o.a.extend({name:"Products",props:{product:{type:Object,default:function(){}}}}),c=(t(223),t(14)),d=Object(c.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"product"},[this._v("\n  "+this._s(this.product.id)+"\n  "+this._s(this.product.name)+"\n")])}),[],!1,null,"69972a54",null).exports,f=t(225),l=t.n(f),v=o.a.extend({components:{Products:d},data:function(){return{products:void 0}},apollo:{products:l.a}}),m=(t(226),Object(c.a)(v,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"container"},[this.products?e("div",this._l(this.products,(function(n){return e("products",{key:n.id,attrs:{product:n}})})),1):this._e(),this._v("\n  hi\n")])}),[],!1,null,null,null));e.default=m.exports}}]);