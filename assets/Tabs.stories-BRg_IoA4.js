import{j as r}from"./jsx-runtime-CmIOflP4.js";import{f as j}from"./index-ApWirIvn.js";import{r as d}from"./index-KqYmeiyw.js";import{c as l}from"./clsx-B-dksMZM.js";const i=({tabs:e,activeKey:a,onChange:n,activeColor:x="text-primary",inactiveColor:h="text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300",borderColor:C="border-gray-200",underlineColor:K="bg-primary"})=>{const[u,T]=d.useState({left:"0px",width:"0px"}),k=(t,c)=>{const m=t.currentTarget;T({left:`${m.offsetLeft}px`,width:`${m.offsetWidth}px`}),n(c)};return r.jsxs("div",{className:"relative w-full",children:[r.jsx("div",{className:l("border-b",C),children:r.jsx("nav",{className:"relative flex justify-start gap-4",children:e.map(t=>r.jsx("button",{onClick:c=>k(c,t.key),className:l("relative whitespace-nowrap px-1 py-4 text-sm font-medium transition-colors","focus:outline-none focus:ring-0 focus:ring-primary/50",t.key===a?x:h),"aria-current":t.key===a?"page":void 0,children:t.name},t.key))})}),r.jsx("div",{className:l("absolute bottom-0 h-0.5 transition-all duration-300 ease-in-out",K),style:{left:u.left,width:u.width}})]})};i.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"Tab"}],raw:"Tab[]"},description:""},activeKey:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},activeColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text-primary'",computed:!1}},inactiveColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'",computed:!1}},borderColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'border-gray-200'",computed:!1}},underlineColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'bg-primary'",computed:!1}}}};const N={title:"Data Display/Tabs",component:i,parameters:{layout:"centered"},argTypes:{activeColor:{control:"text"},inactiveColor:{control:"text"}},args:{onChange:j(),tabs:[{name:"Tab 1",key:"tab1"},{name:"Tab 2",key:"tab2"}],activeKey:"tab1"}},s={render:e=>{const[a,n]=d.useState(e.activeKey);return r.jsx(i,{...e,activeKey:a,onChange:n})}},o={args:{activeColor:"text-red-600",underlineColor:"bg-red-600",activeKey:"home"},render:e=>{const[a,n]=d.useState(e.activeKey);return r.jsx(i,{...e,tabs:[{name:"Home",key:"home"},{name:"About",key:"about"},{name:"Contact",key:"contact"}],activeKey:a,onChange:n})}};var y,p,g;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return <Tabs {...args} activeKey={activeKey} onChange={setActiveKey} />;
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,f,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    activeColor: 'text-red-600',
    underlineColor: 'bg-red-600',
    activeKey: 'home'
  },
  render: args => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return <Tabs {...args} tabs={[{
      name: 'Home',
      key: 'home'
    }, {
      name: 'About',
      key: 'about'
    }, {
      name: 'Contact',
      key: 'contact'
    }]} activeKey={activeKey} onChange={setActiveKey} />;
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const D=["Default","CustomColors"];export{o as CustomColors,s as Default,D as __namedExportsOrder,N as default};
