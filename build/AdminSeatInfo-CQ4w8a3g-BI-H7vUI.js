import{u as h,bM as S,n as I,g2 as j,j as e,S as C,T as i,F as d,aw as R,bE as A,b as E,f as b}from"./strapi-6fXDAyIt.js";import{s as M}from"./selectors-Dej_6h4x-UTjGlyeM.js";const _="https://cloud.strapi.io/profile/billing",F="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:s}=h(),{settings:l}=S(M),{isLoading:a,allowedActions:{canRead:c,canCreate:m,canUpdate:u,canDelete:p}}=I(l?.users??{}),{license:n,isError:g,isLoading:f}=j({enabled:!a&&c&&m&&u&&p});if(g||(a||f)||!n)return null;const{licenseLimitStatus:x,enforcementUserCount:o,permittedSeats:t,isHostedOnStrapiCloud:r}=n;return t?e.jsxs(C.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:[e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),e.jsxs(d,{gap:2,children:[e.jsx(d,{children:e.jsx(i,{tag:"p",children:s({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:t,enforcementUserCount:o,text:L=>e.jsx(i,{fontWeight:"semiBold",textColor:o>t?"danger500":void 0,children:L})})})}),x==="OVER_LIMIT"&&e.jsx(R,{label:s({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:e.jsx(A,{width:"1.4rem",height:"1.4rem",fill:"danger500"})})]}),e.jsx(E,{href:r?_:F,isExternal:!0,endIcon:e.jsx(b,{}),children:s({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:r})})]}):null};export{B as AdminSeatInfoEE};
