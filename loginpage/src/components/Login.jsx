import "../index.css"
import Forminput from "./FormInput";
import { useRef} from "react";

function Login(){
    // const [username,setUsername] = useState("")
    const usernameRef = useRef()
    const handlesubmit = (e)=>{
        e.preventDefault(); 
         console.log(usernameRef)
    }
    return(
        <div className="Login">
      <form onSubmit={handlesubmit}>
        <h1>Login</h1>
        <Forminput refer={usernameRef} placeholder="Username" />
        <Forminput placeholder="Email" />
        <Forminput placeholder="Password" />
        <p>Don't have an account? <span><a className="">Register</a></span></p>
        <button className='submit'>Login</button>
      </form>
    </div>
    );
}

export default Login;