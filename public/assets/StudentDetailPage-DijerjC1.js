import{j as e,c,b as U,r as g,e as q,i as S,d as L,B as b}from"./index-Bf_DdXRE.js";import{c as M,C as D,q as B,r as F,a as z,s as O,G as V,D as Y,b as J,d as Q,e as W,h as P,T as $,H as X}from"./index-Cmx-cAb1.js";import{C as j,a as u,c as f}from"./card-CXPTUR4c.js";import{u as I,A as Z,E as ee,S as se,C as _,T as ae,P as ne,a as te,D as le}from"./student-create-form-D42sLUqY.js";import"./index-Q7pvp2gV.js";import"./index-C3FR_Cr8.js";import"./index-BG8bN0wn.js";import"./index-CcYiJrKC.js";/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=M("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=M("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]),ie=U("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ce({className:s,variant:a,...n}){return e.jsx("div",{className:c(ie({variant:a}),s),...n})}const A=({className:s,...a})=>e.jsx("nav",{role:"navigation","aria-label":"pagination",className:c("mx-auto flex w-full justify-center",s),...a});A.displayName="Pagination";const E=g.forwardRef(({className:s,...a},n)=>e.jsx("ul",{ref:n,className:c("flex flex-row items-center gap-1",s),...a}));E.displayName="PaginationContent";const N=g.forwardRef(({className:s,...a},n)=>e.jsx("li",{ref:n,className:c("",s),...a}));N.displayName="PaginationItem";const m=({className:s,isActive:a,size:n="icon",...t})=>e.jsx("a",{"aria-current":a?"page":void 0,className:c(q({variant:a?"outline":"ghost",size:n}),s),...t});m.displayName="PaginationLink";const T=({className:s,...a})=>e.jsxs(m,{"aria-label":"Go to previous page",size:"default",className:c("gap-1 pl-2.5",s),...a,children:[e.jsx(D,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Previous Last"})]});T.displayName="PaginationPreviousLast";const R=({className:s,...a})=>e.jsxs(m,{"aria-label":"Go to previous page",size:"default",className:c("gap-1 pl-2.5",s),...a,children:[e.jsx(B,{className:"h-4 w-4"}),e.jsx("span",{children:"Previous"})]});R.displayName="PaginationPrevious";const G=({className:s,...a})=>e.jsxs(m,{"aria-label":"Go to next page",size:"default",className:c("gap-1 pr-2.5",s),...a,children:[e.jsx("span",{children:"Next"}),e.jsx(F,{className:"h-4 w-4"})]});G.displayName="PaginationNext";const H=({className:s,...a})=>e.jsxs(m,{"aria-label":"Go to next page",size:"default",className:c("gap-1 pr-2.5",s),...a,children:[e.jsx("span",{className:"sr-only",children:"Next Last"}),e.jsx(z,{className:"h-4 w-4"})]});H.displayName="PaginationNextLast";const C=({className:s,...a})=>e.jsxs("span",{"aria-hidden":!0,className:c("flex h-9 w-9 items-center justify-center",s),...a,children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"More pages"})]});C.displayName="PaginationEllipsis";function de({totalPosts:s,postsPerPage:a,currentPage:n,setCurrentPage:t}){const l=[];for(let x=1;x<=Math.ceil(s/a);x++)l.push(x);const h=Math.floor(2/2),o=l.slice(Math.max(0,n-1-h),Math.min(n-1+h+1,l.length)),i=()=>{n<l.length&&t(n+1)},d=()=>{n>1&&t(n-1)},p=()=>{n>1&&t(1)},y=()=>{n<l.length&&t(l.length)},v=()=>{const x=o.map((w,K)=>e.jsx(N,{className:n===w?"rounded-md bg-primary":"",children:e.jsx(m,{onClick:()=>t(w),children:w})},K));return o[0]>1&&x.unshift(e.jsx(C,{onClick:()=>t(o[0]-1)},"ellipsis-start")),o[o.length-1]<l.length&&x.push(e.jsx(C,{onClick:()=>t(o[o.length-1]+1)},"ellipsis-end")),x};return e.jsx("div",{className:"p-4",children:e.jsx(A,{children:e.jsxs(E,{children:[e.jsxs(N,{children:[e.jsx(T,{onClick:p}),e.jsx(R,{onClick:d})]}),v(),e.jsxs(N,{children:[e.jsx(G,{onClick:i}),e.jsx(H,{onClick:y})]})]})})})}const xe=({title:s})=>{const[a]=S(),n=Number(a.get("page")||1),[t,l]=g.useState(n),r=6,h=a.get("search")||null,o=(t-1)*r,{data:i}=I(o,r,h),d=i==null?void 0:i.users;console.log("users",d);const p=i==null?void 0:i.total_users;return e.jsxs("div",{className:"flex w-full flex-col rounded-t-3xl bg-background shadow-xl xl:m-7 ",children:[e.jsx("div",{className:"rounded-t-3xl bg-primary",children:e.jsx("h1",{className:"flex justify-center p-5 text-xl font-extrabold",children:s})}),d==null?void 0:d.map((y,v)=>e.jsxs("div",{className:"my-5 ml-7 flex flex-row",children:[e.jsx(V,{}),e.jsx("p",{className:"ml-7",children:y.city})]},v)),e.jsx(de,{totalPosts:p,postsPerPage:r,currentPage:t,setCurrentPage:l})]})},k=xe,he=({data:s})=>{const[a]=g.useState(!1),[n,t]=g.useState(!1),l=L(),r=async()=>{};return e.jsxs(e.Fragment,{children:[e.jsx(Z,{isOpen:n,onClose:()=>t(!1),onConfirm:r,loading:a}),e.jsxs(Y,{modal:!1,children:[e.jsx(J,{asChild:!0,children:e.jsxs(b,{variant:"ghost",className:"h-8 w-8 p-0",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(ee,{className:"h-4 w-4"})]})}),e.jsxs(Q,{align:"end",children:[e.jsx(W,{children:"Actions"}),e.jsxs(P,{onClick:()=>l.push(`/dashboard/user/${s.id}`),children:[e.jsx(se,{className:"mr-2 h-4 w-4"})," Update"]}),e.jsxs(P,{onClick:()=>t(!0),children:[e.jsx($,{className:"mr-2 h-4 w-4"})," Delete"]})]})]})]})},me=[{id:"select",header:({table:s})=>e.jsx(_,{checked:s.getIsAllPageRowsSelected(),onCheckedChange:a=>s.toggleAllPageRowsSelected(!!a),"aria-label":"Select all"}),cell:({row:s})=>e.jsx(_,{checked:s.getIsSelected(),onCheckedChange:a=>s.toggleSelected(!!a),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"first_name",header:"NAME"},{accessorKey:"country",header:"COUNTRY"},{accessorKey:"email",header:"EMAIL"},{accessorKey:"job",header:"COMPANY"},{accessorKey:"gender",header:"GENDER"},{id:"actions",cell:({row:s})=>e.jsx(he,{data:s.original})}];function pe(){return e.jsxs("div",{className:"flex items-center justify-between py-5",children:[e.jsx("div",{className:"flex flex-1 gap-4",children:e.jsx(ae,{placeholder:"Search People Here"})}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(b,{children:[e.jsx(re,{className:"h-6 w-6"}),"Download CSV"]}),e.jsx(ne,{renderModal:s=>e.jsx(te,{modalClose:s})})]})]})}function ge({users:s,pageCount:a}){return e.jsxs(e.Fragment,{children:[e.jsx(pe,{}),s&&e.jsx(le,{columns:me,data:s,pageCount:a})]})}function ke(){const[s]=S(),a=Number(s.get("page")||1),n=Number(s.get("limit")||10),t=s.get("search")||null,l=(a-1)*n,{data:r,isLoading:h}=I(l,n,t),o=r==null?void 0:r.users,i=r==null?void 0:r.total_users,d=Math.ceil(i/n),p=L();return h?e.jsx("h1",{children:"Loading!!!"}):e.jsxs("div",{className:"p-10",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(X,{title:"Personal Details"}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsxs(b,{children:[e.jsx(oe,{className:"h-4 w-4"}),"Share"]}),e.jsxs(b,{onClick:()=>p.back(),children:[e.jsx(D,{className:"h-4 w-4"}),"Back"]})]})]}),e.jsxs("div",{className:"grid  grid-cols-1 gap-6 py-6 lg:grid-cols-4",children:[e.jsxs("div",{className:" col-span-1 flex flex-col gap-6 lg:col-span-1",children:[e.jsxs(j,{className:"bg-secondary  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] drop-shadow-sm",children:[e.jsxs(u,{className:"flex flex-row items-center justify-between font-bold",children:[e.jsx("p",{className:"text-xl",children:" Profile"}),e.jsx(ce,{className:"bg-green-600",children:"Active"})]}),e.jsx(f,{className:"flex items-center justify-center",children:e.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmY1DyC4CYWTK_Bhn6qQygwQJW0UQgXn-ew&usqp=CAU",className:"rounded-l-[40%] rounded-r-[40%] "})})]}),e.jsxs(j,{className:"bg-secondary shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] drop-shadow-sm",children:[e.jsx(u,{className:"pb-2 text-center font-bold",children:"About Me"}),e.jsx(f,{className:"text-sm",children:"Hello! I'm Srikkath, your dedicated admin at Kutubi, ensuring a seamless and enriching experience for teachers, students, and parents. Feel free to reach out for any assistance or feedback"})]}),e.jsxs(j,{className:"bg-secondary shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] drop-shadow-sm",children:[e.jsx(u,{className:"pb-2 text-center font-bold",children:"Last Login"}),e.jsx(f,{className:"text-center text-sm",children:"12 Aug 2022 9:30 AM"})]})]}),e.jsxs(j,{className:" col-span-1 bg-secondary shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] drop-shadow-sm lg:col-span-3",children:[e.jsx(u,{className:"text-xl font-bold",children:"Contact Information"}),e.jsx(f,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"First Name"}),e.jsx("p",{className:"text-muted-foreground",children:"John"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Last Name"}),e.jsx("p",{className:"text-muted-foreground",children:"Doe"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"User Name"}),e.jsx("p",{className:"text-muted-foreground",children:"John"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Sex"}),e.jsx("p",{className:"text-muted-foreground",children:"Male"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Position"}),e.jsx("p",{className:"text-muted-foreground",children:"Super Admin"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Department"}),e.jsx("p",{className:"text-muted-foreground",children:"Kutubi"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Contact Email"}),e.jsx("p",{className:"text-muted-foreground",children:"ElonMusk@x.com"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Contact Number"}),e.jsx("p",{className:"text-muted-foreground",children:"Nil"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"City"}),e.jsx("p",{className:"text-muted-foreground",children:"Dubai"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Language"}),e.jsx("p",{className:"text-muted-foreground",children:"English"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Date of Birth"}),e.jsx("p",{className:"text-muted-foreground",children:"26/4/1989"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-black",children:"Social Media"}),e.jsx("p",{className:"text-muted-foreground",children:"x"})]})]})})]})]}),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx(k,{title:"Interest"}),e.jsx(k,{title:"Interest"}),e.jsx(k,{title:"Interest"})]}),e.jsx(ge,{users:o,page:a,totalUsers:i,pageCount:d})]})}export{ke as default};
