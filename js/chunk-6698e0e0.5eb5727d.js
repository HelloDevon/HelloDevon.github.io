(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6698e0e0"],{1535:function(t,e,a){"use strict";var r=a("ae05");a.n(r).a},ae05:function(t,e,a){},c1c1:function(t,e,a){"use strict";a.r(e);var r=a("d958"),o=a.n(r),i={data:function(){return{id:null,area:[],userList:[],OptLocation:[],ruleValidate:{OptName:[{required:!0,message:"请输入运营商名称",trigger:"blur"}],OptAbbName:[{required:!0,message:"请输入运营商简称",trigger:"blur"}],OptCode:[{required:!0,message:"请输入运营商代码",trigger:"blur"}],AdminLoginUser:[{required:!0,message:"请选择管理员账号",trigger:"blur"}]},form:{OptName:"",OptAbbName:"",OptCode:"",OptLocation:"",OfficeAddress:"",Contacts:"",ContactNumber:"",AdminLoginUser:"",PayStyle:"",EnableSMS:!1},OperatorPayStyleList:[]}},created:function(){this.getAreaList(),this.getAdmin(),this.getOperatorPayStyleList(),this.id=this.$route.params.id,this.id&&this.editInit()},methods:{onblur:function(){var t=this;this.form.OptAbbName.trim().length&&this.$api("GET","/Operator/GetSpellByChinese?chStr=".concat(this.form.OptAbbName.trim())).then(function(e){if(0===e.ErrorCode)t.form.OptCode=e.Data;else{var a=o()(t.form.OptAbbName.trim(),{style:o.a.STYLE_FIRST_LETTER});if(a.length){var r="";a.map(function(t){r+=t[0].toUpperCase()}),t.form.OptCode=r}}})},addUser:function(){this.$router.push("/sys-center/uList")},editInit:function(){var t=this;this.$api("GET","/Operator/GetOperatorById?id=".concat(this.id)).then(function(e){t.userList.push({value:e.Data.AdminLoginUser,label:e.Data.AdminLoginUserName}),t.form.OptName=e.Data.OptName,t.form.OptAbbName=e.Data.OptAbbName,t.form.OptCode=e.Data.OptCode,t.form.OptLocation=e.Data.OptLocation,t.form.OfficeAddress=e.Data.OfficeAddress,t.form.Contacts=e.Data.Contacts,t.form.ContactNumber=e.Data.ContactNumber,t.form.AdminLoginUser=e.Data.AdminLoginUser,t.form.PayStyle=e.Data.PayStyle,t.form.EnableSMS=e.Data.EnableSMS,e.Data.OptLocationList.map(function(e){t.OptLocation.unshift(e.Value)})})},getOperatorPayStyleList:function(){var t=this;this.$api("GET","/Operator/GetOperatorPayStyleList").then(function(e){0===e.ErrorCode?t.OperatorPayStyleList=e.Data:t.$Notice.warning({title:"系统提示",desc:e.Message})})},getAdmin:function(){var t=this;this.$api("GET","/Operator/GetOperatorAdminLoginUserList").then(function(e){var a=e.Data.map(function(t){return{value:t.Id,label:t.Name}});t.userList=a})},getAreaList:function(){var t=this;this.$api("GET","/Operator/GetAreaList").then(function(e){t.area=t.dataHandle(e.Data)})},dataHandle:function(t){var e=[];for(var a in t){var r=t[a],o={label:r.AreaName,value:r.Id};r.CityLevel&&0!=r.CityLevel.length&&(o.children=this.dataHandle(r.CityLevel)),r.AreaLevel&&0!=r.AreaLevel.length&&(o.children=this.dataHandle(r.AreaLevel)),e.push(o)}return e},save:function(){var t=this;this.$refs.ruleValidate.validate(function(e){if(e){var a=t.OptLocation.length;a&&(t.form.OptLocation=t.OptLocation[a-1]);var r="/Operator/AddOperator";t.id&&(r="/Operator/UpdateOperator",t.form.Id=t.id),t.$api("POST",r,t.form).then(function(e){0==e.ErrorCode?(t.$Notice.success({title:"系统提示",desc:"保存成功"}),t.id&&t.$router.back(),t.OptLocation=[],t.form={OptName:"",OptAbbName:"",OptCode:"",OptLocation:"",OfficeAddress:"",Contacts:"",ContactNumber:"",AdminLoginUser:""}):t.$Notice.warning({title:"系统提示",desc:e.Message})})}else t.$Notice.warning({title:"系统提示",desc:"请填写相关的信息"})})},back:function(){this.$router.back()}}},n=(a("1535"),a("2877")),s=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h6",{staticClass:"page-add clear"},[a("i",{staticClass:"iconfont icontianjia"}),t._v(" 运营商编辑 "),a("Button",{staticClass:"fr",attrs:{icon:"ios-undo"},on:{click:t.back}},[t._v("返回")])],1),a("div",{staticClass:"info"},[a("Card",{style:{marginBottom:"30px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("基本信息")]),a("div",{staticClass:"good-form"},[a("Form",{ref:"ruleValidate",attrs:{model:t.form,"label-position":"left",rules:t.ruleValidate,"label-width":100}},[a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"运营商名称",prop:"OptName"}},[a("Input",{attrs:{placeholder:"请输入运营商名称"},model:{value:t.form.OptName,callback:function(e){t.$set(t.form,"OptName",e)},expression:"form.OptName"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"运营商简称",prop:"OptAbbName"}},[a("Input",{attrs:{placeholder:"请输入运营商简称"},on:{"on-blur":t.onblur},model:{value:t.form.OptAbbName,callback:function(e){t.$set(t.form,"OptAbbName",e)},expression:"form.OptAbbName"}})],1)],1)],1),a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"运营商代码",prop:"OptCode"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入运营商代码"},model:{value:t.form.OptCode,callback:function(e){t.$set(t.form,"OptCode",e)},expression:"form.OptCode"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"管理员账号",prop:"AdminLoginUser"}},[a("Select",{attrs:{disabled:!!t.id},model:{value:t.form.AdminLoginUser,callback:function(e){t.$set(t.form,"AdminLoginUser",e)},expression:"form.AdminLoginUser"}},[t._l(t.userList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),a("Button",{style:{width:"90%",margin:"0 auto",display:"block"},attrs:{type:"text",icon:"md-add"},on:{click:t.addUser}},[t._v("新增用户")])],2)],1)],1)],1),a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"所在地"}},[a("Cascader",{attrs:{data:t.area},model:{value:t.OptLocation,callback:function(e){t.OptLocation=e},expression:"OptLocation"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"办公地址"}},[a("Input",{attrs:{placeholder:"办公地址"},model:{value:t.form.OfficeAddress,callback:function(e){t.$set(t.form,"OfficeAddress",e)},expression:"form.OfficeAddress"}})],1)],1)],1),a("Row",{attrs:{gutter:100,type:"flex",justify:"end"}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"联系人"}},[a("Input",{attrs:{placeholder:"联系人"},model:{value:t.form.Contacts,callback:function(e){t.$set(t.form,"Contacts",e)},expression:"form.Contacts"}})],1)],1),a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"联系电话"}},[a("Input",{attrs:{placeholder:"联系电话"},model:{value:t.form.ContactNumber,callback:function(e){t.$set(t.form,"ContactNumber",e)},expression:"form.ContactNumber"}})],1)],1)],1),a("Row",{attrs:{gutter:100}},[a("Col",{attrs:{span:"12"}},[a("FormItem",{attrs:{label:"售货机支付类型"}},[a("Select",{style:{width:"310px",marginRight:"26px"},model:{value:t.form.PayStyle,callback:function(e){t.$set(t.form,"PayStyle",e)},expression:"form.PayStyle"}},t._l(t.OperatorPayStyleList,function(e,r){return a("Option",{key:r,attrs:{value:e.PayStyle}},[t._v(t._s(e.PayStyleName))])}),1),a("Checkbox",{model:{value:t.form.EnableSMS,callback:function(e){t.$set(t.form,"EnableSMS",e)},expression:"form.EnableSMS"}},[t._v("启用短信服务")])],1)],1)],1)],1)],1)])],1),a("div",{staticClass:"handle clear"},[a("Button",{style:{marginRight:"14px"},on:{click:t.back}},[t._v("返回")]),a("Button",{attrs:{type:"info"},on:{click:t.save}},[t._v("保存")])],1)])},[],!1,null,"69c40dbe",null);e.default=s.exports}}]);