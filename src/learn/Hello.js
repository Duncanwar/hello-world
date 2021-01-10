import React, { useEffect,useState } from 'react';
import {Provinces,Districts,Cells,Sectors,Villages} from "rwanda";

const Hello = () => {
  
    const [province,setProvince] = useState()
    const [district,setDistrict] = useState()
    const [sector,setSector] = useState()
    const [cells,setCells] = useState()
    const [villages,setVillages] = useState()
    const [on,setOn] = useState(false)
    let [data,setData] = useState('');

    const display=(x)=>{
setData(x);

    }
    const displayProvince=(x)=>{
        setProvince(x)
        setOn(true)
    }
    const displayDistrict=(x)=>{
        setDistrict(x)
    }
    useEffect(()=>{
        console.log(province)
     if(on !== false){
displayProvince();
     }
     if(province){
         displayDistrict();
     }
    },[on,province])
    return (
        <div>
           
           <select onClick={
                   ()=> displayProvince()}  >
               
           {Provinces().map(x => {
             
                return(
              
               <option onChange={
                   ()=> displayProvince(x)} value={data}>{on?x: null}</option>
               )})}
               </select> 
        <select onClick={
                   ()=> displayDistrict()} >
            
            {
                
                Districts(province).map(x=> {
return(
    
    <option onClick={()=> displayDistrict(x) }  value={data}>{province?x:null}</option>
)
                })
            }
            
        </select>
        <select>
            {
                Sectors(data).map(x=> {
return(
    <option onClick={()=> display(x)} value={data}>{x}</option>
)
                })
            }
            
        </select>
        <select onClick={
                   ()=> displayProvince()}>
            {
                Villages(data).map(x=> {
return(
    <option onClick={()=> display(x)} value={data}>{x}</option>
)
                })
            }
            
        </select>
        </div>
    );
};

export default Hello;
