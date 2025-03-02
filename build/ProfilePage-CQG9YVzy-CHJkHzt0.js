import{aM as x,u as g,bo as H,h as V,Y as $,aK as Q,k as Y,c3 as G,r as y,c8 as K,c9 as J,j as e,P as h,$ as W,t as X,L as S,S as Z,_ as ee,B as l,F as c,E as j,H as ae,ca as se,a$ as P,T as p,Q as d,a0 as w,D as re}from"./strapi-4h7MLEfG.js";import{g as te}from"./users-8N93LH7R-MOwOr-tf.js";import{C as ie}from"./validation-BUsrO5hO-CqXtSgQk.js";const oe=X().shape({...ie,currentPassword:j().when(["password","confirmPassword"],(r,a,t)=>r||a?t.required({id:ae.required.id,defaultMessage:"This field is required"}).nullable():t),preferedLanguage:j().nullable()}),he=()=>{const r=x(o=>o.admin_app.language.localeNames),{formatMessage:a}=g(),{trackUsage:t}=H(),{toggleNotification:s}=V(),{notifyStatus:i}=$(),T=x(o=>o.admin_app.theme.currentTheme),I=Q(),{_unstableFormatValidationErrors:E,_unstableFormatAPIError:L}=Y(),m=G("ProfilePage",o=>o.user);y.useEffect(()=>{m?i(a({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"})):s({type:"danger",message:a({id:"notification.error",defaultMessage:"An error occured"})})},[a,i,s,m]);const[A,{isLoading:R}]=K(),{isLoading:v,data:_,error:b}=J(void 0,{skip:!(window.strapi.isEE&&window.strapi.features.isEnabled("sso"))});y.useEffect(()=>{b&&s({type:"danger",message:a({id:"Settings.permissions.users.sso.provider.error"})})},[b,a,s]);const k=async(o,{setErrors:f})=>{const{confirmPassword:ce,currentTheme:M,...D}=o;let u=D;if(u.password===""){const{password:me,currentPassword:ue,...q}=u;u=q}const n=await A(u);"data"in n&&(I(se(M)),t("didChangeMode",{newMode:M}),s({type:"success",message:a({id:"notification.success.saved",defaultMessage:"Saved"})})),"error"in n&&(P(n.error)&&n.error.name==="ValidationError"?f(E(n.error)):P(n.error)?s({type:"danger",message:L(n.error)}):s({type:"danger",message:a({id:"notification.error",defaultMessage:"An error occured"})}))};if(v)return e.jsx(h.Loading,{});const z=_?.isSSOLocked??!1,{email:C,firstname:F,lastname:B,username:N,preferedLanguage:O}=m??{},U={email:C??"",firstname:F??"",lastname:B??"",username:N??"",preferedLanguage:O,currentTheme:T,confirmPassword:"",password:""};return e.jsxs(h.Main,{"aria-busy":R,children:[e.jsx(h.Title,{children:a({id:"Settings.profile.form.section.head.title",defaultMessage:"User profile"})}),e.jsx(W,{method:"PUT",onSubmit:k,initialValues:U,validationSchema:oe,children:({isSubmitting:o,modified:f})=>e.jsxs(e.Fragment,{children:[e.jsx(S.Header,{title:te(m),primaryAction:e.jsx(Z,{startIcon:e.jsx(ee,{}),loading:o,type:"submit",disabled:!f,children:a({id:"global.save",defaultMessage:"Save"})})}),e.jsx(l,{paddingBottom:10,children:e.jsx(S.Content,{children:e.jsxs(c,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(le,{}),!z&&e.jsx(ne,{}),e.jsx(de,{localeNames:r})]})})})]})})]})},ne=()=>{const{formatMessage:r}=g();return e.jsx(l,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(c,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(p,{variant:"delta",tag:"h2",children:r({id:"global.change-password",defaultMessage:"Change password"})}),[[{label:r({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",size:6,type:"password"}],[{autoComplete:"new-password",label:r({id:"global.password",defaultMessage:"Password"}),name:"password",size:6,type:"password"},{autoComplete:"new-password",label:r({id:"Auth.form.confirmPassword.label",defaultMessage:"Confirm Password"}),name:"confirmPassword",size:6,type:"password"}]].map((a,t)=>e.jsx(d.Root,{gap:5,children:a.map(({size:s,...i})=>e.jsx(d.Item,{col:s,direction:"column",alignItems:"stretch",children:e.jsx(w,{...i})},i.name))},t))]})})},de=({localeNames:r})=>{const{formatMessage:a}=g(),t=x(s=>s.admin_app.theme.availableThemes);return e.jsx(l,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(c,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(c,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(p,{variant:"delta",tag:"h2",children:a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})}),e.jsx(p,{children:a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.jsx(l,{tag:"a",color:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales",children:a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"})})})})]}),e.jsx(d.Root,{gap:5,children:[{hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),name:"preferedLanguage",options:Object.entries(r).map(([s,i])=>({label:i,value:s})),placeholder:a({id:"global.select",defaultMessage:"Select"}),size:6,type:"enumeration"},{hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),name:"currentTheme",options:[{label:a({id:"Settings.profile.form.section.experience.mode.option-system-label",defaultMessage:"Use system settings"}),value:"system"},...t.map(s=>({label:a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:s,defaultMessage:re(s)})}),value:s}))],placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),size:6,type:"enumeration"}].map(({size:s,...i})=>e.jsx(d.Item,{col:s,direction:"column",alignItems:"stretch",children:e.jsx(w,{...i})},i.name))})]})})},le=()=>{const{formatMessage:r}=g();return e.jsx(l,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(c,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(p,{variant:"delta",tag:"h2",children:r({id:"global.profile",defaultMessage:"Profile"})}),e.jsx(d.Root,{gap:5,children:[{label:r({id:"Auth.form.firstname.label",defaultMessage:"First name"}),name:"firstname",required:!0,size:6,type:"string"},{label:r({id:"Auth.form.lastname.label",defaultMessage:"Last name"}),name:"lastname",size:6,type:"string"},{label:r({id:"Auth.form.email.label",defaultMessage:"Email"}),name:"email",required:!0,size:6,type:"email"},{label:r({id:"Auth.form.username.label",defaultMessage:"Username"}),name:"username",size:6,type:"string"}].map(({size:a,...t})=>e.jsx(d.Item,{col:a,direction:"column",alignItems:"stretch",children:e.jsx(w,{...t})},t.name))})]})})};export{he as ProfilePage};
