(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-363949b9"],{"3ac9":function(e,t,a){"use strict";a.r(t);var o={data:function(){return{ModelPicture:!1,picture:null,id:null,form:{OperatorId:"",UserId:"",MerchantType:"3",SubMerId:"",SubMerName:"",SubMerType:"2",ContactName:"",CertificateType:"",CertificateNo:"",CompanyName:"",CompanyCertType:"",CompanyCertNo:"",AccountName:"",Account:"",BankName:"",AccountType:"",MobilePhone:"",Address:"",Remark:"",IdCardFrontImage:"",IdCardBackImage:"",BusinessLicenseImage:""},cardType:[{value:"I",label:"身份证"},{value:"P",label:"护照"},{value:"G",label:"军官证"},{value:"U",label:"其他证件"}],compCardType:[{value:"U",label:"营业执照"},{value:"Y",label:"组织机构代码证"},{value:"V",label:"统一社会信用代码"}],accountType:[{value:"401",label:"借记卡"},{value:"601",label:"支票户"}]}},created:function(){this.$route.params.id&&(this.id=this.$route.params.id,this.editInit())},methods:{openModelPicture:function(e){this.picture=e,this.ModelPicture=!0},editInit:function(){var e=this;this.$api("POST","/Merchant/GetMerchantById?id=".concat(this.id)).then(function(t){0===t.ErrorCode?e.form=t.Data:e.$Notice.warning({title:"系统提示",desc:t.Message})})},getMerchantType:function(e){return 1==e?"运营商":2==e?"补货员":3==e?"其他":"-"},back:function(){this.$router.go(-1)}}},r=(a("d142"),a("ab69"),a("2877")),l=Object(r.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"contain"},[a("Form",{attrs:{model:e.form,"label-position":"left","label-width":110}},[a("div",{staticClass:"info"},[a("Card",{style:{marginBottom:"30px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("基本信息")]),a("div",{staticClass:"form"},[a("FormItem",{attrs:{label:"商户类型",prop:"MerchantType"}},[a("p",[e._v(e._s(e.getMerchantType(e.form.MerchantType)))])]),a("FormItem",{attrs:{label:"商户编码",prop:"SubMerId"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入商户编码"},model:{value:e.form.SubMerId,callback:function(t){e.$set(e.form,"SubMerId",t)},expression:"form.SubMerId"}})],1),a("FormItem",{attrs:{label:"商户名称",prop:"SubMerName"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入商户名称"},model:{value:e.form.SubMerName,callback:function(t){e.$set(e.form,"SubMerName",t)},expression:"form.SubMerName"}})],1)],1)])],1),a("div",{staticClass:"info"},[a("Card",{style:{marginBottom:"30px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("账户信息")]),a("div",{staticClass:"form"},[a("FormItem",{attrs:{label:"商户类型",prop:"PositionName"}},[a("p",[e._v(e._s(1==e.form.SubMerType?"个人":"企业"))])]),2==e.form.SubMerType?a("div",{staticClass:"tab"},[a("FormItem",{attrs:{label:"营业执照"}},[a("img",{staticClass:"pic-image",attrs:{src:e.form.BusinessLicenseImage},on:{click:function(t){return e.openModelPicture(e.form.BusinessLicenseImage)}}})]),a("FormItem",{attrs:{label:"法人名称",prop:"ContactName"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入法人或负责人名称"},model:{value:e.form.ContactName,callback:function(t){e.$set(e.form,"ContactName",t)},expression:"form.ContactName"}})],1),a("FormItem",{attrs:{label:"法人证件类型",prop:"CertificateType"}},[a("Select",{attrs:{disabled:"",placeholder:"请选择法人或负责人证件类型"},model:{value:e.form.CertificateType,callback:function(t){e.$set(e.form,"CertificateType",t)},expression:"form.CertificateType"}},e._l(e.cardType,function(t,o){return a("Option",{key:o,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),a("FormItem",{attrs:{label:"法人证件号码",prop:"CertificateNo"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入法人或负责人证件号码"},model:{value:e.form.CertificateNo,callback:function(t){e.$set(e.form,"CertificateNo",t)},expression:"form.CertificateNo"}})],1),a("FormItem",{attrs:{label:"企业名称",prop:"CompanyName"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入企业名称"},model:{value:e.form.CompanyName,callback:function(t){e.$set(e.form,"CompanyName",t)},expression:"form.CompanyName"}})],1),a("FormItem",{attrs:{label:"企业证件类型",prop:"CompanyCertType"}},[a("Select",{attrs:{disabled:"",placeholder:"请选择企业证件类型"},model:{value:e.form.CompanyCertType,callback:function(t){e.$set(e.form,"CompanyCertType",t)},expression:"form.CompanyCertType"}},e._l(e.compCardType,function(t,o){return a("Option",{key:o,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),a("FormItem",{attrs:{label:"企业证件号码",prop:"CompanyCertNo"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入企业证件号码"},model:{value:e.form.CompanyCertNo,callback:function(t){e.$set(e.form,"CompanyCertNo",t)},expression:"form.CompanyCertNo"}})],1)],1):e._e(),1==e.form.SubMerType?a("div",{staticClass:"tab"},[a("FormItem",{attrs:{label:"姓名",prop:"ContactName"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入姓名"},model:{value:e.form.ContactName,callback:function(t){e.$set(e.form,"ContactName",t)},expression:"form.ContactName"}})],1),a("FormItem",{attrs:{label:"证件类型",prop:"CertificateType"}},[a("Select",{attrs:{disabled:"",placeholder:"请选择证件类型"},model:{value:e.form.CertificateType,callback:function(t){e.$set(e.form,"CertificateType",t)},expression:"form.CertificateType"}},e._l(e.cardType,function(t,o){return a("Option",{key:o,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),a("FormItem",{attrs:{label:"证件号码",prop:"CertificateNo"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入证件号码"},model:{value:e.form.CertificateNo,callback:function(t){e.$set(e.form,"CertificateNo",t)},expression:"form.CertificateNo"}})],1),a("FormItem",{attrs:{label:"身份证正面"}},[a("img",{staticClass:"pic-image",attrs:{src:e.form.IdCardFrontImage},on:{click:function(t){return e.openModelPicture(e.form.IdCardFrontImage)}}})]),a("FormItem",{attrs:{label:"身份证反面"}},[a("img",{staticClass:"pic-image",attrs:{src:e.form.IdCardBackImage},on:{click:function(t){return e.openModelPicture(e.form.IdCardBackImage)}}})])],1):e._e()],1)])],1),a("div",{staticClass:"info"},[a("Card",{style:{marginBottom:"30px"}},[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("绑定银行卡")]),a("div",{staticClass:"form"},[a("FormItem",{attrs:{label:"收款户名",prop:"AccountName"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入收款户名"},model:{value:e.form.AccountName,callback:function(t){e.$set(e.form,"AccountName",t)},expression:"form.AccountName"}})],1),a("FormItem",{attrs:{label:"收款账号",prop:"Account"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入收款账号"},model:{value:e.form.Account,callback:function(t){e.$set(e.form,"Account",t)},expression:"form.Account"}})],1),a("FormItem",{attrs:{label:"收款银行",prop:"BankName"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入收款银行"},model:{value:e.form.BankName,callback:function(t){e.$set(e.form,"BankName",t)},expression:"form.BankName"}})],1),a("FormItem",{attrs:{label:"收款账号类型",prop:"AccountType"}},[a("Select",{attrs:{disabled:"",placeholder:"请选择收款账号类型"},model:{value:e.form.AccountType,callback:function(t){e.$set(e.form,"AccountType",t)},expression:"form.AccountType"}},e._l(e.accountType,function(t,o){return a("Option",{key:o,attrs:{value:t.value}},[e._v(e._s(t.label))])}),1)],1),a("FormItem",{attrs:{label:"预留手机号",prop:"MobilePhone"}},[a("Input",{attrs:{disabled:"",placeholder:"请输入预留手机号"},model:{value:e.form.MobilePhone,callback:function(t){e.$set(e.form,"MobilePhone",t)},expression:"form.MobilePhone"}})],1)],1)])],1)])],1),a("div",{staticClass:"handle clear"},[a("Button",{style:{marginRight:"14px"},on:{click:e.back}},[e._v("返回")])],1),a("Modal",{staticClass:"ModelPicture_show",attrs:{width:"680"},model:{value:e.ModelPicture,callback:function(t){e.ModelPicture=t},expression:"ModelPicture"}},[a("img",{attrs:{src:e.picture}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"info"},on:{click:function(t){e.ModelPicture=!1}}},[e._v("关闭")])],1)])],1)},[],!1,null,"5064f5e4",null);t.default=l.exports},4224:function(e,t,a){},ab69:function(e,t,a){"use strict";var o=a("b81a");a.n(o).a},b81a:function(e,t,a){},d142:function(e,t,a){"use strict";var o=a("4224");a.n(o).a}}]);