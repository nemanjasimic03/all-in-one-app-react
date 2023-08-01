import React,{useState} from 'react'
import {FcExpand} from "react-icons/fc"

const Accordion = () => {

    const faqs = [
        {question:"How many items are there in this list on your app?", answer:"idk mate",id:Date.now()},
        {question:"How many items are there in this list on your app?", answer:"i lost the count",id:Date.now()},
        {question:"How many items are there in this list on your app?", answer:"Too many",id:Date.now},
    ]
    const [isopen1, setisopen1] = useState(false)
    const [isopen2, setisopen2] = useState(false)
    const [isopen3, setisopen3] = useState(false)
    const [isopen4, setisopen4] = useState(false)



  return (
    <div className=" bg-white min-h-[73vh] flex flex-col justify-center items-center gap-5 sm:gap-5 px-1">
        <h1 className='text-center text-2xl sm:text-6xl'>Frequently Asked Questions</h1>
        <h2 className='text-center sm:text-2xl'>Still have doubts? Here's everything we think you should know</h2>
        <div className="sm:w-[1000px] boderrborder-gray-400 sm:mt-10 flex flex-col justify-center items-center gap-4 sm:gap-7 p-2 pt-3 px-0">
            {/* one question */}
            <div className={`${isopen1 ? " faq-open sm:h-[100px]" : ""}  sm:w-full  faq z-10 flex flex-col  items-center gap-3 cursor-pointer`}>
                <div onClick={()=>setisopen1(!isopen1)} className={`font-bold ${isopen1 ? "font-bold text-orange-400" : ""} hover:border hover:border-orange-600 sm:w-full sm:text-2xl sm:py-2 flex flex-row justify-between items-center gap-2 px-1 sm:px-4 boderrborder-gray-700`}>
                    <h2>How many items are there in this list on your app?</h2>
                    <FcExpand className={`text-xl ${isopen2 ? "rotate-180" : ""}`}/>
                </div>
                <div className='flex pl-4 sm:pl-8 items-center sm:w-full pt-2 sm:text-2xl order'>
                    <h2 className='opacity-80 '>Lorem ipsum dolor, laborum non omnis ipsa atque ad.</h2>
                </div>
            </div>
            <div className={`${isopen2 ? "faq-open sm:h-[100px]" : ""} sm:w-full  faq z-10 flex flex-col  items-center gap-3 cursor-pointer `}>
                <div onClick={()=>setisopen2(!isopen2)} className={`font-bold ${isopen2 ? " text-orange-400" : ""} hover:border hover:border-orange-600 sm:w-full sm:text-2xl sm:py-2 flex flex-row justify-between items-center gap-2 px-1 sm:px-4 boderrborder-gray-700`}>
                    <h2>How many items are there in this list on your app?</h2>
                    <FcExpand className={`text-xl ${isopen2 ? "rotate-180" : ""}`}/>
                </div>
                <div className='flex pl-4 sm:pl-8 items-center sm:w-full pt-2 sm:text-2xl order'>
                    <h2 className='opacity-80'>Lorem ipsum dolor, laborum non omnis ipsa atque ad.</h2>
                </div>
            </div>
            <div className={`${isopen3 ? "faq-open sm:h-[100px]" : ""} sm:w-full  faq z-10 flex flex-col  items-center gap-3 cursor-pointer`}>
                <div onClick={()=>setisopen3(!isopen3)} className={`font-bold ${isopen3 ? " text-orange-400" : ""} hover:border hover:border-orange-600 sm:w-full sm:text-2xl sm:py-2 flex flex-row justify-between items-center gap-2 px-1 sm:px-4 borderr border-gray-700`}>
                    <h2>How many items are there in this list on your app?</h2>
                    <FcExpand className={`text-xl ${isopen2 ? "rotate-180" : ""}`}/>
                </div>
                <div className='flex pl-4 sm:pl-8 items-center sm:w-full pt-2 sm:text-2xl order'>
                    <h2 className='opacity-80'>Lorem ipsum dolor, laborum non omnis ipsa atque ad.</h2>
                </div>
            </div>
            <div className={`${isopen4 ? "faq-open sm:h-[100px]" : ""} sm:w-full  faq z-10 flex flex-col  items-center gap-3 cursor-pointer`}>
                <div onClick={()=>setisopen4(!isopen4)} className={`font-bold ${isopen4 ? "font-bold text-orange-400" : ""} hover:border hover:border-orange-600 sm:w-full sm:text-2xl sm:py-2 flex flex-row justify-between items-center gap-2 px-1 sm:px-4 borderr border-gray-700`}>
                    <h2>How many items are there in this list on your app?</h2>
                    <FcExpand className={`text-xl ${isopen4 ? "rotate-180" : ""}`}/>
                </div>
                <div className='flex pl-4 sm:pl-8 items-center sm:w-full pt-2 sm:text-2xl order'>
                    <h2 className='opacity-80'>Lorem ipsum dolor, laborum non omnis ipsa atque ad.</h2>
                </div>
            </div>

         {/* {faqs.map((faq)=>(
            <div className="z-10 flex flex-col justify-center items-center gap-3 cursor-pointer" >

                <div onClick={() => handleClick(faq.id)} key={faq.id}  className="flex flex-row justify-center items-center gap-2 px-1 boderrborder-y-gray-700">
                    <h2 className=''>{faq.question}</h2>
                    <FcExpand className='text-xl'/>
                </div>
          
                {isopen && 
                (    <div>
                     <h2 className=''>{faq.answer}</h2>
                    </div>)
                }

            </div>
         ))} */}


        </div>
        
    </div>
  )
}

export default Accordion