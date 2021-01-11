import React from 'react';


const SlotM = (props)=>{
  

    let {x,y,z} = props;

    if(x == y && y==z){
        return (
            <>
            <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is matching</h1>
            </div> 
            <hr/>
            </>
        )
    } else {
        return (
            <>
            <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is not matching</h1>
            </div> 
            <hr/>
            </>
        )
    }

   
}

export default SlotM;

