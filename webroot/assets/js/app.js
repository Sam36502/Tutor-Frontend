const baseurl = "http://127.0.0.1:8080";

const getCourse = (id) => {
    url = "";
    id ? url = "/getCourse?id=" + id : url = "/getCourse";
    let request = new XMLHttpRequest();

    request.open('GET', baseurl + url, true);
    request.onload = function () {
        let data = JSON.parse(this.response);
        console.log(data);
    };
    request.send();
}

const createCourse = (course) => {
    fetch(baseurl + "/createCourse", {
        method: "POST",
        body: course
    })
    .then(response => response.json())
    .then(json => {
      console.log('parsed json', json)
    })
}

function goToCourse(id) {
    window.open("./course.html?id=" + id, "_self");
}

function addStep() {
    document.getElementById("steps").innerHTML += `<div class="form-group"><input type="text" class="form-control" id="step-title" placeholder="Step Title">
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" id="step-number" placeholder="Step Number">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="description" placeholder="Description">
                    </div>
                    <label for="image">Upload Image (optional)</label>
                    <input type="file" class="form-control-file" id="image">`;
}

const loadCourses = () => {
    let data = getCourse();

    const template = document.getElementById("tutorial");
    const tutorialList = document.getElementById("tutorialList");
    data = [
        {
            id: 1,
            title: "How to make fake data",
            description: "Here you can learn how to make fake data",
            author: "Amin"
        },
        {
            id: 2,
            title: "How to do good at TBZ",
            description: "Here you can learn how to be good in tbz",
            author: "Julian"
        },
        {
            id: 3,
            title: "How to speak japanese",
            description: "Here you can learn how to speak japanese",
            author: "Sam"
        },
    ]

    const tutorials = Mustache.render(template.innerHTML, {'tutorials': data})

    tutorialList.innerHTML = tutorials;
}

window.onload = loadCourses();