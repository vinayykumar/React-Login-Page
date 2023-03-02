import "../index.css"
import Forminput from "./FormInput";

function Register(){
    return (
        <div className="Login">
        <form>
        <h1>Register</h1>
        <Forminput placeholder="Username" />
        <Forminput placeholder="Email" />
        <Forminput placeholder="Password" />
        <Forminput placeholder="Confirm Password" />
        <p>Already have an account? <span><a className="">Login</a></span></p>
        
        <button className='submit'>Register</button>
      </form>   
        </div>
    );
}

export default Register;