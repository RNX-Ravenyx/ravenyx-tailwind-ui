import{j as o}from"./jsx-runtime-CmIOflP4.js";import{T as e}from"./Tooltip-DETaK72v.js";import"./index-KqYmeiyw.js";const j={title:"Data Display/Tooltip",component:e,parameters:{layout:"centered"},argTypes:{position:{control:"select",options:["top","bottom","left","right"]},backgroundColor:{control:"color"},textColor:{control:"color"},alwaysVisible:{control:"boolean"}}},r={args:{tooltipText:"This is a tooltip",children:o.jsx("span",{className:"rounded bg-gray-200 px-4 py-2",children:"Hover me"})}},t={args:{tooltipText:"Custom Tooltip",backgroundColor:"bg-blue-500",textColor:"text-white",children:o.jsx("span",{className:"rounded bg-gray-200 px-4 py-2",children:"Hover me"})}},a={args:{tooltipText:"Always Visible Tooltip",alwaysVisible:!0,children:o.jsx("span",{className:"rounded bg-gray-200 px-4 py-2",children:"Info"})}},p={render:s=>o.jsxs("div",{className:"flex flex-col items-center gap-4",children:[o.jsx(e,{...s,position:"top",children:o.jsx("span",{className:"rounded bg-gray-200 px-4 py-2",children:"Top"})}),o.jsx(e,{...s,position:"bottom",children:o.jsx("span",{className:"rounded bg-gray-200 px-4 py-2",children:"Bottom"})}),o.jsx(e,{...s,position:"left",children:o.jsx("span",{className:"rounded bg-gray-200 px-4 py-2",children:"Left"})}),o.jsx(e,{...s,position:"right",children:o.jsx("span",{className:"rounded bg-gray-200 px-4 py-2",children:"Right"})})]}),args:{tooltipText:"Tooltip"}};var i,l,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tooltipText: 'This is a tooltip',
    children: <span className="rounded bg-gray-200 px-4 py-2">Hover me</span>
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tooltipText: 'Custom Tooltip',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-white',
    children: <span className="rounded bg-gray-200 px-4 py-2">Hover me</span>
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,x,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tooltipText: 'Always Visible Tooltip',
    alwaysVisible: true,
    children: <span className="rounded bg-gray-200 px-4 py-2">Info</span>
  }
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var y,b,T;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col items-center gap-4">\r
      <Tooltip {...args} position="top">\r
        <span className="rounded bg-gray-200 px-4 py-2">Top</span>\r
      </Tooltip>\r
      <Tooltip {...args} position="bottom">\r
        <span className="rounded bg-gray-200 px-4 py-2">Bottom</span>\r
      </Tooltip>\r
      <Tooltip {...args} position="left">\r
        <span className="rounded bg-gray-200 px-4 py-2">Left</span>\r
      </Tooltip>\r
      <Tooltip {...args} position="right">\r
        <span className="rounded bg-gray-200 px-4 py-2">Right</span>\r
      </Tooltip>\r
    </div>,
  args: {
    tooltipText: 'Tooltip'
  }
}`,...(T=(b=p.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const C=["Default","CustomColors","AlwaysVisible","DifferentPositions"];export{a as AlwaysVisible,t as CustomColors,r as Default,p as DifferentPositions,C as __namedExportsOrder,j as default};
