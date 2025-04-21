const a=document.getElementById("menu-toggle"),l=document.getElementById("mobile-menu");a&&l&&a.addEventListener("click",()=>{l.classList.toggle("hidden")});const o=document.getElementById("site-header");o&&window.addEventListener("scroll",()=>{window.scrollY>100?o.classList.add("shadow-lg","bg-white/95","backdrop-blur-sm"):o.classList.remove("shadow-lg","bg-white/95","backdrop-blur-sm")});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("site-search"),t=document.getElementById("search-results");n&&t&&(n.addEventListener("input",d=>{const s=n.value.trim().toLowerCase();if(s.length<2){t.classList.add("hidden");return}const i=searchData.filter(e=>e.title.toLowerCase().includes(s)||e.content.toLowerCase().includes(s));i.length>0?(t.innerHTML=i.map(e=>`
            <a href="${e.url}" class="block p-3 hover:bg-gray-100">
              <div class="font-medium text-temple-navy">${e.title}</div>
              <div class="text-sm text-gray-600">${e.content}</div>
            </a>
          `).join(""),t.classList.remove("hidden")):(t.innerHTML=`
            <div class="p-3 text-gray-600">No results found</div>
          `,t.classList.remove("hidden"))}),document.addEventListener("click",d=>{!n.contains(d.target)&&!t.contains(d.target)&&t.classList.add("hidden")}),n.closest("form")?.addEventListener("submit",d=>{d.preventDefault();const s=n.value.trim().toLowerCase();if(s.length>=2){const i=searchData.filter(e=>e.title.toLowerCase().includes(s)||e.content.toLowerCase().includes(s));i.length>0&&(window.location.href=i[0].url)}}))});
