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