let data = localStorage.getItem("contact")
let contacts = JSON.parse(data)
console.log(contacts)
let table = document.getElementById("table1")
let tr = document.createElement("tr")

contacts.map(function (item) {

    let row = table.insertRow()
    let tname = row.insertCell()
    let temail = row.insertCell()
    let tphone = row.insertCell()
    let tmsg = row.insertCell()
    tname.innerHTML = item.name;
    temail.innerHTML = item.email;
    tphone.innerHTML = item.phone;
    tmsg.innerHTML = item.comment;


    table.appendChild(tr)

})

let project = [];

document.querySelector("#submitbutton").addEventListener('click', submit)

function submit() {
    let cName = document.getElementById("cont-name").value
    console.log(cName)
    let cEmail = document.getElementById("cont-email").value
    console.log(cEmail)
    let cPhone = document.getElementById("cont-phone").value
    console.log(cPhone)
    let cMessage = document.getElementById("cont-msg").value
    console.log(cMessage)

    let newdata = { name: cName, email: cEmail, phone: cPhone, comment: cMessage }
    project.push(newdata)
    localStorage.setItem("contact", JSON.stringify(data))


}