import{j as a}from"./jsx-runtime-CmIOflP4.js";import{f as xe}from"./index-ApWirIvn.js";import{r as y}from"./index-KqYmeiyw.js";import{F as Be}from"./MagnifyingGlassIcon-CDgVbrGm.js";function ke({title:t,titleId:s,...h},r){return y.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":s},h),t?y.createElement("title",{id:s},t):null,y.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"}))}const Te=y.forwardRef(ke),ne=({type:t="default",shape:s="circle",size:h="middle",disabled:r=!1,loading:v=!1,block:oe=!1,danger:x=!1,ghost:le=!1,gradient:ie=!1,icon:e,iconPosition:n="start",label:B,htmlType:de="button",href:k,target:ue,onClick:T,...w})=>{const ce={small:"text-sm py-1 px-2",middle:"text-base py-2 px-4",large:"text-lg py-3 px-6"}[h],me={rectangle:"rounded-md",round:"rounded-lg",circle:"rounded-full p-2"}[s],pe={primary:"bg-primary text-on-primary hover:brightness-95",default:"bg-surface text-on-surface border border-outline hover:bg-surface-container",dashed:"border border-dashed border-outline text-on-surface hover:bg-surface-container",text:"text-primary hover:underline",link:"text-primary underline hover:no-underline"}[t],fe=x?"bg-danger text-on-danger hover:brightness-95":"",ge=le?`border border-current ${x?"text-danger":"text-primary"}`:"",be=ie?"bg-gradient-to-r from-primary to-secondary":"",ye=[v?"cursor-wait":"",r?"opacity-50 cursor-not-allowed":"",oe?"w-full":""].join(" "),q=["inline-flex items-center justify-center font-medium focus:outline-none",ce,me,pe,fe,ge,be,ye].filter(Boolean).join(" "),he=ve=>{!v&&!r&&T&&T(ve)};return k?a.jsxs("a",{href:k,target:ue,className:q,...w,children:[e&&n==="start"&&a.jsx("span",{className:"mr-2",children:e}),B,e&&n==="end"&&a.jsx("span",{className:"ml-2",children:e})]}):a.jsxs("button",{type:de,className:q,disabled:r,onClick:he,...w,children:[v&&a.jsx(Te,{className:"mr-2 h-5 w-5 animate-spin"}),e&&n==="start"&&a.jsx("span",{className:"mr-2",children:e}),B,e&&n==="end"&&a.jsx("span",{className:"ml-2",children:e})]})};ne.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!1,tsType:{name:"union",raw:"'primary' | 'default' | 'dashed' | 'text' | 'link'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'default'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'text'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'default' | 'rectangle' | 'round'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'rectangle'"},{name:"literal",value:"'round'"}]},description:"",defaultValue:{value:"'circle'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'middle' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:""},backgroundColor:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},block:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},danger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ghost:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},gradient:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},htmlType:{required:!1,tsType:{name:"union",raw:"'submit' | 'reset' | 'button'",elements:[{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'button'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const Ce={title:"General/Button",component:ne,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},textColor:{control:"color"},type:{control:"select",options:["primary","default","dashed","text","link"]},shape:{control:"select",options:["rectangle","circle","round"]},size:{control:"select",options:["small","middle","large"]},loading:{control:"boolean"},disabled:{control:"boolean"},block:{control:"boolean"},danger:{control:"boolean"},ghost:{control:"boolean"},gradient:{control:"boolean"},iconPosition:{control:"select",options:["start","end"]}},args:{onClick:xe()}},o={args:{type:"primary",label:"Primary Button"}},l={args:{type:"default",label:"Default Button"}},i={args:{type:"dashed",label:"Dashed Button"}},d={args:{type:"text",label:"Text Button"}},u={args:{type:"link",label:"Link Button",href:"https://example.com",target:"_blank"}},c={args:{danger:!0,type:"primary",label:"Danger Button"}},m={args:{disabled:!0,label:"Disabled Button"}},p={args:{loading:!0,label:"Loading Button"}},f={args:{block:!0,label:"Block Button"}},g={args:{gradient:!0,label:"Gradient Button"}},b={args:{label:"Search",icon:a.jsx(Be,{}),iconPosition:"start"}};var D,j,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    label: 'Primary Button'
  }
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var L,S,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'default',
    label: 'Default Button'
  }
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var R,V,M;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'dashed',
    label: 'Dashed Button'
  }
}`,...(M=(V=i.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var N,G,P;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Text Button'
  }
}`,...(P=(G=d.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var _,I,z;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'link',
    label: 'Link Button',
    href: 'https://example.com',
    target: '_blank'
  }
}`,...(z=(I=u.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var F,H,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    danger: true,
    type: 'primary',
    label: 'Danger Button'
  }
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var $,A,W;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled Button'
  }
}`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    loading: true,
    label: 'Loading Button'
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    block: true,
    label: 'Block Button'
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    gradient: true,
    label: 'Gradient Button'
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    icon: <MagnifyingGlassIcon />,
    iconPosition: 'start'
  }
}`,...(se=(te=b.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Le=["Primary","Default","Dashed","Text","Link","Danger","Disabled","Loading","Block","Gradient","Icon"];export{f as Block,c as Danger,i as Dashed,l as Default,m as Disabled,g as Gradient,b as Icon,u as Link,p as Loading,o as Primary,d as Text,Le as __namedExportsOrder,Ce as default};
