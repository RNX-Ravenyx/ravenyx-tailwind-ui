import{j as r}from"./jsx-runtime-CmIOflP4.js";import{c as g}from"./clsx-B-dksMZM.js";import{T as W}from"./Tooltip-DETaK72v.js";import"./index-KqYmeiyw.js";const _={default:{bg:"bg-gray-400/10",text:"text-gray-400",svgFill:"fill-gray-400",ring:"ring-gray-400/20"},danger:{bg:"bg-red-400/10",text:"text-red-400",svgFill:"fill-red-500",ring:"ring-red-400/20"},warning:{bg:"bg-yellow-400/10",text:"dark:text-yellow-400 text-black",svgFill:"fill-yellow-500",ring:"ring-yellow-400/20"},success:{bg:"bg-green-400/10",text:"text-green-400",svgFill:"fill-green-500",ring:"ring-green-400/20"},info:{bg:"bg-blue-400/10",text:"text-blue-400",svgFill:"fill-blue-500",ring:"ring-blue-400/20"},indigo:{bg:"bg-indigo-400/10",text:"text-indigo-400",svgFill:"fill-indigo-500",ring:"ring-indigo-400/20"},purple:{bg:"bg-purple-400/10",text:"text-purple-400",svgFill:"fill-purple-500",ring:"ring-purple-400/20"},pink:{bg:"bg-pink-400/10",text:"text-pink-400",svgFill:"fill-pink-500",ring:"ring-pink-400/20"}},R=({type:j="default",children:N,tooltipText:q,className:I,customBadgeTypes:C})=>{const o=C||_,e=o[j]||o.default;return r.jsx(W,{tooltipText:q,children:r.jsxs("span",{className:g("inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",e.bg,e.text,e.ring,I),children:[r.jsx("svg",{viewBox:"0 0 6 6","aria-hidden":"true",className:g("size-1.5",e.svgFill),children:r.jsx("circle",{r:3,cx:3,cy:3})}),N]})})};R.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{type:{required:!1,tsType:{name:"union",raw:"keyof typeof defaultBadgeTypes",elements:[{name:"literal",value:"default"},{name:"literal",value:"danger"},{name:"literal",value:"warning"},{name:"literal",value:"success"},{name:"literal",value:"info"},{name:"literal",value:"indigo"},{name:"literal",value:"purple"},{name:"literal",value:"pink"}]},description:"",defaultValue:{value:"'default'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tooltipText:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},customBadgeTypes:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"BadgeType"}],raw:"Record<string, BadgeType>"},description:""}}};const A={title:"Data Display/Badge",component:R,parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["default","danger","warning","success","info","indigo","purple","pink"]},tooltipText:{control:"text"}},args:{tooltipText:"This is a badge tooltip"}},t={args:{children:"Default",type:"default"}},a={args:{children:"Danger",type:"danger"}},n={args:{children:"Warning",type:"warning"}},s={args:{children:"Success",type:"success"}},i={args:{children:"Info",type:"info"}},l={args:{children:"Custom Badge",type:"custom",customBadgeTypes:{custom:{bg:"bg-teal-400/10",text:"text-teal-400",svgFill:"fill-teal-500",ring:"ring-indigo-400/20"}}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    type: 'default'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Danger',
    type: 'danger'
  }
}`,...(f=(m=a.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var y,x,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Warning',
    type: 'warning'
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var T,v,h;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    type: 'success'
  }
}`,...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var B,w,F;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Info',
    type: 'info'
  }
}`,...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var k,D,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Custom Badge',
    type: 'custom',
    customBadgeTypes: {
      custom: {
        bg: 'bg-teal-400/10',
        text: 'text-teal-400',
        svgFill: 'fill-teal-500',
        ring: 'ring-indigo-400/20'
      }
    }
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const G=["Default","Danger","Warning","Success","Info","CustomBadgeType"];export{l as CustomBadgeType,a as Danger,t as Default,i as Info,s as Success,n as Warning,G as __namedExportsOrder,A as default};
