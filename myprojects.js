let datas = localStorage.getItem("project")
let courses = JSON.parse(datas)


function sortDate() {
    let sorting = courses.sort((x, y) => {
        return new Date(x.date) - new Date(y.date)
    })
    let coursesdiv = document.getElementById('project-innerdiv')
    coursesdiv.innerText = ""
    sorting.forEach((item) => {
        coursesdiv.innerText = ""
        createitemCard(item)
    })
}

function sortDif() {
    let sorting = courses.sort((x, y) => {
        return x.difficulty - y.difficulty
    })
    let coursesdiv = document.getElementById('project-innerdiv')
    coursesdiv.innerText = ""
    sorting.forEach((item) => {
        coursesdiv.innerText = ""
        createitemCard(item)
    })
}



console.log(courses)
function createitemCard() {
    courses.map(item => {

        let innerdiv = document.getElementById('project-innerdiv')

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

        let image = document.createElement("img");
        image.src = item.image;
        image.style.width = "40%"
        image.className = "thumbnail";


        let difficulty = document.createElement("h6");
        difficulty.innerHTML = "Dificulty: " + item.difficulty
        date.className = "card-color";

        
       let link = document.createElement('a')
        link.href = item.projectLink;
        console.log(link.href)
        let detailbtn = document.createElement("button");
        detailbtn.innerHTML = 'Details'
        detailbtn.className = "btn btn-secondary";
       link.appendChild(detailbtn)
        


        cardBody.appendChild(courseName);
        cardBody.appendChild(date);
        cardBody.appendChild(difficulty);
        cardBody.appendChild(image);
        cardBody.appendChild(description);
        cardBody.appendChild(link)
        
        card.appendChild(cardBody);
        innerdiv.appendChild(card)


    })


}
createitemCard()

