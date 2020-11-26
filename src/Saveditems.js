import React, { useState,useEffect } from 'react'
import Header from './Header.js';
import Footer from './Footer'
import Saveditemsdisplay from './Saveditemsdisplay.js';
import firebase from './firebaseApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Saveditems() {

    const [items,setItems]=useState([]);
    const [deleted,setDeleted]=useState("");
    const db = firebase.firestore();
    


    useEffect(() => {
        const docs=[]
        db.collection("saveditems").where('username', '==',localStorage.getItem("email")).get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                let obj=doc.data();
                Object.assign(obj, {refid: doc.id});
                
               
                console.log(obj)
              
              
               docs.push(obj);
               
             
            });

            setItems([...docs]);
        });
    }, [deleted,db])

    const deleteItem=(id)=>{

        db.collection('saveditems').doc(id).delete().then(data=>{
            setDeleted(+ new Date());

            

            toast("Product Removed");


        });
       


    }

    return (
        <div className="App">
             <ToastContainer />
        <Header />
   <Saveditemsdisplay items={items} deleteItem={deleteItem}/>
     <Footer/>
      </div>
    )
}

export default Saveditems


