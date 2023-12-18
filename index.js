

const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const cors=require("cors")

const apiRouter = require("./routes/api.routes")

const app = express()
 const PORT = config.get("serverPort")

app.use(express.json())
app.use(cors())
// console.log(PORT)
// console.log(config.get("dbUrl"))




const start = async () => {
    try {
        mongoose.connect(config.get("dbUrl"),{
            dbName:"blog",
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
            ).
        then(()=>{
            console.log("connected")
        }).
        catch(()=>{
            console.log("error")
        })

        app.listen(PORT, () => {//PORT
            console.log("Server run")

        })
    } catch (e) {
        console.log("server error")
    }
}
start()
app.use("/api",apiRouter)



