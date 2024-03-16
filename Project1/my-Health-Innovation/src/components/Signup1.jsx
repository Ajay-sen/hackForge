import react,{useState} from "react"
import img1 from "../assets/img/images/signup_logo.png"


const parent = {
    position:"relative"
  };
  const child={
     position:"absolute",
     top:"5px",
     right:"10px",
     cursor:"pointer"
  }
  const formdiv={
    border:"2px solid black",
    padding :"20px 20px 50px 20px",
    borderRadius:"5%",
    backdropFilter: "blur(10px)",

  }
  const sign={
    color:"blue",
  }
const key={
  backgroundColor:"white"
}
      
 

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
  const [pass1,setpass1]=useState("");
  const [pass2,setpass2]=useState("");
  const [click,setclick]=useState("");
  function change1(event){
    event.preventDefault()
      setpass1(event.target.value);
  }
  function change2(event){
    event.preventDefault()
    setpass2(event.target.value);
  }
  function handleUsername(event){
    event.preventDefault()
    setUsername(event.target.value);
  }
  function handleEmail(event){
    event.preventDefault()
    setEmail(event.target.value);
  }
  function check(){
    if (pass1!==pass2){
      setclick("Password and confirm password not matching.Try again!");
    }
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const response = fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, pass1})
    });
    const json = await response.json();
    console.log(json);
  }
    
    return (
      <>
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 hero"  >
         
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" style={formdiv}>
         
  
            <form className="space-y-6" action="/" method="POST" onSubmit={() => handleOnSubmit()} >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={img1}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign Up!
            </h2>
          </div>
          <div>
              
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={handleUsername}
                    autoComplete="email"
                    required
                    placeholder="Username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
             
              </div>
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleEmail}
                    autoComplete="email"
                    required
                    placeholder="Email address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
             
              </div>
  
              <div>
            
                <div className="mt-2 eye" style={parent}>
                  <input
                    id="password"
                    name="password"
                  onChange={change1}
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                   
                </div>
                </div>
                <div>
               
                <div className="mt-2 eye" style={parent}>
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    onChange={change2}
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Confirm Password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
               </div>
               <h1 style={{color:"red"}}>{click}</h1>
                </div>
             
  
              <div>
                <button
                onClick={check}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center text-sm text-white mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-white px-1" href="/">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-white px-1" href="/">
                            Privacy Policy
                        </a>
                    </div>
            </form>
            <div className="text-white mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue font-bold px-1" href="../login/" style={sign}>
                        Log in
                    </a>
                </div>
            
          </div>
        </div>

      </>
    )
  }