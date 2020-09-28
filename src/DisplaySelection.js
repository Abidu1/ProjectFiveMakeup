import React from 'react';
import firebase from './firebaseApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Used to display api function by getting the image and name of makeup product
const DisplaySection = (props ) => {


  const onClick = (e,item) => {
    e.preventDefault()

    if(localStorage.getItem("email"))
    {
      const db = firebase.firestore();
      db.collection("saveditems").doc(`doc-${item.id}`).get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          toast("You already Have this Product Saved");
         
        } else {
          db.collection("saveditems").doc(`doc-${item.id}`).set({...item,username:localStorage.getItem("email")}).then(data=>{
            toast("Product Saved")
          });
         
        }
    });
    }

    else{
      toast("Please Login To Save Product")
    }
  
   
    


   
   
    


  }
    return(
      <section >
         <ToastContainer />
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
                    <a href="/" onClick={(e)=>onClick(e,displayItem)} style={{marginLeft:"5px" ,cursor:"pointer"}}>Save Item</a>        
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


export default DisplaySection;
