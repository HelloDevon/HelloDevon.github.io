(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-44b90fc8"],{"0fde":function(e,t,a){},"4b1ca":function(e,t,a){"use strict";a.r(t);var r={data:function(){return{form:{ABCRate:"",SBPayServer:"",SBPayAppId:"",SBPayAppSecret:""},ruleValidate:{ABCRate:[{required:!0,message:"请输入农行分账费率",trigger:"blur"}]}}},created:function(){this.init()},methods:{init:function(){var e=this;this.$api("GET","/SysConfig/GetSysConfig").then(function(t){0===t.ErrorCode?(e.form=t.Data,e.form.ABCRate=e.form.ABCRate+""):e.$Notice.warning({title:"系统提示",desc:t.message})})},back:function(){this.$router.go(-1)},save:function(){var e=this;this.$refs.formValidate.validate(function(t){t?e.$api("POST","/SysConfig/AddUpdateSysConfig",e.form).then(function(t){0===t.ErrorCode?e.$Notice.success({title:"系统提示",desc:"保存成功"}):e.$Notice.warning({title:"系统提示",desc:t.message})}):e.$Notice.warning({title:"系统提示",desc:"请填写相关的信息"})})}}},o=(a("a3f7"),a("2877")),n=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"contain"},[a("Tabs",{attrs:{animated:!1}},[a("TabPane",{attrs:{label:"收呗收款配置"}},[a("div",{staticClass:"wrap"},[a("Form",{ref:"formValidate",attrs:{"label-position":"left",model:e.form,rules:e.ruleValidate,"label-width":100}},[a("FormItem",{attrs:{label:"接口域名"}},[a("Input",{attrs:{placeholder:"请输入接口域名"},model:{value:e.form.SBPayServer,callback:function(t){e.$set(e.form,"SBPayServer",t)},expression:"form.SBPayServer"}})],1),a("FormItem",{attrs:{label:"机构号"}},[a("Input",{attrs:{placeholder:"请输入机构号"},model:{value:e.form.SBPayAppId,callback:function(t){e.$set(e.form,"SBPayAppId",t)},expression:"form.SBPayAppId"}})],1),a("FormItem",{attrs:{label:"机构密钥"}},[a("Input",{attrs:{placeholder:"请输入机构密钥"},model:{value:e.form.SBPayAppSecret,callback:function(t){e.$set(e.form,"SBPayAppSecret",t)},expression:"form.SBPayAppSecret"}})],1),a("FormItem",{attrs:{label:"农行分账费率",prop:"ABCRate"}},[a("Input",{attrs:{placeholder:"请输入农行分账费率"},model:{value:e.form.ABCRate,callback:function(t){e.$set(e.form,"ABCRate",t)},expression:"form.ABCRate"}})],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:e.back}},[e._v("返回")])],1)],1)],1)])],1)],1)])},[],!1,null,"38decfbc",null);t.default=n.exports},a3f7:function(e,t,a){"use strict";var r=a("0fde");a.n(r).a}}]);