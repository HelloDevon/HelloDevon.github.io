(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a760bb70"],{"87f1":function(t,e,a){"use strict";a.r(e);var i={data:function(){return{loading:!1,page:null,query:{GoodsId:"",pageSize:null,pageIndex:null},data:[],columns:[{title:"商品条码",key:"GoodsCode",width:200},{title:"商品名称",key:"GoodsName",width:200},{title:"规格型号",key:"Specs",width:180},{title:"计量单位",key:"UnitName",width:100},{title:"仓库",key:"WhName"},{title:"现存数量",key:"Qty",width:100}]}},created:function(){this.query.GoodsId=this.$route.params.id,this.getStockReportList()},methods:{getStockReportList:function(){var t=this;this.loading=!0,this.page?(this.query.pageSize=this.page.pageSize,this.query.pageIndex=this.page.pageIndex):(this.query.pageSize=10,this.query.pageIndex=1),this.$api("POST","/StockReport/GetStockReportList",this.query).then(function(e){t.loading=!1,0===e.ErrorCode?(t.data=e.Data.List,t.page={pageCount:e.Data.Total,pageIndex:t.query.pageIndex,pageSize:t.query.pageSize}):t.$Notice.warning({title:"系统提示",desc:e.Message})})},onChange:function(t){this.page.pageIndex=1*t,this.getStockReportList()},onPageSizeChange:function(t){this.page.pageSize=1*t,this.getStockReportList()},updateColumns:function(t){this.columns=t}}},n=(a("9170"),a("2877")),o=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"btn-bar clear"},[a("div",{staticClass:"fl"},[a("Button",{attrs:{icon:"md-refresh"},on:{click:t.getStockReportList}},[t._v("刷新")]),a("Button",{style:{marginLeft:"12px"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回库存列表")])],1),a("FiltrateButton",{staticClass:"fr",attrs:{columns:t.columns},on:{updateColumns:t.updateColumns}})],1),a("div",{staticClass:"table-section"},[a("Table",{attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data}})],1),t.page?a("iPage",{attrs:{pageSize:t.page.pageSize,current:t.page.pageIndex,total:t.page.pageCount},on:{onChange:t.onChange,onPageSizeChange:t.onPageSizeChange}}):t._e()],1)},[],!1,null,"7e827b7f",null);e.default=o.exports},"8a2c":function(t,e,a){},9170:function(t,e,a){"use strict";var i=a("8a2c");a.n(i).a}}]);