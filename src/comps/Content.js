import './Content.css';
import getAllRobots from '../func/getAllRobots';

export default function Content(){
    return (
        <div id='content'>
            <div id='cards-section'>
            {getAllRobots()}
            </div>    
        </div>
    );
}