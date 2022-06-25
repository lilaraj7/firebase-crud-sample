import React,{useState,useEffect} from "react";
import {db} from "./Firebase";
import { addDoc, collection,getDocs,doc,updateDoc, deleteDoc} from "firebase/firestore";
import { async } from "@firebase/util";




const App=(id)=>{

  const [developers,setdevelopers]= useState([])
  const [newname,setNewname]=useState("")
  const [newage,setAge]=useState(0)

 const developersCollectionRef = collection(db,"developers")
const add =async()=>{
  await addDoc(developersCollectionRef,{name:newname,age:Number(newage)})

}

const updatedeveloper = async(id,age)=>{
  const developerdoc = doc(db,"developers",id);
  const  newfields ={age:age+1};
  await updateDoc(developerdoc,newfields)

}

const deletedeve =async(id)=>{

  const developersDoc=doc(db,"developers",id);
  await deleteDoc(developersDoc);
}

  useEffect(()=>{

  const getdevlopers= async()=>{
    const data = await getDocs(developersCollectionRef);
    setdevelopers(data.docs.map((doc)=> ({...doc.data(),id: doc.id})));

  
  }
  getdevlopers()
  },[])


  return(
    <div>
      {""}
      <input type="text" placeholder="name.." onChange={(e)=>setNewname(e.target.value)}/>
      <input type="number" placeholder="Age.." onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={add}>Add</button>
      {developers.map((developer)=>{
        return(
          <div>
          <h1>Name:{developer.name}</h1>
          <h1>Age:{developer.age}</h1>
          <button onClick={()=>{updatedeveloper(developer.id,developer.age)}}>increase age</button>
          <button onClick={()=>{deletedeve(developer.id)}}>delete</button>
          </div>
        )
      })}
      <h1>ehhuwryueg</h1>
    </div>
  )
}

export default App;