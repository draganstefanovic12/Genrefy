import{j as r,a as t}from"./index.ca32c3f6.js";const l=({topArtists:e})=>{const i=e.items.filter(s=>s.images.length>0).map((s,a)=>r("li",{children:[t("p",{children:s.name}),t("img",{src:s.images[0].url,alt:"artist-img"})]},a));return r("div",{className:"content-ul-wrapper",children:[t("h2",{children:"Your top artists"}),t("ul",{className:"content-ul",children:i})]})},c=l;export{c as default};
