(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),l=(a(12),a(6)),i=a(2),u=a(15),s=Object(n.createContext)(),d=function(e){var t=Object(n.useState)([{title:" Read Books ",data:" Reading the last chapter",id:1},{title:" Code",data:" Write code in React ",id:2}]),a=Object(i.a)(t,2),r=a[0],c=a[1];return o.a.createElement(s.Provider,{value:{ToDo:r,addToDo:function(e,t){c([].concat(Object(l.a)(r),[{title:e,data:t,id:Object(u.a)()}]))},removeToDo:function(e){c(r.filter((function(t){return t.id!==e})))}}},e.children)},m=function(){var e=Object(n.useContext)(s).ToDo;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"My ToDo List"),o.a.createElement("p",null,"Currently you have ",e.length," Tasks to complete..."))},v=function(e){var t=e.ToDo,a=Object(n.useContext)(s).removeToDo;return o.a.createElement("li",{onClick:function(){return a(t.id)}},o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"data"},t.data))},p=function(){var e=Object(n.useContext)(s).ToDo;return e.length?o.a.createElement("div",{className:"ToDo-list"},o.a.createElement("ul",null,e.map((function(e){return o.a.createElement(v,{ToDo:e,key:e.id})})))):o.a.createElement("div",{className:"empty"},"No ToDo to complete. ")},E=function(){var e=Object(n.useContext)(s).addToDo,t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),d=u[0],m=u[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(r,d),c(""),m("")}},o.a.createElement("input",{type:"text",placeholder:"ToDo title",value:r,onChange:function(e){return c(e.target.value)},required:!0}),o.a.createElement("input",{type:"text",placeholder:"data",value:d,onChange:function(e){return m(e.target.value)},required:!0}),o.a.createElement("input",{type:"submit",value:"add ToDo"}))};var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null,o.a.createElement(m,null),o.a.createElement(p,null),o.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0ad65a47.chunk.js.map