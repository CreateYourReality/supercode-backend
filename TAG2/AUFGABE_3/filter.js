
export const filter1 = (array) => {
    const output = array.filter(town => town.population >= 100000)
    console.log(output);
}

export const filter2 = (array) => {
    const output = array.filter(town => town.population < 100000)
    console.log(output);
}
