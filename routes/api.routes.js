
const Router = require("express")
const Themes = require("../models/Themes")
const apiController = require("../controllers/apiController")

console.log("require2")
const router = new Router()

router.post("/posts/create", apiController.createPosts)
router.get("/themes/get", apiController.getThemes)
router.get("/posts/get", apiController.getPosts)

/*
fetch("http://localhost:5000/api/posts/create",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            title: "test",
            text: "test",
            themeid:"6575fcdcb0e6e220b2af13de",
            date:"2023-12-18T00:00:00.000Z"
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })


    fetch("http://localhost:5000/api/posts/create",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            title: "",
            text: "",
            themeid:"6575fcdcb0e6e220b2af13de",
            date:"2023-12-18T00:00:00.000Z"
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
    */

module.exports = router

