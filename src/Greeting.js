
import { userName } from "./CurrDateTime";
const exactTime =new Date().getHours();
let Greet ="";
const cssStyle={ };
if(exactTime >= 1 && exactTime < 12)
{
    Greet="Good Morning";
    cssStyle.color="green";
}
else if(exactTime >= 12 && exactTime < 19){
    Greet="Good Afternoon";
    cssStyle.color="red";
}
else{
    Greet="Good night";
    cssStyle.color="blue";
}
function Greeting(){
    return(
        
        <h1 className="heading" >Hello { userName }, <span style={cssStyle}>{Greet} </span></h1>
    );
}

export default Greeting;