
const { Schema, model, ObjectId } = require("mongoose")

const Posts = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    numlike: { type: Number, required: true },
    date: { type: Date, required: true },
    themeid: { type: ObjectId, ref: "Themes"}
})

module.exports = model("Posts", Posts)

