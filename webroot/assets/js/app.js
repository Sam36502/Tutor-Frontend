const baseurl = "http://www.pearcenet.ch:8080";

const getCourse = (id) => {
    url = "";
    id ? url = "/getcourse" : url = "/getcourse?id=" + id;
    fetch(baseurl + url)
    .then(response => response.json())
    .then(data => {return data});
}

const createCourse = (course) => {
    fetch(baseurl + "/createcourse")
    .then(response => response.json())
    .then(data => {return data});
}

const loadCourses = () => {
    const data = getCourse();

    const template = document.getElementById("tutorial");
    const tutorialList = document.getElementById("tutorialList");

    const tutorials = Mustache.render(template.innerHTML, {'tutorials': data})
    tutorialList.innerHTML = tutorials;
}

window.onload = loadCourses();