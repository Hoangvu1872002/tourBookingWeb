const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});





function participation(){
  const a = document.querySelector('.link');
  a.innerHTML ='You joined';
  
  console.log(a.style)
}







window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backtop").style.display = "block";
  } else {
      document.getElementById("backtop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





{
const cards =document.querySelectorAll('.card')

const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry=>{
    const {target}= entry;
    target.classList.toggle('activeA', entry.isIntersecting)
  })
},{})

cards.forEach(card =>{
  observer.observe(card);
})
}


{
const intersectTitles = document.querySelectorAll('.intersectTitle')

const observers = new IntersectionObserver(entries =>{
  entries.forEach(entry=>{
    const {target}= entry;
    target.classList.toggle('activeB', entry.isIntersecting)
  })
},{})

intersectTitles.forEach(intersectTitle =>{
  observers.observe(intersectTitle)
})
}


