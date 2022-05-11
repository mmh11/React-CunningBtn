import React, { useState } from 'react';

function Test(){
    let x = 98;
    let y = 87;
    // let x = 750;
    // let y = 350;
    const [marks, setMarks] = useState(0);
    const handleChange = (event)=>{
        x = Math.floor(Math.random()*96);
        y = Math.floor(Math.random()*85);
        event.target.style.marginLeft = `${x}vw`
        event.target.style.marginTop = `${y}vh`
    };
    const customStyle = {width:'2vw',height:'2vw',backgroundColor:'#000000',marginLeft:`${x}vw`,marginTop:`${y}vh`};
    return(
        <div>
            <h3 style={{textAlign:'center'}}>Clicked: {marks}</h3>
            <button style={customStyle} onMouseEnter={handleChange} onClick={() => setMarks(marks + 1)}/>
        </div>
    )
}
export default Test;