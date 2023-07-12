import express from "express";
import { appendFile, writeFile } from "node:fs/promises";
import { readFile } from 'node:fs/promises';



const app = express();
const url = "https://dummyjson.com/products";
const PORT = 9898;

const fileURL = new URL("./data.json", import.meta.url)

const fetchME = async (fetchURL) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const fetchID = async (fetchURL,id) => {
    const response = await fetch(url+"/"+id);
    const data = await response.json();
    return data;
}

app.use(express.json())


app.use((req,res,next) => {
    console.log(req.method, req.url);
    next()
})

app.get('/', (req, res) => {
    res.send('Hallo Welt')
})

//level 1
app.get("/status", (req,res) => {
    res.send("OK")
})

//level 2
app.get("/posts", async (req,res) => {
    const  newData = await fetchME(url);
    res.send(newData);
})

//level 3
app.get("/posts/:id", async (req,res) => {
    const id = parseInt(req.params.id);
    const  newData = await fetchID(url,id);
    res.send(newData);
})

//level 4
app.get("/posts2", async (req,res) => {
    const  newData = await readFile(fileURL);
    res.send(newData);
})

app.get("/posts2/:id", async (req,res) => {
    const id = parseInt(req.params.id);
    let  newData = await readFile(fileURL);
    
    const jsonData = JSON.parse(newData);
    let sendData = "";

    jsonData.forEach(data => {
        if(data.id === id){
            sendData = data;
        }
    });
    sendData != "" ? res.send(sendData) : 
        res.status(404).json({message: "gibts nicht"})
})


//level 5 
app.post("/post", async (req,res) => {
    let data = await readFile(fileURL)
    let json = JSON.parse(data)    
    json.push(req.body)
    await writeFile("data.json", JSON.stringify(json))
    res.send(req.body)
})


app.listen(PORT, () => console.log('Ich stehe wieder vor der Tür'))