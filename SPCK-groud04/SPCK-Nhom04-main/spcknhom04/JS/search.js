const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);




const none =  $('.content_main_1');

let a = 0;
// book now
const btnRed = $('.btn-res').onclick = function () {
    const content = $('.content_right1');
    const arb = $('.arb');

    a++
    if(a == 1){
        
        content.style.display = "block";
        arb.style.display = "block";
        console.log(arb)
        a++
    }else if(a == 3 ){
       
        content.style.display = "none";
        arb.style.display = "none"

        a = 0;
    }else{

    }
}


// menu
let b = 0;
const menu = $('.blockbar').onclick = function(){
    const navBar = $('.list');
   b++
   if(b == 1){
    navBar.style.display = "block";
    b++
   }
   if(b == 3){
    navBar.style.display = "none";
    b = 0
   }
}



// function Validator (options){
//     console.log(options)

//     let formElement = document.querySelector(options.form);

//     if(formElement){
//         options.rules.forEach(function (rule) {
           
//             let inputElement = formElement.querySelector(rule.selector)
//             if(inputElement){
//                 inputElement.onblur = function(){
//                     console.log(rule.selector)
//                 }
//             }
//         })
//     }
    


// }



// Validator.isRequired = function(selector){
//     return {
//         selector: selector,
//         test: function() {

//         }
//     };
// }
// Validator.isEmail = function(selector){
//     return {
//         selector: selector,
//         test: function() {
            
//         }
//     };
// }


   
    
const btn1 = $('#book');
const btn = $('#book').onclick = function () {
      
    const book = $('#name').value.trim();
    const book1 = $('#email').value.trim();
    const book2 = $('#number').value.trim();
    const book3 = $('#number1').value.trim();
    const book4 = $('.form-select');
   
    
   
   

   let regEmail = /^\w+@gmail\.com$/i;
   var phoneNumberPattern = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    
    if(book == "" || book1 == "" || book2 == "" || book3 == ""){
        alert('Please enter enough information');
        return;
    }else if(!book1.match(regEmail)){
        alert('Email invalidate');
        return;



    }
    else if(isNaN(book2)){
        alert('Incorrect phone number');
        return;
    }else if(!book2.match(phoneNumberPattern)){
        alert('Please enter the correct phone number');
        return;
    // }else if(book4 !== arr123){
    //     alert('vui lòng chọn giờ')
    //     return
    }
    else{
        
        alert('You are not logged in')
        
        window.location = ('./login.html')
    }
    // confirm('Vui lòng kiểm tra lại thông tin\n'+"Name: "+book+"\n"+"Email: "+book1+"\n"+"Number phone: "+book2+"\n"+"Quantity: "+book3+"\n"+"Time"+book4+"\n");
    }
  
    




//    vote_peple 
let ese = 0;
const clickBtn = $('.btnclick').onclick = function (){
   
    const control1 = $('.form-control1').value;
    const control2 = $('.form-control2').value;
    const control3 = $('.form-control3').value;

    const inner = $('#inner');

   

    if(ese == 1){
        inner.style.display = "none"
        ese =0
    }
    
    if(control1 == "" || control2 == "" || control3 == "" ){
      inner.innerHTML = "Please fill in all the information";
      ese++;
      
      
    }else{
        window.location = ('./search.html');
    }
    
    
    
  
}

//Vote


    const iColors = $$('.i_color');
    
     
    
     iColors.forEach((iColor, index) => {
        
       iColor.onclick = function (){
          let level = index + 1;
          iColors.forEach( (iColor, j) => {
            if(level >= j + 1){

                iColor.style.color = "yellow"           
            }else{
                iColor.style.color = "#d4d3d3"           

            }       
          } )
         
           
       }
    
    })


// tab

const tabs = $$('.tab-item');
const allmains = $$('.content_alllmain');
tabs.forEach((tab, index) => {
    

    
    const allmain = allmains[index];
    
    
    tab.onclick= function (){
      
        if(index == 0){
            none.style.display = "flex";
        }
        if(index > 0){
            none.style.display = "none";
            
        }
        
        
       
        
        
        
        $('.tab-item.active').classList.remove('active');
        $('.content_alllmain.active').classList.remove('active');
        tab.classList.add('active');
        allmain.classList.add('active');

        
        

    }
    
});



const inputs = $$('.ipt');
    inputs.forEach((color, index) => {
        color.onclick = function (e) {
            color.style.background = "white"; 
            console.log(index)
            return;
        }
    })




 

   