import{j as r}from"./jsx-runtime-CmIOflP4.js";import{f as ye}from"./index-ApWirIvn.js";import{r as a}from"./index-KqYmeiyw.js";function Be({title:t,titleId:s,...n},o){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},n),t?a.createElement("title",{id:s},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"}))}const ke=a.forwardRef(Be);function we({title:t,titleId:s,...n},o){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":s},n),t?a.createElement("title",{id:s},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const je=a.forwardRef(we),De=({type:t="default",shape:s="default",size:n="middle",disabled:o=!1,loading:y=!1,block:oe=!1,danger:B=!1,ghost:ne=!1,gradient:le=!1,icon:e,iconPosition:l="start",label:k,htmlType:ce="button",href:w,target:de,onClick:j,...D})=>{const ie={small:"text-sm py-1 px-2",middle:"text-base py-2 px-4",large:"text-lg py-3 px-6"}[n],ue={default:"rounded",round:"rounded-lg",circle:"rounded-full p-2"}[s],me={primary:"bg-primary text-on-primary hover:brightness-95",default:"bg-surface text-on-surface border border-outline hover:bg-surface-container",dashed:"border border-dashed border-outline text-on-surface hover:bg-surface-container",text:"text-primary hover:underline",link:"text-primary underline hover:no-underline"}[t],pe=B?"bg-danger text-on-danger hover:brightness-95":"",ge=ne?`border border-current ${B?"text-danger":"text-primary"}`:"",be=le?"bg-gradient-to-r from-primary to-secondary":"",fe=[y?"cursor-wait":"",o?"opacity-50 cursor-not-allowed":"",oe?"w-full":""].join(" "),v=["inline-flex items-center justify-center font-medium focus:outline-none",ie,ue,me,pe,ge,be,fe].filter(Boolean).join(" "),he=xe=>{!y&&!o&&j&&j(xe)};return w?r.jsxs("a",{href:w,target:de,className:v,...D,children:[e&&l==="start"&&r.jsx("span",{className:"mr-2",children:e}),k,e&&l==="end"&&r.jsx("span",{className:"ml-2",children:e})]}):r.jsxs("button",{type:ce,className:v,disabled:o,onClick:he,...D,children:[y&&r.jsx(ke,{className:"mr-2 h-5 w-5 animate-spin"}),e&&l==="start"&&r.jsx("span",{className:"mr-2",children:e}),k,e&&l==="end"&&r.jsx("span",{className:"ml-2",children:e})]})},Le={title:"Example/Button",component:De,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},textColor:{control:"color"},type:{control:"select",options:["primary","default","dashed","text","link"]},shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},loading:{control:"boolean"},disabled:{control:"boolean"},block:{control:"boolean"},danger:{control:"boolean"},ghost:{control:"boolean"},gradient:{control:"boolean"},iconPosition:{control:"select",options:["start","end"]}},args:{onClick:ye()}},c={args:{type:"primary",label:"Primary Button"}},d={args:{type:"default",label:"Default Button"}},i={args:{type:"dashed",label:"Dashed Button"}},u={args:{type:"text",label:"Text Button"}},m={args:{type:"link",label:"Link Button",href:"https://example.com",target:"_blank"}},p={args:{danger:!0,type:"primary",label:"Danger Button"}},g={args:{disabled:!0,label:"Disabled Button"}},b={args:{loading:!0,label:"Loading Button"}},f={args:{block:!0,label:"Block Button"}},h={args:{gradient:!0,label:"Gradient Button"}},x={args:{label:"Search",icon:r.jsx(je,{}),iconPosition:"start"}};var C,S,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    label: 'Primary Button'
  }
}`,...(L=(S=c.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var E,N,G;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'default',
    label: 'Default Button'
  }
}`,...(G=(N=d.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var M,P,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    label: 'Dashed Button'
  }
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var T,_,I;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Text Button'
  }
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,z,A;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'link',
    label: 'Link Button',
    href: 'https://example.com',
    target: '_blank'
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,W,$;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    danger: true,
    type: 'primary',
    label: 'Danger Button'
  }
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var Z,q,H;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled Button'
  }
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Loading Button'
  }
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    block: true,
    label: 'Block Button'
  }
}`,...(X=(V=f.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,ee,re;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    gradient: true,
    label: 'Gradient Button'
  }
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    icon: <MagnifyingGlassIcon />,
    iconPosition: 'start'
  }
}`,...(se=(te=x.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Ee=["Primary","Default","Dashed","Text","Link","Danger","Disabled","Loading","Block","Gradient","Icon"];export{f as Block,p as Danger,i as Dashed,d as Default,g as Disabled,h as Gradient,x as Icon,m as Link,b as Loading,c as Primary,u as Text,Ee as __namedExportsOrder,Le as default};
