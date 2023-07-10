import { appendFile,mkdir } from 'node:fs/promises';

const fileDir = `./log`;
const errorDir = `./error`;
const infoDir = `./info`;
const warnDir = `./warn`;

const filePath =  new URL(`${fileDir}/log.txt`,import.meta.url);
const errorPath = new URL(`${errorDir}/error.txt`,import.meta.url);
const infoPath = new URL(`${infoDir}/info.txt`,import.meta.url);
const warnPath = new URL(`${warnDir}/warn.txt`,import.meta.url);

const dirArray = [fileDir,errorDir,infoDir,warnDir]

const logSuffix = "\n"

const createPaths = async (array) => {
    for(let i = 0; i<array.length;i++){
        try{
            await mkdir(array[i])
        }catch{
            (e) => console.log(e);
        }
    }
}

const logME = async (logTXT, logType) => {
    const date =  new Date().toUTCString()
    let output = ``;
    logType? output = `${logType} :: ${date} :: ${logTXT+logSuffix}` : output = `${date} :: ${logTXT+logSuffix}`
    
    try{
        switch(logType){
            case "warn": await appendFile(warnPath,output);break;
            case "err": await appendFile(errorPath,output);break;
            case "info": await appendFile(infoPath,output);break;
            default: break;
        }
        await appendFile(filePath,output);
    }catch{
        (e) => {console.log(e);}
    }
    return true;
}

    await createPaths(dirArray);
    await logME("text1","warn").catch((e) => console.log("Here: ",e))
    await logME("text2","warn").catch((e) => console.log("Here: ",e))
    await logME("text3","err").catch((e) => console.log("Here: ",e))
    await logME("text4","info").catch((e) => console.log("Here: ",e))
    await logME("text5","err").catch((e) => console.log("Here: ",e))
    await logME("text6").catch((e) => console.log("Here: ",e))


