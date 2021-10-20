let tasks = [
    {
        id: 3,
        courseName: "Stadium Management Control System",
        date: new Date(2014, 01, 27),
        description: "Stadium management and control system was developed to improve the working principle of Asmara stadium i.e. to make all the manual work computerized and it was expected to minimize the time consumed and the man power used by the system. Stadium management and control system(SMCS) as its name suggests it is all about managing the activities done inside the stadium and controlling them.",
        image: "./images/stadium.png",
        difficulty: 9,
        projectid: 1,
        projectLink:"./SMCS.html"
    },
    {
        id: 1,
        courseName: "Travel and Tourism Management Control system",
        date: new Date(2015, 05, 29),
        description: "Make all the manually handled data or information convert to a computerized system so that it would be easier to recover when needed.",
        image: "./images/tourism.png",
        difficulty: 7,
        projectid: 2,
        projectLink:"./TTMCS.html"
    },
    

];
localStorage.setItem("project", JSON.stringify(tasks))
let task = localStorage.getItem("project")
tasks = JSON.parse(task)
localStorage.setItem("project", JSON.stringify(tasks))




let cardContainer;

function createTaskCard(task) {
    console.log('Mike')
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

    let image = document.createElement("img");
    image.src = task.image;
    image.style.width = "50%"
    image.className = "thumbnail";


    let difficulty = document.createElement("h6");
    difficulty.innerHTML = 'Difficulty: ' + task.difficulty
    date.className = "card-color";






    let edit = document.createElement("button");
    edit.innerHTML = "Edit"
    edit.className = "btn btn-secondary"

    edit.onclick = function editFunction() {



        cardBody.appendChild(editDiv)
        editDiv.appendChild(name)
        editDiv.appendChild(date1)
        editDiv.appendChild(description1)
        editDiv.appendChild(difficulty1)
        editDiv.appendChild(projectLink1)
        editDiv.appendChild(image1)
        
        editDiv.appendChild(update)

        
    }

    let editDiv = document.createElement("div")
    editDiv.id = "ajoka"



    let name = document.createElement("input")
    name.type = "text";
    name.id = "name1"
    name.placeholder = "Update Title Name";
    name.className = "form-control"

    let date1 = document.createElement("input")
    date1.type = "date";
    date1.id = "date1"
    date1.value = task.date.split('T')[0];
    date1.className = "form-control"

    let description1 = document.createElement("input")
    description1.type = "text";
    description1.id = "desc1"
    description1.placeholder = 'Update Description';
    description1.className = "form-control"

    let difficulty1 = document.createElement("input")
    difficulty1.type = "number";
    difficulty1.id = "difficulty"
    difficulty1.placeholder = 'Rate Difficulty';
    difficulty1.className = "form-control"

    let image1 = document.createElement("input");
    image1.type = 'text'
    image1.className='form-control'
    image1.placeholder = "Update image source";
    image1.id = "image-update"

    let projectLink1 = document.createElement("input");
    projectLink1.type = 'text'
    projectLink1.className='form-control'
    projectLink1.placeholder = 'Update project link';
    projectLink1.id = "link-update"
    

    let update = document.createElement("button");
    update.innerText = "update"
    update.className = "btn btn-secondary"
    update.onclick = function() {
        task.courseName = document.getElementById("name1").value
        task.date = document.getElementById("date1").value
        task.description = document.getElementById("desc1").value
        task.difficulty = document.getElementById("difficulty").value
        task.image = document.getElementById("image-update").value
        task.projectLink = document.getElementById("link-update").value
        localStorage.setItem("project", JSON.stringify(tasks))

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
        localStorage.setItem("project", JSON.stringify(tasks))
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

    cardBody.appendChild(difficulty);

    cardBody.appendChild(image);
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


function addProject() {
    let courseInput = document.getElementById("project-name").value
    let dateInput = document.getElementById("project-date").value
    let descInput = document.getElementById("project-info").value
    let difInput = document.getElementById("project-difficulty").value
    let imgInput = document.getElementById("project-image").value
    let linkInput = document.getElementById("project-link").value

    if (courseInput !== "" && dateInput !== "" && descInput !== "") {

        let newObj = { 
            courseName: courseInput, 
            date: dateInput, 
            description: descInput, 
            image: imgInput, 
            difficulty: difInput, 
            projectLink: linkInput}
        tasks.push(newObj);
        console.log(tasks)
        localStorage.setItem("project", JSON.stringify(tasks))
        document.getElementById("card-container").innerHTML = "";
        tasks.forEach((task) => {
            createTaskCard(task);
        });
    }
    document.getElementById("project-name").value = ''
    document.getElementById("project-date").value = ''
    document.getElementById("project-info").value = ''
    document.getElementById("project-difficulty").value = ''
    document.getElementById("project-image").value = ''
    document.getElementById("project-link").value = ''
    // document.getElementById("project-id").value = ''
}



