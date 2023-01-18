function createID(amount=6): string {
    let id: string = "";
    const alphabets = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    const numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    
    for(let i = 0; i < amount; i++){
        const alphabetsID: number = Math.floor(Math.random() * alphabets.length);
        const numbersID: number = Math.floor(Math.random() * numbers.length);
        id += alphabets[alphabetsID > 25 ? 25 : alphabetsID];
        id += numbers[numbersID > 9 ? 9 : numbersID];
    }

    return id.slice(0, amount);
}

export default createID;