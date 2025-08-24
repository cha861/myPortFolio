window.addEventListener("scroll",()=>{
    document.querySelectorAll("section").forEach(sec=>{
        const rect=sec.getBoundingClientRect();
        if(rect.top<window.innerHeight-100){
            sec.style.opacity=1;
            sec.style.transform="translateY(0)";
        }
    });
});


//scroll animation
const sections= document.querySelectorAll("section");


const revealOnScroll=()=>{
    sections.forEach((sec,index)=>{
        const rect=sec.getBoundingClientRect();
        if(rect.top< window.innerHeight-100){
            sec.style.opacity=1;
            sec.style.transform="translateY(0)";
            sec.style.transitionDelay=`${index*0.2}s`;//staggered effect
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
//initial state
document.querySelectorAll("section").forEach(sec=>{
    sec.style.opacity=0;
    sec.style.transform-"translateY(50px)"
    sec.style.transition="all 0.6s ease-out";
});

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // stop page reload
    // validate + fetch
  });
  
