(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c8fc2694"],{"0950":function(e,a,t){"use strict";t.r(a);var i={data:function(){return{maintain_modal:!1,detail_modal:!1,modal:!1,loading:!1,page:null,detail_data:null,query:{RepairPersonId:"",pageSize:null,pageIndex:null},RepairMachine:{Id:"",RepairPersonId:"",HandleResult:"",IsRecovery:!1},data:[],columns:[{title:"设备编号",key:"MachineCode",width:180},{title:"设备名称",key:"MachineName",width:200},{title:"点位",key:"PositionName",width:240},{title:"维修负责人",key:"FollowupPerson",width:100},{title:"故障上报时间",key:"FaultTime",width:158},{title:"故障类型",key:"FaultTypeName",width:100},{title:"故障描述",key:"FaultDesc",width:280},{title:"是否处理",slot:"IsHandle",width:90},{title:"维修员",key:"RepairPerson",width:80},{title:"维修时间",key:"RepairTime",width:106},{title:"维修结果",key:"HandleResult",width:200},{title:"操作",slot:"action",width:192}],RepairPerson:[],repairPersonId:"",id:null}},created:function(){this.getFaultWorkOrder(),this.getBasic()},methods:{maintainHandle:function(e){this.RepairMachine={Id:"",RepairPersonId:"",HandleResult:"",IsRecovery:!1},this.RepairMachine.Id=this.id=this.data[e].Id,this.maintain_modal=!0},detail:function(e){this.detail_data=this.data[e],this.detail_modal=!0},updateColumns:function(e){this.columns=e},getBasic:function(){var e=this;this.$api("GET","/FaultWorkOrder/GetFaultWorkOrderBasicData").then(function(a){0===a.ErrorCode?e.RepairPerson=a.Data.RepairPersonList:e.$Notice.warning({title:"系统提示",desc:a.Message})})},getFaultWorkOrder:function(){var e=this;this.loading=!0,this.page?(this.query.pageSize=this.page.pageSize,this.query.pageIndex=this.page.pageIndex):(this.query.pageSize=10,this.query.pageIndex=1),this.$api("POST","/FaultWorkOrder/GetFaultWorkOrderList",this.query).then(function(a){e.loading=!1,0===a.ErrorCode?(e.data=a.Data.List,e.page={pageCount:a.Data.Total,pageIndex:e.query.pageIndex,pageSize:e.query.pageSize}):e.$Notice.warning({title:"系统提示",desc:a.Message})})},onChange:function(e){this.page.pageIndex=1*e,this.getFaultWorkOrder()},onPageSizeChange:function(e){this.page.pageSize=1*e,this.getFaultWorkOrder()},seleChange:function(){this.page=null,this.getFaultWorkOrder()},modalHandle:function(e){this.id=this.data[e].Id,this.repairPersonId="",this.modal=!0},asyncOK:function(){var e=this;this.repairPersonId&&this.$api("POST","/FaultWorkOrder/UpdateFaultWorkOrderRepairPerson?id=".concat(this.id,"&repairPersonId=").concat(this.repairPersonId),{Id:this.id,repairPersonId:this.repairPersonId}).then(function(a){0===a.ErrorCode?(e.modal=!1,e.$Notice.success({title:"系统提示",desc:"操作成功"})):e.$Notice.warning({title:"系统提示",desc:a.Message})})},asyncMaintain:function(){var e=this;this.$api("POST","/FaultWorkOrder/RepairMachine",this.RepairMachine).then(function(a){0===a.ErrorCode?(e.getFaultWorkOrder(),e.maintain_modal=!1,e.$Notice.success({title:"系统提示",desc:"操作成功"})):e.$Notice.warning({title:"系统提示",desc:a.Message})})}}},n=(t("5577"),t("2877")),r=Object(n.a)(i,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"btn-bar clear"},[t("div",{staticClass:"fl"},[t("Button",{style:{marginRight:"42px"},attrs:{icon:"md-refresh"},on:{click:e.getFaultWorkOrder}},[e._v("刷新")]),t("span",{staticClass:"label",style:{marginRight:"6px"}},[e._v("维修员")]),t("Select",{staticStyle:{width:"200px","margin-right":"16px"},on:{"on-change":e.seleChange},model:{value:e.query.RepairPersonId,callback:function(a){e.$set(e.query,"RepairPersonId",a)},expression:"query.RepairPersonId"}},e._l(e.RepairPerson,function(a){return t("Option",{key:a.Value,attrs:{value:a.Value}},[e._v(e._s(a.Name))])}),1)],1),t("FiltrateButton",{staticClass:"fr",attrs:{columns:e.columns},on:{updateColumns:e.updateColumns}})],1),t("div",{staticClass:"table-section"},[t("Table",{attrs:{loading:e.loading,border:"",columns:e.columns,data:e.data},scopedSlots:e._u([{key:"IsHandle",fn:function(a){return[a.row.IsHandle?t("Button",{attrs:{size:"small",type:"success"}},[e._v("已处理")]):t("Button",{attrs:{size:"small",type:"warning"}},[e._v("未处理")])]}},{key:"action",fn:function(a){var i=a.row,n=a.index;return[t("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"info",size:"small"},on:{click:function(a){return e.detail(n)}}},[e._v("详情")]),t("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"info",size:"small"},on:{click:function(a){return e.modalHandle(n)}}},[e._v("派单")]),t("Button",{attrs:{disabled:i.IsHandle,type:"info",size:"small"},on:{click:function(a){return e.maintainHandle(n)}}},[e._v("维修处理")])]}}])})],1),e.page?t("iPage",{attrs:{pageSize:e.page.pageSize,current:e.page.pageIndex,total:e.page.pageCount},on:{onChange:e.onChange,onPageSizeChange:e.onPageSizeChange}}):e._e(),t("Modal",{attrs:{width:"360",title:"维修派单"},on:{"on-ok":e.asyncOK},model:{value:e.modal,callback:function(a){e.modal=a},expression:"modal"}},[t("span",{staticClass:"label",style:{marginRight:"6px"}},[e._v("维修员")]),t("Select",{staticStyle:{width:"260px"},model:{value:e.repairPersonId,callback:function(a){e.repairPersonId=a},expression:"repairPersonId"}},e._l(e.RepairPerson,function(a){return t("Option",{key:a.Value,attrs:{value:a.Value}},[e._v(e._s(a.Name))])}),1)],1),t("Modal",{attrs:{width:"660",title:"详情"},model:{value:e.detail_modal,callback:function(a){e.detail_modal=a},expression:"detail_modal"}},[e.detail_data?t("div",{staticClass:"detail"},[t("p",[e._v("设备编号："+e._s(e.detail_data.MachineCode))]),t("p",[e._v("设备名称："+e._s(e.detail_data.MachineName))]),t("p",[e._v("点位："+e._s(e.detail_data.PositionName))]),t("p",[e._v("维修负责人："+e._s(e.detail_data.FollowupPerson))]),t("p",[e._v("故障上报时间："+e._s(e.detail_data.FaultTime))]),t("p",[e._v("故障类型："+e._s(e.detail_data.FaultTypeName))]),t("p",[e._v("故障描述："+e._s(e.detail_data.FaultDesc))]),t("p",[e._v("维修员："+e._s(e.detail_data.RepairPerson))]),t("p",[e._v("维修时间："+e._s(e.detail_data.RepairTime))]),t("p",[e._v("维修结果："+e._s(e.detail_data.HandleResult))])]):e._e(),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"info"},on:{click:function(a){e.detail_modal=!1}}},[e._v("关闭")])],1)]),t("Modal",{attrs:{title:"维修处理",width:"560"},on:{"on-ok":e.asyncMaintain},model:{value:e.maintain_modal,callback:function(a){e.maintain_modal=a},expression:"maintain_modal"}},[t("Form",{attrs:{model:e.RepairMachine,"label-width":80}},[t("FormItem",{attrs:{label:"维修员"}},[t("Select",{model:{value:e.RepairMachine.RepairPersonId,callback:function(a){e.$set(e.RepairMachine,"RepairPersonId",a)},expression:"RepairMachine.RepairPersonId"}},e._l(e.RepairPerson,function(a){return t("Option",{key:a.Value,attrs:{value:a.Value}},[e._v(e._s(a.Name))])}),1)],1),t("FormItem",{attrs:{label:"维修结果"}},[t("Input",{attrs:{type:"textarea",placeholder:""},model:{value:e.RepairMachine.HandleResult,callback:function(a){e.$set(e.RepairMachine,"HandleResult",a)},expression:"RepairMachine.HandleResult"}})],1),t("FormItem",{attrs:{label:""}},[t("Checkbox",{model:{value:e.RepairMachine.IsRecovery,callback:function(a){e.$set(e.RepairMachine,"IsRecovery",a)},expression:"RepairMachine.IsRecovery"}},[e._v("恢复正常售货")])],1)],1)],1)],1)},[],!1,null,"50744c38",null);a.default=r.exports},"4e99":function(e,a,t){},5577:function(e,a,t){"use strict";var i=t("4e99");t.n(i).a}}]);