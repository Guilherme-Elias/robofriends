import generateColor from "./generateColor";

const robots = [
    { name:"Bruce Lee", email:"bewater@myfriend.com", id:0, color:generateColor() },
    { name:"Marcel Proust", email:"lostime@search.com", id:1, color:generateColor() },
    { name:"Stephen King", email:"dufresne@barrens.com", id:2, color:generateColor() },
    { name:"John Tolkien", email:"thelord@rings.com", id:3, color:generateColor() },
    { name:"Michael Crichton", email:"terrifying@truth.com", id:4, color:generateColor() },
    { name:"J. M. DeMatteis", email:"moon@ping.com", id:5, color:generateColor() }
];

export default robots;