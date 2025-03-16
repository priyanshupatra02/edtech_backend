import{j as e,P as d,fR as E,u as z,i as C,k as S,r as x,aF as L,q as T,ez as I,s as w,fk as i,L as f,U as R,a0 as A,F as m,B as F,T as P,S as r,W as a,X as h,fS as N}from"./strapi-6fXDAyIt.js";const H=t=>t,_={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},q=(t,n)=>L(t,o=>{switch(n.type){case"GET_DATA_SUCCEEDED":{o.initialData=n.data,o.modifiedData=n.data;break}case"ON_CHANGE":{N(o,["modifiedData",...n.keys.split(".")],n.value);break}default:return t}}),G=()=>{const{formatMessage:t}=z(),{toggleNotification:n}=C(),{get:o,put:j}=S(),[{initialData:y,modifiedData:l},p]=x.useReducer(q,_,H),{data:c,isLoading:M,refetch:O}=T({queryKey:["upload","settings"],async queryFn(){const{data:{data:s}}=await o("/upload/settings");return s}});x.useEffect(()=>{c&&p({type:"GET_DATA_SUCCEEDED",data:c})},[c]);const b=I(y,l),{mutateAsync:D,isLoading:v}=w(async s=>{const{data:u}=await j("/upload/settings",s);return u},{onSuccess(){O(),n({type:"success",message:t({id:"notification.form.success.fields"})})},onError(s){console.error(s)}}),k=async s=>{s.preventDefault(),!b&&await D(l)},g=({target:{name:s,value:u}})=>{p({type:"ON_CHANGE",keys:s,value:u})};return M?e.jsx(d.Loading,{}):e.jsxs(d.Main,{tabIndex:-1,children:[e.jsx(d.Title,{children:t({id:i("page.title"),defaultMessage:"Settings - Media Libray"})}),e.jsxs("form",{onSubmit:k,children:[e.jsx(f.Header,{title:t({id:i("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.jsx(R,{disabled:b,loading:v,type:"submit",startIcon:e.jsx(A,{}),size:"S",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:i("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.jsx(f.Content,{children:e.jsx(f.Root,{children:e.jsx(m,{direction:"column",alignItems:"stretch",gap:12,children:e.jsx(F,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(m,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(m,{children:e.jsx(P,{variant:"delta",tag:"h2",children:t({id:i("settings.blockTitle"),defaultMessage:"Asset management"})})}),e.jsxs(r.Root,{gap:6,children:[e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{hint:t({id:i("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),name:"responsiveDimensions",children:[e.jsx(a.Label,{children:t({id:i("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"})}),e.jsx(h,{checked:l?.responsiveDimensions,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"responsiveDimensions",value:s.target.checked}})}}),e.jsx(a.Hint,{})]})}),e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{hint:t({id:i("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),name:"sizeOptimization",children:[e.jsx(a.Label,{children:t({id:i("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"})}),e.jsx(h,{checked:l?.sizeOptimization,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"sizeOptimization",value:s.target.checked}})}}),e.jsx(a.Hint,{})]})}),e.jsx(r.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{hint:t({id:i("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),name:"autoOrientation",children:[e.jsx(a.Label,{children:t({id:i("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"})}),e.jsx(h,{checked:l?.autoOrientation,offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{g({target:{name:"autoOrientation",value:s.target.checked}})}}),e.jsx(a.Hint,{})]})})]})]})})})})})]})]})},U=()=>e.jsx(d.Protect,{permissions:E.settings,children:e.jsx(G,{})});export{U as ProtectedSettingsPage,G as SettingsPage};
