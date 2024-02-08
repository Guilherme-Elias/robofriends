export default function colorHandler(colorString){
    let colorBank = colorString.slice(4, -1).split(",").map(parseFloat);
    let treatedValues = colorBank.map(
        value => {
            return (value > 125.5) ? (value - 75) : (value + 75);
        }
    );
    return (
        `rgb(${treatedValues[0]}, ${treatedValues[1]}, ${treatedValues[2]})`
    );
}