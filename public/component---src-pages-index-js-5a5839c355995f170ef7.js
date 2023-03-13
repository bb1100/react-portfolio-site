"use strict";(self.webpackChunkblraj_react_site=self.webpackChunkblraj_react_site||[]).push([[678],{2498:function(e,a,t){t.r(a),t.d(a,{Head:function(){return b},default:function(){return k}});var l=t(7294),r=t(2138),n=t(9357),c=t(2618);var o=()=>l.createElement("div",{className:"section sticky-nav"},l.createElement("div",{className:"container"},l.createElement("div",{className:"navbar-wrapper"},l.createElement("div",{className:"links-wrapper"},l.createElement("button",{onClick:()=>(0,c.Z)("#work"),onKeyDown:()=>(0,c.Z)("#work")},"WORK"),l.createElement("button",{onClick:()=>(0,c.Z)("#promotion"),onKeyDown:()=>(0,c.Z)("#promotion")},"CODE"),l.createElement("button",{onClick:()=>(0,c.Z)("#home"),onKeyDown:()=>(0,c.Z)("#home"),className:"home"},l.createElement("span",{className:"screen-reader-text"},"Home")),l.createElement("button",{onClick:()=>(0,c.Z)("#contact"),onKeyDown:()=>(0,c.Z)("#contact")},"CONTACT"),l.createElement("a",{href:"https://shop.blraj.com",target:"_blank",rel:"noopener noreferrer"},"SHOP"))))),i=t(3931);var m=e=>{let{videoSrcURL:a,videoTitle:t,paragraph:r,projectLink:n,isHorizontal:c}=e;return l.createElement(l.Fragment,null,l.createElement("div",{className:"iframe-container "+(c?"horizontal":"")},l.createElement("iframe",{className:"responsive-iframe",src:a,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0})),l.createElement("div",{className:"video-content "+(c?"horizontal":"")},l.createElement("h2",{className:"header"},t),r,n?l.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Explore"):null))};var s=e=>{let{hide:a,videoSrcURL:t,videoTitle:r,paragraph:n,projectLink:c,modalClass:o,ariaAttr:i,isHorizontal:s}=e;return l.createElement(l.Fragment,null,l.createElement("div",{className:"modal-overlay "+o,"aria-hidden":"true"}),l.createElement("div",{className:"modal "+o,"aria-modal":!0,"aria-hidden":i,tabIndex:-1,role:"dialog"},l.createElement("div",{className:"modal-wrapper"},l.createElement("div",{className:"modal-header"},l.createElement("button",{type:"button",className:"modal-close-button","aria-label":"Close",onClick:a},l.createElement("span",{"aria-hidden":"true"},"✕"))),l.createElement("div",{className:"modal-content "+(s?"one-column":"")},l.createElement(m,{videoTitle:r,paragraph:n,videoSrcURL:t,projectLink:c,isHorizontal:s})))))},d=t(976);var E=()=>{const{0:e,1:a}=(0,l.useState)(!1),t=t=>{if(e===t)return a(null);a(t)},r=()=>{let e=document.getElementById("slider");e.scrollLeft=e.scrollLeft-500},n=()=>{let e=document.getElementById("slider");e.scrollLeft=e.scrollLeft+500};return l.createElement("div",{className:"section",id:"work",tabIndex:-1},l.createElement("div",{className:"container"},l.createElement("div",{className:"work-wrapper"},l.createElement(i.pT,null,l.createElement("h1",null,"Work"),l.createElement("p",{className:"work-headline"},"A selection of Augmented Reality projects. Click on each video to see more.")),l.createElement("div",{className:"grid-container"},l.createElement("div",{className:"arrows left",role:"button","aria-label":"arrow left",tabindex:0,onClick:r,onKeyDown:r}),l.createElement("div",{className:"grid work",id:"slider"},d.C.projects.map(((a,r)=>l.createElement(l.Fragment,null,l.createElement("button",{key:a.index,className:"modal-thumbnails "+(e===r?"active":""),onClick:()=>t(r)},l.createElement(i.pT,null,l.createElement("img",{loading:"lazy",src:a.videoThumb,alt:'Thumbnail for "'+a.videoTitle+'"',title:a.videoTitle}))))))),l.createElement("div",{className:"arrows right",role:"button","aria-label":"arrow right",tabindex:0,onClick:n,onKeyDown:n})))),d.C.projects.map(((a,r)=>l.createElement(l.Fragment,null,e===r&&l.createElement(s,{key:a.index,hide:()=>t(!1),modalClass:e===r?"open":"closed",ariaAttr:e===r?"false":"true",videoTitle:a.videoTitle,paragraph:a.paragraph,videoSrcURL:a.videoSrcURL,projectLink:a.projectLink})))))};var u=()=>{const{0:e,1:a}=(0,l.useState)(!1),t=t=>{if(e===t)return a(null);a(t)},r=()=>{let e=document.getElementById("slider2");e.scrollLeft=e.scrollLeft-500},n=()=>{let e=document.getElementById("slider2");e.scrollLeft=e.scrollLeft+500};return l.createElement("div",{className:"section",id:"work",tabIndex:-1},l.createElement("div",{className:"container"},l.createElement("div",{className:"work-wrapper"},l.createElement("div",{className:"grid-container"},l.createElement("div",{className:"arrows left",role:"button","aria-label":"arrow left",tabindex:0,onClick:r,onKeyDown:r}),l.createElement("div",{className:"grid work",id:"slider2"},d.C.projects2.map(((a,r)=>l.createElement(l.Fragment,null,l.createElement("button",{key:a.index,className:"modal-thumbnails "+(e===r?"active":""),onClick:()=>t(r)},l.createElement(i.pT,null,l.createElement("img",{loading:"lazy",src:a.videoThumb,alt:'Thumbnail for "'+a.videoTitle+'"',title:a.videoTitle}))))))),l.createElement("div",{className:"arrows right",role:"button","aria-label":"arrow right",tabindex:0,onClick:n,onKeyDown:n})))),d.C.projects2.map(((a,r)=>l.createElement(l.Fragment,null,e===r&&l.createElement(s,{key:a.index,hide:()=>t(!1),modalClass:e===r?"open":"closed",ariaAttr:e===r?"false":"true",videoTitle:a.videoTitle,paragraph:a.paragraph,videoSrcURL:a.videoSrcURL,projectLink:a.projectLink,isHorizontal:a.isHorizontal})))))};var p=()=>l.createElement("div",{className:"secion",id:"about",tabIndex:-1},l.createElement("div",{className:"container"},l.createElement("div",{className:"about-section"},l.createElement("div",{className:"content"},l.createElement(i.pT,null,l.createElement("h1",null,"About")),d.C.aboutParagraph),l.createElement("div",{className:"image-wrapper"},l.createElement("div",{className:"about-img"},l.createElement(i.pT,null,l.createElement("img",{loading:"lazy",src:d.C.aboutImage,alt:"about"})))))));var v=()=>l.createElement("div",{className:"section"},l.createElement("div",{className:"container"},l.createElement("div",{className:"skills-container"},l.createElement(i.pT,null,l.createElement("h1",null,"AR Engines")),l.createElement("div",{className:"skills-grid"},d.C.skills.map(((e,a)=>l.createElement("div",{className:"skill",key:a},l.createElement(i.pT,null,l.createElement("img",{loading:"lazy",src:e.img,alt:"css"}),l.createElement("h3",null,e.title),l.createElement("p",null,e.para," ",e.url?l.createElement("a",{className:"link",href:e.url},"view ›"):null)))))))));var g=e=>{let{heading:a,paragraph:t,imgUrl:r,projectLink:n}=e;return l.createElement("div",{loading:"lazy",className:"card",style:{backgroundImage:"linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url("+r+")"}},l.createElement("div",{className:"content"},l.createElement("h1",{className:"header"},a),l.createElement("p",{className:"text"},t),n?l.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn"},"Explore"):null))};var N=()=>l.createElement("div",{className:"section",id:"promotion"},l.createElement("div",{className:"container"},l.createElement("div",{className:"promotion-wrapper"},l.createElement(i.pT,null,l.createElement("h1",null,d.C.promotionHeading)),l.createElement("p",null,d.C.promotionPara),l.createElement("div",{className:"grid promo"},d.C.codepens.map(((e,a)=>l.createElement(g,{key:a,heading:e.heading,paragraph:e.paragraph,imgUrl:e.imgUrl,projectLink:e.projectLink})))))));var h=()=>l.createElement("section",{className:"section",id:"contact"},l.createElement("div",{className:"container"},l.createElement("div",{className:"contact-container"},l.createElement(i.pT,null,l.createElement("h1",null,"Contact")),l.createElement("h2",{className:"email-link"},"blrajcontact@gmail.com"),l.createElement("div",{className:"social-icons"},d.C.social.map(((e,a)=>l.createElement("a",{key:a,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title)))))));const b=()=>l.createElement(n.Z,{title:"BALRAJ AR DESIGNER"});var k=()=>l.createElement(r.Z,null,l.createElement(o,null),l.createElement(E,null),l.createElement(u,null),l.createElement(N,null),l.createElement(p,null),l.createElement(v,null),l.createElement(h,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-5a5839c355995f170ef7.js.map