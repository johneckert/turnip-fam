(this["webpackJsonpturnip-fam"]=this["webpackJsonpturnip-fam"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),s=t.n(c),i=(t(13),t(1)),l=t(4),o=t(5),u=t(7),d=t(6),p=(t(14),function(e){var a=e.islandData.prices,t="",n="",c="",s="",i="",l="",o="",u="",d="",p="",f="",h="",m="",y=function(){switch(e.islandData.trend){case"Fluctuating":return"&pattern=0";case"Small Spike":return"&pattern=1";case"Large Spike":return"&pattern=2";case"Decreasing":return"&pattern=3";default:return""}}();a.forEach((function(e){switch(e.day){case"Monday AM":t=e.price;break;case"Monday PM":n=e.price;break;case"Tuesday AM":c=e.price;break;case"Tuesday PM":s=e.price;break;case"Wednesday AM":i=e.price;break;case"Wednesday PM":l=e.price;break;case"Thursday AM":o=e.price;break;case"Thursday PM":u=e.price;break;case"Friday AM":d=e.price;break;case"Friday PM":p=e.price;break;case"Saturday AM":f=e.price;break;case"Saturday PM":h=e.price;break;case"Purchase Price":m=e.price}}));var v="https://turnipprophet.io?prices=".concat(m,".").concat(t,".").concat(n,".").concat(c,".").concat(s,".").concat(i,".").concat(l,".").concat(o,".").concat(u,".").concat(d,".").concat(p,".").concat(f,".").concat(h).concat(y);return r.a.createElement("div",{className:"viz"},r.a.createElement("a",{href:v,target:"_blank",rel:"noopener noreferrer"},"Open on turnipprophet.io"))}),f=function(e){var a,t=e.islandData.name.toUpperCase(),n=e.islandData.trend;return a=e.islandData.prices?e.islandData.prices.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("span",null,e.day,":"),r.a.createElement("span",null,e.price))})):"",r.a.createElement("div",{className:"island"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"data"},r.a.createElement("div",null,r.a.createElement("span",null,"Trend:"),r.a.createElement("span",null,n)),r.a.createElement("div",null,a)),r.a.createElement(p,{islandData:e.islandData}))},h=function(e){var a,t=e.islands;return console.log(t),a=t.map((function(a,t){return r.a.createElement("div",{className:"tab",key:t,onClick:e.setCurrentIsland},a.name)})),r.a.createElement("div",{className:"nav-bar"},a)},m=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={islandsMap:[{name:"Pangea",id:"rec4pkXw2fuxCkz96"},{name:"Beachville",id:"rec5iK0WpYyf3HSZq"},{name:"Quarantown",id:"recsTTbtgsGb8H2f8"}],currentIsland:"Quarantown",prices:[],trendHistory:[],Islands:[]},e.setCurrentIsland=function(a){var t=a.target.innerHTML;e.setState(Object(i.a)(Object(i.a)({},e.state),{},{currentIsland:t}))},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.airtable.com/v0/appoISrWazljbBWsc/Prices?api_key=keyZ45rUNype5TblZ").then((function(e){return e.json()})).then((function(a){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{prices:a.records}))})),fetch("https://api.airtable.com/v0/appoISrWazljbBWsc/Trend%20History?api_key=keyZ45rUNype5TblZ").then((function(e){return e.json()})).then((function(a){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{trendHistory:a.records}))})),fetch("https://api.airtable.com/v0/appoISrWazljbBWsc/Islands?api_key=keyZ45rUNype5TblZ").then((function(e){return e.json()})).then((function(a){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{Islands:a.records}))}))}},{key:"getTrend",value:function(e){var a;if(this.state.Islands.forEach((function(t){a=t&&t.fields.Name===e.name?t:{}})),a&&a.fields){var t=a.fields["Trend History"][0],n=this.state.trendHistory.find((function(e){return e.id===t}));return n&&n.fields?n.fields.Type:"loading..."}}},{key:"getPrices",value:function(e){var a=this,t=[];this.state.Islands.forEach((function(a){a&&a.fields.Name===e.name&&(t=a.fields.Prices)}));var n=[];return t.forEach((function(e){if(a.state.prices&&a.state.prices.length>0){var t=a.state.prices.filter((function(e){return"Current"===e.fields.Status})).find((function(a){return a.id===e})),r={};t&&t.fields&&(r.price=t.fields.Price,r.day=t.fields.Day,n.push(r))}})),n}},{key:"testState",value:function(){console.log(this.state)}},{key:"getCurrentIslandData",value:function(){var e=this,a={},t=this.state.islandsMap.filter((function(a){return a.name===e.state.currentIsland}))[0];return console.log("ci",t),a.name=t.name,a.prices=this.getPrices(t),a.trend=this.getTrend(t),console.log("islandData",a),a}},{key:"render",value:function(){return this.testState(),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Turnip Fam"),r.a.createElement(h,{islands:this.state.islandsMap,setCurrentIsland:this.setCurrentIsland})),r.a.createElement(f,{islandData:this.getCurrentIslandData()}),";")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a2af2448.chunk.js.map