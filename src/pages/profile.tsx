import { useNavigate } from "react-router-dom";
import User from "../assets/class/user";

interface profileProps{
    user:User;
    setUser:(newU:User) => void;
}

export default function Profile(props:profileProps){

    const {user} = props;
    const navigate = useNavigate();

    function logout(){
        props.setUser(new User());
        navigate('/');
    }

    return(
    <>
      <div className="flex justify-center items-center h-screen text-center">
        <div className="p-3 m-3 rounded shadow-lg">
          <div className="mb-2 text-gray-500">User: {user.username} <i className="ri-user-line pl-1"></i></div>
          <button name="logout" className="w-full sm:w-auto" onClick={logout}><div className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-green-700 hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0">Logout</div></button>
        </div>
      </div>
    </>
    )

}
