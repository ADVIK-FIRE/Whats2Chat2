function addUser(){
    user_namer=document.getElementById("input").value;
localStorage.setItem("user_name",user_namer);
window.location="index.html";
}