import React from "react";
import { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../assets/class/user";

interface logProps{
    setUser:(newU:User) => void;
    users:User[];
}

export default function Login(props:logProps){
    
    const [user,setUser] = React.useState(new User());
    
    const {users} = props;

    const navigate = useNavigate();

    function handleSubmit(e:FormEvent){
        e.preventDefault(); 
        users.forEach((usercheck: User) => {
            if(usercheck.username===user.username){
                if(usercheck.password===user.password){
                usercheck.logged = true;
                props.setUser(usercheck);
                navigate('/');
              }
            }
        });
    }

    function handleNameChange(e:ChangeEvent<HTMLInputElement>){let user1 = user; user.username=(e.target.value); setUser(user1)};
    function handlePassChange(e:ChangeEvent<HTMLInputElement>){let user1 = user; user.password=(e.target.value); setUser(user1)};

    return(    
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-10 pb-9 md:pt-16 md:pb-14">
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            
            <p className="text-xl text-gray-600 mb-8"> Please log in to your account to acces all the functionalities of our site</p>
            
            <form onSubmit={handleSubmit}>
            <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center mb-3">
              <div className="w-full">
                <input id="name" type="text" placeholder="Username" name="name" onChange={handleNameChange} className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full sm:w-1/2 mb-4 sm:mb-0" required></input>
              </div>
            </div>

            <div className="max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center mb-5">
            <div className="w-full">
                <input id="pass" type= "password" placeholder="Password" name="pass" onChange={handlePassChange} className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full sm:w-1/2 mb-4 sm:mb-0" required></input>
              </div>
            </div>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div>
                <button name="submit" className="w-full sm:w-auto"><div className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-green-700 hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0">Login <i className="ri-user-line pl-2"></i></div></button>
              </div>
              <div>
                <Link to="/register" className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-gray-900 hover:bg-gray-800 w-full mb-4 sm:w-auto sm:ml-4">Register <i className="ri-user-add-line pl-2"></i></Link>
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