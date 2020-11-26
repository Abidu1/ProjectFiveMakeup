import React from 'react'

function Saveditemsdisplay(props) {
    return (
        <section >
        <div className="imageDisplay">
        {
        // maps runs through and display the different products with name and image
          props.items.map((displayItem,i) => {
            return(
            <div className="wrapper" key={i}>
              <div key={displayItem._id} >
                <div className="makeupItems">
                    <img src={displayItem.image_link} alt={displayItem.name}></img> 
                    <p>{displayItem.name}</p>    
                    <a href={displayItem.product_link} style={{cursor:"pointer"}}>Buy Now</a>  

                    <a onClick={()=>props.deleteItem(displayItem.refid)}  style={{cursor:"pointer" ,marginLeft:"5px"}}>Delete Item</a>  
                   
                </div>
            </div>
            </div>
          );    
        })
      }
      </div> 
    </section> 
    )
}

export default Saveditemsdisplay
