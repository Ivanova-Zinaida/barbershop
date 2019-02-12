window.onload=function(){
    
    var link=document.querySelector('.login-link');
    var modolLogin = document.querySelector('.modal-login');
    var close=document.querySelector('.modal-close');
    var login= modolLogin.querySelector('[name=login]');
    var password=modolLogin.querySelector('[name=password]');
    var form=modolLogin.querySelector('form');
    var error=modolLogin.querySelector('.error-messoge');
    
    
    link.addEventListener('click', function(event){
        event.preventDefault();
       
        modolLogin.classList.add('modal-show');
    });
    
    close.addEventListener('click', function(event){
        event.preventDefault();
         console.log('clik');
        modolLogin.classList.remove('modal-show');
    });
    
    form.addEventListener('submit', function(event){
        
        if(!login.value||!password.value){
            event.preventDefault();
            error.classList.add('error-messoge-show');
        } 
        login.onfocus=function(){
            error.classList.remove('error-messoge-show');
        }
        password.onfocus=function(){
           error.classList.remove('error-messoge-show');
        }
        
    });
    
    
    var btnOpenMap=document.querySelector('.map-open');
    var modalMap=document.querySelector('.modal-map');
    var mapClose=document.querySelector('.modal-close-map'); 
    btnOpenMap.addEventListener('click', function(event){
        event.preventDefault();
       console.log('click')
        modalMap.classList.add('modal-show');
    });
   mapClose.addEventListener('click', function(event){
        event.preventDefault();
         
        modalMap.classList.remove('modal-show');
    });
        var images=document.querySelectorAll('.gallery-content a img');
        var back=document.querySelector('.gallery-button-back');
        var next=document.querySelector('.gallery-button-next');
        var i=0;
        
        back.onclick=function(event){
            event.preventDefault();
               images[i].classList.remove('activ-slide');
                i--;
                if(i<0){
                    i=images.length-1;
                }
                images[i].classList.add('activ-slide');
            }
        
  
        
            next.onclick=function(event){
            event.preventDefault();
               images[i].classList.remove('activ-slide');
                i++;
                if(i>=images.length){
                    i=0;
                }
                images[i].classList.add('activ-slide');
            }
      
  
    
}