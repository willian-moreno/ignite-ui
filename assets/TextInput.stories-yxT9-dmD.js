import{b as t,j as a,B as n,T as c}from"./iframe-BKDsA84p.js";import"./preload-helper-DWEumzDN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Form/Text Input",component:t,args:{placeholder:"Type your name",disabled:!1,onInput:p()},argTypes:{value:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"}},decorators:[o=>a.jsxs(n,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[a.jsx(c,{size:"sm",children:"Email address"}),o()]})]},e={args:{placeholder:"Type your name"}},r={args:{disabled:!0}},s={args:{prefix:"github.com/",placeholder:"your-username"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your name'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    prefix: 'github.com/',
    placeholder: 'your-username'
  }
}`,...s.parameters?.docs?.source}}};const m=["Primary","Disabled","WithPrefix"];export{r as Disabled,e as Primary,s as WithPrefix,m as __namedExportsOrder,d as default};
