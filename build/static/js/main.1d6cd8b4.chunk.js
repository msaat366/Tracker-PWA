(this["webpackJsonptracker-app"]=this["webpackJsonptracker-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),i=(n(14),n(9)),s=n(5),d=n(2),l=n(0),j=function(e){var t=e.text,n=e.onClick;return Object(l.jsx)("button",{onClick:n,className:"btn",children:t})},u=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(j,{onClick:n,text:c?"Close":"Add"})]})};u.defaultProps={title:"Task Tracker"};var b=u,h=n(8),O=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(l.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text,Object(l.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(O,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],o=r[1],i=Object(c.useState)(""),s=Object(d.a)(i,2),j=s[0],u=s[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),O=h[0],m=h[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:j,reminder:O}),o(""),u(""),m(!1)):alert("Please add a Task")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Day and time"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Day and Task",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},x=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Teacher Appoitment",day:"feb 4th at 2:30pm",reminder:!0},{id:2,text:" Doctor Appoitment",day:"feb 6th at 2:30pm",reminder:!0},{id:3,text:" food Appoitment",day:"feb 5th at 2:30pm",reminder:!1}]),o=Object(d.a)(a,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(l.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(s.a)({id:t},e);u([].concat(Object(i.a)(j),[n]))}}),j.length>0?Object(l.jsx)(m,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks to Show"]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.1d6cd8b4.chunk.js.map