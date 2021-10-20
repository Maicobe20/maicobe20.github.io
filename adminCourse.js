let tasks = [
    {
        id: 3,
        courseName: "STC",
        date: new Date(2021,09,23),
        description: "Transcedental Meditation",
        link:"https://msd.miu.edu/courses/#toggle-id-1"
    },
    {
        id: 1,
        courseName: "CS305",
        date: new Date(2021,08,23),
        description: "Object Oriented Programing",
        link:"https://msd.miu.edu/courses/#toggle-id-8"
    },
    {
        id: 2,
        courseName: "CS315",
        date: new Date(2021,09,25),
        description: "Web Application",
        link:"https://msd.miu.edu/courses/#toggle-id-9"
    },

];
localStorage.setItem("courses",JSON.stringify(tasks))
let task = localStorage.getItem("courses")
 tasks = JSON.parse(task)
 localStorage.setItem("courses",JSON.stringify(tasks))
 



let cardContainer;

function createTaskCard(task) {
    let card = document.createElement("div");
    card.className = "card shadow cursor-pointer bg-white bg-opacity-50 ms-5";
        card.style.textAlign="center"
        card.style.width = '90%'

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let courseName = document.createElement("h4");
    courseName.innerText = task.courseName;
    courseName.className = "card-title";

    let date = document.createElement("h6");
    date.innerText = task.date.split('T')[0];
    date.className = "card-color";

    let description = document.createElement("h6");
    description.innerText = task.description;
    description.className = "card-color";

    let edit = document.createElement("button");
    edit.innerHTML = "Edit"
    edit.className = "btn btn-secondary"

    edit.onclick = function editFunction() {


        
        cardBody.appendChild(editDiv)
        editDiv.appendChild(name)
        editDiv.appendChild(date1)
        editDiv.appendChild(description1)
        editDiv.appendChild(link1)
        editDiv.appendChild(update)

    }

    let editDiv = document.createElement("div")
    editDiv.id = "ajoka"



    let name = document.createElement("input")
    name.type = "text";
    name.id = "name1"
    name.value = task.courseName;
    name.className ="form-control"

    let date1 = document.createElement("input")
    date1.type = "date";
    date1.id = "date1"
    date1.value = task.date.split('T')[0];
    date1.className ="form-control"

    let link1 = document.createElement("input")
    link1.type = "text";
    link1.id = "link1"
    link1.value = task.link
  console.log(link1.value);
    link1.className ="form-control"
    
   

    let description1 = document.createElement("textarea")
    description1.type = "text";
    description1.id = "desc1"
    description1.value = task.description;
    description1.className ="form-control"

    let update = document.createElement("button");
    update.innerText = "update"
    update.className = "btn btn-secondary"

    update.onclick = function updateFomr() {
        task.courseName = document.getElementById("name1").value
        task.date = document.getElementById("date1").value
        task.description = document.getElementById("desc1").value
   
        task.link = document.getElementById("link1").value
       

        localStorage.setItem("courses",JSON.stringify(tasks))

        document.getElementById("ajoka").innerHTML = ""
        document.getElementById("card-container").innerHTML = "";
        cardContainer = document.getElementById("card-container");
        tasks.map((item) => {
            createTaskCard(item);
        });



    }


    let remove = document.createElement("button");
    remove.onclick = function deleteFunction() {
        let b = task.id
        for (let i = 0; i < tasks.length; i++) {

            if (tasks[i].id === b) {
                tasks.splice(i, 1);
                i--;
            }
        }
        localStorage.setItem("courses",JSON.stringify(tasks))
        document.getElementById("card-container").innerHTML = "";
        cardContainer = document.getElementById("card-container");
        tasks.map((item) => {
            createTaskCard(item);
        });

    }
    remove.innerHTML = "Delete"
    remove.className = "btn btn-secondary"

    cardBody.appendChild(courseName);
    cardBody.appendChild(date);
    cardBody.appendChild(description);
    cardBody.appendChild(edit)
    cardBody.appendChild(remove)
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
};

function initListOfTasks() {
    if (cardContainer) {
        document.getElementById("card-container").replaceWith(cardContainer);
        return;
    } else {
        cardContainer = document.getElementById("card-container");
        tasks.forEach((task) => {
            createTaskCard(task);
        });
    }
}

initListOfTasks();


function addCourses(){
    let courseInput = document.getElementById("course-name").value
    let dateInput = document.getElementById("course-date").value
    let descInput = document.getElementById("course-detail").value
    let linkInput = document.getElementById("course-link").value

    if(courseInput !== "" && dateInput !== "" && descInput !== ""){

    let newObj = {courseName: courseInput, date: dateInput, description: descInput, link:linkInput }
    tasks.push(newObj);
    console.log(tasks)
    localStorage.setItem("courses",JSON.stringify(tasks))
    document.getElementById("card-container").innerHTML = "";
    tasks.forEach((task) => {
        createTaskCard(task);
    });
}
document.getElementById("course-name").value = ''
document.getElementById("course-date").value = ''
document.getElementById("course-detail").value= ''
document.getElementById("course-link").value= ''
}




// function sortedPriceFunc() {
//     document.getElementById("card-container").innerHTML = "";
//     let sortedPrice = tasks.sort((a, b) => (a.price > b.price ? 1 : -1));
//     console.log(sortedPrice);
//     cardContainer = document.getElementById("card-container");
//     sortedPrice.map((item) => {
//         createTaskCard(item);
//     });
// }

// function sortedPriceFunc2() {
//     document.getElementById("card-container").innerHTML = "";
//     let sortedPrice = tasks.sort((a, b) => (a.price < b.price ? 1 : -1));
//     console.log(sortedPrice);
//     cardContainer = document.getElementById("card-container");
//     sortedPrice.map((item) => {
//         createTaskCard(item);
//     });
// }

// function sortedRateFunc() {
//     document.getElementById("card-container").innerHTML = "";
//     let sortedRate = tasks.sort((a, b) => (a.rate > b.rate ? 1 : -1));
//     cardContainer = document.getElementById("card-container");
//     sortedRate.map((item) => {
//         createTaskCard(item);
//     });
// }


