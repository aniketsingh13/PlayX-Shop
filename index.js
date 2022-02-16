const images = document.querySelectorAll(".image-slide");
let imgIndex = 0;

const Imagescroll =() =>{
for(let i=0;i<images.length; i++){
  images[i].style.display = "none";
}
imgIndex++;
if(imgIndex > images.length){
    imgIndex = 1;
}
images[imgIndex-1].style.display = "block";
setTimeout(Imagescroll,3000);
}

Imagescroll();