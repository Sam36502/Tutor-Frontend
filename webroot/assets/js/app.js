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

const loadCourses = () => {
    let data = getCourse();

    const template = document.getElementById("tutorial");
    const tutorialList = document.getElementById("tutorialList");
    data = [
        {
            title: "How to make fake data",
            description: "Here you can learn how to make fake data",
            author: "Amin"
        },
        {
            title: "How to do good at TBZ",
            description: "Here you can learn how to be good in tbz",
            author: "Julian"
        },
        {
            title: "How to speak japanese",
            description: "Here you can learn how to speak japanese",
            author: "Sam"
        },
    ]

    const tutorials = Mustache.render(template.innerHTML, {'tutorials': data})

    tutorialList.innerHTML = tutorials;
}

window.onload = loadCourses();