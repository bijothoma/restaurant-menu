(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();let o=[],d=[];const c=document.getElementById("menu-items"),u=document.getElementById("menu-cart");function f(r){let n=[];r.toLowerCase()==="all"?n=o:n=o.filter(e=>e.category.toLowerCase()===r.toLowerCase());const i=n.map(e=>`<div class="menu-item">
    <div class="menu-image">
      <img
        src=${e.img}
      />
    </div>
    <div class="menu-dish">
      <div class="dish-header">
        <h3 id="dish-title">${e.name}</h3>
        <h3 id="dish-price">$${e.price}</h3>
      </div>
      <div class="dish-description">
        ${e.dsc} from ${e.country}
      </div>
      <div>
        <button class="dish-cart" data-id=${e.id}>Add to Cart</button>
      </div>
    </div>
  </div>`).join("");c.innerHTML=i}const h=document.querySelectorAll(".category-buttons");h.forEach(r=>{r.addEventListener("click",()=>{f(r.innerText.toLowerCase())})});const m=document.querySelectorAll(".cart-delete");m.forEach(r=>{r.addEventListener("click",function(n){let i=n.target;console.log(i.dataset.id)})});document.addEventListener("click",function(r){if(r.target.classList.contains("dish-cart")){let n=r.target,i=o.find(t=>t.id===n.dataset.id),e=!1;if(d=d.map(t=>(t.id===n.dataset.id&&(t.quantity+=1,e=!0),t)),!e){let t={...i,quantity:1};d.push(t)}l()}if(r.target.classList.contains("cart-delete")){let n=r.target,i=d.find(e=>e.id===n.dataset.id);i.quantity>1?d=d.map(e=>(e.id===i.id&&(e.quantity-=1),e)):d.pop(i),l()}});function l(){const r=`<tr>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Action</th>      
                  </tr>`,n=d.map(i=>`<tr >
                <td>${i.name}</td>
                <td>${i.price}</td>
                <td>${i.quantity}</td>
                <td>${i.quantity*i.price}</td>
                <td><button class="cart-delete" data-id=${i.id}>X</button> </td>       
              </tr>`);u.innerHTML=`<table id="cartTable"> ${r}${n.join("")}</table>`}
