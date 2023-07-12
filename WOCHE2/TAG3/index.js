import express from "express";

const app = express();
const PORT = 9898;

const myData = [
    {
        "ID": 1,
        "Name": "tes1",
        "Telefon": 43535,
        "Email": "dfsf@bla.de"
    },
    {
        "ID": 2,
        "Name": "test2",
        "Telefon": 234234,
        "Email": "fdfdfdfdff@bla.de"
    }
]


app.use(express.json())

app.use((req,res,next) => {
    console.log(req.method, req.url);
    next()
})

app.get('/', (req, res) => {
    res.send('Hallo Welt')
})

app.get("/contacts", (req,res) => {
    res.json(myData)
})

app.get("/contacts/:id", (req,res) => {
    const idParam = Number(req.params.id);
    const contactById =  myData.filter((obj) => obj.ID === idParam)
    res.json(contactById)
})

app.post("/contacts", (req,res) => {
    const newValue = req.body;
    myData.push(newValue);
    res.send(newValue)
})

app.put("/contacts/:id",(req,res) => {
    const idParam = Number(req.params.id);
    for(let i = 0; i <= myData.length; i++){
        if(myData[i] && myData[i].ID === idParam){
            myData[i].Email = req.body.Email;
            myData[i].Name = req.body.Name;
            myData[i].Telefon = req.body.Telefon;
            continue;
        }
    }  
    res.send(myData)
})

app.delete("/contacts/:id", (req,res) => {
    const idParam = Number(req.params.id);
    for(let i = 0; i <= myData.length; i++){
        if(myData[i] && myData[i].ID === idParam){
            myData.splice(i, 1); 
            continue;
        }
    }  
    res.send(myData)
})





app.listen(PORT, () => console.log('Ich stehe wieder vor der Tür'))