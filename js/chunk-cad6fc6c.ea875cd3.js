(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cad6fc6c"],{"02f4":function(t,e,a){var n=a("4588"),r=a("be13");t.exports=function(t){return function(e,a){var i,o,s=String(r(e)),l=n(a),c=s.length;return l<0||l>=c?t?"":void 0:(i=s.charCodeAt(l))<55296||i>56319||l+1===c||(o=s.charCodeAt(l+1))<56320||o>57343?t?s.charAt(l):i:t?s.slice(l,l+2):o-56320+(i-55296<<10)+65536}}},"03900":function(t,e,a){"use strict";var n=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var n=a("2aba"),r=a("32e9"),i=a("79e5"),o=a("be13"),s=a("2b4c"),l=a("520a"),c=s("species"),u=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var f=s(t),m=!i(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),p=m?!i(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[c]=function(){return a}),a[f](""),!e}):void 0;if(!m||!p||"replace"===t&&!u||"split"===t&&!d){var v=/./[f],h=a(o,f,""[t],function(t,e,a,n,r){return e.exec===l?m&&!r?{done:!0,value:v.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),g=h[0],b=h[1];n(String.prototype,t,g),r(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"263f":function(t,e,a){"use strict";a.r(e);a("386d"),a("7f7f"),a("28a5");var n=a("1157"),r=a.n(n),i={watch:{Location:function(t){this.form.TradingArea="",t&&this.getTrading(t[t.length-1])}},data:function(){return{modalMap:!1,modal:!1,basic:{MapDistrict:[],PositionOwnerList:[],PositionSceneList:[],SalesmanList:[],TradingArea:[]},Scene:[],Location:[],ruleValidateA:{OwnerName:[{required:!0,message:"请输入业主名称",trigger:"blur"}]},ruleValidate:{PositionName:[{required:!0,message:"请输入点位名称",trigger:"blur"}],PositionOwnerId:[{required:!0,message:"请选择点位业主",trigger:"blur"}]},formA:{OwnerName:"",Address:"",Contacts:"",ContactNumber:""},form:{PositionName:"",PositionOwnerId:"",Location:"",Address:"",TradingArea:null,Scene:null,Person:"",Percentage:"",Rent:"",StartDate:"",EndDate:"",Longitude:"",Latitude:""}}},created:function(){this.getBasic();var t=this.$route.params.id;t&&(this.form.Id=t,this.editInit())},methods:{MapHandle:function(){var t=this;this.modalMap=!0,setTimeout(function(){t.$nextTick(function(){t.mapInit()})},500)},mapInit:function(){var t=this;function e(t){return document.getElementById(t)}var a=new BMap.Map("allmap");if(a.centerAndZoom(new BMap.Point(116.331398,39.897445),18),this.form.Address&&this.Location.length){var n=r()("#location .ivu-cascader-label").text().split("/")[0];(new BMap.Geocoder).getPoint(this.form.Address,function(t){t&&(a.centerAndZoom(t,18),a.addOverlay(new BMap.Marker(t)))},n)}else{(new BMap.LocalCity).get(function(t){var e=t.name;a.setCenter(e)})}var i=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});a.addControl(i),a.addEventListener("click",function(e){t.form.Longitude=e.point.lng,t.form.Latitude=e.point.lat,t.modalMap=!1});var o,s=new BMap.Autocomplete({input:"suggestId",location:a});s.addEventListener("onhighlight",function(t){var a="",n=t.fromitem.value,r="";t.fromitem.index>-1&&(r=n.province+n.city+n.district+n.street+n.business),a="FromItem<br />index = "+t.fromitem.index+"<br />value = "+r,r="",t.toitem.index>-1&&(r=(n=t.toitem.value).province+n.city+n.district+n.street+n.business),a+="<br />ToItem<br />index = "+t.toitem.index+"<br />value = "+r,e("searchResultPanel").innerHTML=a}),s.addEventListener("onconfirm",function(t){var n=t.item.value;o=n.province+n.city+n.district+n.street+n.business,e("searchResultPanel").innerHTML="onconfirm<br />index = "+t.item.index+"<br />myValue = "+o,function(){a.clearOverlays();var t=new BMap.LocalSearch(a,{onSearchComplete:function(){var e=t.getResults().getPoi(0).point;a.centerAndZoom(e,18),a.addOverlay(new BMap.Marker(e))}});t.search(o)}()}),setTimeout(function(){var e=r()("#location .ivu-cascader-label").text().split("/");r()("#suggestId").val(e[0].trim()+e[1].trim()+t.form.Address.trim())},600)},editInit:function(){var t=this;this.$api("GET","/Positions/GetPositionsInfo?id=".concat(this.form.Id)).then(function(e){0===e.ErrorCode?(t.form=e.Data,t.Location=[e.Data.LocationList[1].Value,e.Data.LocationList[2].Value],t.form.Location=t.Location[t.Location.length-1]):t.$Notice.warning({title:"系统提示",desc:e.Message})})},getTrading:function(t){var e=this;this.$api("GET","/Positions/GetTradingAreaList?locationId=".concat(t)).then(function(t){if(0===t.ErrorCode){var a=t.Data;e.basic.TradingArea=e.dataHandle(a,{label:"AreaName",value:"Id"})}})},getBasic:function(){var t=this;this.$api("GET","/Positions/GetPositionsBasicData").then(function(e){if(0===e.ErrorCode){var a=e.Data;t.basic.MapDistrict=t.dataHandle(a.MapDistrict,{label:"AreaName",value:"Id"},"District"),t.basic.PositionOwnerList=t.dataHandle(a.PositionOwnerList,{label:"OwnerName",value:"Id"}),t.basic.PositionSceneList=t.dataHandle(a.PositionSceneList,{label:"SceneName",value:"Id"},"Children"),t.basic.SalesmanList=t.dataHandle(a.SalesmanList,{label:"UserName",value:"Id"})}})},back:function(){this.$router.back()},dataHandle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{label:"label",value:"value"},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!t.length)return[];var n=[];for(var r in t){var i=t[r],o={label:i[e.label],value:i[e.value]};a&&i[a]&&0!=i[a].length&&(o.children=this.dataHandle(i[a],e,a)),n.push(o)}return n},save:function(){var t=this;this.$refs.ruleValidate.validate(function(e){if(e){t.Scene.length&&(t.form.Scene=t.Scene[t.Scene.length-1]),t.Location.length&&(t.form.Location=t.Location[t.Location.length-1]);var a="/Positions/AddPositionsInfo";t.form.Id&&(a="/Positions/UpdatePositionsInfo"),t.$api("POST",a,t.form).then(function(e){0==e.ErrorCode?(t.$Notice.success({title:"系统提示",desc:"保存成功"}),t.form.Id||t.$router.back()):t.$Notice.warning({title:"系统提示",desc:e.Message})})}else t.$Notice.warning({title:"系统提示",desc:"请填写相关的信息"})})},add:function(){this.formA={OwnerName:"",Address:"",Contacts:"",ContactNumber:""},this.modal=!0},saveA:function(){var t=this;this.$refs.ruleValidateA.validate(function(e){if(e){t.$api("POST","/PositionOwner/AddPositionOwnerInfo",t.formA).then(function(e){0==e.ErrorCode?(t.$Notice.success({title:"系统提示",desc:"保存成功"}),t.getBasic(),t.modal=!1):t.$Notice.warning({title:"系统提示",desc:e.Message})})}else t.$Notice.warning({title:"系统提示",desc:"请填写相关的信息"})})}}},o=(a("6742"),a("8e25"),a("2877")),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",{staticClass:"page-add clear"},[a("i",{staticClass:"iconfont icontianjia"}),t._v(" 点位编辑 "),a("Button",{staticClass:"fr",attrs:{icon:"ios-undo"},on:{click:t.back}},[t._v("返回")])],1),a("div",{staticClass:"info"},[a("Card",{style:{marginBottom:"30px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("点位信息")]),a("div",{staticClass:"good-form"},[a("Form",{ref:"ruleValidate",attrs:{model:t.form,"label-position":"left",rules:t.ruleValidate,"label-width":130}},[a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"点位名称",prop:"PositionName"}},[a("Input",{attrs:{placeholder:"请输入点位名称"},model:{value:t.form.PositionName,callback:function(e){t.$set(t.form,"PositionName",e)},expression:"form.PositionName"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"点位业主",prop:"PositionOwnerId"}},[a("Select",{attrs:{placeholder:"请选择点位业主"},model:{value:t.form.PositionOwnerId,callback:function(e){t.$set(t.form,"PositionOwnerId",e)},expression:"form.PositionOwnerId"}},[t._l(t.basic.PositionOwnerList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),a("Button",{style:{width:"90%",margin:"0 auto",display:"block"},attrs:{type:"text",icon:"md-add"},on:{click:t.add}},[t._v("添加业主档案")])],2)],1)],1)],1),a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"所在地",placeholder:"请选择所在地"}},[a("Cascader",{attrs:{id:"location",data:t.basic.MapDistrict},model:{value:t.Location,callback:function(e){t.Location=e},expression:"Location"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"点位地址"}},[a("Input",{attrs:{placeholder:"请输入点位地址"},model:{value:t.form.Address,callback:function(e){t.$set(t.form,"Address",e)},expression:"form.Address"}})],1)],1)],1),a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"所在商圈"}},[a("Select",{style:{width:"100%"},attrs:{disabled:!t.Location.length,placeholder:"请选择所在商圈"},model:{value:t.form.TradingArea,callback:function(e){t.$set(t.form,"TradingArea",e)},expression:"form.TradingArea"}},t._l(t.basic.TradingArea,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"点位场景"}},[a("Cascader",{attrs:{data:t.basic.PositionSceneList},model:{value:t.Scene,callback:function(e){t.Scene=e},expression:"Scene"}})],1)],1)],1),a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"点位租金"}},[a("InputNumber",{style:{width:"50%"},attrs:{max:5e4,min:0,step:100,precision:0,placeholder:"请输入点位租金",parser:function(t){return t.replace(/$s?|(,*)/g,"")}},model:{value:t.form.Rent,callback:function(e){t.$set(t.form,"Rent",e)},expression:"form.Rent"}}),t._v("   (单位元)\n                ")],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"业务员提成比例(%)"}},[a("InputNumber",{style:{width:"50%"},attrs:{max:100,min:0,step:5,precision:0,placeholder:"请输入业务员提成比例",parser:function(t){return t.replace(/$s?|(,*)/g,"")}},model:{value:t.form.Percentage,callback:function(e){t.$set(t.form,"Percentage",e)},expression:"form.Percentage"}}),t._v("   (单位%)\n                ")],1)],1)],1),a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"起租日期"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{format:"yyyy年MM月dd日",type:"date",placeholder:"请选择起租日期"},model:{value:t.form.StartDate,callback:function(e){t.$set(t.form,"StartDate",e)},expression:"form.StartDate"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"租约到期时间"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{format:"yyyy年MM月dd日",type:"date",placeholder:"请选择租约到期时间"},model:{value:t.form.EndDate,callback:function(e){t.$set(t.form,"EndDate",e)},expression:"form.EndDate"}})],1)],1)],1),a("Row",{attrs:{gutter:100}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"拓点业务员"}},[a("Select",{attrs:{placeholder:"请选择拓点业务员"},model:{value:t.form.Person,callback:function(e){t.$set(t.form,"Person",e)},expression:"form.Person"}},t._l(t.basic.SalesmanList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"经纬度"}},[a("div",{staticClass:"clear"},[a("Input",{staticClass:"fl",staticStyle:{width:"150px"},attrs:{disabled:"",placeholder:"经度"},model:{value:t.form.Longitude,callback:function(e){t.$set(t.form,"Longitude",e)},expression:"form.Longitude"}}),a("span",{staticClass:"fl"},[t._v("-")]),a("Input",{staticClass:"fl",staticStyle:{width:"150px"},attrs:{disabled:"",placeholder:"纬度"},model:{value:t.form.Latitude,callback:function(e){t.$set(t.form,"Latitude",e)},expression:"form.Latitude"}}),a("Button",{staticClass:"fr",attrs:{type:"info"},on:{click:t.MapHandle}},[t._v("地图")])],1)])],1)],1)],1)],1)])],1),a("div",{staticClass:"handle clear"},[a("Button",{style:{marginRight:"14px"},on:{click:t.back}},[t._v("返回")]),a("Button",{attrs:{type:"info"},on:{click:t.save}},[t._v("保存")])],1),a("Modal",{attrs:{fullscreen:"",title:"请在地图上点击获取经纬度"},model:{value:t.modalMap,callback:function(e){t.modalMap=e},expression:"modalMap"}},[a("div",{style:{width:"100%"},attrs:{id:"r-result"}},[t._v("请输入: "),a("input",{staticStyle:{width:"350px","margin-bottom":"20px"},attrs:{type:"text",id:"suggestId",size:"20",value:""}})]),a("div",{staticStyle:{border:"1px solid #C0C0C0",width:"350px",height:"auto",display:"none"},attrs:{id:"searchResultPanel"}}),a("div",{attrs:{id:"allmap"}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{on:{click:function(e){t.modalMap=!1}}},[t._v("关闭")])],1)]),a("Modal",{attrs:{width:"500","footer-hide":!0,title:"业主档案"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("Form",{ref:"ruleValidateA",attrs:{model:t.formA,rules:t.ruleValidateA,"label-width":100}},[a("FormItem",{attrs:{label:"业主名称",prop:"OwnerName"}},[a("Input",{attrs:{placeholder:"请输入业主名称"},model:{value:t.formA.OwnerName,callback:function(e){t.$set(t.formA,"OwnerName",e)},expression:"formA.OwnerName"}})],1),a("FormItem",{attrs:{label:"地址"}},[a("Input",{attrs:{placeholder:"请输入地址"},model:{value:t.formA.Address,callback:function(e){t.$set(t.formA,"Address",e)},expression:"formA.Address"}})],1),a("FormItem",{attrs:{label:"联系人"}},[a("Input",{attrs:{placeholder:"请输入联系人"},model:{value:t.formA.Contacts,callback:function(e){t.$set(t.formA,"Contacts",e)},expression:"formA.Contacts"}})],1),a("FormItem",{attrs:{label:"联系电话"}},[a("Input",{attrs:{placeholder:"请输入电话"},model:{value:t.formA.ContactNumber,callback:function(e){t.$set(t.formA,"ContactNumber",e)},expression:"formA.ContactNumber"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.saveA}},[t._v("保存")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.modal=!1}}},[t._v("取消")])],1)],1)],1)],1)},[],!1,null,"39ecba16",null);e.default=s.exports},"28a5":function(t,e,a){"use strict";var n=a("aae3"),r=a("cb7c"),i=a("ebd6"),o=a("03900"),s=a("9def"),l=a("5f1b"),c=a("520a"),u=a("79e5"),d=Math.min,f=[].push,m=!u(function(){RegExp(4294967295,"y")});a("214f")("split",2,function(t,e,a,u){var p;return p="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!n(t))return a.call(r,t,e);for(var i,o,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,m=void 0===e?4294967295:e>>>0,p=new RegExp(t.source,u+"g");(i=c.call(p,r))&&!((o=p.lastIndex)>d&&(l.push(r.slice(d,i.index)),i.length>1&&i.index<r.length&&f.apply(l,i.slice(1)),s=i[0].length,d=o,l.length>=m));)p.lastIndex===i.index&&p.lastIndex++;return d===r.length?!s&&p.test("")||l.push(""):l.push(r.slice(d)),l.length>m?l.slice(0,m):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,n){var r=t(this),i=null==a?void 0:a[e];return void 0!==i?i.call(a,r,n):p.call(String(r),a,n)},function(t,e){var n=u(p,t,this,e,p!==a);if(n.done)return n.value;var c=r(t),f=String(this),v=i(c,RegExp),h=c.unicode,g=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(m?"y":"g"),b=new v(m?c:"^(?:"+c.source+")",g),x=void 0===e?4294967295:e>>>0;if(0===x)return[];if(0===f.length)return null===l(b,f)?[f]:[];for(var y=0,I=0,w=[];I<f.length;){b.lastIndex=m?I:0;var A,C=l(b,m?f:f.slice(I));if(null===C||(A=d(s(b.lastIndex+(m?0:I)),f.length))===y)I=o(f,I,h);else{if(w.push(f.slice(y,I)),w.length===x)return w;for(var L=1;L<=C.length-1;L++)if(w.push(C[L]),w.length===x)return w;I=y=A}}return w.push(f.slice(y)),w}]})},"342c":function(t,e,a){},"386d":function(t,e,a){"use strict";var n=a("cb7c"),r=a("83a1"),i=a("5f1b");a("214f")("search",1,function(t,e,a,o){return[function(a){var n=t(this),r=null==a?void 0:a[e];return void 0!==r?r.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=o(a,t,this);if(e.done)return e.value;var s=n(t),l=String(this),c=s.lastIndex;r(c,0)||(s.lastIndex=0);var u=i(s,l);return r(s.lastIndex,c)||(s.lastIndex=c),null===u?-1:u.index}]})},"520a":function(t,e,a){"use strict";var n,r,i=a("0bfb"),o=RegExp.prototype.exec,s=String.prototype.replace,l=o,c=(n=/a/,r=/b*/g,o.call(n,"a"),o.call(r,"a"),0!==n.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function(t){var e,a,n,r,l=this;return u&&(a=new RegExp("^"+l.source+"$(?!\\s)",i.call(l))),c&&(e=l.lastIndex),n=o.call(l,t),c&&n&&(l.lastIndex=l.global?n.index+n[0].length:e),u&&n&&n.length>1&&s.call(n[0],a,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(n[r]=void 0)}),n}),t.exports=l},"5f1b":function(t,e,a){"use strict";var n=a("23c6"),r=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"==typeof a){var i=a.call(t,e);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},6742:function(t,e,a){"use strict";var n=a("69b9");a.n(n).a},"69b9":function(t,e,a){},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},"8e25":function(t,e,a){"use strict";var n=a("342c");a.n(n).a},aae3:function(t,e,a){var n=a("d3f4"),r=a("2d95"),i=a("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},b0c5:function(t,e,a){"use strict";var n=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})}}]);