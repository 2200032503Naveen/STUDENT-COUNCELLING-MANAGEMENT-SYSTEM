import axios from 'axios'
import { useState } from 'react'
function Show(){
   const[r,setR]=useState(null)
   if(r==null){
    axios.get('http://localhost:8081/show',{headers: {
        'authorization': `Bearer ${localStorage.getItem("token")}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }}).then((res)=>{
        console.log(res.data)
        setR(res.data)
    })
   }
   function handleDelete(event){
    alert(event.currentTarget.getAttribute("ref1"))
    axios.delete('http://localhost:8081/delete',{params:{
        name: event.currentTarget.getAttribute("ref1")
    }}).then((res)=>{
        console.log(res.data)
    })
   }

   function handleDelete1(event) {
    alert(event.currentTarget.getAttribute("ref1"))
    axios.get('http://localhost:8081/delete', {}).then((res) => {
        console.log(res.data)
    })
   }
   if(r!=null){
    return(
        <table border="1">
            <tr>
                <th>id</th>
                <th> name </th>
                <th> email </th>
                <th> role </th>
                <th> delete </th>
            </tr>
            {r.map((user)=>{
                return(                   
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td><button ref1={user.name} onClick={handleDelete}>delete</button></td>
                        </tr>
                )
            })}
        </table>
    );
    }
    else{
        return(
            <div>
                Data is Fetching
            </div>
        )
    }
}
export default Show