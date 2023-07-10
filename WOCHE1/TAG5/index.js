import { appendFile,mkdir } from 'node:fs/promises';

const fileDir = "./data";
const filePath = new URL(`${fileDir}/post.json`,import.meta.url)
const commentsPath = new URL(`${fileDir}/comments.json`,import.meta.url)

const createFolder = async () => {
    try{
        await mkdir(fileDir)
    }catch{
        (e) => console.log(e);
    }

}

const addComments = async (data) => {
    for(let i = 1; i <= data.length;i++){
        console.log("data: "+data[i]);
    }
    let newData = JSON.stringify(data,null,2);
    await appendFile(filePath,newData)

}

const fetchME = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();    
 //   await appendFile(filePath,JSON.stringify(data,null,2))
    addComments(data);
    getComments(data);
}

const getComments = async (array) => {
    await appendFile(commentsPath,"[")
    array.forEach(async data => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
        let newData = await response.json();
        newData = JSON.stringify(newData,null,2);
        newData = newData.slice(1);
        newData = newData.slice(0,-1)
        newData+=","
        await appendFile(commentsPath,newData)
    },
    await appendFile(commentsPath,"]"));
}


await createFolder()
await fetchME()