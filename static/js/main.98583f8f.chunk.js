(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{17:function(e,t,n){e.exports={wrapper:"FinishedQuiz_wrapper__fhUrw",isFinished:"FinishedQuiz_isFinished__3bfwf",checkList:"FinishedQuiz_checkList__26cYB",result:"FinishedQuiz_result__3gB_P",buttonBlock:"FinishedQuiz_buttonBlock__3biFQ",success:"FinishedQuiz_success__2EeEd",error:"FinishedQuiz_error__2PlTT"}},18:function(e,t,n){e.exports={item:"ActiveQuiz_item__UvN09",top:"ActiveQuiz_top__38OvZ",head:"ActiveQuiz_head__2DV4j",counter:"ActiveQuiz_counter__3dYUG"}},22:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__k9oZ1",close:"Drawer_close__157sK"}},25:function(e,t,n){e.exports={Layout:"Layout_Layout__ACkHP",wrapper:"Layout_wrapper__2MgzN"}},28:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__21_pH",open:"MenuToggle_open__3GTM9"}},29:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__2THIz"}},30:function(e,t,n){e.exports={item:"AnswerItem_item__2JHjG",success:"AnswerItem_success__T60JS",error:"AnswerItem_error__CfsHe"}},31:function(e,t,n){e.exports={Button:"Button_Button__2Ajf-",primary:"Button_primary__CVuDV",success:"Button_success__qdwm8",error:"Button_error__A4xET"}},32:function(e,t,n){e.exports={Loader:"Loader_Loader__3cxM3",wrapper:"Loader_wrapper__YL9BV"}},33:function(e,t,n){e.exports={Auth:"Auth_Auth__7JmWy",btnblock:"Auth_btnblock__VgQZC"}},34:function(e,t,n){e.exports={Input:"Input_Input__SNRl4",invalid:"Input_invalid__1ZOur"}},35:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__2CeNk",answers:"QuizCreator_answers__2JwhW",btnblock:"QuizCreator_btnblock__1AT9q"}},47:function(e,t,n){e.exports={Header:"Header_Header__1CTzX"}},48:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__Vem4f"}},50:function(e,t,n){e.exports={list:"AnsweraList_list__3hJLg"}},52:function(e,t,n){e.exports={Select:"Select_Select__26ooE"}},53:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__EsJjC"}},59:function(e,t,n){},60:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),i=n(13),c=n(46),o=n.n(c),u=(n(59),n(60),n(2)),l=n(8),d=n(9),h=n(11),j=n(10),p=n(25),b=n.n(p),v=n(47),f=n.n(v),m=n(22),x=n.n(m),O=n(48),_=n.n(O),g=function(e){return Object(a.jsx)("div",{className:_.a.Backdrop,onClick:e.onClick})},w=[{to:"/",label:"QuizList",exact:!0},{to:"/auth",label:"Authentication",exact:!1},{to:"/quiz-creator",label:"Quiz-creator",exact:!1}],k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).renderLinks=function(){return w.map((function(t,n){return Object(a.jsx)("li",{children:Object(a.jsx)(i.c,{to:t.to,exact:t.exact,activeClassName:x.a.active,onClick:e.props.closeMenu,children:t.label})},n)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=[x.a.Drawer];return this.props.isOpen||e.push(x.a.close),Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("nav",{className:e.join(" "),children:Object(a.jsx)("ul",{children:this.renderLinks()})}),this.props.isOpen?Object(a.jsx)(g,{onClick:this.props.closeMenu}):null]})}}]),n}(s.Component),C=n(28),y=n.n(C),z=function(e){var t=[y.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(y.a.open)):t.push("fa-bars"),Object(a.jsx)("i",{className:t.join(" "),onClick:e.onToggle})},q=n.p+"static/media/logo.cc1b798b.svg",Q=function(e){return Object(a.jsxs)("header",{className:f.a.Header,children:[Object(a.jsx)(k,{isOpen:e.menu,closeMenu:e.closeMenu}),Object(a.jsx)(z,{onToggle:e.toggleMenu,isOpen:e.menu}),Object(a.jsx)(i.b,{to:"/",children:Object(a.jsx)("img",{src:q,alt:"logo"})})]})},S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.closeMenuHandler=function(){e.setState({menu:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:b.a.Layout,children:[Object(a.jsx)(Q,{menu:this.state.menu,toggleMenu:this.toggleMenuHandler,closeMenu:this.closeMenuHandler}),Object(a.jsx)("main",{className:b.a.wrapper,children:this.props.children})]})}}]),n}(s.Component),A=n(4),N=n.n(A),M=n(14),F=n(20),H=n(29),L=n.n(H),I=n(18),T=n.n(I),V=n(50),B=n.n(V),E=n(30),D=n.n(E),J=function(e){var t=[D.a.item];return e.answerState&&t.push(D.a[e.answerState]),Object(a.jsx)("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)},children:e.answer.text})},P=function(e){return Object(a.jsx)("ul",{className:B.a.list,children:e.answers.map((function(t,n){return Object(a.jsx)(J,{answer:t,onAnswerClick:e.onAnswerClick,answerState:e.answerState?e.answerState[t.id]:null},n)}))})},U=function(e){return Object(a.jsx)("div",{className:T.a.wrapper,children:Object(a.jsxs)("div",{className:T.a.item,children:[Object(a.jsxs)("div",{className:T.a.top,children:[Object(a.jsxs)("h2",{className:T.a.head,children:[Object(a.jsxs)("span",{children:[e.answerNumber,"."]})," ",e.question]}),Object(a.jsxs)("p",{className:T.a.counter,children:[e.answerNumber," of ",e.quizLenth]})]}),Object(a.jsx)(P,{answers:e.answers,onAnswerClick:e.onAnswerClick,answerState:e.answerState})]})})},Z=n(17),R=n.n(Z),G=n(31),K=n.n(G),W=function(e){var t=[K.a.Button,K.a[e.type]];return Object(a.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.children})},X=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return Object(a.jsxs)("div",{className:R.a.wrapper,children:[Object(a.jsxs)("h1",{className:R.a.isFinished,children:[" ",e.quiz.name," is finished"]}),Object(a.jsx)("ul",{className:R.a.checkList,children:e.quiz.map((function(t,n){var s=["fa","success"===e.results[t.id]?"fa-check":"fa-times",R.a[e.results[t.id]]];return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{children:[n+1,". "]}),t.question]}),Object(a.jsx)("i",{className:s.join(" ")})]},n)}))}),Object(a.jsxs)("p",{className:R.a.result,children:["Number of right answers: ",t," / ",e.quiz.length]}),Object(a.jsxs)("div",{className:R.a.buttonBlock,children:[Object(a.jsx)(W,{type:"primary",onClick:e.onRetry,children:"repeat"}),Object(a.jsx)(i.b,{to:"/",children:Object(a.jsx)(W,{type:"success",children:"test list"})})]})]})},Y=n(21),$=n.n(Y),ee=$.a.create({baseURL:"https://react-quizy-bcaf7-default-rtdb.firebaseio.com/"}),te=n(32),ne=n.n(te),ae=function(e){return Object(a.jsx)("div",{className:ne.a.wrapper,children:Object(a.jsx)("div",{className:ne.a.Loader})})},se=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={activeQuestion:0,isFinished:!1,answerState:null,results:{},quiz:[],loading:!0},e.onAnswerClickHandler=function(t){if(e.state.answerState){var n=Object.keys(e.state.answerState)[0];if("success"===e.state.answerState[n])return}var a=e.state.quiz[e.state.activeQuestion],s=e.state.results;if(a.rightAnswerId===t){s[a.id]||(s[a.id]="success"),e.setState({answerState:Object(F.a)({},t,"success")});var r=window.setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null}),window.clearTimeout(r)}),500)}else s[a.id]="error",e.setState({results:s,answerState:Object(F.a)({},t,"error")})},e.retryHandler=function(){e.setState({activeQuestion:0,isFinished:!1,answerState:null,results:{}})},e}return Object(d.a)(n,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"componentDidMount",value:function(){var e=Object(M.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("quizes/".concat(this.props.match.params.id,".json"));case 3:t=e.sent,n=t.data,this.setState({quiz:n,loading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{className:L.a.Quiz,children:[Object(a.jsx)("h1",{children:this.state.quizName}),this.state.loading?Object(a.jsx)(ae,{}):Object(a.jsx)("div",{className:L.a.wrapper,children:this.state.isFinished?Object(a.jsx)(X,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):Object(a.jsx)(U,{question:this.state.quiz[this.state.activeQuestion].question,answers:this.state.quiz[this.state.activeQuestion].answers,onAnswerClick:this.onAnswerClickHandler,quizLenth:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,answerState:this.state.answerState})})]})}}]),n}(s.Component),re=n(15),ie=n(33),ce=n.n(ie),oe=n(34),ue=n.n(oe),le=function(e){var t=function(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&n&&a},n=e.type||"text",s=[ue.a.Input],r="".concat(n,"-").concat(Math.random());return t(e)&&s.push(ue.a.invalid),Object(a.jsxs)("div",{className:s.join(" "),children:[Object(a.jsx)("label",{htmlFor:r,children:e.label}),Object(a.jsx)("input",{type:n,id:r,value:e.value,onChange:e.onChange}),t(e)?Object(a.jsx)("p",{children:e.errorMessage||"Check the correction on information"}):null]})},de=n(51),he=n.n(de);function je(e,t){return Object(re.a)(Object(re.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function pe(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim(" ")&&n),t.email&&(n=he.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}var be=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:'Enter correct email "example@test.com"',valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"Password",errorMessage:'Enter correct password "min: 6 symbols"',valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHandler=Object(M.a)(N.a.mark((function t(){var n,a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e.state.formControls.email.value,password:e.state.formControls.password.value,returnSecureToken:!0},t.prev=1,t.next=4,$.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVKXfuva7q5TVw-xF3o79M92y-MUDZECE",n);case 4:a=t.sent,console.log(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.registerHandler=Object(M.a)(N.a.mark((function t(){var n,a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e.state.formControls.email.value,password:e.state.formControls.password.value,returnSecureToken:!0},t.prev=1,t.next=4,$.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVKXfuva7q5TVw-xF3o79M92y-MUDZECE",n);case 4:a=t.sent,console.log(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,n){var a=Object(re.a)({},e.state.formControls),s=Object(re.a)({},a[n]);s.value=t.target.value,s.touched=!0,s.valid=pe(s.value,s.validation),a[n]=s;var r=!0;Object.keys(a).forEach((function(e){r=a[e].valid&&r})),e.setState({formControls:a,isFormValid:r})},e.renderInputs=function(){return Object.keys(e.state.formControls).map((function(t,n){var s=e.state.formControls[t];return Object(a.jsx)(le,{type:s.type,value:s.value,valid:s.valid,touched:s.touched,label:s.label,errorMessage:s.errorMessage,shouldValidate:!!s.validation,onChange:function(n){e.onChangeHandler(n,t)}},t+n)}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:ce.a.Auth,children:[Object(a.jsx)("h1",{children:"Authentication"}),Object(a.jsxs)("form",{onSubmit:this.submitHandler,children:[this.renderInputs(),Object(a.jsxs)("div",{className:ce.a.btnblock,children:[Object(a.jsx)(W,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid,children:"Login"}),Object(a.jsx)(W,{type:"primary",onClick:this.registerHandler,children:"Register"})]})]})]})}}]),n}(s.Component),ve=n(35),fe=n.n(ve),me=n(52),xe=n.n(me),Oe=function(e){var t="".concat(e.label,"-").concat(Math.random());return Object(a.jsxs)("div",{className:xe.a.Select,children:[Object(a.jsx)("label",{htmlFor:t,children:e.label}),Object(a.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.text},e.value+t)}))})]})},_e=function(e){return je({label:"Variant ".concat(e),errorMessage:"Value can't be empty",value:"",id:e},{required:!0})},ge=function(){return{question:je({label:"Enter the question",errorMessage:"Question can't be empty"},{required:!0}),option1:_e(1),option2:_e(2),option3:_e(3),option4:_e(4)}},we=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={quiz:[],isFormValid:!1,rightAnswerId:1,formControls:ge()},e.submitHandler=function(e){e.preventDefault()},e.addQuestionHandler=function(t){t.preventDefault();var n=e.state.quiz.concat(),a=n.length+1,s=e.state.formControls,r=s.question,i=s.option1,c=s.option2,o=s.option3,u=s.option4,l={question:r.value,id:a,rightAnswerId:e.state.rightAnswerId,answers:[{text:i.value,id:i.id},{text:c.value,id:c.id},{text:o.value,id:o.id},{text:u.value,id:u.id}]};n.push(l),e.setState({quiz:n,rightAnswerId:1,isFormValid:!1,formControls:ge()})},e.createQuizHandler=function(){var t=Object(M.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,ee.post("quizes.json",e.state.quiz);case 4:e.setState({quiz:[],isFormValid:!1,rightAnswerId:1,formControls:ge()}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),e.changeHandler=function(t,n){var a=Object(re.a)({},e.state.formControls),s=Object(re.a)({},a[n]);s.value=t,s.touched=!0,s.valid=pe(s.value,s.validation),a[n]=s;var r=!0;Object.keys(a).forEach((function(e){r=a[e].valid&&r})),e.setState({formControls:a,isFormValid:r})},e.renderInputs=function(){return Object.keys(e.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)(le,{type:r.type,value:r.value,valid:r.valid,touched:r.touched,label:r.label,errorMessage:r.errorMessage,shouldValidate:!!r.validation,onChange:function(n){e.changeHandler(n.target.value,t)}}),0===n?Object(a.jsx)("hr",{}):null]},n+t)}))},e.selectChangeHandler=function(t){e.setState({rightAnswerId:+t.target.value})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:fe.a.QuizCreator,children:[Object(a.jsx)("h1",{children:"QuizCreator "}),Object(a.jsxs)("form",{onSubmit:this.submitHandler,children:[this.renderInputs(),Object(a.jsx)(Oe,{label:"Select the right answer",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]}),Object(a.jsxs)("div",{className:fe.a.btnblock,children:[Object(a.jsx)(W,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid,children:"Add question"}),Object(a.jsx)(W,{type:"success",onClick:this.createQuizHandler,disabled:0===this.state.quiz.length,children:"Create quiz"})]})]})]})}}]),n}(s.Component),ke=n(53),Ce=n.n(ke),ye=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={quizes:[],loading:!0},e}return Object(d.a)(n,[{key:"renderQuizList",value:function(){return this.state.quizes.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)(i.c,{to:"/quiz/"+e.id,children:e.name})},e.id)}))}},{key:"componentDidMount",value:function(){var e=Object(M.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee.get("quizes.json");case 3:t=e.sent,console.log(t.data),n=[],Object.keys(t.data).forEach((function(e,t){n.push({id:e,name:"Test ".concat(t+1)})})),this.setState({quizes:n,loading:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)("div",{className:Ce.a.QuizList,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"QuizList"}),this.state.loading?Object(a.jsx)(ae,{}):Object(a.jsx)("ul",{children:this.renderQuizList()})]})})}}]),n}(s.Component);var ze=function(){return Object(a.jsx)(S,{children:Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{path:"/auth",component:be}),Object(a.jsx)(u.a,{path:"/quiz/:id",component:se}),Object(a.jsx)(u.a,{path:"/quiz-creator",component:we}),Object(a.jsx)(u.a,{path:"/",component:ye})]})})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))},Qe=Object(a.jsx)(i.a,{children:Object(a.jsx)(ze,{})});o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Qe}),document.getElementById("root")),qe()}},[[84,1,2]]]);
//# sourceMappingURL=main.98583f8f.chunk.js.map