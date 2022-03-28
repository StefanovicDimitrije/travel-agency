interface cardProps{
    title:String,
    content:String,
    icon:String,
}

export default function Card(props:cardProps){
    const {title} = props;
    const {content} = props;
    const {icon} = props;

    return(
    <div className="flex flex-col items-center p-6 bg-white rounded shadow-xl">
        
        <div className='w-16 h-16 p-1 -mt-1 mb-2 text-center bg-green-700 rounded-full pt-4'>
            <i className={ icon + " text-2xl text-white"}></i>
        </div>
        
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">{title}</h4>
        <p className="text-gray-600 text-center text-ellipsis overflow-hidden max-h-12">{content}</p>
      </div>
    )
}