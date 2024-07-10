const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["Violet","Purple","Blue","Green","Yellow","Orange","red","skyblue","pink","sandal"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});    

