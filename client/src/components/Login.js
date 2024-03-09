import axios from 'axios'
function Login({store}){
    function handleSubmit(){
        axios.post('http://localhost:8081/check',{
            un: document.getElementById("idun").value,
            pw: document.getElementsByName("pw")[0].value
        }).then((res)=>{
            console.log(res.data)
            if(res.data.message != "failed"){
                store.dispatch({"type":"login","data":{"un":res.data.message.name, "role":res.data.message.role, "token":res.data.token}})
            }
        })
    }
    function handlemover(){
        document.getElementById("lp")["style"]["boxShadow"]="5px 5px 10px black";
    }
    function handlemleave(){
        document.getElementById("lp")["style"]["boxShadow"]="0px 0px 0px black";
    }
    return(
        <div className="login-parent">
            <center>
        <div id="lp" onMouseLeave={handlemleave} onMouseOver={handlemover} className="login-page">
            <p><b><i><u style={{textShadow:"1px 2px 5px yellow, -1px -2px 5px white"}}>Login Page</u></i></b></p><br/>
            username:<input type="text" id="idun"/><br/><br/>
            password: <input type="password" name="pw" /><br/><br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
        </center>
        </div>
    );
}
export default Login
