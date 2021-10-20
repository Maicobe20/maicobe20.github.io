
let datas = localStorage.getItem("courses")
let courses = JSON.parse(datas)

console.log(courses)
function sort(){
    let sorting = courses.sort((x,y)=>{
        return new Date(x.date)-new Date(y.date)
    })
    let coursesdiv = document.getElementById('courses-innerdiv')
    coursesdiv.innerText=""
    sorting.forEach((item)=>{
        coursesdiv.innerText=""
        createitemCard(item)
    })
}



console.log(courses)
function createitemCard() {
    courses.map(item => {
        let innerdiv = document.getElementById('courses-innerdiv')
        let card = document.createElement("div");
        card.className = "card shadow cursor-pointer bg-white bg-opacity-50 ms-5";
        card.style.textAlign="center"
        card.style.width = '90%'
        

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let courseName = document.createElement("h4");
        courseName.innerText = item.courseName;
        courseName.className = "card-title";

        let date = document.createElement("h6");
        date.innerText = item.date.split('T')[0];
        date.className = "card-color";

        let description = document.createElement("h6");
        description.innerText = item.description;
        description.className = "card-color";

        let link = document.createElement('a')
        link.href = item.link;
        console.log(link.href)
        let detailbtn = document.createElement("button");
        detailbtn.innerHTML = 'Details'
        detailbtn.className = "btn btn-secondary";
       link.appendChild(detailbtn)

        cardBody.appendChild(courseName);
        cardBody.appendChild(date);
        cardBody.appendChild(description);
        cardBody.appendChild(link)
        card.appendChild(cardBody);
        innerdiv.appendChild(card)


    })


}
createitemCard()


