// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:.12});
revealEls.forEach(el=>io.observe(el));

// Back to top visibility
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 480){ btn.classList.add('show'); } else { btn.classList.remove('show'); }
});
btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

// Active nav highlight
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-left a');
const navIo = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(l=>l.classList.remove('active'));
      const match = document.querySelector(`.nav-left a[href="#${entry.target.id}"]`);
      if(match) match.classList.add('active');
    }
  });
},{rootMargin:'-40% 0px -50% 0px'});
sections.forEach(s=>navIo.observe(s));