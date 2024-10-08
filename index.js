import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());

dotenv.config()


const PORT = process.env.PORT || 4000
const URI = process.env.mongodbURI

//connnect to mongodb
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    console.log("connect to mongodb")
} catch (error) {
    console.log("Error:", error)
}
// defining route


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
