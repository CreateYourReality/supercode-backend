import { readFile,writeFile } from 'node:fs/promises';

const promise = async (filePath) => {
    if (!filePath) {
        // Promise rejected, also (.catch)
        throw new Error("Please define a file path");
      }
    const content = await readFile(filePath,{encoding: "utf8"});
    const packageJSOn = JSON.parse(content);

    let formattedText = '';
    packageJSOn.forEach((item, index) => {
        formattedText += `${index + 1} - ${item.title}\n${item.description}\n\n`;
    });

    await writeFile(filePath2,formattedText,{encoding: "utf8"})
    return true;
}

const filePath = new URL('./data.JSON', import.meta.url);
const filePath2 = new URL('./data.txt', import.meta.url);
promise(filePath).catch((e)=>console.log("Here ",e));