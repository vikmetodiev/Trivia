import React from "react";
for(let i = 0; i < 14;i++){
    if(i === 0){
        console.log(document.getElementById("item_color"))
    }
}

const Levels = [100,200,300,400,500,1000,2000,4000,8000,16000,32000,64000,12800,25000,100000]
const levels_test = Levels.reverse().map(ar => {return(<ol><li>{ar}</li></ol>)})
function Stage(){

    return(
        <div className="stage">
        {levels_test}
        
        </div>
    )
}

export default Stage