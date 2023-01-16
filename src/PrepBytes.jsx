import React from "react";

const PrepBytes = ()=>{
    const CodeMore= true;
    return(
        <diV>
        <div style={{textAlign:'center',fontSize:'25px'}}>hello</div>
        <div>
            {/* {CodeMore && <h5>We will plced</h5>}  */}
            {CodeMore ? <h2 style={{backgroundColor: 'blue'}}>hello</h2>:<h2 style={{backgroundColor:'yellow'}}>heelo</h2>}
        </div>
        </diV>
    )
}
export default PrepBytes
