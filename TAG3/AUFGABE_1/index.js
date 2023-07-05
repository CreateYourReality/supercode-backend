import { writeFile,rmdir,mkdir,rm,rename } from 'node:fs/promises';
const filePath = new URL('./blog1.txt', import.meta.url);
const filePath2 = new URL('./blog2.txt', import.meta.url);
const filePath3 = new URL('./assets', import.meta.url);
const filePath4 = new URL('./delete.txt', import.meta.url);
const filePath5 = new URL('./Hello.txt', import.meta.url);

const promise = async (filePath) => {
    if(!filePath){
        throw new Error("please define a file path");
    }
    await writeFile(filePath,"blablabla" , {encoding: "utf8"});
    await writeFile(filePath2,"blatest",{encoding: "utf8"})

    try{
        await rmdir(filePath3)
    }catch{
        await mkdir(filePath3)
    }

    try{
        await rm(filePath4)
    }catch{
        await writeFile(filePath4,"",{encoding: "utf8"})
    }

    await writeFile(filePath5,"fsdfsdf",{encoding: "utf8"})
    await rename(filePath5,"HelloWorld.txt")

    return true;
}
promise(filePath).catch((e) => console.log("Here: ",e))


