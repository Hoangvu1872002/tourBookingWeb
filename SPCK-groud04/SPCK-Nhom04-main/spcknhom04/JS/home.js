let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});






const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tours = [
    {
        name: "Quảng Ninh" ,
    },
    {
        name: "Đà nẵng",
    },
    {
        name: "Kiên giang",
    },
    {
        name: "Sầm sơn",
    },
    {
        name: "Huế",
    },
   
];


const searchkey = $('#search');
const pricekey = $('#price');






const click = $('#click').onclick = function() {
    
    const search = $('#search').value;
    const price = $('#price').value;
    const date = $('#date').date;

    
    if(price == ""){
        alert('Please enter all information');
        return;
    }
    
    

    let arr = true;

    for(let tour = 0; tour < tours.length; tour++){
        
         
        if(tours[tour].name.toUpperCase() == search.toUpperCase()){
            
            
            window.location = ('./search.html');
             arr = false;
            
        }
    }
    if(arr == true){
        alert(`No results found for keyword"${search}"`);
        
        
}
}



const featuredItems = $$('.featured-item');


const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        const {target} = entry;
        target.classList.toggle('active', entry.isIntersecting)
    })

}, {})
featuredItems.forEach(featuredItem => {
    observer.observe(featuredItem);
});


// play/pause video
// let video = document.querySelector('.video-wrapper video');
// document.getElementById('play-btn').addEventListener('click', () => {
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
// });


const testItems = $$('.test-item');



const observer1 = new IntersectionObserver(entries1 =>{
    entries1.forEach(entry1 => {
        const {target} = entry1;
        target.classList.toggle('active', entry1.isIntersecting)

    })
}, {})
testItems.forEach(testItem => {
    observer1.observe(testItem);
})
 
