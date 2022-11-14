let cheq1=0;
let cheq2=0;

const navbar = document.querySelector('.navbar');
const dropdown = document.querySelector('.dropdown-menu');
window.onscroll = function() {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
        dropdown.classList.add('dropdown-dark');
    } else {
        navbar.classList.remove('nav-active');
        dropdown.classList.remove('dropdown-dark');
    }
    val.innerHTML=window.scrollY;
};


$("#demo").carousel({interval:4000});

const div_carr1 = document.querySelector('.div1')
const div_carr2 = document.querySelector('.div2')
const div_carr3 = document.querySelector('.div3')
const div_carr4 = document.querySelector('.div4')
const div_carr5 = document.querySelector('.div5')
const div_carr6 = document.querySelector('.div6')

const img_main1 = document.querySelector('#img-main1')
const img_main2 = document.querySelector('#img-main2')
const img_main3 = document.querySelector('#img-main3')
const img_main4 = document.querySelector('#img-main4')
const img_main5 = document.querySelector('#img-main5')
const img_main6 = document.querySelector('#img-main6')

$(function (){
    img_main1.classList.add("zoomIn");
});
const options1 = {
  attributes: true
}

function callback(mutationList, observer) {
  mutationList.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      // handle class change
      let strclass = mutation.target.className.slice(0, 4);

      if(strclass=="div1" ){
        img_main1.classList.add("zoomIn");
        img_main5.classList.remove("zoomIn");
        img_main6.classList.remove("zoomIn");
        cheq1=1
        cheq2=0
    }
      if(strclass=="div2" ){
            img_main2.classList.add("zoomIn");
            img_main5.classList.remove("zoomIn");
            img_main6.classList.remove("zoomIn");
            cheq1=0
            cheq2=1
        }
        if(strclass=="div3" ){
            img_main3.classList.add("zoomIn");
            img_main1.classList.remove("zoomIn");
            img_main6.classList.remove("zoomIn");
            cheq1=1
            cheq2=0
        }
        if(strclass=="div4" ){
            img_main4.classList.add("zoomIn");
            img_main1.classList.remove("zoomIn");
            img_main2.classList.remove("zoomIn");
            cheq1=0
            cheq2=1
        }
        if(strclass=="div5" ){
            img_main5.classList.add("zoomIn");
            img_main2.classList.remove("zoomIn");
            img_main3.classList.remove("zoomIn");
            cheq1=1
            cheq2=0
        }
        if(strclass=="div6" ){
            img_main6.classList.add("zoomIn");
            img_main3.classList.remove("zoomIn");
            img_main4.classList.remove("zoomIn");
            cheq1=0
            cheq2=1
        }
    }
  })
}

const observer = new MutationObserver(callback)
observer.observe(div_carr1, options1)
observer.observe(div_carr2, options1)
observer.observe(div_carr3, options1)
observer.observe(div_carr4, options1)
observer.observe(div_carr5, options1)
observer.observe(div_carr6, options1)


//---------------------------------------------------
//---   Youtube API  ------------------
