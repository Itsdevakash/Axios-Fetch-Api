import {useState,useEffect} from 'react'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'

const App=()=>{

  
 const [product,setProduct] = useState([])
 const [loading,setLoading] = useState(false)
 const [refetch,setRefetch] = useState(false)
 const [Count,setCount] = useState(false)

 useEffect(()=>{
   fetch_axios()
 },[refetch])

 useEffect(()=>{
  
const interval = setInterval(()=>{
  setCount((initialvalue)=>initialvalue = initialvalue+1)
},100)

//clean up
return()=>{

  clearInterval(interval)
}


},[])

const fetch_axios = async()=>{
try{
  setLoading(true)
 const response = await axios.get('https://fakestoreapi.com/products')
 const list = response.data
 console.log(list)
 setProduct(list)
}
catch(err){
console.log("My error is",err)
}
finally
{
setLoading(false)
}
}

const addtocard=(id)=>{
  
  alert('Add Product Successfully')

}
  return(

  <div>
    Count : {Count}
   
    <center><h2 style={{ 
      marginTop:5,
     }}>   Axios Rest Fetch Api</h2></center>

     <button onClick={ ()=>setRefetch(!refetch)}>Effect</button> <br></br>
     { loading && 
   <i className="fa fa-spinner fa-spin" style={{fontSize:'50px'}}></i>
     }
    {
        product.map((item,index)=>(
          <div 
          key={index}
          style={{ 
            border:"1px solid #ccc",
            padding:16,
            boxShadow:'0 0 10px #ddd',
            background:'#fff',
            borderRadius:5,
            marginBottom:'2%',
          }}>
          
            <img src={item.image} alt='index' style={{ width: '17%'}}></img>
            <h3>{item.title}</h3>
            <h2>{item.price}Rs</h2>
            <p>{item.description}</p>


            <button 
              onClick={()=>addtocard(index)}
            style={{ 
              border:'none',
              padding: '15px',
              background: 'blue',
              color: 'aliceblue',
             }}>Add To Card</button>


            </div>

         
         
        ))
      }
</div>


)}

export default App