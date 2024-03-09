import axios from "axios"
export default function update(){
    function handleUpdate(){
        axios.put('http://localhost:8081/update',{
            name:document.getElementById("idname").value,
            password:document.getElementsByName("pwd")[0].value,
            email:document.getElementsByName("email")[0].value,
            role:document.getElementById("idrole").value
        }).then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <div>
            <p/>
            <input type="text" name="name" id="idname" placeholder="name" /><p/>
            <input type="password" name="pwd" id="idpwd" placeholder="password" /><p/>
            <input type="text" name="email" id="idemail" placeholder="email" /><p/>
            <input type="text" name="role" id="idrole"placeholder="role" /><p/>
            <button color="red" onClick={handleUpdate}>update</button>
        </div>
    )
}
