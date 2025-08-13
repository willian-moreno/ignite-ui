import{a as o,j as s,B as t,T as n}from"./iframe-BKDsA84p.js";import"./preload-helper-DWEumzDN.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,i={title:"Form/Text Area",component:o,args:{placeholder:"Type your name",disabled:!1,onInput:d()},argTypes:{value:{type:"string"},placeholder:{type:"string"},disabled:{type:"boolean"}},decorators:[a=>s.jsxs(t,{as:"label",css:{display:"flex",flexDirection:"column",gap:"$2"},children:[s.jsx(n,{size:"sm",children:"Observations"}),a()]})]},e={args:{placeholder:"Add any observations..."}},r={args:{disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Add any observations...'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const p=["Primary","Disabled"];export{r as Disabled,e as Primary,p as __namedExportsOrder,i as default};
