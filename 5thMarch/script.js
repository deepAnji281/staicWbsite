let htmlVar=document.querySelector(".html");
let cssVar=document.querySelector(".css");
let jsVar=document.querySelector(".javascript")


function hthover()
{
    htmlVar.style.color="lightcoral"
    
}
function csshover()
{
  cssVar.style.color="lightcoral"
}
function jshover()
{
    jsVar.style.color="lightcoral"
}

htmlVar.addEventListener('mouseenter',hthover);
htmlVar.addEventListener("mouseleave", function()
{
   htmlVar.style.color=''
})
cssVar.addEventListener("mouseenter",csshover);
cssVar.addEventListener("mouseleave", function()
{
   cssVar.style.color=''
})
jsVar.addEventListener("mouseenter",jshover);
jsVar.addEventListener("mouseleave", function()
{
   jsVar.style.color=''
})
let tag1Var=document.querySelector(".tag1");
let tag2Var=document.querySelector(".tag2");
let tag3Var=document.querySelector(".tag3");
tag1Var.addEventListener('mouseenter',function(){
   tag1Var.style.color='lightblue'
})
tag1Var.addEventListener('mouseleave',function(){
    tag1Var.style.color=''
 })
tag2Var.addEventListener('mouseenter',function(){
    tag2Var.style.color='lightblue'
})
tag2Var.addEventListener('mouseleave',function(){
    tag2Var.style.color=''
 })
tag3Var.addEventListener('mouseenter',function(){
    tag3Var.style.color='lightblue'
})
tag3Var.addEventListener('mouseleave',function(){
    tag3Var.style.color=''
 })