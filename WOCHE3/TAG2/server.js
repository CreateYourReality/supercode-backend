import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express();
const PORT = 3001;

mongoose.connect("mongodb://localhost:27017/Contacts")

const postSchema = new mongoose.Schema({
    name: String,
    email: String,
    telefone: Number
})

export const Post = mongoose.model("Post", postSchema )
app.use(express.json())
app.use(cors())

app.get("/contacts", async (req,res) => {
    const data = await Post.find()
    res.json(data)
})

app.post("/contacts", async (req,res) => {
    const response = await Post.create(req.body)
    res.json(response)
})

const addPost = async(post) => {
    const newPost = new Post(post)
    await newPost.save()
}

addPost({
    name: "TEST",
    email: "sdfsdf@blubb.de",
    telefone: 9458234
})

const findPost = async(search) => {
    const posts = await Post.find({name: search})
    console.log(posts);
}

findPost("ICH") 


app.put("/contacts/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Post.findByIdAndUpdate(id, req.body);
    res.json(data);
});
app.delete("/contacts/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Post.findByIdAndDelete(id);
    res.json(data);
});

app.listen(PORT, () => { console.log(`LETS GO${PORT}`) })