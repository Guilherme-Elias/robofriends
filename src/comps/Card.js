import './Card.css';
import colorHandler from '../func/colorHandler';

export default function Card(props){

    return (
        <div id="card-container" style={{backgroundColor: props.backcolor}}>
            <img src={props.image} alt="robot-pic"></img>
            <h2 style={{color: colorHandler(props.backcolor)}}>
                {props.name}
            </h2>
            <p style={{color: colorHandler(props.backcolor)}}>
                {props.email}
            </p>
        </div>
    );
}