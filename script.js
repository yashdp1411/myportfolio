let SliderImage = document.getElementById("sliderImage");
let index = 1;
let ImgArry = [
    'LT-Webdesign.webp',
    '9f8272f1ea0498cf50e44e936c1bba39--dashboard-ui-dashboard-design.jpg',
    '2_4847.jpg',
    '5061659_2638287.jpg',
    '11excel-webdesign.png'
];

function prevImg(){
    SliderImage.setAttribute("src",ImgArry[index]);
    index--;
    if(index < 0){
        index=3;
    }
}

function nextImg(){
    SliderImage.setAttribute("src",ImgArry[index]);
    index++;
    if(index > 3){
        index=0;
    }
}
setInterval(nextImg,3000);


// -------------------navbar coding
const navBtn = document.getElementById("nav-box");
const navBar = document.getElementById("navbar");

document.onclick = function(e){
    if(e.target.id !== 'nav-box' && e.target.id !== 'navbar'){
        navBar.classList.remove("active");
        navBtn.classList.remove("active");
    }
}

navBtn.addEventListener("click",() => {
    navBar.classList.toggle("active");
    navBtn.classList.toggle("active");
});

