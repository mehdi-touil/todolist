(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>v,O:()=>E});const t=document.querySelector(".main-interface");function n(e,n){let l=document.querySelector(".addform"),d=document.createElement("div");d.className="todo-item";let o=document.createElement("div");o.className="firstrow";let c=document.createElement("div");c.className="checkbox-todotitle";let i=document.createElement("input");i.id=i.type=i.name="checkbox",i.checked=e.checklist,i.setAttribute("onclick","return false;");let a=document.createElement("div");a.className="todotitle",a.innerText=e.title,c.appendChild(i),c.appendChild(a),o.appendChild(c);let r=document.createElement("div");r.className="todointerface";let s=document.createElement("div");s.className="todointerface-items",s.classList.add("duedate"),s.innerText=e.dueDate,r.appendChild(s.cloneNode(!0)),s.innerText=e.priority,s.classList.remove("duedate"),s.classList.add("priority"),"Highest"==e.priority&&(s.style.backgroundColor="red"),"Critical"==e.priority&&(s.style.backgroundColor="yellow"),"Alarming"==e.priority&&(s.style.backgroundColor="green"),"Low"==e.priority&&(s.style.backgroundColor="gray"),r.appendChild(s.cloneNode(!0));let m=document.createElement("div"),u=document.createElement("img");u.src="/src/images/menu2.png",u.setAttribute("width","20px"),u.className="image",m.appendChild(u),r.appendChild(m),o.appendChild(r);let p=document.createElement("div");p.className="moremenu";let y=document.createElement("span");y.innerText="Edit",y.id="Edit"+n,p.appendChild(y);let g=document.createElement("span");g.innerText="Delete",g.id="Delete"+n,p.appendChild(g),o.appendChild(p),d.appendChild(o);let h=document.createElement("div");h.className="description",h.innerText=e.description,d.appendChild(h),d.id=n,t.insertBefore(d,l)}function l(e,t){for(let n=t.length-2;n>=e;n--)t[n+1].id=t[n].id}class d{projectcontent=[];counter=0;title="";add(e){this.add_without_dom(e),n(e,this.counter-1),this.Editmenu(this.counter-1),console.log(this.projectcontent)}add_without_dom(e){this.projectcontent.push(e),this.counter++}deleteitemwithoutDom(e){let t=this.projectcontent.findIndex((t=>JSON.stringify(t)===JSON.stringify(e)));this.projectcontent.splice(t,1),this.counter--}deleteitem(e){let t=document.querySelectorAll(".todo-item");l(e,t);let n=this.projectcontent[e];i(E,n),console.log(n),function(e,t){for(let n=e;n<t.length-1;n++)t[n]=t[n+1];t.length--}(e,this.projectcontent),t[e].remove(),this.counter--}Editmenu(e){!function(e){let t=document.querySelectorAll(".image")[e],n=document.querySelectorAll(".moremenu")[e];t.addEventListener("click",(()=>{n.style.display="flex"})),document.body.addEventListener("click",(()=>{n.style.display="none"}),!0)}(e);let t=document.getElementById("Delete"+e);t.addEventListener("click",(()=>{let e=Number(t.parentNode.parentNode.parentNode.id);this.deleteitem(e)}));let n=document.getElementById("Edit"+e);n.addEventListener("click",(()=>{const t=document.querySelector(".addform").cloneNode(!0);t.style.display="grid";let l=document.getElementById(n.id.replace("Edit",""));l.parentNode.insertBefore(t,l),l.style.display="none";let d=document.getElementsByClassName("addbutton")[0],c=document.getElementsByClassName("cancelbutton")[0];d.innerText="Update",document.getElementsByName("checklist")[0].value=document.getElementsByName("checkbox")[e].value,document.getElementsByName("title")[0].value=document.getElementsByClassName("todotitle")[e].innerText,document.getElementsByName("duedate").value=document.getElementsByClassName("duedate")[e].innerText,document.getElementsByName("priority")[0].value=document.getElementsByClassName("priority")[e].innerText,document.getElementsByName("description")[0].value=document.getElementsByClassName("description")[e].innerText,d.addEventListener("click",(()=>{let n,d=document.getElementById("checklist").checked,c=document.getElementById("title").value,i=document.getElementById("duedate").value,a=document.getElementById("priority").value,r=document.getElementById("description").value;"Highest"==a&&(n="red"),"Critical"==a&&(n="yellow"),"Alarming"==a&&(n="green"),"Low"==a&&(n="gray"),document.getElementsByClassName("priority")[e].style.backgroundColor=n,document.getElementsByName("checkbox")[e].value=d,document.getElementsByClassName("todotitle")[e].innerText=c,document.getElementsByClassName("duedate")[e].innerText=i,document.getElementsByClassName("priority")[e].innerText=a,document.getElementsByClassName("description")[e].innerText=r;let s=new o(c,r,i,a,d);this.projectcontent[e]=s,l.style.display="block",t.remove()})),c.addEventListener("click",(()=>{l.style.display="block",t.remove()}))}))}}class o{constructor(e,t,n,l,d){this.title=e,this.description=t,this.dueDate=n,this.priority=l,this.checklist=d}}class c{formDom=document.querySelector(".addform");add_item=document.querySelector(".addtask");cancel_btn=document.querySelector(".cancelbutton");add_btn=document.querySelector(".addbutton");showform=function(){this.add_item.addEventListener("click",(()=>{this.formDom.style.display="grid"}))};cancelevent=function(){this.cancel_btn.addEventListener("click",(()=>{this.formDom.style.display="none"}))};addevent=function(e){this.add_btn.addEventListener("click",(()=>{let t=document.getElementById("checklist").checked,n=document.getElementById("title").value,l=document.getElementById("duedate").value,d=document.getElementById("priority").value,c=document.getElementById("description").value;e.add(new o(n,c,l,d,t)),E[0].add_without_dom(new o(n,c,l,d,t)),"Highest"==d&&E[1].add_without_dom(new o(n,c,l,d,t));var i=new Date,a=String(i.getDate()).padStart(2,"0"),r=String(i.getDate()+7).padStart(2,"0");console.log(r);var s=String(i.getMonth()+1).padStart(2,"0"),m=i.getFullYear();let u=m+"-"+s+"-"+r;l===(i=m+"-"+s+"-"+a)&&E[2].add_without_dom(new o(n,c,l,d,t));var p=new Date(l),y=new Date(i),g=new Date(u);console.log(p>=y&&p<=g),p>=y&&p<=g&&E[3].add_without_dom(new o(n,c,l,d,t))}))}}function i(e,t){e[0].deleteitemwithoutDom(t),"Highest"==t.priority&&e[1].deleteitemwithoutDom(t);var n=new Date,l=String(n.getDate()).padStart(2,"0"),d=String(n.getDate()+7).padStart(2,"0"),o=String(n.getMonth()+1).padStart(2,"0"),c=n.getFullYear();n=c+"-"+o+"-"+l;let i=c+"-"+o+"-"+d;t.dueDate===n&&e[2].deleteitemwithoutDom(t);var a=new Date(t.dueDate),r=new Date(n),s=new Date(i);a>=r&&a<=s&&e[3].deleteitemwithoutDom(t)}function a(){let e=document.getElementsByClassName("project-info");for(let t=0;t<e.length;t++)e[t].classList.remove("selected");document.querySelectorAll(".mainboxes").forEach((e=>{e.classList.remove("selected")}))}function r(e){let t=document.querySelector(".addtask"),n=t.cloneNode(!0);n.className="new",document.querySelector(".addtask").style.display="none",n.removeChild(n.firstChild),n.innerText=e,t.parentNode.insertBefore(n,document.querySelector(".addform"))}function s(e){!function(){for(;t.childElementCount>2;)t.removeChild(t.firstChild)}(),0===v.length&&r("No Tasks Add !!");for(let t=0;t<e.projectcontent.length;t++)n(e.projectcontent[t],t),e.Editmenu(t);var l=document.querySelector(".addform"),d=l.cloneNode(!0);l.parentNode.replaceChild(d,l);let o=new c;o.showform(),o.cancelevent(),o.addevent(e)}function m(e,t){let n=document.createElement("div");n.classList.add("renameform");let l=document.createElement("input");l.type="text",l.name="ptitle",l.placeholder="Enter a title",l.id="ptitle",n.appendChild(l);let d=document.createElement("button");d.className="renamebutton",d.innerText="Rename",n.appendChild(d);let o=document.createElement("button");o.className="cancelbtn",o.innerText="Cancel",n.appendChild(o);let c=document.getElementsByClassName("project-info")[t+1];void 0===c&&(c=document.querySelector(".addproject")),c.parentNode.insertBefore(n,c),"undefined"!==t&&(l.value=e[t].title,document.getElementsByClassName("project-info")[t].style.display="none")}function u(e,t,n){e.push(t),function(e,t){let n=document.createElement("div");n.className="project-info",n.id=t;let l=document.createElement("div");l.className="project-box";let d=document.createElement("img");d.src="/src/images/menu1.png",d.setAttribute("class","leftbox"),d.alt="menu",d.setAttribute("width","30px"),l.appendChild(d),n.appendChild(l.cloneNode(!0)),l.className="middlebox",l.innerHTML=e[t].title,n.appendChild(l.cloneNode(!0)),l.className="project-box",l.innerHTML="",d.src="/src/images/menu2.png",d.setAttribute("class","rightbox"),d.setAttribute("width","20px"),l.appendChild(d),n.appendChild(l.cloneNode(!0));let o=document.createElement("div");o.className="projectmenu",l.className="rename",l.innerText="Rename",o.appendChild(l);let c=document.createElement("div");c.className="delete",c.innerText="Delete",o.appendChild(c),n.appendChild(o);let i=document.querySelector(".addproject");i.parentNode.insertBefore(n,i)}(e,n),function(e){let t=document.querySelectorAll(".rightbox")[e];t.addEventListener("click",(()=>{console.log(e);let n=t.parentElement.parentElement.id,l=document.querySelectorAll(".projectmenu")[Number(n)];l.style.display="block",document.body.addEventListener("click",(()=>{l.style.display="none"}),!0)}))}(n),function(e,t){document.getElementsByClassName("rename")[t].addEventListener("click",(()=>{m(e,t),function(e){document.getElementsByClassName("cancelbtn")[0].addEventListener("click",(()=>{document.getElementsByClassName("project-info")[e].style.display="flex",document.getElementsByClassName("renameform")[0].remove()}))}(t),function(e,t){document.getElementsByClassName("renamebutton")[0].addEventListener("click",(()=>{let n=document.getElementById("ptitle").value;e[t].title=n,document.querySelectorAll(".middlebox")[t].innerText=n,document.getElementsByClassName("project-info")[t].style.display="flex",document.getElementsByClassName("renameform")[0].remove(),localStorage.setItem("projects",JSON.stringify(e))}))}(e,t)}))}(e,n),function(e,t){let n=document.getElementsByClassName("delete")[t];n.addEventListener("click",(()=>{let t=n.parentNode.parentNode.id;l(t,document.getElementsByClassName("project-info")),n.parentNode.parentNode.remove(),n.parentNode.previousElementSibling.previousElementSibling.innerText;for(let n of e[t].projectcontent)i(E,n);e.splice(t,1),0===e.length&&r(" No Tasks Add!!"),localStorage.setItem("projects",JSON.stringify(e))}))}(e,n),document.querySelectorAll(".project-info").forEach((t=>{t.addEventListener("click",(()=>{document.querySelector(".addtask").style.display="flex",a(),function(e,t){s(t[e])}(t.id,e),document.getElementsByClassName("project-info")[t.id].classList.add("selected")}))}))}let p=new d;p.title="General";let y=new d;y.title="important";let g=new d;g.title="title";let h=new d;h.title="next7days";let E=[p,y,g,h],f=new c;f.showform(),f.cancelevent(),f.addevent(p);let v=[];!function(e,t="undefined"){document.querySelector(".addproject").addEventListener("click",(()=>{m(e,t);let n=document.querySelector(".renamebutton"),l=document.querySelector(".cancelbtn");n.innerText="Add",l.addEventListener("click",(()=>{document.querySelector(".renameform").remove()})),n.addEventListener("click",(()=>{let t=document.getElementById("ptitle").value,n=new d;n.title=t,u(e,n,e.length),localStorage.setItem("projects",JSON.stringify(e)),document.querySelector(".renameform").remove()}))}))}(v);for(let e=0;e<document.querySelectorAll(".mainboxes").length;e++){const t=document.querySelectorAll(".mainboxes")[e];t.addEventListener("click",(()=>{a(),document.querySelector(".addtask").style.display="none",t.classList.add("selected"),s(E[e])}))}document.querySelector(".menuimage").addEventListener("click",(()=>{let e,t=document.querySelector(".sidebar"),n=document.querySelector(".main-interface");e="flex"==t.style.display?"none":"flex",t.style.display=e,"flex"==e?n.classList.remove("wide"):n.classList.add("wide")}));let N=JSON.parse(localStorage.getItem("projects"));if(0!==N.length){for(let e=0;e<N.length;e++)u(v,N[e],e);r("Select A project")}else r(" No Tasks Add!!")})();