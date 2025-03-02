import{cE as be,j as e,cF as xe,cG as je,bn as W,m as ee,P as L,B as v,cH as ve,cI as te,r as R,u as w,cJ as Ie,cK as Ce,cL as Me,aN as E,cM as Te,cN as we,cO as _,b8 as Z,b as Q,a6 as G,bw as H,F as h,ba as Fe,a5 as Ae,bo as Le,h as Re,bj as K,L as ne,S as Y,a7 as Ve,T as b,bk as De,ap as Be,cP as se,$ as q,b5 as ke,ax as Pe,cQ as Se,cR as ze,Q as P,b7 as ie,cS as Ne,cT as Ee,cU as ae,bR as He,cV as S,cd as re,cW as Ue,U as O,a0 as U,d as oe,aU as de,b6 as $e,a9 as qe}from"./strapi-4h7MLEfG.js";import{u as le}from"./hooks-E5u1mcgM-NfsT1r9L.js";import{u as Oe,a as We,b as _e,N as Qe,M as Ge,c as Ze,D as Ke,d as Ye,e as Je}from"./Input-CZ1YvjHR-CakCGHe4.js";import{g as Xe}from"./relations-BakOFl_1-B4V0ZEZU.js";import"./usePrev-CZGy2Vjf-CoWZN5n0.js";import"./useDragAndDrop-DJ6jqvZN-BnyD3SbJ.js";import"./objects-D6yBsdmx-PH_bI24n.js";import"./Relations-C2Ahkrdg-CDLgMxa6.js";import"./getEmptyImage-CjqolaH3.js";import"./ComponentIcon-u4bIXTFY-lJgeV5Sp.js";const z=oe(qe).attrs({closeLabel:"Close",onClose:()=>{},shadow:"none"})`
  button {
    display: none;
  }
`,et=oe(Q)`
  display: block;

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,tt=n=>{const{formatMessage:s}=w(),i=de(n.name);let a;if(i&&(a=Array.isArray(i.value)?{results:i.value,meta:{missingCount:0}}:i.value),!a||a.results.length===0&&a.meta.missingCount===0)return e.jsxs(e.Fragment,{children:[e.jsx(O.Label,{action:n.labelAction,children:n.label}),e.jsx(v,{marginTop:1,children:e.jsx(z,{variant:"default",children:s({id:"content-manager.history.content.no-relations",defaultMessage:"No relations."})})})]});const{results:t,meta:r}=a;return e.jsxs(v,{children:[e.jsx(O.Label,{children:n.label}),t.length>0&&e.jsx(h,{direction:"column",gap:2,marginTop:1,alignItems:"stretch",children:t.map(d=>{const{targetModel:c}=n.attribute,y=`../${_}/${c}/${d.documentId}`,f=Xe(d,n.mainField),I=c==="admin::user";return e.jsxs(h,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderColor:"neutral200",background:"neutral150",justifyContent:"space-between",children:[e.jsx(v,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4,children:e.jsx($e,{label:f,children:I?e.jsx(b,{children:f}):e.jsx(et,{tag:G,to:y,children:f})})}),e.jsx(ae,{status:d.status})]},d.documentId??d.id)})}),r.missingCount>0&&e.jsx(z,{marginTop:1,variant:"warning",title:s({id:"content-manager.history.content.missing-relations.title",defaultMessage:"{number, plural, =1 {Missing relation} other {{number} missing relations}}"},{number:r.missingCount}),children:s({id:"content-manager.history.content.missing-relations.message",defaultMessage:"{number, plural, =1 {It has} other {They have}} been deleted and can't be restored."},{number:r.missingCount})})]})},nt=(n,s)=>{const i=n.split("."),a={};let t=a;return i.forEach((r,d)=>{r==="__proto__"||r==="constructor"||(d===i.length-1?t[r]=s:t[r]=t[r]||{},t=t[r])}),a},st=n=>{const{value:s}=de(n.name),i=s?.results??[],a=s?.meta??{missingCount:0},{formatMessage:t}=w(),d=re("CustomMediaInput",c=>c.fields).media;return e.jsxs(h,{direction:"column",gap:2,alignItems:"stretch",children:[e.jsx(q,{method:"PUT",disabled:!0,initialValues:nt(n.name,i),children:e.jsx(d,{...n,disabled:!0,multiple:i.length>1})}),a.missingCount>0&&e.jsx(z,{variant:"warning",closeLabel:"Close",onClose:()=>{},title:t({id:"content-manager.history.content.missing-assets.title",defaultMessage:"{number, plural, =1 {Missing asset} other {{number} missing assets}}"},{number:a.missingCount}),children:t({id:"content-manager.history.content.missing-assets.message",defaultMessage:"{number, plural, =1 {It has} other {They have}} been deleted in the Media Library and can't be restored."},{number:a.missingCount})})]})},it=n=>{if(!R.isValidElement(n))return n;const s=n.props.title.id;return s==="i18n.Field.localized"?R.cloneElement(n,{...n.props,title:{id:"history.content.localized",defaultMessage:"This value is specific to this locale. If you restore this version, the content will not be replaced for other locales."}}):s==="i18n.Field.not-localized"?R.cloneElement(n,{...n.props,title:{id:"history.content.not-localized",defaultMessage:"This value is common to all locales. If you restore this version and save the changes, the content will be replaced for all locales."}}):n},N=({visible:n,hint:s,shouldIgnoreRBAC:i=!1,labelAction:a,...t})=>{const r=it(a),{formatMessage:d}=w(),c=C("VersionContent",o=>o.selectedVersion),y=C("VersionContent",o=>o.configuration),f=le(o=>o["content-manager"].app.fieldSizes),{id:I,components:T}=se(),l=He("InputRenderer",o=>o.disabled),g=Oe("isInDynamicZone",o=>o.isInDynamicZone),m=S("InputRenderer",o=>o.canCreateFields),F=S("InputRenderer",o=>o.canReadFields),M=S("InputRenderer",o=>o.canUpdateFields),A=S("InputRenderer",o=>o.canUserAction),p=I?M:m,V=I?F:m,D=A(t.name,V,t.type),u=A(t.name,p,t.type),k=re("InputRenderer",o=>o.fields),{lazyComponentStore:me}=We($(t.attribute)?[t.attribute.customField]:void 0),x=_e(s,t.attribute),{edit:{components:ge}}=Ue();if(!n)return null;if(!i&&!D&&!g)return e.jsx(Qe,{hint:x,...t});const j=!u&&!g||t.disabled||l,he=c.meta.unknownAttributes.added;if(Object.keys(he).includes(t.name))return e.jsxs(h,{direction:"column",alignItems:"flex-start",gap:1,children:[e.jsx(O.Label,{children:t.label}),e.jsx(z,{width:"100%",closeLabel:"Close",onClose:()=>{},variant:"warning",title:d({id:"content-manager.history.content.new-field.title",defaultMessage:"New field"}),children:d({id:"content-manager.history.content.new-field.message",defaultMessage:"This field didn't exist when this version was saved. If you restore this version, it will be empty."})})]});if($(t.attribute)){const o=me[t.attribute.customField];return o?e.jsx(o,{...t,hint:x,labelAction:r,disabled:j}):e.jsx(U,{...t,hint:x,labelAction:r,type:t.attribute.customField,disabled:j})}if(t.type==="media")return e.jsx(st,{...t,labelAction:r,disabled:j});const ye=Object.keys(k);if(!$(t.attribute)&&ye.includes(t.type)){const o=k[t.type];return e.jsx(o,{...t,hint:x,labelAction:r,disabled:j})}switch(t.type){case"blocks":return e.jsx(Je,{...t,hint:x,type:t.type,disabled:j});case"component":const{layout:o}=ge[t.attribute.component],[fe]=ue({layout:[o],metadatas:y.components[t.attribute.component].metadatas,fieldSizes:f,schemaAttributes:T[t.attribute.component].attributes});return e.jsx(Ye,{...t,layout:[...o,...fe||[]],hint:x,labelAction:r,disabled:j,children:B=>e.jsx(N,{...B,shouldIgnoreRBAC:!0})});case"dynamiczone":return e.jsx(Ke,{...t,hint:x,labelAction:r,disabled:j,children:B=>e.jsx(N,{...B,shouldIgnoreRBAC:!0})});case"relation":return e.jsx(tt,{...t,hint:x,labelAction:r,disabled:j});case"richtext":return e.jsx(Ze,{...t,hint:x,type:t.type,labelAction:r,disabled:j});case"uid":return e.jsx(Ge,{...t,hint:x,type:t.type,labelAction:r,disabled:j});case"enumeration":return e.jsx(U,{...t,hint:x,labelAction:r,options:t.attribute.enum.map(B=>({value:B})),type:t.customField?"custom-field":t.type,disabled:j});default:const{unique:ft,mainField:pt,...pe}=t;return e.jsx(U,{...pe,hint:x,labelAction:r,type:t.customField?"custom-field":t.type,disabled:j})}},$=n=>"customField"in n&&typeof n.customField=="string",ce=n=>n.reduce((s,i)=>i.type==="dynamiczone"?(s.push([i]),s):(s[s.length-1]||s.push([]),s[s.length-1].push(i),s),[]).map(s=>[s]);function ue({layout:n,metadatas:s,schemaAttributes:i,fieldSizes:a}){const t=n.flatMap(d=>d.flatMap(c=>c.flatMap(y=>y.name))),r=Object.entries(s).reduce((d,[c,y])=>{if(!t.includes(c)&&y.edit.visible===!0){const f=i[c];d.push({attribute:f,type:f.type,visible:!0,disabled:!0,label:y.edit.label||c,name:c,size:a[f.type].default??12})}return d},[]);return ce(r)}const J=({panel:n})=>{if(n.some(s=>s.some(i=>i.type==="dynamiczone"))){const[s]=n,[i]=s;return e.jsx(P.Root,{gap:4,children:e.jsx(P.Item,{col:12,s:12,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(N,{...i})})},i.name)}return e.jsx(v,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150",children:e.jsx(h,{direction:"column",alignItems:"stretch",gap:6,children:n.map((s,i)=>e.jsx(P.Root,{gap:4,children:s.map(({size:a,...t})=>e.jsx(P.Item,{col:a,s:12,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(N,{...t})},t.name))},i))})})},at=()=>{const{formatMessage:n}=w(),{fieldSizes:s}=le(l=>l["content-manager"].app),i=C("VersionContent",l=>l.selectedVersion),a=C("VersionContent",l=>l.layout),t=C("VersionContent",l=>l.configuration),r=C("VersionContent",l=>l.schema),d=i.meta.unknownAttributes.removed,c=Object.entries(d).map(([l,g])=>({attribute:g,shouldIgnoreRBAC:!0,type:g.type,visible:!0,disabled:!0,label:l,name:l,size:s[g.type].default??12})),y=ce(c),f=ue({metadatas:t.contentType.metadatas,layout:a,schemaAttributes:r.attributes,fieldSizes:s}),{components:I}=se(),T=R.useMemo(()=>((g,m={})=>F=>{const M={attributes:g};return Pe(Se(M),ze(M,m))(F)})(i.schema,I)(i.data),[I,i.data,i.schema]);return e.jsxs(ne.Content,{children:[e.jsx(v,{paddingBottom:8,children:e.jsx(q,{disabled:!0,method:"PUT",initialValues:T,children:e.jsx(h,{direction:"column",alignItems:"stretch",gap:6,position:"relative",children:[...a,...f].map((l,g)=>e.jsx(J,{panel:l},g))})})}),c.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(ke,{}),e.jsxs(v,{paddingTop:8,children:[e.jsxs(h,{direction:"column",alignItems:"flex-start",paddingBottom:6,gap:1,children:[e.jsx(b,{variant:"delta",children:n({id:"content-manager.history.content.unknown-fields.title",defaultMessage:"Unknown fields"})}),e.jsx(b,{variant:"pi",children:n({id:"content-manager.history.content.unknown-fields.message",defaultMessage:"These fields have been deleted or renamed in the Content-Type Builder. <b>These fields will not be restored.</b>"},{b:l=>e.jsx(b,{variant:"pi",fontWeight:"bold",children:l})})})]}),e.jsx(q,{disabled:!0,method:"PUT",initialValues:i.data,children:e.jsx(h,{direction:"column",alignItems:"stretch",gap:6,position:"relative",children:y.map((l,g)=>e.jsx(J,{panel:l},g))})})]})]})]})},rt=we.injectEndpoints({endpoints:n=>({getHistoryVersions:n.query({query(s){return{url:"/content-manager/history-versions",method:"GET",config:{params:s}}},providesTags:["HistoryVersion"]}),restoreVersion:n.mutation({query({params:s,body:i}){return{url:`/content-manager/history-versions/${s.versionId}/restore`,method:"PUT",data:i}},invalidatesTags:(s,i,{documentId:a,collectionType:t,params:r})=>["HistoryVersion",{type:"Document",id:t===_?`${r.contentType}_${a}`:r.contentType}]})})}),{useGetHistoryVersionsQuery:ot,useRestoreVersionMutation:dt}=rt,lt=({headerId:n})=>{const[s,i]=R.useState(!1),a=Ae(),{formatMessage:t,formatDate:r}=w(),{trackUsage:d}=Le(),{toggleNotification:c}=Re(),[{query:y}]=E(),{collectionType:f,slug:I}=W(),[T,{isLoading:l}]=dt(),{allowedActions:g}=ee(te.map(u=>({action:u,subject:I}))),m=C("VersionHeader",u=>u.selectedVersion),F=C("VersionHeader",u=>u.mainField),M=C("VersionHeader",u=>u.schema),A=C("VersionHeader",u=>u.page===1&&u.versions.data[0].id===u.selectedVersion.id),p=m.data[F],V=()=>({pathname:"..",search:H.stringify({plugins:y.plugins},{encode:!1})}),D=async()=>{try{const u=await T({documentId:m.relatedDocumentId,collectionType:f,params:{versionId:m.id,contentType:m.contentType},body:{contentType:m.contentType}});"data"in u&&(a(V(),{relative:"path"}),c({type:"success",title:t({id:"content-manager.restore.success.title",defaultMessage:"Version restored."}),message:t({id:"content-manager.restore.success.message",defaultMessage:"A past version of the content was restored."})}),d("didRestoreHistoryVersion")),"error"in u&&c({type:"danger",message:t({id:"content-manager.history.restore.error.message",defaultMessage:"Could not restore version."})})}catch{c({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}};return e.jsxs(K.Root,{open:s,onOpenChange:i,children:[e.jsx(ne.BaseHeader,{id:n,title:r(new Date(m.createdAt),{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}),subtitle:e.jsx(b,{variant:"epsilon",textColor:"neutral600",children:t({id:"content-manager.history.version.subtitle",defaultMessage:"{hasLocale, select, true {{subtitle}, in {locale}} other {{subtitle}}}"},{hasLocale:!!m.locale,subtitle:`${p||""} (${M.info.singularName})`.trim(),locale:m.locale?.name})}),navigationAction:e.jsx(Q,{startIcon:e.jsx(Ve,{}),tag:G,to:V(),relative:"path",isExternal:!1,children:t({id:"global.back",defaultMessage:"Back"})}),sticky:!1,primaryAction:e.jsx(K.Trigger,{children:e.jsx(Y,{disabled:!g.canUpdate||A,onClick:()=>{i(!0)},children:t({id:"content-manager.history.restore.confirm.button",defaultMessage:"Restore"})})})}),e.jsx(De,{onConfirm:D,endAction:e.jsx(Y,{variant:"secondary",onClick:D,loading:l,children:t({id:"content-manager.history.restore.confirm.button",defaultMessage:"Restore"})}),children:e.jsxs(h,{direction:"column",alignItems:"center",justifyContent:"center",gap:2,textAlign:"center",children:[e.jsx(h,{justifyContent:"center",children:e.jsx(Be,{width:"24px",height:"24px",fill:"danger600"})}),e.jsx(b,{children:t({id:"content-manager.history.restore.confirm.title",defaultMessage:"Are you sure you want to restore this version?"})}),e.jsx(b,{children:t({id:"content-manager.history.restore.confirm.message",defaultMessage:"{isDraft, select, true {The restored content will override your draft.} other {The restored content won't be published, it will override the draft and be saved as pending changes. You'll be able to publish the changes at anytime.}}"},{isDraft:m.status==="draft"})})]})})]})},ct=n=>e.jsx(b,{textColor:"primary600",variant:"pi",children:n}),ut=({version:n,isCurrent:s})=>{const{formatDate:i,formatMessage:a}=w(),[{query:t}]=E(),r=t.id===n.id.toString(),d=n.createdBy&&Ne(n.createdBy);return e.jsxs(h,{direction:"column",alignItems:"flex-start",gap:3,hasRadius:!0,borderWidth:"1px",borderStyle:"solid",borderColor:r?"primary600":"neutral200",color:"neutral800",padding:5,tag:ie,to:`?${H.stringify({...t,id:n.id})}`,style:{textDecoration:"none"},children:[e.jsxs(h,{direction:"column",gap:1,alignItems:"flex-start",children:[e.jsx(b,{tag:"h3",fontWeight:"semiBold",children:i(n.createdAt,{day:"numeric",month:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}),e.jsx(b,{tag:"p",variant:"pi",textColor:"neutral600",children:a({id:"content-manager.history.sidebar.versionDescription",defaultMessage:"{distanceToNow}{isAnonymous, select, true {} other { by {author}}}{isCurrent, select, true { <b>(current)</b>} other {}}"},{distanceToNow:e.jsx(Ee,{timestamp:new Date(n.createdAt)}),author:d,isAnonymous:!n.createdBy,isCurrent:s,b:ct})})]}),n.status&&e.jsx(ae,{status:n.status,size:"XS"})]})},X=({page:n,children:s})=>{const[{query:i}]=E(),{id:a,...t}=i;return e.jsx(ie,{to:{search:H.stringify({...t,page:n})},style:{textDecoration:"none"},children:e.jsx(b,{variant:"omega",textColor:"primary600",children:s})})},mt=()=>{const{formatMessage:n}=w(),{versions:s,page:i}=C("VersionsList",a=>({versions:a.versions,page:a.page}));return e.jsxs(h,{shrink:0,direction:"column",alignItems:"stretch",width:"320px",height:"100vh",background:"neutral0",borderColor:"neutral200",borderWidth:"0 0 0 1px",borderStyle:"solid",tag:"aside",children:[e.jsxs(h,{direction:"row",justifyContent:"space-between",padding:4,borderColor:"neutral200",borderWidth:"0 0 1px",borderStyle:"solid",tag:"header",children:[e.jsx(b,{tag:"h2",variant:"omega",fontWeight:"semiBold",children:n({id:"content-manager.history.sidebar.title",defaultMessage:"Versions"})}),e.jsx(v,{background:"neutral150",hasRadius:!0,padding:1,children:e.jsx(b,{variant:"sigma",textColor:"neutral600",children:s.meta.pagination.total})})]}),e.jsxs(v,{flex:1,overflow:"auto",children:[s.meta.pagination.page>1&&e.jsx(v,{paddingTop:4,textAlign:"center",children:e.jsx(X,{page:i-1,children:n({id:"content-manager.history.sidebar.show-newer",defaultMessage:"Show newer versions"})})}),e.jsx(h,{direction:"column",gap:3,padding:4,tag:"ul",alignItems:"stretch",children:s.data.map((a,t)=>e.jsx("li",{"aria-label":n({id:"content-manager.history.sidebar.title.version-card.aria-label",defaultMessage:"Version card"}),children:e.jsx(ut,{version:a,isCurrent:i===1&&t===0})},a.id))}),s.meta.pagination.page<s.meta.pagination.pageCount&&e.jsx(v,{paddingBottom:4,textAlign:"center",children:e.jsx(X,{page:i+1,children:n({id:"content-manager.history.sidebar.show-older",defaultMessage:"Show older versions"})})})]})]})},[gt,C]=be("HistoryPage"),ht=()=>{const n=R.useId(),{formatMessage:s}=w(),{slug:i,id:a,collectionType:t}=W(),{isLoading:r,schema:d}=Ie({collectionType:t,model:i}),{isLoading:c,edit:{layout:y,settings:{displayName:f,mainField:I}}}=Ce(i),{data:T,isLoading:l}=Me(i),[{query:g}]=E(),{id:m,...F}=g,M=Te(F),A=M.page?Number(M.page):1,p=ot({contentType:i,...a?{documentId:a}:{},...M},{refetchOnMountOrArgChange:!0}),V=R.useRef(p.requestId),D=p.requestId===V.current;if(!i||t===_&&!a)return e.jsx(Z,{to:"/content-manager"});if(r||c||p.isFetching||D||l)return e.jsx(L.Loading,{});if(!p.isError&&!p.data?.data?.length)return e.jsx(e.Fragment,{children:e.jsx(L.NoData,{action:e.jsx(Q,{tag:G,to:`/content-manager/${t}/${i}${a?`/${a}`:""}`,children:s({id:"global.back",defaultMessage:"Back"})})})});if(p.data?.data?.length&&!m)return e.jsx(Z,{to:{search:H.stringify({...g,id:p.data.data[0].id})},replace:!0});const u=p.data?.data?.find(k=>k.id.toString()===m);return p.isError||!y||!d||!u||!T||p.data.error?e.jsx(L.Error,{}):e.jsxs(e.Fragment,{children:[e.jsx(L.Title,{children:s({id:"content-manager.history.page-title",defaultMessage:"{contentType} history"},{contentType:f})}),e.jsx(gt,{contentType:i,id:a,schema:d,layout:y,configuration:T,selectedVersion:u,versions:p.data,page:A,mainField:I,children:e.jsxs(h,{direction:"row",alignItems:"flex-start",children:[e.jsxs(Fe,{grow:1,height:"100vh",background:"neutral100",paddingBottom:6,overflow:"auto",labelledBy:n,children:[e.jsx(lt,{headerId:n}),e.jsx(at,{})]}),e.jsx(mt,{})]})})]})},yt=()=>{const{slug:n}=W(),{permissions:s=[],isLoading:i,error:a}=ee(te.map(t=>({action:t,subject:n})));return i?e.jsx(L.Loading,{}):a||!n?e.jsx(v,{height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,background:"neutral0",children:e.jsx(L.Error,{})}):e.jsx(v,{height:"100vh",width:"100vw",position:"fixed",top:0,left:0,zIndex:2,background:"neutral0",children:e.jsx(L.Protect,{permissions:s,children:({permissions:t})=>e.jsx(ve,{permissions:t,children:e.jsx(ht,{})})})})},At=()=>e.jsx(xe,{children:e.jsx(je,{children:e.jsx(yt,{})})});export{gt as HistoryProvider,At as ProtectedHistoryPage,C as useHistoryContext};
