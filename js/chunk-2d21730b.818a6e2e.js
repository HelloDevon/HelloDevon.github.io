(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21730b"],{c657:function(t,e,a){"use strict";a.r(e);var i={data:function(){return{deleModal:!1,loading:!1,id:null,page:null,data:[],columns:[{title:"提货单号",key:"StockDeliveryNo"},{title:"进货日期",key:"PickUpDate"},{title:"补货员",key:"PersonName"},{title:"仓库",key:"WhName"},{title:"添加人",key:"AddUserName"},{title:"添加时间",key:"AddDate"},{title:"提货单号",slot:"action",width:200}],query:{Search:"",StartDate:"",EndDate:"",pageSize:null,pageIndex:null}}},created:function(){this.getStockDelivery()},methods:{updateColumns:function(t){this.columns=t},getStockDelivery:function(){var t=this;this.loading=!0,this.page?(this.query.pageSize=this.page.pageSize,this.query.pageIndex=this.page.pageIndex):(this.query.pageSize=10,this.query.pageIndex=1),this.$api("POST","/StockDelivery/GetStockDeliveryList",this.query).then(function(e){t.loading=!1,0===e.ErrorCode?(t.data=e.Data.StockDeliveryList,t.page={pageCount:e.Data.Total,pageIndex:t.query.pageIndex,pageSize:t.query.pageSize}):t.$Notice.warning({title:"系统提示",desc:e.Message})})},onChange:function(t){this.page.pageIndex=1*t,this.getStockDelivery()},onPageSizeChange:function(t){this.page.pageSize=1*t,this.getStockDelivery()},remove:function(t){this.id=this.data[t].Id,this.deleModal=!0},edit:function(t){this.$router.push("/warehouse/pickList/handle/".concat(this.data[t].Id))},out:function(t){this.$router.push("/warehouse/out/handle/".concat(this.data[t].Id,"/out"))},add:function(){this.$router.push("/warehouse/pickList/handle")},deleteM:function(){var t=this;this.$api("GET","/StockDelivery/DeleteStockDeliveryInfo?id=".concat(this.id)).then(function(e){0===e.ErrorCode?(t.deleModal=!1,t.getStockDelivery()):t.$Notice.warning({title:"系统提示",desc:e.Message})})}}},n=a("2877"),o=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"btn-bar clear"},[a("div",{staticClass:"fl"},[a("Button",{style:{marginRight:"6px"},attrs:{type:"info",icon:"md-add"},on:{click:t.add}},[t._v("添加提货单")]),a("Button",{style:{marginRight:"26px"},attrs:{icon:"md-refresh"}},[t._v("刷新")]),a("Form",{style:{display:"inline-block"},attrs:{"label-position":"left","label-width":74}},[a("FormItem",{attrs:{label:"提货日期"}},[a("DatePicker",{staticStyle:{width:"220px"},attrs:{type:"daterange","start-date":new Date(1991,4,14),placement:"bottom-end",placeholder:"选择时间段"}})],1)],1)],1),a("div",{staticClass:"fr"},[a("Input",{staticStyle:{width:"200px"},style:{marginRight:"6px"},attrs:{placeholder:"请输入提货单号、补货员名称、仓库名称"}}),a("Button",[t._v("搜索")]),a("FiltrateButton",{attrs:{columns:t.columns},on:{updateColumns:t.updateColumns}})],1)]),a("div",{staticClass:"table-section"},[a("Table",{attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.row,n=e.index;return[i.IsSend?a("Button",{staticStyle:{"margin-right":"12px"},attrs:{type:"info",size:"small"},on:{click:function(e){return t.edit(n)}}},[t._v("编辑")]):a("Button",{staticStyle:{"margin-right":"12px"},attrs:{disabled:"",type:"info",size:"small"}},[t._v("编辑")]),a("Button",{staticStyle:{"margin-right":"12px"},attrs:{type:"error",size:"small"},on:{click:function(e){return t.remove(n)}}},[t._v("删除")]),i.IsSend?a("Button",{attrs:{type:"info",size:"small"},on:{click:function(e){return t.out(n)}}},[t._v("发货")]):a("Button",{attrs:{disabled:"",type:"info",size:"small"}},[t._v("发货")])]}}])})],1),t.page?a("iPage",{attrs:{pageSize:t.page.pageSize,current:t.page.pageIndex,total:t.page.pageCount},on:{onChange:t.onChange,onPageSizeChange:t.onPageSizeChange}}):t._e(),a("Modal",{attrs:{width:"360"},model:{value:t.deleModal,callback:function(e){t.deleModal=e},expression:"deleModal"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-information-circle"}}),a("span",[t._v("删除确认")])],1),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("确定要删除此单号吗？删除后将无法恢复")])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:""},on:{click:t.deleteM}},[t._v("删除")])],1)])],1)},[],!1,null,null,null);e.default=o.exports}}]);