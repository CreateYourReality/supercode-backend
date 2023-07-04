import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


export const func1 = (array) => {
    console.log(array[0]);
}

export const func2 = (array) => {
    for(let i = 0; i < array.length-1;i++){
        console.log(array[i]);
    }
}

export const func3 = (array) => {
    console.log(array[array.length-1]);
    
}

export const func4 = (array) => {
    for(let i = 1; i < array.length;i++){
        console.log(array[i]);
    }

}


export const func5 = (array) => {
    let newIndex = "";
    rl.question('Gib etwas ein: ', (index) => {
        newIndex = array.indexOf(index);
        const x = array.splice(newIndex, 1);
        console.log(array);
        rl.close();
      });
}

export const func6 = (array) => {
    let sum = 0;
    array.forEach((num) => {
        sum += num
    })
    console.log(sum);
}

export const func7 = (array) => {
    console.log(Array.from(new Set(array)));
}

export const func8 = (min,max) => {
    console.log(Math.floor(Math.random() * (max - min) ) + min);
}

export const func9 = (string) => {
    let firstLetter = string.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    const noFirstLetter = string.slice(1);
    console.log(firstLetter+noFirstLetter);

}

export const func10 = (string) => {
    console.log(string.toUpperCase());
}

export const func11 = (string1,string2) => {
    const lastLetter1 = string1.charAt(string1.length-1);
    const lastLetter2 = string2.charAt(string2.length-1);

    console.log(lastLetter1 == lastLetter2);

}