const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body");e.addEventListener("click",(function(){o=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(function(){clearInterval(o),e.disabled=!1}));let o=null;
//# sourceMappingURL=01-color-switcher.06f33c92.js.map