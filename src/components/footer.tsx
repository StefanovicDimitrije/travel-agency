import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="w-full text-gray-700 text-center px-4 sm:px-6">
            <div className="py-2 border-t-2 border-gray-100">
                <div className="flex justify-between items-center md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">    
                        <div className="-translate-y-1 text-gray-400">Dimitrije Stefanović 2021&copy;</div>
                    </div>
                    <div className="">
                        <Link to="/">
                            <img alt="" className="h-10 w-auto sm:h-11" src={require ('../assets/images/logo.png')}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}