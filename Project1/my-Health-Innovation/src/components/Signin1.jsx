import react,{useState} from "react"
import img1 from "../assets/img/images/signup_logo.png"
import img2 from "../assets/img/images/eyeCut.png"
import img3 from "../assets/img/images/eye.png"

/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email
                </label>*/
                /*<div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                 
                </div> */
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
  const login={
    color:"blue",

  }
export default function Signin() {
    
        const [password, setPasswordValue] = useState("password");
        const [passwordInput, setPasswordInput] = useState("");
        const [pic ,setpic]=useState(img2);
        const onPasswordChange = (e) => {
          setPasswordInput(e.target.value);
        };
        const toggle = (e) => {
          if(pic===img2){
            setpic(img3);
          }
         else{
            setpic(img2);
         }
          
          if (password === "password") {
            setPasswordValue("text");
            return;
          }
          setPasswordValue("password");
          
        };
    /*style="background-image: radial-gradient(rgba(66, 99, 24, 0.375),
  rgba(6, 68, 33, 0.259)), url(doctorbg.jpg);background-size:cover;  background-repeat: no-repeat;background-attachment: fixed 
 " */
    return (
      <>
        {/* {

        } */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 hero" >
         
          <div className="mt-12  sm:mx-auto  sm:w-full sm:max-w-sm" style={formdiv}>
         
  
            <form className="space-y-6" action="#" method="POST" >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={img1}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
          </div>
              <div>
               
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
             
              </div>
  
              <div>
                
                <div className="mt-2 eye" style={parent}>
                  <input
                    id="password"
                    name="password"
                    onChange={onPasswordChange}
                    type={password}
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                   <img src={pic} alt="passed" className="pass-icon mx-auto h-6 w-auto" style={child} onClick={toggle}/>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div class="text-white mt-6">
                    Haven't registred yet? Register here -
                    <a class="no-underline border-b border-blue text-blue font-bold px-1" href="../login/" style={login}>
                        Sign Up
                    </a>
                </div>
          </div>
        </div>

      </>
    )
  }
  