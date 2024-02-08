export default function generateColor(){
    return (`rgb(
        ${Math.random() * 255},
        ${Math.random() * 255},
        ${Math.random() * 255}
    )`);
}

