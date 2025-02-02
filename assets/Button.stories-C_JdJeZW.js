import{j as a}from"./jsx-runtime-CmIOflP4.js";import{f as xe}from"./index-ApWirIvn.js";import{r}from"./index-KqYmeiyw.js";function Be({title:t,titleId:n,...o},s){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":n},o),t?r.createElement("title",{id:n},t):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"}))}const ke=r.forwardRef(Be);function we({title:t,titleId:n,...o},s){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":n},o),t?r.createElement("title",{id:n},t):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const Te=r.forwardRef(we),se=({type:t="default",shape:n="default",size:o="middle",disabled:s=!1,loading:v=!1,block:oe=!1,danger:x=!1,ghost:le=!1,gradient:ie=!1,icon:e,iconPosition:l="start",label:B,htmlType:de="button",href:k,target:ue,onClick:w,...T})=>{const ce={small:"text-sm py-1 px-2",middle:"text-base py-2 px-4",large:"text-lg py-3 px-6"}[o],me={default:"rounded",round:"rounded-lg",circle:"rounded-full p-2"}[n],pe={primary:"bg-primary text-on-primary hover:brightness-95",default:"bg-surface text-on-surface border border-outline hover:bg-surface-container",dashed:"border border-dashed border-outline text-on-surface hover:bg-surface-container",text:"text-primary hover:underline",link:"text-primary underline hover:no-underline"}[t],fe=x?"bg-danger text-on-danger hover:brightness-95":"",ge=le?`border border-current ${x?"text-danger":"text-primary"}`:"",be=ie?"bg-gradient-to-r from-primary to-secondary":"",ye=[v?"cursor-wait":"",s?"opacity-50 cursor-not-allowed":"",oe?"w-full":""].join(" "),j=["inline-flex items-center justify-center font-medium focus:outline-none",ce,me,pe,fe,ge,be,ye].filter(Boolean).join(" "),he=ve=>{!v&&!s&&w&&w(ve)};return k?a.jsxs("a",{href:k,target:ue,className:j,...T,children:[e&&l==="start"&&a.jsx("span",{className:"mr-2",children:e}),B,e&&l==="end"&&a.jsx("span",{className:"ml-2",children:e})]}):a.jsxs("button",{type:de,className:j,disabled:s,onClick:he,...T,children:[v&&a.jsx(ke,{className:"mr-2 h-5 w-5 animate-spin"}),e&&l==="start"&&a.jsx("span",{className:"mr-2",children:e}),B,e&&l==="end"&&a.jsx("span",{className:"ml-2",children:e})]})};se.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!1,tsType:{name:"union",raw:"'primary' | 'default' | 'dashed' | 'text' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'default'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'text'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'default' | 'circle' | 'round'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'round'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'middle' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},block:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ghost:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gradient:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},htmlType:{required:!1,tsType:{name:"union",raw:"'submit' | 'reset' | 'button'",elements:[{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'button'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const Ee={title:"Example/Button",component:se,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},textColor:{control:"color"},type:{control:"select",options:["primary","default","dashed","text","link"]},shape:{control:"select",options:["default","circle","round"]},size:{control:"select",options:["small","middle","large"]},loading:{control:"boolean"},disabled:{control:"boolean"},block:{control:"boolean"},danger:{control:"boolean"},ghost:{control:"boolean"},gradient:{control:"boolean"},iconPosition:{control:"select",options:["start","end"]}},args:{onClick:xe()}},i={args:{type:"primary",label:"Primary Button"}},d={args:{type:"default",label:"Default Button"}},u={args:{type:"dashed",label:"Dashed Button"}},c={args:{type:"text",label:"Text Button"}},m={args:{type:"link",label:"Link Button",href:"https://example.com",target:"_blank"}},p={args:{danger:!0,type:"primary",label:"Danger Button"}},f={args:{disabled:!0,label:"Disabled Button"}},g={args:{loading:!0,label:"Loading Button"}},b={args:{block:!0,label:"Block Button"}},y={args:{gradient:!0,label:"Gradient Button"}},h={args:{label:"Search",icon:a.jsx(Te,{}),iconPosition:"start"}};var q,D,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    label: 'Primary Button'
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,C,S;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'default',
    label: 'Default Button'
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var R,M,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    label: 'Dashed Button'
  }
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var N,G,P;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Text Button'
  }
}`,...(P=(G=c.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var _,I,z;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'link',
    label: 'Link Button',
    href: 'https://example.com',
    target: '_blank'
  }
}`,...(z=(I=m.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var H,O,A;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    danger: true,
    type: 'primary',
    label: 'Danger Button'
  }
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var F,W,$;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled Button'
  }
}`,...($=(W=f.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var Z,J,K;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Loading Button'
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    block: true,
    label: 'Block Button'
  }
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,ee,ae;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    gradient: true,
    label: 'Gradient Button'
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,ne;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    icon: <MagnifyingGlassIcon />,
    iconPosition: 'start'
  }
}`,...(ne=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Le=["Primary","Default","Dashed","Text","Link","Danger","Disabled","Loading","Block","Gradient","Icon"];export{b as Block,p as Danger,u as Dashed,d as Default,f as Disabled,y as Gradient,h as Icon,m as Link,g as Loading,i as Primary,c as Text,Le as __namedExportsOrder,Ee as default};
