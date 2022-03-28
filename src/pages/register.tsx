import React, { FormEvent } from "react";
import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../assets/class/user";

interface regProps{
  addUser:(newU:User)=>void
}

export default function Register(props:regProps){
  
  const [user,setUser] = React.useState(new User());
  const [cpass,setcPass] = React.useState("");
  const navigate = useNavigate();

  function handleNameChange(e:ChangeEvent<HTMLInputElement>){let user1 = user; user.username=(e.target.value); setUser(user1)};
  function handlePassChange(e:ChangeEvent<HTMLInputElement>){let user1 = user; user.password=(e.target.value); setUser(user1)};
  function handlecPassChange(e:ChangeEvent<HTMLInputElement>){setcPass(e.target.value)};

  function handleSubmit(e:FormEvent){
   if(cpass===user.password){
     props.addUser(user);
     navigate('/login');
   }
  }

  return(
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-10 pb-9 md:pt-16 md:pb-14">
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            
            <p className="text-xl text-gray-600 mb-8"> Create a new account and use our site the way it was meant to!</p>
            
            <form onSubmit={handleSubmit}>
            <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center mb-3">
            <div className="w-full">
                <input onChange={handleNameChange} id="username" type= "text" placeholder="Username" name="username" className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full sm:w-1/2 mb-4 sm:mb-0" required></input>
              </div>
            </div>

            <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center mb-5">
            <div className="w-full">
                <input onChange={handlePassChange} id="pass" type= "password" placeholder="Password" name="pass" className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full sm:w-1/2 mb-4 sm:mb-0" required></input>
              </div>
            </div>

            <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center mb-5">
            <div className="w-full">
                <input onChange={handlecPassChange} id="cpass" type= "password" placeholder="Confirm password" name="cpass" className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full sm:w-1/2 mb-4 sm:mb-0" required></input>
              </div>
            </div>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div>
                <button name="submit" className="w-full sm:w-auto"><div className="font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-green-700 hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0">Create account <i className="ri-user-add-line pl-2"></i></div></button>
              </div>
              <div>
                <Link to="/login" className="font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-gray-900 hover:bg-gray-800 w-full mb-4 sm:w-auto sm:ml-4">Back to login <i className="ri-run-line pl-2"></i></Link>
              </div>
            </div>
            </form>
          </div>
         </div>
        </div>
      </div>
  </section>
  )
}