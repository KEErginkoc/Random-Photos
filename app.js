const imageContainerEl = document.querySelector(".image-container");
const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click", ()=>{
    imageNum = 5
    addNewImages();
});

function addNewImages(){
for (let index = 0; index < imageNum; index++) {
    const newImageEl = document.createElement("img")
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainerEl.appendChild(newImageEl);
}}