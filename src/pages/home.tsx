import { Link } from "react-router-dom";
import User from "../assets/class/user";
import Card from "../components/cards";

interface homeProps{
  user:User;
}

export default function Home(props:homeProps){
  var link = "/"; if(props.user.logged){link="trips";} else{link="login";}

  return(
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-7 md:pt-11">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-14">
            <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter mb-4 text-gray-700 whitespace-nowrap leading-relaxed">Stefanovic Travels</h2>
            <p className="text-xl text-gray-600">At Stefanovic Travels Agency, we know that travel plays an important part in every person's life, and that is why our team has been working hard over the years to ensure that it is professionally organized and designed down to the smallest detail. These details are remembered and retold, and over time they become the most beautiful memories.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-3 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <Card title={"First-min sales!"} content={"First minute sales and offers are now live and you can reserve your spot!"} icon={"ri-flight-takeoff-line"}/>

            {/* 2nd item */}
            <Card title={"Survey confirms"} content={"Our planes, buses and parent companies that handle them are regularly checked. User survey confirms our quality insurance"} icon={"ri-plane-line"}/>

            {/* 3rd item */}
            <Card title={"Cancel on time"} content={"You have enough time to plan and cancel your trip if anything comes to worst"} icon={"ri-timer-line"}/>

          </div>
          
          <div className="mx-auto md:max-w-none md:flex md:justify-center mb-5 mt-10 gap-6 ">
              <button className="w-full md:w-auto"><Link to={link} className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-5 py-3 shadow-lg text-white bg-green-700 hover:bg-green-800 w-full mb-4 md:w-auto md:mb-0">Reserve your spot <i className="fas fa-user pl-2"></i></Link></button>
              <button className="w-full md:w-auto"><Link to={"about"} className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-5 py-3 shadow-lg text-white bg-green-700 hover:bg-green-800 w-full mb-4 md:w-auto md:mb-0">Check out the quality for yourself <i className="fas fa-user pl-2"></i></Link></button>
              <button className="w-full md:w-auto"><Link to={"trips"} className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-5 py-3 shadow-lg text-white bg-gray-900 hover:bg-gray-800 w-full mb-4 md:w-auto md:mb-0">Check out our trips right now <i className="fas fa-user-plus pl-2"></i></Link></button>
          </div>

        </div>
      </div>
    </div>
    )
}