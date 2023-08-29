import React from 'react';


function Rival(props) {
    return(
        <>
          <div>
            <img 
            src={require(`../imagenes/${props.imagen}.png`)}
            alt='imagen'/>
          </div>
        </>
        
    )
}

export default Rival