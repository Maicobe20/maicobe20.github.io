let aname = "mike"
let pass = "mike"

function login(){
    console.log('mike')
    let adname = document.getElementById('admin-name').value
    let passname = document.getElementById('admin-password').value
if(adname === aname && passname === pass){
    window.location.href = "Admin.html"
}
}