import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Card1(){
return(
    Sdata.map(ncard)
);

function ncard(val){
    return(
        <>
                
                      <div className='col-sm-2' style={{margin:'10px',float:'left'}} >
                          <Card key={val.id} username ={val.username} desi={val.desi}/>
                      </div>
                   
        </>
     );
  }
}
export default Card1;