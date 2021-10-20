let data=[];

document.querySelector("#submitbutton").addEventListener('click',submit)

function submit(){
    let cName = document.getElementById("cont-name").value
    console.log(cName)
    let cEmail = document.getElementById("cont-email").value
    console.log(cEmail)
    let cPhone = document.getElementById("cont-phone").value
    console.log(cPhone)
    let cMessage = document.getElementById("cont-msg").value
    console.log(cMessage)

let newdata={name:cName,email:cEmail,phone:cPhone,comment:cMessage}
data.push(newdata)
localStorage.setItem("contact",JSON.stringify(data))
alert("You have succesfully submited your message")
document.getElementById("cont-name").value = ''
document.getElementById("cont-email").value = ''
document.getElementById("cont-phone").value = ''
document.getElementById("cont-msg").value = ''
}
