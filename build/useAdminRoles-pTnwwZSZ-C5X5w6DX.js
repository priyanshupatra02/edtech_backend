import{u as m,l as p,b2 as d,r as f}from"./strapi-4h7MLEfG.js";const y=(o={},r)=>{const{locale:t}=m(),s=p(t,{sensitivity:"base"}),{data:e,error:a,isError:n,isLoading:l,refetch:c}=d(o,r);return{roles:f.useMemo(()=>[...e??[]].sort((u,i)=>s.compare(u.name,i.name)),[e,s]),error:a,isError:n,isLoading:l,refetch:c}};export{y as u};
