import React from "react";
import "./../dist/output.css"

export default function Body(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }){
    return(
        <div className="flex flex-col m-0 p-0 min-h-screen">
            {props.children}
        </div>
    )
}