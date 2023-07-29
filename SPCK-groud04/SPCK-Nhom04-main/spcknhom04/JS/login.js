
document.querySelector('#click1').onclick = function  (){
   const name = document.querySelector('#logname').value;
   const logEmail = document.querySelector('#logemail1').value;
   const logPass = document.querySelector('#logpass1').value;
  
   let listUsers = 
      {
         name : name,
         email: logEmail,
         password: logPass,
      };
      arr1 = listUsers
      
      let regEmail = /^\w+@gmail\.com$/i;  

      let json = JSON.stringify(listUsers);
      
     localStorage.setItem(logEmail, json);
     if(logEmail.match(regEmail)){
            
      alert('Sign Up Success')
      window.location = ('../spck/login.html');
   
   }else{
            

      alert('Invalid email!')  

  }



      

}
let arr1;


document.querySelector('#click').onclick = function(){
    
   const email = document.querySelector('#logemail').value;
   const pass = document.querySelector('#logpass').value;
   const param = document.querySelector('.demo');
    
 
   
   let regEmail = /^\w+@gmail\.com$/i;

   
   
   // let json1 = JSON.parse(arr1);
   let json1 = localStorage.getItem(arr1);
   JSON.parse(json1);
   
   console.log(json1)

   
   
      if(email == "" && pass == ""){
         
          param.innerHTML = "Please enter email and password!";
          return;

       }if(email == ""){
          param.innerHTML = "Please enter email!";
          return;
       }if(pass == ""){
          param.innerHTML = "Please enter password!";    
          return;
       }
       else {
         // if(user == data.name && email == data.email && password == data.password){
         //    alert('Đăng nhập thành công')
         //    window.location = ('../spck/demo.html');
         // }
        
          if(email.match(regEmail)){
            
              window.location = ('../spck/add.html')
             
          }else{
            

              param.innerHTML = "Invalid email  !";    

          }

      }  
   }



