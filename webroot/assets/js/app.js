const baseurl = "http://www.pearcenet.ch:8080";

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
    const data = getCourse();

    const template = document.getElementById("tutorial");
    const tutorialList = document.getElementById("tutorialList");
    data = [
        {
            title: "How to make fake data",
            description: "Here you can learn how to make fake data",
            author: "Amin"
        },
        {
            title: "How to fuck up at tbz",
            description: "Here you can learn how to fuck up at tbz",
            author: "Julian"
        },
        {
            title: "How to die",
            description: "Here you can learn how to die",
            author: "Sam"
        },
    ]

    const tutorials = Mustache.render(template.innerHTML, {'tutorials': data})

    tutorialList.innerHTML = tutorials;
}

window.onload = loadCourses();