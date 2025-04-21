const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/photoswipe.DSulWsr7.css"])))=>i.map(i=>d[i]);
import"./hoisted.w2qL6nyO.js";document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelectorAll(".gallery-filter"),o=document.querySelectorAll(".gallery-section");a.forEach(e=>{e.addEventListener("click",()=>{a.forEach(t=>t.classList.remove("active","bg-white","shadow-sm")),a.forEach(t=>t.classList.add("hover:bg-white","hover:shadow-sm")),e.classList.add("active","bg-white","shadow-sm"),e.classList.remove("hover:bg-white","hover:shadow-sm");const l=e.getAttribute("data-filter");l==="all"?o.forEach(t=>{t.style.display="block"}):o.forEach(t=>{t.getAttribute("data-category")===l?t.style.display="block":t.style.display="none"}),typeof AOS<"u"&&AOS.refresh()})})});const h="modulepreload",b=function(a){return"/"+a},_={},u=function(o,e,l){let t=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),s=n?.nonce||n?.getAttribute("nonce");t=Promise.allSettled(e.map(r=>{if(r=b(r),r in _)return;_[r]=!0;const c=r.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${d}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":h,c||(i.as="script"),i.crossOrigin="",i.href=r,s&&i.setAttribute("nonce",s),document.head.appendChild(i),c)return new Promise((v,m)=>{i.addEventListener("load",v),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})}))}function p(n){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=n,window.dispatchEvent(s),!s.defaultPrevented)throw n}return t.then(n=>{for(const s of n||[])s.status==="rejected"&&p(s.reason);return o().catch(p)})},w=async()=>{const a=(await u(async()=>{const{default:l}=await import("./photoswipe.esm.BxGa2pwP.js");return{default:l}},[])).default;await u(()=>Promise.resolve({}),__vite__mapDeps([0]));let o=document.createElement("div");o.className="pswp",o.innerHTML=`
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(o);const e=document.querySelectorAll(".gallery-item");e.forEach((l,t)=>{l.addEventListener("click",p=>{p.preventDefault();const n={index:t,bgOpacity:.85,showHideOpacity:!0},s=Array.from(e).map(c=>{const d=c;return{src:d.href,w:parseInt(d.dataset.pswpWidth||"1200",10),h:parseInt(d.dataset.pswpHeight||"800",10),alt:d.querySelector("img")?.alt||""}});new a({gallery:o,options:n,dataSource:s}).init()})})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",w):w();
