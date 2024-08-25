
function see_password(){
        let my_image=document.querySelector(".closeeye");
        let snow1=document.querySelector(".snow1");
        let snow2=document.querySelector(".snow2");
        let snow3=document.querySelector(".snow3");
        let snow4=document.querySelector(".snow4");
        let snow5=document.querySelector(".snow5");
        let snow6=document.querySelector(".snow6");
        let water=document.querySelector(".water");
        let my_atb=document.querySelector("#pass");
        let btn1=document.querySelector(".login");
        let btn2=document.querySelector('.signup');
        if(my_image.src.match("images/eye-slash-solid.svg")){
            my_image.src="images/eye-solid.svg";
            my_atb.setAttribute('type','text');
            snow1.style.display='none';
            snow2.style.display='none';
            snow3.style.display='none';
            snow4.style.display='none';
            snow5.style.display='none';
            snow6.style.display='none';
            btn1.classList.replace('login','login2');
            btn2.classList.replace('signup','signup2');
            water.style.display='block'

        }else{
            let btn1=document.querySelector(".login2");
            let btn2=document.querySelector('.signup2');
            my_image.src="images/eye-slash-solid.svg";
            my_atb.setAttribute('type','password')
            snow1.style.display='inline';
            snow2.style.display='inline';
            snow3.style.display='inline';
            snow4.style.display='inline';
            snow5.style.display='inline';
            snow6.style.display='inline';
            btn1.classList.replace('login2','login');
            btn2.classList.replace('signup2','signup');
            water.style.display='none'
        }
    }
