"use strict";!function(){function s(s){e.querySelector(".flash").classList.remove("flash");for(var c=0;c<a.length;c++)a[c].classList.add("visually-hidden");e.querySelector(".testimonials__controls--active").classList.remove("testimonials__controls--active"),s.target===t?(a[0].classList.remove("visually-hidden"),a[0].classList.add("flash"),t.classList.add("testimonials__controls--active")):s.target===i?(a[1].classList.remove("visually-hidden"),a[1].classList.add("flash"),i.classList.add("testimonials__controls--active")):s.target===l&&(a[2].classList.remove("visually-hidden"),a[2].classList.add("flash"),l.classList.add("testimonials__controls--active"))}var e=document.querySelector(".testimonials"),t=e.querySelector("#first"),i=e.querySelector("#second"),l=e.querySelector("#third"),a=e.querySelectorAll(".testimonials__wrapper-review");t.addEventListener("click",s),i.addEventListener("click",s),l.addEventListener("click",s)}();