const Themes = require("../models/Themes")

const Posts = require("../models/Posts")


class ApiController {
    async createPosts(request, response) {
        let validator = {  }
        try {
            let validate = true
            console.log(request.body)
            const { title, text, date, themeid } = request.body
            if (title === ""||title===null) {
                validator.title = "это поле обязательно к заполнению"
                validate = false
            }
            if (text === ""||text===null) {
                validator.text = "это поле обязательно к заполнению"
                validate = false
            }
            if (date === ""||date===null) {

                console.log(6)
                validator.date = "это поле обязательно к заполнению"
                validate = false
            }
            if (themeid === ""||themeid===null) {
                console.log(8)
                validator.themeid = "это поле обязательно к заполнению"
                validate = false
            }
            if (!validate) {
                response.status(422).json({ message: "422",content: validator })
            } else {
                const post = new Posts({ title: title, text: text, numlike: 0, date: date, themeid: themeid })//setName

                await post.save()
                console.log(post)
                const posts = await Posts.find().then((res) => res.length)
                console.log(posts)
                console.log({ message: "post was created", "data": posts })
                return response.status(201).json({ message: "post was created", "data": posts })
            }

        } catch (e) {

            response.status(400).send({ message: "Server Error" })

        }
    }
    async getThemes(request, response) {
        try {
            console.log(request.body)
            Themes.find().then((res) => {
                console.log(res.length)
                console.log(res.length)
                response.status(200).json(res)
            })
        } catch (e) {
            response.status(500).send({ message: "ServerError" })

        }
    }
    async getPosts(request, response) {
        try {
            console.log(request.body)
            Posts.find().then((res) => {
                console.log(res.length)
                console.log(res.length)
                response.status(200).json(res)
            })
        } catch (e) {
            response.send({ message: "ServerError" })

        }
    }
}



module.exports = new ApiController()