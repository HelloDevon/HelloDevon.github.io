(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-617c9e0a"],{"28a6":function(e,t,a){"use strict";var i=a("710b");a.n(i).a},"710b":function(e,t,a){},"8ec5":function(e,t,a){"use strict";a.r(t);var i={data:function(){return{modalPriceStrategy:!1,modalPositions:!1,modalMachinePerson:!1,modalMachineRepair:!1,modal:!1,loading:!1,id:null,operator:null,page:null,query:{keywords:"",pageSize:null,pageIndex:null},data:[],columns:[{title:"设备编号",key:"MachineCode"},{title:"设备名称",key:"MachineName"},{title:"所属运营商",key:"OperatorName"},{title:"价格策略",key:"PriceStrategy"},{title:"点位",key:"PositionName"},{title:"补货员",key:"PersonName"},{title:"维修员",key:"ReparePersonName"},{title:"操作",slot:"action",width:100}],OperatorPriceStrategy:[],OperatorPositions:[],OperatorSysUser:[],PriceStrategy:{},Positions:{},MachinePerson:{},MachineRepair:{}}},created:function(){this.getOperateMachine(),this.getOperatorPriceStrategy(),this.getOperatorPositions(),this.getOperatorSysUser()},methods:{updateColumns:function(e){this.columns=e},search:function(){this.page=null,this.getOperateMachine()},getOperateMachine:function(){var e=this;this.loading=!0,this.page?(this.query.pageSize=this.page.pageSize,this.query.pageIndex=this.page.pageIndex):(this.query.pageSize=30,this.query.pageIndex=1),this.$api("POST","/OperateConfig/GetOperateMachineList",this.query).then(function(t){e.loading=!1,0===t.ErrorCode?(e.data=t.Data,e.page={pageCount:t.TotalRecords,pageIndex:e.query.pageIndex,pageSize:e.query.pageSize}):e.$Notice.warning({title:"系统提示",desc:t.Message})})},onChange:function(e){this.page.pageIndex=1*e,this.getOperateMachine()},onPageSizeChange:function(e){this.page.pageSize=1*e,this.getOperateMachine()},toConfig:function(e){this.$router.push("/terminal/configList/handle/".concat(this.data[e].MachineId))},init:function(e){this.data[e].IsHaveCabinet?this.$router.push("/terminal/addMod/init/".concat(this.data[e].MachineId)):this.$Notice.warning({title:"系统提示",desc:"该设备未设置机柜"})},editInit:function(e,t){var a=this,i="",n=!1;switch(t){case"PriceStrategy":i="/OperateConfig/GetMachinePriceByMachineId?machineId=".concat(this.id),this.data[e].PriceStrategy&&(n=!0);break;case"Positions":i="/OperateConfig/GetMachinePositionByMachineId?machineId==".concat(this.id),this.data[e].PositionName&&(n=!0);break;case"MachinePerson":i="/OperateConfig/GetMachinePersonByMachineId?machineId=".concat(this.id),this.data[e].PersonName&&(n=!0);break;case"MachineRepair":i="/OperateConfig/GetMachineRepairByMachineId?machineId=".concat(this.id),this.data[e].ReparePersonName&&(n=!0);break;default:this.$Notice.warning({title:"系统提示",desc:"非法操作"})}n&&this.$api("GET",i).then(function(e){0===e.ErrorCode?a[t]=e.Data:a.$Notice.warning({title:"系统提示",desc:e.Message})})},handleClose:function(e){this["modal".concat(e)]=!1},handle:function(e,t){this.initData(),this.id=this.data[e].MachineId,this.editInit(e,t),this["modal".concat(t)]=!0},initData:function(){this.PriceStrategy={MachineId:"",PriceId:""},this.Positions={MachineId:"",PositionId:""},this.MachinePerson={MachineId:"",PersonId:"",SMSNotification:!1,bSplitAccount:!1,SplitRatio:"",SplitLockDays:"",SplitMoney:""},this.MachineRepair={MachineId:"",ReparePersonId:"",SMSNotification:!1,bSplitAccount:!1,SplitRatio:"",SplitLockDays:"",SplitMoney:"",OfflineTimes:"",Temperature:""}},save:function(e){var t=this,a="",i=null;switch(e){case"PriceStrategy":a="/OperateConfig/AddMachinePrice";break;case"Positions":a="/OperateConfig/AddMachinePosition";break;case"MachinePerson":a="/OperateConfig/AddMachinePerson";break;case"MachineRepair":a="/OperateConfig/MachineRepair";break;default:this.$Notice.warning({title:"系统提示",desc:"非法操作"})}(i=Object.assign({},this[e])).MachineId=this.id,this.$api("POST",a,i).then(function(a){0===a.ErrorCode?(t.$Notice.success({title:"系统提示",desc:"保存成功"}),t.handleClose(e)):t.$Notice.warning({title:"系统提示",desc:a.Message})})},getOperatorPriceStrategy:function(){var e=this;this.$api("GET","/OperateConfig/GetOperatorPriceStrategy").then(function(t){0===t.ErrorCode?e.OperatorPriceStrategy=t.Data:e.$Notice.warning({title:"系统提示",desc:t.Message})})},getOperatorPositions:function(){var e=this;this.$api("GET","/OperateConfig/GetOperatorPositions").then(function(t){0===t.ErrorCode?e.OperatorPositions=t.Data:e.$Notice.warning({title:"系统提示",desc:t.Message})})},getOperatorSysUser:function(){var e=this;this.$api("GET","/OperateConfig/GetOperatorSysUser").then(function(t){0===t.ErrorCode?e.OperatorSysUser=t.Data:e.$Notice.warning({title:"系统提示",desc:t.Message})})}}},n=(a("28a6"),a("2877")),o=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"btn-bar clear"},[e._m(0),a("div",{staticClass:"fr"},[a("Input",{staticStyle:{width:"200px"},style:{marginRight:"6px"},attrs:{placeholder:"请输入分组名称"},model:{value:e.query.keywords,callback:function(t){e.$set(e.query,"keywords",t)},expression:"query.keywords"}}),a("Button",{on:{click:e.search}},[e._v("搜索")]),a("FiltrateButton",{attrs:{columns:e.columns},on:{updateColumns:e.updateColumns}})],1)]),a("div",{staticClass:"table-section"},[a("Table",{ref:"selection",attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data},scopedSlots:e._u([{key:"action",fn:function(t){t.row;var i=t.index;return[a("Dropdown",[a("Button",{attrs:{size:"small",icon:"ios-more"}}),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[a("DropdownItem",[a("div",{staticClass:"btn",on:{click:function(t){return e.init(i)}}},[e._v("货道初始化")])]),a("DropdownItem",[a("div",{staticClass:"btn",on:{click:function(t){return e.toConfig(i)}}},[e._v("运营配置")])]),a("DropdownItem",[a("div",{staticClass:"btn",on:{click:function(t){return e.handle(i,"PriceStrategy")}}},[e._v("价格策略")])]),a("DropdownItem",[a("div",{staticClass:"btn",on:{click:function(t){return e.handle(i,"Positions")}}},[e._v("配置点位")])]),a("DropdownItem",[a("div",{staticClass:"btn",on:{click:function(t){return e.handle(i,"MachinePerson")}}},[e._v("补货策略")])]),a("DropdownItem",[a("div",{staticClass:"btn",on:{click:function(t){return e.handle(i,"MachineRepair")}}},[e._v("维修策略")])])],1)],1)]}}])})],1),e.page?a("iPage",{attrs:{pageSize:e.page.pageSize,current:e.page.pageIndex,total:e.page.pageCount},on:{onChange:e.onChange,onPageSizeChange:e.onPageSizeChange}}):e._e(),a("Modal",{attrs:{width:"500","footer-hide":!0,title:"设置价格策略"},model:{value:e.modalPriceStrategy,callback:function(t){e.modalPriceStrategy=t},expression:"modalPriceStrategy"}},[a("Form",{attrs:{model:e.PriceStrategy,"label-width":80}},[a("FormItem",{attrs:{label:"价格策略"}},[a("Select",{model:{value:e.PriceStrategy.PriceId,callback:function(t){e.$set(e.PriceStrategy,"PriceId",t)},expression:"PriceStrategy.PriceId"}},e._l(e.OperatorPriceStrategy,function(t,i){return a("Option",{key:i,attrs:{value:t.Id}},[e._v(e._s(t.Name))])}),1)],1),a("FormItem",{attrs:{label:""}},[a("Button",{style:{marginRight:"6px"},on:{click:function(t){return e.handleClose("PriceStrategy")}}},[e._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.save("PriceStrategy")}}},[e._v("保存")])],1)],1)],1),a("Modal",{attrs:{width:"500","footer-hide":!0,title:"设置点位"},model:{value:e.modalPositions,callback:function(t){e.modalPositions=t},expression:"modalPositions"}},[a("Form",{attrs:{model:e.Positions,"label-width":80}},[a("FormItem",{attrs:{label:"点位"}},[a("Select",{model:{value:e.Positions.PositionId,callback:function(t){e.$set(e.Positions,"PositionId",t)},expression:"Positions.PositionId"}},e._l(e.OperatorPositions,function(t,i){return a("Option",{key:i,attrs:{value:t.Id}},[e._v(e._s(t.Name))])}),1)],1),a("FormItem",{attrs:{label:""}},[a("Button",{style:{marginRight:"6px"},on:{click:function(t){return e.handleClose("Positions")}}},[e._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.save("Positions")}}},[e._v("保存")])],1)],1)],1),a("Modal",{attrs:{width:"500","footer-hide":!0,title:"补货策略"},model:{value:e.modalMachinePerson,callback:function(t){e.modalMachinePerson=t},expression:"modalMachinePerson"}},[a("Form",{attrs:{model:e.MachinePerson,"label-width":100}},[a("FormItem",{attrs:{label:"补货员"}},[a("Select",{model:{value:e.MachinePerson.PersonId,callback:function(t){e.$set(e.MachinePerson,"PersonId",t)},expression:"MachinePerson.PersonId"}},e._l(e.OperatorSysUser,function(t,i){return a("Option",{key:i,attrs:{value:t.Id}},[e._v(e._s(t.Name))])}),1)],1),a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"短信通知"}},[a("Checkbox",{model:{value:e.MachinePerson.SMSNotification,callback:function(t){e.$set(e.MachinePerson,"SMSNotification",t)},expression:"MachinePerson.SMSNotification"}},[e._v("缺货实时短信通知")]),a("Checkbox",{model:{value:e.MachinePerson.bSplitAccount,callback:function(t){e.$set(e.MachinePerson,"bSplitAccount",t)},expression:"MachinePerson.bSplitAccount"}},[e._v("补货员参与分账")])],1)],1)],1),e.MachinePerson.bSplitAccount?a("Row",{attrs:{gutter:20,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"分账比例%"}},[a("Input",{attrs:{placeholder:"请设置分账比例%"},model:{value:e.MachinePerson.SplitRatio,callback:function(t){e.$set(e.MachinePerson,"SplitRatio",t)},expression:"MachinePerson.SplitRatio"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"分账锁定天数"}},[a("Input",{attrs:{placeholder:"请设置分账锁定天数"},model:{value:e.MachinePerson.SplitLockDays,callback:function(t){e.$set(e.MachinePerson,"SplitLockDays",t)},expression:"MachinePerson.SplitLockDays"}})],1)],1)],1):e._e(),e.MachinePerson.bSplitAccount?a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"分账金额上限"}},[a("Input",{attrs:{placeholder:"请设置分账金额上限"},model:{value:e.MachinePerson.SplitMoney,callback:function(t){e.$set(e.MachinePerson,"SplitMoney",t)},expression:"MachinePerson.SplitMoney"}})],1)],1)],1):e._e(),a("FormItem",{attrs:{label:""}},[a("Button",{style:{marginRight:"6px"},on:{click:function(t){return e.handleClose("MachinePerson")}}},[e._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.save("MachinePerson")}}},[e._v("保存")])],1)],1)],1),a("Modal",{attrs:{width:"500","footer-hide":!0,title:"维修策略"},model:{value:e.modalMachineRepair,callback:function(t){e.modalMachineRepair=t},expression:"modalMachineRepair"}},[a("Form",{attrs:{model:e.MachineRepair,"label-width":100}},[a("FormItem",{attrs:{label:"维修员"}},[a("Select",{model:{value:e.MachineRepair.ReparePersonId,callback:function(t){e.$set(e.MachineRepair,"ReparePersonId",t)},expression:"MachineRepair.ReparePersonId"}},e._l(e.OperatorSysUser,function(t,i){return a("Option",{key:i,attrs:{value:t.Id}},[e._v(e._s(t.Name))])}),1)],1),a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"短信通知"}},[a("Checkbox",{model:{value:e.MachineRepair.SMSNotification,callback:function(t){e.$set(e.MachineRepair,"SMSNotification",t)},expression:"MachineRepair.SMSNotification"}},[e._v("缺货实时短信通知")]),a("Checkbox",{model:{value:e.MachineRepair.bSplitAccount,callback:function(t){e.$set(e.MachineRepair,"bSplitAccount",t)},expression:"MachineRepair.bSplitAccount"}},[e._v("补货员参与分账")])],1)],1)],1),e.MachineRepair.bSplitAccount?a("Row",{attrs:{gutter:20,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"分账比例%"}},[a("Input",{attrs:{placeholder:"请设置分账比例%"},model:{value:e.MachineRepair.SplitRatio,callback:function(t){e.$set(e.MachineRepair,"SplitRatio",t)},expression:"MachineRepair.SplitRatio"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"分账锁定天数"}},[a("Input",{attrs:{placeholder:"请设置分账锁定天数"},model:{value:e.MachineRepair.SplitLockDays,callback:function(t){e.$set(e.MachineRepair,"SplitLockDays",t)},expression:"MachineRepair.SplitLockDays"}})],1)],1)],1):e._e(),e.MachineRepair.bSplitAccount?a("Row",{attrs:{gutter:20}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"分账金额上限"}},[a("Input",{attrs:{placeholder:"请设置分账金额上限"},model:{value:e.MachineRepair.SplitMoney,callback:function(t){e.$set(e.MachineRepair,"SplitMoney",t)},expression:"MachineRepair.SplitMoney"}})],1)],1)],1):e._e(),a("FormItem",{attrs:{label:""}},[a("Button",{style:{marginRight:"6px"},on:{click:function(t){return e.handleClose("MachineRepair")}}},[e._v("取消")]),a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.save("MachineRepair")}}},[e._v("保存")])],1)],1)],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fl"},[t("h6",[this._v("设备列表")])])}],!1,null,"bd155c18",null);t.default=o.exports}}]);