import Card from "../comps/Card";
import robots from "./robotsDS";
import genPic from "./generatePic";

export default function getAllRobots() {
    return robots.map(
        robot => {
            return <Card 
                    image={genPic(robot.name+robot.id)} 
                    name={robot.name} 
                    email={robot.email} 
                    backcolor={robot.color}
                   />
        }
    );
}