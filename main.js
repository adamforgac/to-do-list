(()=>{"use strict";(function(){const e=document.querySelector(".creator-menu");document.querySelector(".project-creator").addEventListener("click",(()=>{e.classList.add("active-menu"),document.querySelector("body").classList.add("menu-active")})),document.querySelector(".leave-creator i").addEventListener("click",(()=>{e.classList.remove("active-menu"),document.querySelector("body").classList.remove("menu-active")}));const t=document.querySelector(".mobile-adder"),o=document.querySelector(".creator-menu-mobile"),c=document.querySelector(".todo-create-mobile"),s=document.querySelector(".project-create-mobile"),r=document.querySelector(".note-create-mobile"),a=document.querySelector(".todo-create-mobile p"),i=document.querySelector(".project-create-mobile p"),l=document.querySelector(".note-create-mobile p");t.addEventListener("click",(()=>{o.classList.toggle("active-menu-mobile"),document.querySelector(".mobile-adder i").classList.toggle("rotated"),c.classList.toggle("active-todo-mobile"),s.classList.toggle("active-project-mobile"),r.classList.toggle("active-note-mobile"),a.classList.toggle("options-appear"),i.classList.toggle("options-appear"),l.classList.toggle("options-appear"),document.querySelector("body").classList.toggle("menu-active")}));const n=document.querySelector(".todo-create"),d=document.querySelector(".note-create"),m=document.querySelector(".project-create"),u=document.querySelector(".todo-setter"),v=document.querySelector(".note-setter"),L=document.querySelector(".project-setter"),p=document.querySelector(".todo-setter-nav-arrow i"),y=document.querySelector(".note-setter-nav-arrow i"),q=document.querySelector(".project-setter-nav-arrow i"),S=document.querySelector(".todo-setter-nav-icons i"),b=document.querySelector(".note-setter-nav-icons i"),E=document.querySelector(".project-setter-nav-icons i");n.addEventListener("click",(()=>{u.classList.add("active-todo-setter")})),d.addEventListener("click",(()=>{v.classList.add("active-note-setter")})),m.addEventListener("click",(()=>{L.classList.add("active-project-setter")})),p.addEventListener("click",(()=>{u.classList.remove("active-todo-setter"),e.classList.add("active-menu")})),y.addEventListener("click",(()=>{v.classList.remove("active-note-setter"),e.classList.add("active-menu")})),q.addEventListener("click",(()=>{L.classList.remove("active-project-setter"),e.classList.add("active-menu")})),S.addEventListener("click",(()=>{u.classList.remove("active-todo-setter"),e.classList.remove("active-menu")})),b.addEventListener("click",(()=>{v.classList.remove("active-note-setter"),e.classList.remove("active-menu")})),E.addEventListener("click",(()=>{L.classList.remove("active-project-setter"),e.classList.remove("active-menu")}));const k=document.querySelector(".todo-create-mobile"),g=document.querySelector(".note-create-mobile"),h=document.querySelector(".project-create-mobile");k.addEventListener("click",(()=>{u.classList.add("active-todo-setter")})),g.addEventListener("click",(()=>{v.classList.add("active-note-setter")})),h.addEventListener("click",(()=>{L.classList.add("active-project-setter")})),S.addEventListener("click",(()=>{u.classList.remove("active-todo-setter"),o.classList.remove("active-menu-mobile"),document.querySelector(".mobile-adder i").classList.remove("rotated"),c.classList.remove("active-todo-mobile"),s.classList.remove("active-project-mobile"),r.classList.remove("active-note-mobile"),a.classList.remove("options-appear"),i.classList.remove("options-appear"),l.classList.remove("options-appear"),document.querySelector("body").classList.remove("menu-active")})),b.addEventListener("click",(()=>{v.classList.remove("active-note-setter"),o.classList.remove("active-menu-mobile"),document.querySelector(".mobile-adder i").classList.remove("rotated"),c.classList.remove("active-todo-mobile"),s.classList.remove("active-project-mobile"),r.classList.remove("active-note-mobile"),a.classList.remove("options-appear"),i.classList.remove("options-appear"),l.classList.remove("options-appear"),document.querySelector("body").classList.remove("menu-active")})),E.addEventListener("click",(()=>{L.classList.remove("active-project-setter"),o.classList.remove("active-menu-mobile"),document.querySelector(".mobile-adder i").classList.remove("rotated"),c.classList.remove("active-todo-mobile"),s.classList.remove("active-project-mobile"),r.classList.remove("active-note-mobile"),a.classList.remove("options-appear"),i.classList.remove("options-appear"),l.classList.remove("options-appear"),document.querySelector("body").classList.remove("menu-active")}))})(),function(){const e=document.querySelector(".mobile-menu"),t=document.querySelector(".nav"),o=document.querySelector(".task-board"),c=document.querySelector("body");e.addEventListener("click",(()=>{t.style.pointerEvents="all",t.style.left="0",t.style.width="80%",t.style.opacity="1",o.style.pointerEvents="none",o.style.filter="brightness(0.3)",c.style.overflow="hidden",t.classList.add("active-nav")})),document.addEventListener("click",(e=>{const s=[];let r=e.target;for(;null!==r;){const e=Array.from(r.classList);s.push(...e),r=r.parentElement}s.includes("nav")||s.includes("mobile-menu")||!t.classList.contains("active-nav")||(t.style.pointerEvents="none",t.style.left="-300px",t.style.width="10%",t.style.opacity="1",o.style.pointerEvents="all",o.style.filter="none",c.style.overflow="visible",t.classList.remove("active-nav"))}))}();const e=[],t=document.querySelector(".todos");function o(e,t,o,c,s){this.title=e,this.details=t,this.project=o,this.date=c,this.importance=s}function c(){const e=t.querySelectorAll(".task");for(let t=0;t<=e.length-1;t++)e[t].setAttribute("data-card",[t])}document.querySelector(".todo-setter-accept button").addEventListener("click",(s=>{s.preventDefault(),document.querySelectorAll(".todo-setter-form input").forEach((e=>{e.checkValidity(),e.reportValidity()}));const r=document.querySelector(".todo-setter-title-input input"),a=document.querySelector(".todo-setter-details-input textarea"),i=document.querySelector(".todo-setter-projects-input select"),l=document.querySelector(".todo-setter-date-input input"),n=document.querySelector(".container input");var d,m,u,v,L;""===r.value||(d=r.value,m=a.value,u=i.value,v=l.value,L=n.value,e.push(new o(d,m,u,v,L)),function(o){for(let s=o-1;s<e.length;s++){t.appendChild(document.createElement("div")).classList.add("task");const e=t.querySelectorAll(".task");e[s].appendChild(document.createElement("div")).classList.add("task-status"),e[s].appendChild(document.createElement("div")).classList.add("task-text"),e[s].appendChild(document.createElement("div")).classList.add("task-category"),e[s].appendChild(document.createElement("div")).classList.add("task-importance"),c()}}(e.length),document.querySelector(".creator-menu").classList.remove("active-menu"),document.querySelector(".todo-setter").classList.remove("active-todo-setter"),r.value="",a.value="",l.value="",n.checked=!1)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUIwQmlCLEVBQVNFLE1BekI3QmxCLEVBeUJvQ2lCLEVBQWVDLE1BeEJ2R3pCLEVBQVNILEtBQUssSUFBSUssRUFBS0MsRUFBT0MsRUFBU0MsRUFBU0MsRUFBTUMsSUFkeEQsU0FBMkJtQixHQUN6QixJQUFLLElBQUlkLEVBQUljLEVBQU0sRUFBR2QsRUFBSVosRUFBU2EsT0FBUUQsSUFBSyxDQUM5Q1gsRUFBTTBCLFlBQVk3RSxTQUFTOEUsY0FBYyxRQUFRM0UsVUFBVUMsSUFBSSxRQUMvRCxNQUFNMkUsRUFBTzVCLEVBQU1VLGlCQUFpQixTQUNwQ2tCLEVBQUtqQixHQUFHZSxZQUFZN0UsU0FBUzhFLGNBQWMsUUFBUTNFLFVBQVVDLElBQUksZUFDakUyRSxFQUFLakIsR0FBR2UsWUFBWTdFLFNBQVM4RSxjQUFjLFFBQVEzRSxVQUFVQyxJQUFJLGFBQ2pFMkUsRUFBS2pCLEdBQUdlLFlBQVk3RSxTQUFTOEUsY0FBYyxRQUFRM0UsVUFBVUMsSUFBSSxpQkFDakUyRSxFQUFLakIsR0FBR2UsWUFBWTdFLFNBQVM4RSxjQUFjLFFBQVEzRSxVQUFVQyxJQUFJLG1CQUVqRXVELEdBQ0YsQ0FDRixDQUtFcUIsQ0FBa0I5QixFQUFTYSxRQXdCekIvRCxTQUFTQyxjQUFjLGlCQUFpQkUsVUFBVUUsT0FBTyxlQUN6REwsU0FBU0MsY0FBYyxnQkFBZ0JFLFVBQVVFLE9BQU8sc0JBRXhEaUUsRUFBVUssTUFBUSxHQUNsQkosRUFBWUksTUFBUSxHQUNwQkYsRUFBU0UsTUFBUSxHQUNqQkQsRUFBZU8sU0FBVSxFQUMzQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9waG9uZU1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2FsbERvbSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdG9yLW1lbnUnKTtcbiAgY29uc3QgY3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNyZWF0b3InKTtcblxuICBjcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW1lbnUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbWVudS1hY3RpdmUnKTtcbiAgfSk7XG5cbiAgY29uc3QgY3Jvc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhdmUtY3JlYXRvciBpJyk7XG4gIGNyb3NzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW1lbnUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1hY3RpdmUnKTtcbiAgfSk7XG5cbiAgY29uc3QgbW9iaWxlQWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWFkZGVyJyk7XG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRvci1tZW51LW1vYmlsZScpO1xuICBjb25zdCBtb2JpbGVUb2RvSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNyZWF0ZS1tb2JpbGUnKTtcbiAgY29uc3QgbW9iaWxlUHJvamVjdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jcmVhdGUtbW9iaWxlJyk7XG4gIGNvbnN0IG1vYmlsZU5vdGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtY3JlYXRlLW1vYmlsZScpO1xuICBjb25zdCB0b2RvUGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY3JlYXRlLW1vYmlsZSBwJyk7XG4gIGNvbnN0IHByb2plY3RQYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jcmVhdGUtbW9iaWxlIHAnKTtcbiAgY29uc3Qgbm90ZVBhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLWNyZWF0ZS1tb2JpbGUgcCcpO1xuXG4gIG1vYmlsZUFkZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlLW1lbnUtbW9iaWxlJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWFkZGVyIGknKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGVkJyk7XG5cbiAgICBtb2JpbGVUb2RvSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtdG9kby1tb2JpbGUnKTtcbiAgICBtb2JpbGVQcm9qZWN0SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtcHJvamVjdC1tb2JpbGUnKTtcbiAgICBtb2JpbGVOb3RlSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtbm90ZS1tb2JpbGUnKTtcblxuICAgIHRvZG9QYXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3B0aW9ucy1hcHBlYXInKTtcbiAgICBwcm9qZWN0UGFyLmNsYXNzTGlzdC50b2dnbGUoJ29wdGlvbnMtYXBwZWFyJyk7XG4gICAgbm90ZVBhci5jbGFzc0xpc3QudG9nZ2xlKCdvcHRpb25zLWFwcGVhcicpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGNvbnN0IHRvZG9DcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY3JlYXRlJyk7XG4gIGNvbnN0IG5vdGVDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtY3JlYXRlJyk7XG4gIGNvbnN0IHByb2plY3RDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY3JlYXRlJyk7XG4gIGNvbnN0IHRvZG9TZXR0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1zZXR0ZXInKTtcbiAgY29uc3Qgbm90ZVNldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLXNldHRlcicpO1xuICBjb25zdCBwcm9qZWN0U2V0dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2V0dGVyJyk7XG4gIGNvbnN0IGV4aXRDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tc2V0dGVyLW5hdi1hcnJvdyBpJyk7XG4gIGNvbnN0IGV4aXROb3RlQ3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLXNldHRlci1uYXYtYXJyb3cgaScpO1xuICBjb25zdCBleGl0UHJvamVjdENyZWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zZXR0ZXItbmF2LWFycm93IGknKTtcbiAgY29uc3QgZXhpdFRvTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXNldHRlci1uYXYtaWNvbnMgaScpO1xuICBjb25zdCBleGl0VG9NZW51Tm90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLXNldHRlci1uYXYtaWNvbnMgaScpO1xuICBjb25zdCBleGl0VG9NZW51UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXNldHRlci1uYXYtaWNvbnMgaScpO1xuXG4gIHRvZG9DcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9TZXR0ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRvZG8tc2V0dGVyJyk7XG4gIH0pO1xuICBub3RlQ3JlYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBub3RlU2V0dGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1ub3RlLXNldHRlcicpO1xuICB9KTtcbiAgcHJvamVjdENyZWF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdFNldHRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdC1zZXR0ZXInKTtcbiAgfSk7XG4gIGV4aXRDcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9TZXR0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRvZG8tc2V0dGVyJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbWVudScpO1xuICB9KTtcbiAgZXhpdE5vdGVDcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5vdGVTZXR0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW5vdGUtc2V0dGVyJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbWVudScpO1xuICB9KTtcbiAgZXhpdFByb2plY3RDcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RTZXR0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3Qtc2V0dGVyJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbWVudScpO1xuICB9KTtcbiAgZXhpdFRvTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvU2V0dGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10b2RvLXNldHRlcicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW1lbnUnKTtcbiAgfSk7XG4gIGV4aXRUb01lbnVOb3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5vdGVTZXR0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW5vdGUtc2V0dGVyJyk7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbWVudScpO1xuICB9KTtcbiAgZXhpdFRvTWVudVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdFNldHRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdC1zZXR0ZXInKTtcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1tZW51Jyk7XG4gIH0pO1xuXG4gIGNvbnN0IHRvZG9Nb2JpbGVDcmVhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY3JlYXRlLW1vYmlsZScpO1xuICBjb25zdCBub3RlTW9iaWxlQ3JlYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLWNyZWF0ZS1tb2JpbGUnKTtcbiAgY29uc3QgcHJvamVjdE1vYmlsZUNyZWF0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jcmVhdGUtbW9iaWxlJyk7XG5cbiAgdG9kb01vYmlsZUNyZWF0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb1NldHRlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdG9kby1zZXR0ZXInKTtcbiAgfSk7XG4gIG5vdGVNb2JpbGVDcmVhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5vdGVTZXR0ZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW5vdGUtc2V0dGVyJyk7XG4gIH0pO1xuICBwcm9qZWN0TW9iaWxlQ3JlYXRvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0U2V0dGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0LXNldHRlcicpO1xuICB9KTtcbiAgZXhpdFRvTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvU2V0dGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10b2RvLXNldHRlcicpO1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW1lbnUtbW9iaWxlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1hZGRlciBpJykuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlZCcpO1xuICAgIG1vYmlsZVRvZG9JY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10b2RvLW1vYmlsZScpO1xuICAgIG1vYmlsZVByb2plY3RJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0LW1vYmlsZScpO1xuICAgIG1vYmlsZU5vdGVJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1ub3RlLW1vYmlsZScpO1xuICAgIHRvZG9QYXIuY2xhc3NMaXN0LnJlbW92ZSgnb3B0aW9ucy1hcHBlYXInKTtcbiAgICBwcm9qZWN0UGFyLmNsYXNzTGlzdC5yZW1vdmUoJ29wdGlvbnMtYXBwZWFyJyk7XG4gICAgbm90ZVBhci5jbGFzc0xpc3QucmVtb3ZlKCdvcHRpb25zLWFwcGVhcicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWFjdGl2ZScpO1xuICB9KTtcbiAgZXhpdFRvTWVudU5vdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbm90ZVNldHRlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbm90ZS1zZXR0ZXInKTtcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1tZW51LW1vYmlsZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtYWRkZXIgaScpLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZWQnKTtcbiAgICBtb2JpbGVUb2RvSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtdG9kby1tb2JpbGUnKTtcbiAgICBtb2JpbGVQcm9qZWN0SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdC1tb2JpbGUnKTtcbiAgICBtb2JpbGVOb3RlSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbm90ZS1tb2JpbGUnKTtcbiAgICB0b2RvUGFyLmNsYXNzTGlzdC5yZW1vdmUoJ29wdGlvbnMtYXBwZWFyJyk7XG4gICAgcHJvamVjdFBhci5jbGFzc0xpc3QucmVtb3ZlKCdvcHRpb25zLWFwcGVhcicpO1xuICAgIG5vdGVQYXIuY2xhc3NMaXN0LnJlbW92ZSgnb3B0aW9ucy1hcHBlYXInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1hY3RpdmUnKTtcbiAgfSk7XG4gIGV4aXRUb01lbnVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RTZXR0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3Qtc2V0dGVyJyk7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbWVudS1tb2JpbGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLWFkZGVyIGknKS5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGVkJyk7XG4gICAgbW9iaWxlVG9kb0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRvZG8tbW9iaWxlJyk7XG4gICAgbW9iaWxlUHJvamVjdEljb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QtbW9iaWxlJyk7XG4gICAgbW9iaWxlTm90ZUljb24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLW5vdGUtbW9iaWxlJyk7XG4gICAgdG9kb1Bhci5jbGFzc0xpc3QucmVtb3ZlKCdvcHRpb25zLWFwcGVhcicpO1xuICAgIHByb2plY3RQYXIuY2xhc3NMaXN0LnJlbW92ZSgnb3B0aW9ucy1hcHBlYXInKTtcbiAgICBub3RlUGFyLmNsYXNzTGlzdC5yZW1vdmUoJ29wdGlvbnMtYXBwZWFyJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYWN0aXZlJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxsRG9tO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IGNhbGxEb20gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5pbXBvcnQgY3JlYXRlUGhvbmVNZW51IGZyb20gJy4vbW9kdWxlcy9waG9uZU1lbnUnO1xuXG5jYWxsRG9tKCk7XG5cbmNyZWF0ZVBob25lTWVudSgpO1xuXG5jb25zdCBhbGxUYXNrcyA9IFtdO1xuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcblxuY29uc3QgdGFza0RvbmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1zZXR0ZXItYWNjZXB0IGJ1dHRvbicpO1xuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXRhaWxzLCBwcm9qZWN0LCBkYXRlLCBpbXBvcnRhbmNlKSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgdGhpcy5pbXBvcnRhbmNlID0gaW1wb3J0YW5jZTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKCkge1xuICBjb25zdCBldmVyeVRhc2sgPSB0b2Rvcy5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGV2ZXJ5VGFzay5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBldmVyeVRhc2tbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWNhcmQnLCBbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvb3BUaHJvdWdodFRhc2tzKG51bSkge1xuICBmb3IgKGxldCBpID0gbnVtIC0gMTsgaSA8IGFsbFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgdG9kb3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICBjb25zdCB0YXNrID0gdG9kb3MucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICB0YXNrW2ldLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cycpO1xuICAgIHRhc2tbaV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGV4dCcpO1xuICAgIHRhc2tbaV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2F0ZWdvcnknKTtcbiAgICB0YXNrW2ldLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5jbGFzc0xpc3QuYWRkKCd0YXNrLWltcG9ydGFuY2UnKTtcblxuICAgIGFkZEF0dHJpYnV0ZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvQWxsVGFza3ModGl0bGUsIGRldGFpbHMsIHByb2plY3QsIGRhdGUsIGltcG9ydGFuY2UpIHtcbiAgYWxsVGFza3MucHVzaChuZXcgVGFzayh0aXRsZSwgZGV0YWlscywgcHJvamVjdCwgZGF0ZSwgaW1wb3J0YW5jZSkpO1xuXG4gIGxvb3BUaHJvdWdodFRhc2tzKGFsbFRhc2tzLmxlbmd0aCk7XG59XG5cbnRhc2tEb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIC8vIEdFVCBUSEUgRk9STVMgSU5GT1xuICAvLyBHRVQgVEhFIEZPUk1TIElORk9cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBhbGxUYXNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tc2V0dGVyLWZvcm0gaW5wdXQnKTtcbiAgYWxsVGFza0lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmNoZWNrVmFsaWRpdHkoKTtcbiAgICBpbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9KTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tc2V0dGVyLXRpdGxlLWlucHV0IGlucHV0Jyk7XG4gIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tc2V0dGVyLWRldGFpbHMtaW5wdXQgdGV4dGFyZWEnKTtcbiAgY29uc3QgdGFza1Byb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tc2V0dGVyLXByb2plY3RzLWlucHV0IHNlbGVjdCcpO1xuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXNldHRlci1kYXRlLWlucHV0IGlucHV0Jyk7XG4gIGNvbnN0IHRhc2tJbXBvcnRhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lciBpbnB1dCcpO1xuXG4gIGlmICh0YXNrVGl0bGUudmFsdWUgPT09ICcnKSB7XG4gICAgZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgYWRkVG9BbGxUYXNrcyh0YXNrVGl0bGUudmFsdWUsIHRhc2tEZXRhaWxzLnZhbHVlLCB0YXNrUHJvamVjdHMudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB0YXNrSW1wb3J0YW5jZS52YWx1ZSk7XG4gICAgLy8gUkVNT1ZFUyBNRU5VU1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdG9yLW1lbnUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbWVudScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXNldHRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10b2RvLXNldHRlcicpO1xuICAgIC8vIFJFTU9WRVMgQUxMIENPTlRFTlQgRlJPTSBGT1JNU1xuICAgIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xuICAgIHRhc2tEZXRhaWxzLnZhbHVlID0gJyc7XG4gICAgdGFza0RhdGUudmFsdWUgPSAnJztcbiAgICB0YXNrSW1wb3J0YW5jZS5jaGVja2VkID0gZmFsc2U7XG4gIH1cbn0pO1xuIiwiZnVuY3Rpb24gY3JlYXRlUGhvbmVNZW51KCkge1xuICBjb25zdCBtb2JpbGVNZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudScpO1xuICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuICBjb25zdCB0YXNrQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib2FyZCcpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIG1vYmlsZU1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vYmlsZU1lbnUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhbGwnO1xuICAgIG1vYmlsZU1lbnUuc3R5bGUubGVmdCA9ICcwJztcbiAgICBtb2JpbGVNZW51LnN0eWxlLndpZHRoID0gJzgwJSc7XG4gICAgbW9iaWxlTWVudS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgdGFza0JvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgdGFza0JvYXJkLnN0eWxlLmZpbHRlciA9ICdicmlnaHRuZXNzKDAuMyknO1xuXG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLW5hdicpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgY29uc3QgYWxsQ2xhc3NlcyA9IFtdO1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gY2xpY2tlZEVsZW1lbnQ7XG5cbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZWxlbWVudENsYXNzZXMgPSBBcnJheS5mcm9tKHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICAgIGFsbENsYXNzZXMucHVzaCguLi5lbGVtZW50Q2xhc3Nlcyk7XG5cbiAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFhbGxDbGFzc2VzLmluY2x1ZGVzKCduYXYnKSAmJiAhYWxsQ2xhc3Nlcy5pbmNsdWRlcygnbW9iaWxlLW1lbnUnKSAmJiBtb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLW5hdicpKSB7XG4gICAgICBtb2JpbGVNZW51LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICBtb2JpbGVNZW51LnN0eWxlLmxlZnQgPSAnLTMwMHB4JztcbiAgICAgIG1vYmlsZU1lbnUuc3R5bGUud2lkdGggPSAnMTAlJztcbiAgICAgIG1vYmlsZU1lbnUuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgdGFza0JvYXJkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICAgIHRhc2tCb2FyZC5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG5cbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1uYXYnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQaG9uZU1lbnU7XG4iXSwibmFtZXMiOlsibWVudSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJtb2JpbGVBZGRlciIsIm1vYmlsZU1lbnUiLCJtb2JpbGVUb2RvSWNvbiIsIm1vYmlsZVByb2plY3RJY29uIiwibW9iaWxlTm90ZUljb24iLCJ0b2RvUGFyIiwicHJvamVjdFBhciIsIm5vdGVQYXIiLCJ0b2dnbGUiLCJ0b2RvQ3JlYXRvciIsIm5vdGVDcmVhdG9yIiwicHJvamVjdENyZWF0b3IiLCJ0b2RvU2V0dGVyIiwibm90ZVNldHRlciIsInByb2plY3RTZXR0ZXIiLCJleGl0Q3JlYXRvciIsImV4aXROb3RlQ3JlYXRvciIsImV4aXRQcm9qZWN0Q3JlYXRvciIsImV4aXRUb01lbnUiLCJleGl0VG9NZW51Tm90ZSIsImV4aXRUb01lbnVQcm9qZWN0IiwidG9kb01vYmlsZUNyZWF0b3IiLCJub3RlTW9iaWxlQ3JlYXRvciIsInByb2plY3RNb2JpbGVDcmVhdG9yIiwibW9iaWxlTWVudUljb24iLCJ0YXNrQm9hcmQiLCJib2R5Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibGVmdCIsIndpZHRoIiwib3BhY2l0eSIsImZpbHRlciIsIm92ZXJmbG93IiwiZXZlbnQiLCJhbGxDbGFzc2VzIiwicGFyZW50RWxlbWVudCIsInRhcmdldCIsImVsZW1lbnRDbGFzc2VzIiwiQXJyYXkiLCJmcm9tIiwicHVzaCIsImluY2x1ZGVzIiwiY29udGFpbnMiLCJhbGxUYXNrcyIsInRvZG9zIiwiVGFzayIsInRpdGxlIiwiZGV0YWlscyIsInByb2plY3QiLCJkYXRlIiwiaW1wb3J0YW5jZSIsInRoaXMiLCJhZGRBdHRyaWJ1dGUiLCJldmVyeVRhc2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInNldEF0dHJpYnV0ZSIsInByZXZlbnREZWZhdWx0IiwiZm9yRWFjaCIsImlucHV0IiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwidGFza1RpdGxlIiwidGFza0RldGFpbHMiLCJ0YXNrUHJvamVjdHMiLCJ0YXNrRGF0ZSIsInRhc2tJbXBvcnRhbmNlIiwidmFsdWUiLCJudW0iLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJ0YXNrIiwibG9vcFRocm91Z2h0VGFza3MiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==