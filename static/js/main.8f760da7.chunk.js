(this.webpackJsonpReactjsRESTfulClient=this.webpackJsonpReactjsRESTfulClient||[]).push([[0],{189:function(e,t,a){e.exports=a(411)},194:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},327:function(e,t,a){},328:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=(a(194),a(195),a(196),a(35)),s=a(36),c=a(38),u=a(37),f=a(39),d=(a(197),a(412)),p=a(5),m=a(415),h=(a(198),d.a.Header);var b=function(){return r.a.createElement(h,{className:"profiles-header"},"PROFILES")},v=(a(242),d.a.Footer);var E=function(){return r.a.createElement(v,{className:"profiles-footer"},"\xa9JCGDEGUZMAN")},P=(a(243),a(413)),C=a(414),w=a(418),y=a(416),N=a(417),j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onCreate,l=e.form.getFieldDecorator;return r.a.createElement(P.a,{type:"flex",align:"middle",justify:"center"},r.a.createElement(C.a,{span:24},r.a.createElement(w.a,{className:"new-profile-modal",visible:t,title:"Create a New Profile",okText:"Create",onCancel:a,onOk:n},r.a.createElement(y.a,{layout:"vertical"},r.a.createElement(y.a.Item,{label:"First Name"},l("pfname",{rules:[{required:!0,message:"Please input first name!"}]})(r.a.createElement(N.a,null))),r.a.createElement(y.a.Item,{label:"Middle Name"},l("pmname",{rules:[{required:!0,message:"Please input middle name!"}]})(r.a.createElement(N.a,null))),r.a.createElement(y.a.Item,{label:"Last Name"},l("plname",{rules:[{required:!0,message:"Please input last name!"}]})(r.a.createElement(N.a,null)))))))}}]),t}(n.Component),O=y.a.create()(j),g=(a(327),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onUpdate,l=e.form.getFieldDecorator;return r.a.createElement(P.a,{type:"flex",align:"middle",justify:"center"},r.a.createElement(C.a,{span:24},r.a.createElement(w.a,{className:"edit-profile-modal",visible:t,title:"Edit Profile",okText:"Update",onCancel:a,onOk:n},r.a.createElement(y.a,{layout:"vertical"},r.a.createElement(y.a.Item,{label:"First Name"},l("pfname",{rules:[{required:!0,message:"Please input first name!"}]})(r.a.createElement(N.a,null))),r.a.createElement(y.a.Item,{label:"Middle Name"},l("pmname",{rules:[{required:!0,message:"Please input middle name!"}]})(r.a.createElement(N.a,null))),r.a.createElement(y.a.Item,{label:"Last Name"},l("plname",{rules:[{required:!0,message:"Please input last name!"}]})(r.a.createElement(N.a,null)))))))}}]),t}(n.Component)),D=y.a.create()(g),M=(a(328),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onDelete;return r.a.createElement(P.a,{type:"flex",align:"middle",justify:"center"},r.a.createElement(C.a,{span:24},r.a.createElement(w.a,{className:"del-profile-modal",visible:t,title:"Delete Profile",okText:"Delete",onCancel:a,onOk:n},"Are you sure?")))}}]),t}(n.Component)),S=a(41),I=a.n(S),k=a(73),R=a.n(k),x="https://springmysqlcrudapi.herokuapp.com/",F=function(e){var t;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,I.a.awrap(R.a.get(x+e));case 3:return t=a.sent,a.abrupt("return",t.data);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},V=function(e,t){var a;return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I.a.awrap(R.a.post(x+e,t));case 3:return a=n.sent,n.abrupt("return",a.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])},U=function(e,t){var a;return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I.a.awrap(R.a.put(x+e,t));case 3:return a=n.sent,n.abrupt("return",a.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])},q=function(e){var t;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,I.a.awrap(R.a.delete(x+e));case 3:return t=a.sent,a.abrupt("return",t.data);case 7:return a.prev=7,a.t0=a.catch(0),a.abrupt("return",a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])},A=d.a.Content,G=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.editProfile,a=e.profileId,n=e.profileData,l=e.delProfile;return r.a.createElement("div",null,r.a.createElement(p.a,{className:"action-icons",type:"edit",onClick:function(){return t(a,n)}}),r.a.createElement(p.a,{className:"action-icons",type:"delete",onClick:function(){return l(a)}}))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isNewProfileModalVisible:!1,isEditProfileModalVisible:!1,isDeleteProfileModalVisible:!1,profilesData:[],profileId:0},a.handleGetProfiles=function(){F("profiles").then((function(e){console.log("get result: ",e),a.setState({profilesData:e.reverse()})}))},a.handleSaveProfile=function(e){V("new-profile",e).then((function(e){console.log("post result: ",e),a.handleGetProfiles()}))},a.handleProfileUpdate=function(e){var t=a.state.profileId;U("update-profile/"+t,e).then((function(e){console.log("put result: ",e),a.handleGetProfiles()}))},a.handleProfileDelete=function(){var e=a.state.profileId;q("delete-profile/"+e).then((function(e){console.log("delete result: ",e),a.handleGetProfiles(),a.setState({isDeleteProfileModalVisible:!1})}))},a.handleEditProfile=function(e,t){a.formRefUpdate.props.form.setFieldsValue({pfname:t.pfname,pmname:t.pmname,plname:t.plname}),a.setState({isEditProfileModalVisible:!0,profileId:e})},a.handleUpdateProfile=function(){var e=a.formRefUpdate.props.form;e.validateFields((function(t,n){t||(console.log("Received values of form: ",n),a.handleProfileUpdate(n),e.resetFields(),a.setState({isEditProfileModalVisible:!1}))}))},a.handleCancelEdit=function(){a.formRefUpdate.props.form.resetFields(),a.setState({isEditProfileModalVisible:!1})},a.updateFormRef=function(e){a.formRefUpdate=e},a.handleNewProfile=function(){a.setState({isNewProfileModalVisible:!0})},a.handleCreateProfile=function(){var e=a.formRefSave.props.form;e.validateFields((function(t,n){t||(a.handleSaveProfile(n),e.resetFields(),a.setState({isNewProfileModalVisible:!1}))}))},a.handleCancelNew=function(){a.formRefSave.props.form.resetFields(),a.setState({isNewProfileModalVisible:!1})},a.saveFormRef=function(e){a.formRefSave=e},a.handleDeleteProfile=function(e){a.setState({isDeleteProfileModalVisible:!0,profileId:e})},a.handleCancelDelete=function(){a.setState({isDeleteProfileModalVisible:!1})},a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleGetProfiles()}},{key:"render",value:function(){var e=this,t=this.state,a=t.isNewProfileModalVisible,n=t.isEditProfileModalVisible,l=t.isDeleteProfileModalVisible,i=t.profilesData,o=[{title:"FIRST NAME",dataIndex:"pfname"},{title:"MIDDLE NAME",dataIndex:"pmname"},{title:"LAST NAME",dataIndex:"plname"},{title:r.a.createElement(p.a,{className:"new-profile-icon",type:"form",onClick:function(){return e.handleNewProfile()}}),dataIndex:"id",render:function(t,a){return r.a.createElement(G,{profileId:t,profileData:a,editProfile:function(t,a){return e.handleEditProfile(t,a)},delProfile:function(t){return e.handleDeleteProfile(t)}})}}];return r.a.createElement(d.a,{className:"profiles-body"},r.a.createElement(b,null),r.a.createElement(A,{className:"profiles-content"},r.a.createElement(m.a,{className:"content-table",columns:o,dataSource:i,pagination:{defaultPageSize:7},rowKey:"id"})),r.a.createElement(O,{wrappedComponentRef:this.saveFormRef,visible:a,onCancel:function(){return e.handleCancelNew()},onCreate:function(){return e.handleCreateProfile()}}),r.a.createElement(D,{wrappedComponentRef:this.updateFormRef,visible:n,onCancel:function(){return e.handleCancelEdit()},onUpdate:function(){return e.handleUpdateProfile()}}),r.a.createElement(M,{visible:l,onCancel:function(){return e.handleCancelDelete()},onDelete:function(){return e.handleProfileDelete()}}),r.a.createElement(E,null))}}]),t}(n.Component);var L=function(){return r.a.createElement(T,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[189,1,2]]]);
//# sourceMappingURL=main.8f760da7.chunk.js.map