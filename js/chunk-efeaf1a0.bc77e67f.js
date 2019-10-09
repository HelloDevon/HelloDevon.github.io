(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-efeaf1a0"],{"0390":function(t,e,i){"use strict";var a=i("3778");i.n(a).a},"15e0":function(t,e,i){"use strict";var a=i("5160");i.n(a).a},"2cf2":function(t,e,i){"use strict";i.r(e);var a={components:{iUpload:i("3175").a},data:function(){return{loading:!1,ModelPicture:!1,deleModal:!1,modal:!1,picture:null,page:null,id:null,defaultList:[],query:{Search:"",AuditStart:"0",ProhibitStart:"0",pageSize:null,pageIndex:null},data:[],columns:[{title:"素材名称",key:"MatName"},{title:"素材类型",key:"MatTypeName",width:150},{title:"预览",slot:"URL",width:110},{title:"引用数",key:"Quote",width:100},{title:"是否审核",slot:"IsAudit",width:110},{title:"是否禁用",slot:"IsProhibit",width:110},{title:"备注",key:"Remark"},{title:"操作",slot:"action",width:140}],form:{MatName:"",MatType:"0",Remark:"",URL:""},ruleValidate:{MatName:[{required:!0,message:"请输入素材名称",trigger:"blur"}],MatType:[{required:!0,message:"请选择素材分类",trigger:"blur"}]}}},created:function(){this.getMaterial()},methods:{updateColumns:function(t){this.columns=t},openModelPicture:function(t){this.picture=t,this.ModelPicture=!0},getMaterial:function(){var t=this;this.loading=!0,this.page?(this.query.pageSize=this.page.pageSize,this.query.pageIndex=this.page.pageIndex):(this.query.pageSize=10,this.query.pageIndex=1),this.$api("POST","/Material/GetMaterialList",this.query).then(function(e){t.loading=!1,0===e.ErrorCode?(t.data=e.Data.List,t.page={pageCount:e.Data.Total,pageIndex:t.query.pageIndex,pageSize:t.query.pageSize}):t.$Notice.warning({title:"系统提示",desc:e.Message})})},onChange:function(t){this.page.pageIndex=1*t,this.getMaterial()},onPageSizeChange:function(t){this.page.pageSize=1*t,this.getMaterial()},handle:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;t>=0?(this.id=this.data[t].Id,this.getDetails()):(this.id=null,"0"==this.form.MatType&&(this.defaultList=[],this.$refs.iupload.uploadFun()),this.form={MatName:"",MatType:"0",Remark:"",URL:""}),this.modal=!0},getDetails:function(){var t=this;this.$api("GET","/Material/GetMaterialInfo?id=".concat(this.id)).then(function(e){0===e.ErrorCode?(t.form=e.Data,t.form.MatType=e.Data.MatType+"",t.form.Id=t.id,"0"==t.form.MatType&&(t.$set(t.defaultList,0,{name:(new Date).getTime()+"",url:e.Data.URL}),t.$refs.iupload.uploadFun(e.Data.URL))):t.$Notice.warning({title:"系统提示",desc:e.Message})})},search:function(){this.page=null,this.getMaterial()},save:function(){var t=this;this.$refs.ruleValidate.validate(function(e){var i;e?(i=t.id?"/Material/UpdateMaterialInfo":"/Material/AddMaterialInfo","0"===t.form.MatType&&(t.form.URL=t.$refs.iupload.picture),t.$api("POST",i,t.form).then(function(e){0==e.ErrorCode?(t.$Notice.success({title:"系统提示",desc:"保存成功"}),t.modal=!1,t.page=null,t.getMaterial()):t.$Notice.warning({title:"系统提示",desc:e.Message})})):t.$Notice.warning({title:"系统提示",desc:"请填写相关的信息"})})},audit:function(t){var e=this;this.$api("GET","/Material/UpdateMaterialAudit?id=".concat(this.data[t].Id,"&isAudit=",!0)).then(function(i){0==i.ErrorCode?(e.$Notice.success({title:"系统提示",desc:"操作成功"}),e.data[t].IsAudit=!0):e.$Notice.warning({title:"系统提示",desc:i.Message})})},switchHandle:function(t,e){var i=this;this.data[t].IsAudit?this.$api("GET","/Material/UpdateMaterialProhibit?id=".concat(this.data[t].Id,"&isProhibit=").concat(e)).then(function(e){0==e.ErrorCode?(i.$Notice.success({title:"系统提示",desc:"操作成功"}),i.data[t].IsProhibit=!i.data[t].IsProhibit):i.$Notice.warning({title:"系统提示",desc:e.Message})}):this.$Notice.warning({title:"系统提示",desc:"先通过审核，在进行操作"})},deleHandle:function(t){this.id=this.data[t].Id,this.deleModal=!0},deleteM:function(){var t=this;this.$api("GET","/Material/DelectMaterialInfo?id=".concat(this.id)).then(function(e){0==e.ErrorCode?(t.$Notice.success({title:"系统提示",desc:"删除成功"}),t.deleModal=!1,t.page=null,t.getMaterial()):t.$Notice.warning({title:"系统提示",desc:e.Message})})}}},n=(i("15e0"),i("2877")),o=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"btn-bar clear"},[i("div",{staticClass:"fl"},[i("Button",{style:{marginRight:"6px"},attrs:{type:"info",icon:"md-add"},on:{click:t.handle}},[t._v("新建")]),i("Button",{style:{marginRight:"26px"},attrs:{icon:"md-refresh"},on:{click:t.getMaterial}},[t._v("刷新")]),i("Form",{style:{display:"inline-block",position:"relative",top:"-5px"},attrs:{"label-position":"left","label-width":74}},[i("FormItem",{style:{display:"inline-block",marginRight:"26px"},attrs:{label:"是否审核"}},[i("Select",{style:{width:"140px"},on:{"on-change":t.search},model:{value:t.query.AuditStart,callback:function(e){t.$set(t.query,"AuditStart",e)},expression:"query.AuditStart"}},[i("Option",{attrs:{value:"0"}},[t._v("全部")]),i("Option",{attrs:{value:"1"}},[t._v("已审核")]),i("Option",{attrs:{value:"2"}},[t._v("未审核")])],1)],1),i("FormItem",{style:{display:"inline-block"},attrs:{label:"是否禁用"}},[i("Select",{style:{width:"140px"},on:{"on-change":t.search},model:{value:t.query.ProhibitStart,callback:function(e){t.$set(t.query,"ProhibitStart",e)},expression:"query.ProhibitStart"}},[i("Option",{attrs:{value:"0"}},[t._v("全部")]),i("Option",{attrs:{value:"1"}},[t._v("已开启")]),i("Option",{attrs:{value:"2"}},[t._v("已禁用")])],1)],1)],1)],1),i("div",{staticClass:"fr"},[i("Input",{staticStyle:{width:"200px"},style:{marginRight:"6px"},attrs:{placeholder:"请输入素材名称、备注搜索"},model:{value:t.query.Search,callback:function(e){t.$set(t.query,"Search",e)},expression:"query.Search"}}),i("Button",{on:{click:t.search}},[t._v("搜索")]),i("FiltrateButton",{attrs:{columns:t.columns},on:{updateColumns:t.updateColumns}})],1)]),i("div",{staticClass:"table-section"},[i("Table",{attrs:{loading:t.loading,border:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"URL",fn:function(e){var a=e.row;return e.index,[i("img",{staticClass:"banner",attrs:{src:a.URL},on:{click:function(e){return t.openModelPicture(a.URL)}}})]}},{key:"IsAudit",fn:function(e){return[e.row.IsAudit?i("Button",{attrs:{size:"small",type:"success"}},[t._v("已审核")]):i("Button",{attrs:{size:"small",type:"warning"}},[t._v("未审核")])]}},{key:"IsProhibit",fn:function(e){return[e.row.IsProhibit?i("Button",{attrs:{size:"small",type:"warning"}},[t._v("禁用")]):i("Button",{attrs:{size:"small",type:"success"}},[t._v("启用")])]}},{key:"action",fn:function(e){e.row;var a=e.index;return[i("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"info",size:"small"},on:{click:function(e){return t.handle(a)}}},[t._v("编辑")]),i("Button",{attrs:{type:"error",size:"small"},on:{click:function(e){return t.deleHandle(a)}}},[t._v("删除")])]}}])}),t.page?i("iPage",{attrs:{pageSize:t.page.pageSize,current:t.page.pageIndex,total:t.page.pageCount},on:{onChange:t.onChange,onPageSizeChange:t.onPageSizeChange}}):t._e()],1),i("Modal",{attrs:{width:"500","footer-hide":!0,title:t.id?"编辑素材":"添加素材"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[i("Form",{ref:"ruleValidate",attrs:{model:t.form,rules:t.ruleValidate,"label-width":80}},[i("FormItem",{attrs:{label:"素材名称",prop:"MatName"}},[i("Input",{attrs:{placeholder:"请输入机型名称"},model:{value:t.form.MatName,callback:function(e){t.$set(t.form,"MatName",e)},expression:"form.MatName"}})],1),i("FormItem",{attrs:{label:"素材分类",prop:"MatType"}},[i("Select",{attrs:{placeholder:"请选择素材分类"},model:{value:t.form.MatType,callback:function(e){t.$set(t.form,"MatType",e)},expression:"form.MatType"}},[i("Option",{attrs:{value:"0"}},[t._v("图片")]),i("Option",{attrs:{disabled:"",value:"1"}},[t._v("视频")])],1)],1),i("FormItem",{attrs:{label:"备注",prop:"ModelDesc"}},[i("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入备注"},model:{value:t.form.Remark,callback:function(e){t.$set(t.form,"Remark",e)},expression:"form.Remark"}})],1),"0"==t.form.MatType?i("FormItem",{attrs:{label:"图片"}},[i("iUpload",{ref:"iupload",attrs:{pic:t.form.URL,def:t.defaultList,w:"1080",h:"1920",tip:"支持.jpg.jpeg.png格式，尺寸为1080*1920px，小于2M"}})],1):t._e(),i("FormItem",[i("Button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),i("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){t.modal=!1}}},[t._v("取消")])],1)],1)],1),i("Modal",{attrs:{width:"360"},model:{value:t.deleModal,callback:function(e){t.deleModal=e},expression:"deleModal"}},[i("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[i("Icon",{attrs:{type:"ios-information-circle"}}),i("span",[t._v("删除确认")])],1),i("div",{staticStyle:{"text-align":"center"}},[i("p",[t._v("确定要删除此素材吗？删除后将无法恢复")])]),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"error",size:"large",long:""},on:{click:t.deleteM}},[t._v("删除")])],1)]),i("Modal",{staticClass:"ModelPicture_show",attrs:{width:"660"},model:{value:t.ModelPicture,callback:function(e){t.ModelPicture=e},expression:"ModelPicture"}},[i("img",{attrs:{src:t.picture}}),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"info"},on:{click:function(e){t.ModelPicture=!1}}},[t._v("关闭")])],1)])],1)},[],!1,null,"54131f62",null);e.default=o.exports},3175:function(t,e,i){"use strict";var a=i("01ea"),n={props:["pic","def","tip","w","h"],watch:{pic:function(t){this.picture=t}},data:function(){return{picture:"",defaultList:[],visible:!1,uploadList:[],action:"".concat(a.a.uploadUrl,"/upload")}},created:function(){this.picture=this.pic,this.defaultList=this.def},mounted:function(){this.uploadList=this.$refs.upload.fileList},methods:{getPic:function(){return this.picture},uploadFun:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.picture=e,setTimeout(function(){t.$nextTick(function(){t.uploadList=""!=e?[{name:(new Date).getTime()+"",percentage:100,status:"finished",uid:1*(new Date).getTime(),url:e}]:t.$refs.upload.fileList,t.$refs.upload.fileList=[]})},300)},handleView:function(){this.visible=!0},handleRemove:function(){this.$refs.upload.fileList=this.uploadList=[],this.picture=""},handleSuccess:function(t,e){e.url=this.picture=t.fullFilePath,e.name=(new Date).getTime()},handleFormatError:function(){this.$Notice.warning({title:"系统提示",desc:"文件格式不正确"})},handleMaxSize:function(){this.$Notice.warning({title:"系统提示",desc:"文件不能超过2M大小"})},handleBeforeUpload:function(t){var e=this;return new Promise(function(i,a){if(e.uploadList.length<2||(e.$Notice.warning({title:"图片超过上传限制"}),a()),e.w&&e.h){var n=new FileReader;n.onload=function(t){var n=t.target.result,o=new Image;o.onload=function(){var t=o.width,n=o.height;t==e.w|n==e.h?i():(e.$Notice.warning({title:"系统提示",desc:"文件尺寸不符合"}),a())},o.src=n},n.readAsDataURL(t)}else i()})}}},o=(i("0390"),i("2877")),s=Object(o.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:t.picture,callback:function(e){t.picture=e},expression:"picture"}}),t._l(t.uploadList,function(e,a){return i("div",{key:a,staticClass:"demo-upload-list"},["finished"===e.status?[i("img",{attrs:{src:e.url}}),i("div",{staticClass:"demo-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){return t.handleView(e.name)}}}),i("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(i){return t.handleRemove(e)}}})],1)]:[e.showProgress?i("Progress",{attrs:{percent:e.percentage,"hide-info":""}}):t._e()]],2)}),i("Upload",{directives:[{name:"show",rawName:"v-show",value:!t.picture,expression:"!picture"}],ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"default-file-list":t.defaultList,"on-success":t.handleSuccess,format:["jpg","jpeg","png"],"max-size":2028,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleMaxSize,"before-upload":t.handleBeforeUpload,multiple:"",type:"drag",action:t.action}},[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),i("Modal",{attrs:{title:"图片预览"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:t.picture}}):t._e()]),i("p",{staticClass:"pic-tip"},[t._v(t._s(t.tip?t.tip:"仅支持png，大小小于2M"))])],2)},[],!1,null,"2cdaa432",null);e.a=s.exports},3778:function(t,e,i){},5160:function(t,e,i){}}]);