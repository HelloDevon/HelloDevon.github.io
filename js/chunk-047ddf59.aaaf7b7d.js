(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-047ddf59"],{"1b81":function(e,t,s){"use strict";s.r(t);var a=s("c1df"),n=s.n(a),i=s("1157"),c=s.n(i),r={data:function(){return{loading:!1,page:null,query:{SortType:0,Search:"",StartDate:"",EndDate:"",pageSize:null,pageIndex:null,ColumnNamesList:[]},time:[],data:[],columns:[{title:"序号",key:"Rank",width:90},{title:"点位名称",key:"PositionName"},{title:"销量数量",key:"SaleCount"},{title:"销售金额",key:"Amount"}]}},created:function(){this.timeInit(),this.getGoodsSalesStatistics()},methods:{exportExcel:function(){var e=this;this.data.length?this.$api("POST","/OrdersReport/GetPositionSalesStatisticsByExcel",this.query).then(function(t){if(0===t.ErrorCode){var s=c()('<form id="xlsx" method="GET"></form>');s.attr("action",t.Data),s.appendTo(c()("body")),s.submit(),c()("#xlsx").remove()}else e.$Notice.warning({title:"系统提示",desc:t.Message})}):this.$Notice.warning({title:"系统提示",desc:"暂无可导出的数据"})},rchange:function(e){this.query.SortType=1*e,this.page=null,this.getGoodsSalesStatistics()},searchKey:function(){this.query.Search.trim().length&&(this.page=null,this.getGoodsSalesStatistics())},search:function(){""!=this.time[0]&&""!=this.time[1]?(this.query.StartDate=this.time[0],this.query.EndDate=this.time[1],this.page=null,this.getGoodsSalesStatistics()):this.$Notice.warning({title:"系统提示",desc:"请选择搜索的时间段"})},getGoodsSalesStatistics:function(){var e=this;this.loading=!0,this.page?(this.query.pageSize=this.page.pageSize,this.query.pageIndex=this.page.pageIndex):(this.query.pageSize=10,this.query.pageIndex=1),this.$api("POST","/OrdersReport/GetPositionSalesStatistics",this.query).then(function(t){e.loading=!1,0===t.ErrorCode?(e.data=t.Data.List,e.page={pageCount:t.Data.Total,pageIndex:e.query.pageIndex,pageSize:e.query.pageSize}):e.$Notice.warning({title:"系统提示",desc:t.Message})})},onChange:function(e){this.page.pageIndex=1*e,this.getGoodsSalesStatistics()},onPageSizeChange:function(e){this.page.pageSize=1*e,this.getGoodsSalesStatistics()},timeInit:function(){var e=n()().valueOf(),t=[n()(e-2592e6).format("YYYY-MM-DD"),n()(e).format("YYYY-MM-DD")];this.time=t,this.query.StartDate=t[0],this.query.EndDate=t[1]},timeChange:function(e){this.time=e},updateColumns:function(e){this.columns=e}}},o=(s("2ae1"),s("2877")),d=Object(o.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"btn-bar clear"},[s("div",{staticClass:"fl"},[s("span",{staticClass:"label",style:{marginRight:"6px"}},[e._v("按时间段")]),s("DatePicker",{staticStyle:{width:"220px"},style:{marginRight:"16px"},attrs:{value:e.time,format:"yyyy-MM-dd",type:"daterange",placement:"bottom-end",placeholder:"请选择搜索的时间段"},on:{"on-change":e.timeChange}}),s("RadioGroup",{on:{"on-change":e.rchange},model:{value:e.query.SortType,callback:function(t){e.$set(e.query,"SortType",t)},expression:"query.SortType"}},[s("Radio",{attrs:{label:0}},[e._v("按数量排序")]),s("Radio",{attrs:{label:1}},[e._v("按金额排序")])],1),s("Button",{style:{marginRight:"6px"},attrs:{type:"info"},on:{click:e.search}},[e._v("查询")]),s("Button",{style:{marginRight:"6px"},attrs:{type:"info"},on:{click:e.exportExcel}},[e._v("导出")]),s("Button",{attrs:{icon:"md-refresh"},on:{click:e.getGoodsSalesStatistics}},[e._v("刷新")])],1),s("div",{staticClass:"fr"},[s("Input",{staticStyle:{width:"200px"},style:{marginRight:"6px"},attrs:{placeholder:"请输入设备编号、设备名称搜索"},model:{value:e.query.Search,callback:function(t){e.$set(e.query,"Search",t)},expression:"query.Search"}}),s("Button",{on:{click:e.searchKey}},[e._v("搜索")]),s("FiltrateButton",{attrs:{columns:e.columns},on:{updateColumns:e.updateColumns}})],1)]),s("div",{staticClass:"table-section"},[s("Table",{attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data}})],1),e.page?s("iPage",{attrs:{pageSize:e.page.pageSize,current:e.page.pageIndex,total:e.page.pageCount},on:{onChange:e.onChange,onPageSizeChange:e.onPageSizeChange}}):e._e()],1)},[],!1,null,"4663a53d",null);t.default=d.exports},"2ae1":function(e,t,s){"use strict";var a=s("4d21");s.n(a).a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="4678"},"4d21":function(e,t,s){}}]);