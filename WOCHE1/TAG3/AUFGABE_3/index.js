import { writeFile,readFile,rmdir,mkdir,rm,rename } from 'node:fs/promises';

const subDir = "unterordner"
const filePath = new URL(`./${subDir}`, import.meta.url);
const fileInPath = `./${subDir}/data.txt`;

const isExistingTxt = async (txt) => {

    try{
        let test = await readFile(fileInPath, {encoding: "utf8"})
        test += txt;
        writeFile(fileInPath,test,{encoding: "utf8"})
    }catch{
        writeFile(fileInPath,txt,{encoding: "utf8"})
    }
 }

const promise = async () => {
    if(!filePath){
        throw new Error("please define a file path");
    }

    try{
        await mkdir(filePath)
    }
    catch{
        (e) => console.log(e);
    }
    finally{
        isExistingTxt("inhalt")
    }

    return true;
}
promise().catch((e) => console.log("Here: ",e))
