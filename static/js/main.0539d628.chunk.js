(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(8),o=n.n(r),c=(n(18),n(2)),i=n.n(c),s=n(12),u=n(9),m=n(10),h=n(3),d=n(4),p=n(6),f=n(5),E=(n(20),n(21),n(22),n(23),n(24),n(11)),b=n.n(E),v=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"RESTy"))},g=function(){return l.a.createElement("footer",null,l.a.createElement("h3",null,"@ 2018 Code Fellows"))},y=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).fetchData=function(){console.log("fetch",a.state.methodtemp,a.state.urltemp),fetch(a.state.urltemp,{method:a.state.methodtemp||"get",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(m.a)(i.a.mark((function e(t){var n,l,r,o,c,m,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},l=Object(u.a)(t.headers.entries());try{for(l.s();!(r=l.n()).done;)o=Object(s.a)(r.value,2),c=o[0],m=o[1],n[c]=m}catch(i){l.e(i)}finally{l.f()}return e.next=5,t.json();case 5:h=e.sent,a.setState({responseJson:{Headers:n,Response:h}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},a.handleClickGO=function(e){e.preventDefault(),a.setState({url:a.state.urltemp}),a.setState({_method:a.state.methodtemp}),a.fetchData()},a.handleInputmethod=function(e){var t=e.target.value;a.setState({methodtemp:t})},a.handleInput=function(e){var t=e.target.value;a.setState({urltemp:t})},a.state={url:"",_method:"",urltemp:"",methodtemp:"",responseJson:{}},a}return Object(d.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{id:"form-div"},l.a.createElement("form",null,l.a.createElement("label",{id:"url"},"URL ",l.a.createElement("input",{onChange:this.handleInput})),l.a.createElement("button",{onClick:this.handleClickGO},"GO"),l.a.createElement("br",null),l.a.createElement("label",{id:"label",htmlFor:"get"}," ",l.a.createElement("input",{onChange:this.handleInputmethod,className:"radio",type:"radio",id:"get",name:"btnselect",value:"get"}),"GET"),l.a.createElement("label",{id:"label",htmlFor:"post"}," ",l.a.createElement("input",{onChange:this.handleInputmethod,className:"radio",type:"radio",id:"post",name:"btnselect",value:"post"}),"POST"),l.a.createElement("label",{id:"label",htmlFor:"put"}," ",l.a.createElement("input",{onChange:this.handleInputmethod,className:"radio",type:"radio",id:"put",name:"btnselect",value:"put"}),"PUT"),l.a.createElement("label",{id:"label",htmlFor:"delete"}," ",l.a.createElement("input",{onChange:this.handleInputmethod,className:"radio",type:"radio",id:"delete",name:"btnselect",value:"delete"}),"DELETE")),l.a.createElement("section",{id:"text-area"},l.a.createElement("pre",null,this.state._method,"      ",this.state.url),l.a.createElement(b.a,{json:this.state.responseJson})))}}]),n}(l.a.Component),O=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(y,null),l.a.createElement(g,null))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e,t,n){e.exports=n(110)},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.0539d628.chunk.js.map