(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,n){e.exports=n(384)},383:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(37),i=n(207),s=n.n(i),u=n(7),m=n(3),d=n.n(m),E=n(34),f=n.n(E),v=n(10),p=n(8),b=function(e){var t=e.eventName,n=e.description,a=e.userImageUrl,c=(e.time,e.userHandle),o=e.imageUrl,l=e.startTime,i=e.endTime,s=(e.location,e.startDate),u=e.endDate,m=(e.fee,e.id);e.venues;return r.a.createElement("div",{className:"list-card"+("/myblogs"===te.location.pathname||te.location.pathname.includes("/user")?" my-blogs__list-card":"")},r.a.createElement("div",{className:"list-card__body"},r.a.createElement("div",{className:"list-card__image"},o?r.a.createElement("img",{src:o,alt:""}):r.a.createElement("img",{src:"/images/img5.jpeg",alt:""})),r.a.createElement("div",{className:"list-card__content"},r.a.createElement(f.a,{className:"list-card__body-title",to:"/event/".concat(m)},t,r.a.createElement("div",{className:"list-card__body-author"},r.a.createElement("img",{src:a,alt:""}),r.a.createElement("h3",null,c)),r.a.createElement("div",null,r.a.createElement("p",{className:"list-card__content-text"},n.substring(0,300)+" ...")))),r.a.createElement("div",{className:"list-card__body-date"},r.a.createElement("div",null,r.a.createElement("h6",null,r.a.createElement(p.a,{icon:v.d})," "+l+" - "+i)),r.a.createElement("div",null,r.a.createElement("h6",null,r.a.createElement(p.a,{icon:v.c})," "+s.split(",")[0]+(u!==s?" - "+u.split(",")[0]:""))),r.a.createElement("ul",null))),r.a.createElement("div",{className:"list-card__fab"},r.a.createElement(f.a,{to:"/event/".concat(m)},r.a.createElement(p.a,{icon:v.a,size:"2x",color:"#eb6e80"}))))},g=function(e,t){var n=t.text,a=t.sortBy;return e.filter(function(e){return e.eventName.toLowerCase().includes(n.toLowerCase())}).sort(function(e,t){return"likes"===a?e.likes<t.likes?1:-1:"date"===a?e.createdAt<t.createdAt?1:-1:void 0})},h=Object(u.b)(function(e){return{events:g(e.events,e.filters)}})(function(e){return r.a.createElement("div",{className:"list"},0===e.events.length?r.a.createElement("p",null,"No blogs"):e.events.map(function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}))}),_=Object(u.b)(function(e){return{filters:e.filters}})(function(e){return r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group__item"},r.a.createElement("input",{type:"text",placeholder:"Search events",value:e.filters.text,onChange:function(t){e.dispatch(function(){return{type:"ADD_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t.target.value))}})),r.a.createElement("div",{className:"input-group__item"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"item"},r.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"male",checked:"likes"===e.filters.sortBy,onChange:function(){e.dispatch({type:"SORT_BY_LIKES"})}}),r.a.createElement("label",{title:"Sort by Likes",htmlFor:"male"},r.a.createElement(p.a,{icon:v.g}))),r.a.createElement("div",{className:"item"},r.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"female",checked:"date"===e.filters.sortBy,onChange:function(){e.dispatch({type:"SORT_BY_DATE"})}}),r.a.createElement("label",{title:"Recent",htmlFor:"female"},r.a.createElement(p.a,{icon:v.j}))))))}),N=n(17),O=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"blog-card"},r.a.createElement(h,null)),r.a.createElement("div",{className:"famous-card"}),r.a.createElement(N.a,{to:"/add",className:"button-floating"},r.a.createElement("button",null,r.a.createElement(p.a,{icon:v.h})))))},y=n(4),j=n(11),S=n.n(j),D=function(){return function(e){return S.a.get("/events").then(function(t){e({type:"SET_EVENTS",events:t.data})})}},I=n(118),T=n.n(I),L=n(202),k=function(){return function(e){return S.a.get("/user/profile").then(function(t){var n,a,r;e((n=t.data.credentials,a=t.data.notifications,r=t.data.follows,{type:"GET_AUTHENTICATED_USER",user:n,notifications:a,follows:r}))}).catch(function(e){return console.log(e.response)})}},U=function(){return function(e){return S.a.get("/userHandle").then(function(){var t=Object(L.a)(T.a.mark(function t(n){return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"GET_USERHANDLE",userHandle:n.data}),console.log(n.data),t.next=4,sessionStorage.setItem("userHandle",n.data);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return console.log(e.response)})}},R=function(e){var t="Bearer ".concat(e);sessionStorage.setItem("FBIdToken",t),S.a.defaults.headers.common.Authorization=t},w=n(114),A=n.n(w),x=n(87),C=n.n(x),H=Object(u.b)(function(e){return{error:e.auth.error,loading:e.auth.loading}},function(e){return{startSignUp:function(t){return e(function(e){return function(t){t({type:"LOADING_UI"}),S.a.post("/signup",e).then(function(e){R(e.data.token),t(U()).then(function(){t(k()).then(function(){t({type:"LOGIN"}),t({type:"UNLOADING_UI"})}),t(D())})}).catch(function(e){console.log(e.response),t({type:"SET_ERRORS",error:e.response?e.response.data.general||e.response.data.email||e.response.data.password||e.response.data.error:""})})}}(t))},setUIErrors:function(t){return e({type:"SET_ERRORS",error:t})},unsetError:function(){return e({type:"SET_ERRORS",error:""})}}})(function(e){var t=e.startSignUp,n=e.error,c=(e.setUIErrors,e.loading),o=e.unsetError,l=Object(a.useState)(""),i=Object(y.a)(l,2),s=i[0],u=i[1],m=Object(a.useState)(""),d=Object(y.a)(m,2),E=d[0],v=d[1],p=Object(a.useState)(""),b=Object(y.a)(p,2),g=b[0],h=b[1],_=Object(a.useState)(""),N=Object(y.a)(_,2),O=N[0],j=N[1],S=Object(a.useState)(""),D=Object(y.a)(S,2),I=D[0],T=D[1],L=Object(a.useState)(""),k=Object(y.a)(L,2);k[0],k[1];return r.a.createElement("div",{className:"box-layout"},r.a.createElement("div",{className:"box-layout__logo-outside animated fadeInDown delay-1s"}),c&&r.a.createElement("div",{class:"spinner"}),r.a.createElement("div",{className:"box-layout__signup-box animated fadeInRight delay-1s"},r.a.createElement(C.a,{className:"Tilt",options:{max:25}},r.a.createElement("h1",{className:"box-layout__title animated flash delay-2s"},"Ocassionly")),r.a.createElement("h2",{className:"box-layout__subtitle"},"Explore different activities held in RAIT"),r.a.createElement("div",{className:"box-layout__form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E===O&&t({email:s,name:I,password:E,confirmPassword:O,handle:g})}},r.a.createElement("input",{type:"text",value:I,placeholder:"Name",onChange:function(e){return T(e.target.value)}}),r.a.createElement("input",{type:"text",value:g,placeholder:"user handle",onChange:function(e){return h(e.target.value)}}),r.a.createElement("input",{type:"email",value:s,placeholder:"email",onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{type:"password",value:E,placeholder:"Password",onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{type:"password",value:O,placeholder:"confirm Password",onChange:function(e){return j(e.target.value)}}),r.a.createElement("button",{className:"button button-primary "},"Sign Up")),n&&(n&&alert(n),void o()),r.a.createElement("label",{className:"box-layout__question  animated infinite pulse"},"Already have an account?")," ",r.a.createElement(f.a,{to:"/"},"Login"))))}),G=function(){return r.a.createElement("div",null,"404 - ",r.a.createElement(N.a,{to:"/"},"Go home"))},B=n(119),V=Object(u.b)(function(e){return{error:e.auth.error,loading:e.auth.loading}},function(e){return{startLogin:function(t){return e(function(e){return function(t){return t({type:"LOADING_UI"}),S.a.post("/login",e).then(function(e){R(e.data.token),t(U()).then(function(){t(k()).then(function(){t({type:"LOGIN"})}),t(D()).then(function(){t({type:"UNLOADING_UI"})})})}).catch(function(e){console.log(e.response),t({type:"SET_ERRORS",error:e.response?e.response.data.general||e.response.data.err:""})})}}(t))},unsetError:function(){return e({type:"SET_ERRORS",error:""})}}})(function(e){var t=e.startLogin,n=e.error,c=e.unsetError,o=e.loading,l=Object(a.useState)(""),i=Object(y.a)(l,2),s=i[0],u=i[1],m=Object(a.useState)(""),d=Object(y.a)(m,2),E=d[0],v=d[1];return r.a.createElement("div",{className:"box-layout"},r.a.createElement("div",{className:"box-layout__logo-outside animated fadeInDown delay-1s"}),o&&r.a.createElement("div",{className:"spinner"}),r.a.createElement("div",{className:"box-layout__box  animated fadeInRight delay-1s"},r.a.createElement("div",{className:"box-layout__logo-inside"},r.a.createElement(C.a,{className:"Tilt",options:{max:25}},r.a.createElement("img",{src:"/images/logo.png",alt:""}),r.a.createElement("h1",{className:"box-layout__title animated flash delay-2s"},"Occasionly"),r.a.createElement("h2",{className:"box-layout__subtitle"},"Explore different activities held in RAIT"))),r.a.createElement("div",{className:"box-layout__form"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),A()(s)&&t({email:s,password:E}).then(function(){})}},r.a.createElement("input",{type:"email",value:s,onChange:function(e){return u(e.target.value)},placeholder:"email",className:"animated fadeInLeft delay-2s"}),r.a.createElement("input",{type:"password",value:E,onChange:function(e){return v(e.target.value)},placeholder:n?r.a.createElement("p",null,n):"password",className:"animated fadeInRight delay-2s"}),r.a.createElement("button",{className:"button button-primary"},"Login"),r.a.createElement("h5",null,"or login using"),r.a.createElement("div",{className:"box-layout__signin"},r.a.createElement("button",null,r.a.createElement(p.a,{icon:B.b,size:"3x"})),r.a.createElement("button",null,r.a.createElement(p.a,{icon:B.a,size:"3x"})))),n&&(n&&alert(n),void c()),r.a.createElement("label",{className:"box-layout__question animated infinite pulse"},"no account? "),r.a.createElement(f.a,{to:"/signup"},"Sign Up"))))}),F=n(120),M=(n(319),n(121)),P=function(e){var t=Object(a.useState)(e.event?e.event.eventName:""),n=Object(y.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(e.event?e.event.description:""),i=Object(y.a)(l,2),s=i[0],u=i[1],m=Object(a.useState)(e.event?e.event.imageUrl:""),E=Object(y.a)(m,2),f=E[0],v=E[1],p=Object(a.useState)(e.event?d()(e.event.startDate,"LL"):d()()),b=Object(y.a)(p,2),g=b[0],h=b[1],_=Object(a.useState)(e.event?d()(e.event.endDate,"LL"):d()()),N=Object(y.a)(_,2),O=N[0],j=N[1],S=Object(a.useState)(e.event?d()(e.event.startTime,"LT"):d()()),D=Object(y.a)(S,2),I=D[0],T=D[1],L=Object(a.useState)(e.event?d()(e.event.endTime,"LT"):d()()),k=Object(y.a)(L,2),U=k[0],R=k[1],w=Object(a.useState)(e.event?e.event.location:""),A=Object(y.a)(w,2),x=A[0],C=A[1],H=Object(a.useState)(e.event?e.event.fee:""),G=Object(y.a)(H,2),B=G[0],V=G[1],P=Object(a.useState)(null),Y=Object(y.a)(P,2),K=Y[0],z=Y[1],q=Object(a.useState)(!1),J=Object(y.a)(q,2),W=J[0],X=J[1],$=Object(a.useState)(""),Q=Object(y.a)($,2),Z=Q[0],ee=Q[1],te=Object(a.useState)(!1),ne=Object(y.a)(te,2),ae=(ne[0],ne[1],Object(a.useState)()),re=Object(y.a)(ae,2),ce=re[0],oe=re[1],le=Object(a.useState)(""),ie=Object(y.a)(le,2),se=ie[0],ue=ie[1],me=new FormData;return r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"form-image"},e.event?r.a.createElement("div",{className:"form-image-exist"},r.a.createElement("img",{src:f||e.event.imageUrl,alt:""})):f?r.a.createElement("img",{src:f,alt:""}):r.a.createElement("img",{src:"images/empty.jpg",alt:""}),r.a.createElement("input",{type:"file",hidden:"hidden",name:"",id:"imageChange",onChange:function(e){oe(e.target.files[0]);var t=URL.createObjectURL(e.target.files[0]);v(t),console.log(!!ce)}}),r.a.createElement("button",{className:"btn third",onClick:function(){document.getElementById("imageChange").click()}},e.event?"edit image":"add image")),r.a.createElement("form",{action:"",onSubmit:function(t){if(t.preventDefault(),c)if(s)if(x)if(B){ee("");var n={eventName:c,description:s,startDate:g.format("LL"),endDate:O.format("LL"),startTime:I.format("LT"),endTime:U.format("LT"),fee:B,location:x};me.append("eventName",c),me.append("description",s),me.append("startDate",g.format("LL")),me.append("endDate",O.format("LL")),me.append("startTime",I.format("LT")),me.append("endTime",U.format("LT")),me.append("fee",B),me.append("location",x),console.log(!!ce),ce&&me.append("image",ce,ce.name),console.log(n),e.onSubmit(me)}else ee("Please provide the fee.");else ee("Please provide the venue.");else ee("Please provide the description.");else ee("Please provide the Event name.")}},Z&&r.a.createElement("p",{className:"form__error"},Z),r.a.createElement("div",{className:"form-content__main"},r.a.createElement("input",{type:"text",placeholder:"Enter the title here",className:"form-title",value:c,onChange:function(e){o(e.target.value)}}),r.a.createElement("textarea",{placeholder:"A description for your event",className:"form-description",value:s,onChange:function(e){var t=e.target.value;u(t)}}),r.a.createElement("div",{className:"form-content__others"},r.a.createElement("div",{className:"form-content__others-others"},r.a.createElement("div",{className:"form-venue"},r.a.createElement("label",null,"Venue:"),r.a.createElement("input",{type:"text",className:"",value:x,onChange:function(e){C(e.target.value)}})),r.a.createElement("div",{className:"form-fees"},r.a.createElement("label",null,"Fees:"),r.a.createElement("div",{className:"form-fees__icon"},r.a.createElement("input",{type:"text",value:B,onChange:function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||V(t)}}))),r.a.createElement("div",{className:"form-time"},r.a.createElement("label",null,"Time:"),r.a.createElement(M.a,{onChange:function(e){T(e),console.log(e)},showSecond:!1,format:"h:mm a",use12Hours:!0,inputReadOnly:!0,value:I||d()()}),r.a.createElement("label",{className:"to"},"to"),r.a.createElement(M.a,{onChange:function(e){R(e),console.log(e)},showSecond:!1,format:"h:mm a",use12Hours:!0,inputReadOnly:!0,value:U||d()()}))),r.a.createElement("div",{className:"form-content__checkbox"},r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",onClick:function(){ue(!se)}}),r.a.createElement("label",null,"Multi-day Event?")),r.a.createElement("div",{className:"form-content__checkbox-calendar"},se?r.a.createElement(F.DateRangePicker,{startDate:g,startDateId:"datepicker_start_home",endDate:O,endDateId:"datepicker_end_home",onDatesChange:function(e){var t=e.startDate,n=e.endDate;h(t),j(n)},focusedInput:K,onFocusChange:function(e){z(e)},numberOfMonths:1,displayFormat:function(){return"DD/MM/YYYY"},isOutsideRange:function(){return!1}}):r.a.createElement(F.SingleDatePicker,{date:g,onDateChange:function(e){h(e),j(e)},focused:W,onFocusChange:function(e){var t=e.focused;X(t)},numberOfMonths:1,displayFormat:function(){return"DD/MM/YYYY"},isOutsideRange:function(){return!1}})))),r.a.createElement("button",{type:"submit",className:"button button-primary button-submit"},"Post"))))},Y=Object(u.b)(function(e){return{loading:e.auth.loading}},function(e){return{addEvent:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){S.a.post("../../event/create",e).then(function(e){t({type:"ADD_EVENT",event:e.data})}).catch(function(e){console.log(e.response)})}}(t))}}})(function(e){var t=e.addEvent,n=e.history,a=e.loading;return r.a.createElement("div",null,r.a.createElement("div",null,a&&r.a.createElement("div",{className:"spinner"}),r.a.createElement(P,{onSubmit:function(e){t(e),console.log(e.get("image")),n.push("/")}})))}),K=Object(u.b)(function(e,t){return{event:e.events.find(function(e){return e.id===t.match.params.id}),userHandle:e.user.userHandle,checkLike:e.user.checkLike}},function(e){return{likeEvent:function(t){return e((n=t,function(e){return S.a.post("../event/".concat(n,"/like")).then(function(t){e({type:"LIKE_EVENT",id:n})}).catch(function(e){e.response&&alert(e.response.data.error),console.log(e)})}));var n},unLikeEvent:function(t){return e((n=t,function(e){return S.a.post("../event/".concat(n,"/unlike")).then(function(t){e({type:"UNLIKE_EVENT",id:n})}).catch(function(e){e.response&&alert(e.response.data.error),console.log(e)})}));var n},checkLikeEvent:function(t){return e(function(e){return function(t){return S.a.get("".concat(e,"/checkLike")).then(function(e){return t({type:"CHECK_LIKE_EVENT",condition:e.data}),e.data}).catch(function(e){e.response&&alert(e.response.data),console.log(e)})}}(t))},registerEvent:function(t){return e((n=t,function(e){e({type:"LOADING_UI"}),S.a.post("../../event/".concat(n,"/register")).then(function(t){return e({type:"REGISTER_EVENT"}),alert(t.data.message),e({type:"UNLOADING_UI"}),te.goBack(),t.data}).catch(function(e){e.response&&alert(e.response.data.error),console.log(e)})}));var n},unRegisterEvent:function(t){return e((n=t,function(e){e({type:"LOADING_UI"}),S.a.post("../../event/".concat(n,"/unregister")).then(function(t){return e({type:"UNREGISTER_EVENT"}),alert(t.data.message),e({type:"UNLOADING_UI"}),te.goBack(),t.data}).catch(function(e){e.response&&alert(e.response.data.error),console.log(e)})}));var n}}})(function(e){var t=Object(a.useState)(e.event.likeCount),n=Object(y.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(e.checkLike),i=Object(y.a)(l,2),s=i[0],u=i[1],m=Object(a.useState)(e.event.members.hasOwnProperty(e.userHandle)),E=Object(y.a)(m,2),b=E[0],g=E[1],h=e.match.params.id;Object(a.useEffect)(function(){e.checkLikeEvent(h).then(function(e){u(e)})},[]),Object(a.useEffect)(function(){g(e.event.members.hasOwnProperty(e.userHandle))},[b]);return r.a.createElement("div",{className:"content-container event-card"},e.event.userHandle===e.userHandle&&r.a.createElement(f.a,{to:"../edit/".concat(e.event.id)},r.a.createElement("button",{className:"button button-edit"},r.a.createElement(p.a,{icon:v.f}),"Edit")),r.a.createElement("h2",{className:"event-card__title"},e.event.eventName),r.a.createElement("div",{className:"event-card__by"},r.a.createElement("div",{className:"event-card__by-name"},r.a.createElement("img",{src:e.event.userImageUrl,alt:""})," ",r.a.createElement(f.a,{to:"../user/".concat(e.event.userHandle)},r.a.createElement("p",null," ",e.event.userHandle),r.a.createElement("p",null,d()(e.event.createdAt).format("MMM do")))),r.a.createElement("div",{className:"event-card__by-like"},s?r.a.createElement("div",{className:"event-card__button"},r.a.createElement("button",{title:"unlike?",className:"btn-secondary",onClick:function(){e.unLikeEvent(h).then(function(){o(c-1),u(!1)})}},r.a.createElement(p.a,{icon:v.g})," ",c)):r.a.createElement("button",{title:"like?",className:"btn-primary",onClick:function(){e.likeEvent(h).then(function(){o(c+1),u(!0)})}},r.a.createElement(p.a,{icon:v.g})," ",c))),r.a.createElement("div",{className:"event-card__image"},r.a.createElement("img",{src:e.event.imageUrl,alt:""})),r.a.createElement("div",{className:"event-card__description"},r.a.createElement("p",null,e.event.description)),r.a.createElement("div",{className:"event-card__others"},r.a.createElement("div",null,r.a.createElement("p",null,"venue: ",e.event.location),r.a.createElement("p",null,"fee: ",e.event.fee)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(p.a,{icon:v.c})," "+e.event.startDate+(e.event.endDate!==e.event.startDate?" - "+e.event.endDate:"")),r.a.createElement("p",null,r.a.createElement(p.a,{icon:v.d})," "+e.event.startTime+" - "+e.event.endTime))),r.a.createElement("div",{className:"event-card__register"},!b&&r.a.createElement("button",{className:"btn-secondary button-register",onClick:function(){e.registerEvent(h)}},"Register"),e.userHandle!==e.event.userHandle&&r.a.createElement("button",{className:"btn-secondary button-join"},"join group chat"),b&&r.a.createElement("button",{className:"btn-secondary button-register",onClick:function(){e.unRegisterEvent(h)}},"Unregister")))}),z=Object(u.b)(function(e,t){return{user:t.handle?"":e.user.user,follows:e.user.follows}},function(e){return{getUserDetails:function(t){return e((n=t,function(e){return e({type:"LOADING_UI"}),S.a.get("/user/".concat(n)).then(function(t){var n=t.data;console.log(n);var a={user:n.user,follows:n.follows};return e({type:"UNLOADING_UI"}),a}).catch(function(e){return console.log(e.response)})}));var n}}})(function(e){var t=e.user,n=e.handle,c=e.getUserDetails,o=e.follows,l=Object(a.useState)([]),i=Object(y.a)(l,2),s=i[0],u=i[1],m=Object(a.useState)([]),d=Object(y.a)(m,2),E=d[0],f=d[1],v=Object(a.useState)([]),p=Object(y.a)(v,2),b=p[0],g=p[1];return Object(a.useEffect)(function(){n&&c(n).then(function(e){u(e.user),f(e.follows.followers),g(e.follows.following)})},[]),r.a.createElement("div",{className:"my-blogs__user-card"},r.a.createElement("img",{src:s.imageURL||t.imageURL,alt:""}),r.a.createElement("h2",null,s.name&&s.name||t.name&&t.name),r.a.createElement("h3",null,"userHandle: ",s.handle||t.handle),r.a.createElement("h3",null,"Followers:",E.length||o.followers.length),r.a.createElement("h3",null,"Following:",b.length||o.following.length),s.bio&&r.a.createElement("h3",null,"bio: ",s.bio)||t.bio&&r.a.createElement("h3",null,"bio: ",t.bio),r.a.createElement(N.a,{to:"edit"},r.a.createElement("button",{className:"button button-editProfile"},"Edit Profile")))}),q=Object(u.b)(function(e,t){return{event:e.events.find(function(e){return e.id===t.match.params.id}),loading:e.auth.loading}},function(e){return{editEvent:function(t,n){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){n({type:"LOADING_UI"}),S.a.post("../../event/".concat(e,"/edit"),t).then(function(t){return n(function(e,t){return{type:"EDIT_EVENT",id:e,update:t}}(e,t.data)),n({type:"UNLOADING_UI"}),te.goBack(),t.data})}}(t,n))},removeEvent:function(t){return e(function(e){return function(t){S.a.delete("../../event/".concat(e,"/cancel")).then(function(n){t(function(e){return{type:"REMOVE_EVENT",id:e}}(e)),window.alert(n.data.success),te.push("/dashboard")})}}(t))}}})(function(e){return r.a.createElement("div",null,e.loading&&r.a.createElement("div",{className:"spinner"}),r.a.createElement("button",{onClick:function(){window.confirm("Are you sure you want to delete this event?")&&e.removeEvent(e.event.id)},className:"button button-remove"},r.a.createElement(p.a,{icon:v.k})," Remove"),r.a.createElement(P,{onSubmit:function(t){e.editEvent(e.event.id,t)},event:e.event}))}),J=Object(u.b)(function(e){return{userHandle:e.user.userHandle,events:e.user.userEvents?e.user.userEvents:[]}},function(e){return{getUserEvents:function(t){return e(function(e){return function(t){return t({type:"LOADING_UI"}),console.log(123456),S.a.get("/user/".concat(e)).then(function(e){var n=e.data;return t({type:"GET_USER_EVENTS",events:n.events}),t({type:"UNLOADING_UI"}),n}).catch(function(e){return console.log(e.response)})}}(t))}}})(function(e){return Object(a.useEffect)(function(){console.log(e.handle||e.userHandle),e.getUserEvents(e.handle||e.userHandle)},[]),r.a.createElement(r.a.Fragment,null,0===e.events.length?r.a.createElement("p",null,"no events.."):e.events.map(function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}))}),W=function(e){return r.a.createElement("div",{className:"my-blogs"},r.a.createElement("div",{className:"my-blogs__blogs"},r.a.createElement(J,{handle:e.match.params.handle})),r.a.createElement("div",{className:"my-blogs__user"},r.a.createElement(z,{handle:e.match.params.handle})))},X=n(88),$=Object(u.b)(function(e){return{notifications:e.user.notifications,userHandle:e.user.userHandle}},function(e){return{logout:function(){return e(function(e){sessionStorage.removeItem("FBIdToken"),sessionStorage.removeItem("userHandle"),delete S.a.defaults.headers.common.Authorization,e({type:"LOGOUT"})})}}})(function(e){var t=Object(a.useState)(!1),n=Object(y.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(!1),i=Object(y.a)(l,2),s=(i[0],i[1]),u=function(){s(!1),document.removeEventListener("click",(void 0).hideDropdownMenu)};return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__content"},r.a.createElement("div",null,r.a.createElement(N.a,{to:"/dashboard",className:"header__title"},r.a.createElement("img",{src:"/images/logo.png",alt:""}),r.a.createElement("h1",null,"Ocassionly"))),r.a.createElement("div",{className:"header__links"},r.a.createElement("input",{type:"checkbox",id:"toggler"}),r.a.createElement("div",{id:"hamburger"},r.a.createElement("div",null)),r.a.createElement("div",{id:"desktop-menu"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("ul",{id:"menuToggle"},r.a.createElement(N.a,{to:"/add"},r.a.createElement("button",{className:"scale"},r.a.createElement(p.a,{icon:v.h}))),r.a.createElement("button",{title:"Chatroom for the events you joined",className:"header__chat-button scale"},r.a.createElement(p.a,{icon:v.e})),r.a.createElement("button",{title:"Notificiations",className:"header__notification-button scale","data-badge":e.notifications.length,onClick:function(){o(!c)}},r.a.createElement(p.a,{icon:v.b,size:"lg"})),r.a.createElement("div",{className:"button-dropdown"},r.a.createElement("button",{className:"button-dropbtn"},r.a.createElement(p.a,{icon:v.l,size:"lg"})),r.a.createElement("div",{className:"button-dropdown__content"},r.a.createElement("div",null,r.a.createElement(N.a,{to:"user"},r.a.createElement("button",{className:"button-logout"},e.userHandle))),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.logout,className:"button-logout"},"Logout")))))))),r.a.createElement("div",{id:"menu"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("button",{className:"header__chat-button"},"Chats ",r.a.createElement(p.a,{icon:v.e})),r.a.createElement("button",{className:"header__notification-button","data-badge":e.notifications.length,onClick:function(e){e.preventDefault(),s(!0),document.addEventListener("click",u)}},"Notifications ",r.a.createElement(p.a,{icon:v.b,size:"lg"})),r.a.createElement(N.a,{to:"user"},r.a.createElement("button",{className:"button-logout"},e.userHandle)),r.a.createElement("button",{onClick:e.logout,className:"button-logout"},"Logout",r.a.createElement(p.a,{icon:v.i}))))))),c&&r.a.createElement("ul",null,e.notifications.map(function(e){var t=e.notificationId?"/event/"+e.eventId:"/dashboard";return r.a.createElement(N.a,{to:t},r.a.createElement("button",null,e.sender," ","like"===e.type?"liked":"commented on"," your event"))}))))}),Q=Object(u.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}})(function(e){e.login;var t=e.isAuthenticated,n=e.component,a=Object(X.a)(e,["login","isAuthenticated","component"]);return r.a.createElement(l.Route,Object.assign({},a,{component:function(e){return!0===t?r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(n,e)):r.a.createElement(l.Redirect,{to:"/"})}}))}),Z=Object(u.b)(function(e){return{user:e.user.user}},function(e){return{addUserDetails:function(t){return e(function(e){return function(t){return S.a.post("/user",e).then(function(n){t(function(e){return{type:"ADD_USER_DETAILS",details:e}}(e)),te.goBack()}).catch(function(e){return console.log(e.response)})}}(t))},addUserImage:function(t){return e(function(e){return function(t){return t({type:"LOADING_UI"}),S.a.post("/user/image",e).then(function(e){return t({type:"ADD_USER_IMAGE",imageUrl:e.data}),t({type:"UNLOADING_UI"}),e.data}).catch(function(e){return console.log(e.response)})}}(t))}}})(function(e){var t=e.user,n=e.addUserDetails,c=e.addUserImage,o=Object(a.useState)(t.name),l=Object(y.a)(o,2),i=l[0],s=l[1],u=Object(a.useState)(t.college),m=Object(y.a)(u,2),d=m[0],E=m[1],f=Object(a.useState)(t.year),v=Object(y.a)(f,2),p=v[0],b=v[1],g=Object(a.useState)(t.contact_no),h=Object(y.a)(g,2),_=h[0],N=h[1],O=Object(a.useState)(t.imageUrl),j=Object(y.a)(O,2),S=j[0],D=j[1];return r.a.createElement("div",{className:"edit-user"},r.a.createElement("div",{className:"edit-user__image"},r.a.createElement("img",{src:S||t.imageURL,alt:""}),r.a.createElement("input",{type:"file",hidden:"hidden",name:"",id:"imageChange",onChange:function(e){var t=e.target.files[0],n=new FormData;n.append("image",t,t.name),console.log(1234),c(n).then(function(e){return D(e)})}}),r.a.createElement("button",{className:"btn third",onClick:function(){document.getElementById("imageChange").click()}},"Change Image")),r.a.createElement("div",{className:"edit-user__contents"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:i,college:d,year:p.toString(),contact_no:_};console.log(t),n(t)}},r.a.createElement("div",{className:"edit-user__userHandle"},r.a.createElement("h3",null,t.handle)),r.a.createElement("div",{className:"edit-user__contents-data"},r.a.createElement("div",{className:"edit-user__contents-data-flex"},r.a.createElement("h5",null,"Name:"),r.a.createElement("input",{type:"text",value:i||t.name,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"edit-user__contents-data-flex"},r.a.createElement("h5",null,"college:"),r.a.createElement("input",{type:"text",value:d||t.college,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"edit-user__contents-data-flex"},r.a.createElement("h5",null,"year:"),r.a.createElement("input",{type:"number",value:p||t.year,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"edit-user__contents-data-flex"},r.a.createElement("h5",null,"Number:"),r.a.createElement("input",{type:"text",value:_||t.contact_no,onChange:function(e){return N(e.target.value)}}))),r.a.createElement("button",{type:"submit",className:"button button-primary button-submit"},"submit"))))}),ee=Object(u.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}})(function(e){var t=e.isAuthenticated,n=e.component,a=Object(X.a)(e,["isAuthenticated","component"]);return r.a.createElement(l.Route,Object.assign({},a,{component:function(e){return t?r.a.createElement(l.Redirect,{to:"/dashboard"}):r.a.createElement(n,e)}}))}),te=s()(),ne=function(){return r.a.createElement(l.Router,{history:te},r.a.createElement("div",null,r.a.createElement(l.Switch,null,r.a.createElement(ee,{path:"/",component:V,exact:!0}),r.a.createElement(ee,{path:"/signup",component:H}),r.a.createElement(Q,{path:"/dashboard",component:O}),r.a.createElement(Q,{path:"/add",component:Y,exact:!0}),r.a.createElement(Q,{path:"/event/:id",component:K}),r.a.createElement(Q,{path:"/edit/:id",component:q}),r.a.createElement(Q,{path:"/user/:handle",component:W}),r.a.createElement(Q,{path:"/edit",component:Z,exact:!0}),r.a.createElement(Q,{path:"/user",component:W,exact:!0}),r.a.createElement(l.Route,{component:G}))))},ae=n(49),re=n(208),ce=n(12),oe={isAuthenticated:!1,loading:!1,user:{},error:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(ce.a)({},e,{isAuthenticated:!0});case"LOGOUT":return{isAuthenticated:!1};case"LOADING_UI":return Object(ce.a)({},e,{loading:!0});case"UNLOADING_UI":return Object(ce.a)({},e,{loading:!1});case"SET_ERRORS":return Object(ce.a)({},e,{loading:!1,error:t.error});case"CLEAR_ERRORS":return Object(ce.a)({},e,{loading:!1,error:null});case"UNSET_AUTHENTICATED":return Object(ce.a)({},e,{isAuthenticated:!1});default:return e}},ie=n(210),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_EVENTS":return t.events;case"ADD_EVENT":return[].concat(Object(ie.a)(e),[t.event]);case"EDIT_EVENT":return e.map(function(e){return t.id===e.id?Object(ce.a)({},e,t.update):e});case"REMOVE_EVENT":return e.filter(function(e){return e.id!==t.id});case"LIKE_EVENT":var n=e.findIndex(function(e){return e.id===t.id});return e[n].likeCount+=1,e;case"UNLIKE_EVENT":var a=e.findIndex(function(e){return e.id===t.id});return e[a].likeCount-=1,e;default:return e}},ue={checkLike:!0,user:{},notifications:[],follows:{following:[""],followers:[""]},userHandle:"",userEvents:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_LIKE_EVENT":return Object(ce.a)({},e,{checkLike:t.condition});case"GET_USERHANDLE":return Object(ce.a)({},e,{userHandle:t.userHandle});case"GET_USER_EVENTS":return Object(ce.a)({},e,{userEvents:t.events.map(function(e){return e})});case"ADD_USER_DETAILS":return Object(ce.a)({},e,{user:Object(ce.a)({},e.user,{college:t.details.college,year:t.details.year,contact_no:t.details.contact_no})});case"ADD_USER_IMAGE":return Object(ce.a)({},e,{user:Object(ce.a)({},e.user,{imageUrl:t.imageUrl})});case"GET_AUTHENTICATED_USER":return Object(ce.a)({},e,{user:t.user,notifications:t.notifications,follows:t.follows});default:return e}},de={text:"",sortBy:"likes",startDate:d()().startOf("month"),endDate:d()().endOf("month")},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FILTER":return Object(ce.a)({},e,{text:t.text});case"SET_START_DATE":return Object(ce.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(ce.a)({},e,{endDate:t.endDate});case"SORT_BY_LIKES":return Object(ce.a)({},e,{sortBy:"likes"});case"SORT_BY_DATE":return Object(ce.a)({},e,{sortBy:"date"});default:return e}},fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.d,ve=n(209),pe=n.n(ve),be=(n(379),n(380),n(381),n(382),n(383),Object(ae.e)(Object(ae.c)({auth:le,events:se,filters:Ee,user:me}),fe(Object(ae.a)(re.a)))),ge=r.a.createElement(u.a,{store:be},r.a.createElement(ne,null)),he=!1,_e=function(){he||(o.a.render(ge,document.getElementById("root")),he=!0)};o.a.render(r.a.createElement("p",null,"Loading..."),document.getElementById("root"));var Ne=sessionStorage.getItem("FBIdToken");Ne?1e3*pe()(Ne).exp<Date.now()?(be.dispatch({type:"LOGOUT"}),_e(),te.push("/")):(be.dispatch({type:"LOGIN"}),S.a.defaults.headers.common.Authorization=Ne,be.dispatch(U()),be.dispatch(k()),be.dispatch(D()).then(function(){_e(),"/"===te.location.pathname&&te.push("/dashboard")})):_e();"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[211,1,2]]]);
//# sourceMappingURL=main.a3b84264.chunk.js.map