import React,{useState,useEffect} from 'react'
import {FaWikipediaW} from "react-icons/fa"
import {AiFillSound} from "react-icons/ai"
import { Link } from 'react-router-dom';

const Dictionary = () => {

    const [word,setWord]=useState("hello")
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const [partOfSpeech,setpartOfSpeech]=useState("");
    const [definition,setdefinition]=useState("");
    const [audio,setaudio]=useState("");
    const [phonetics,setphonetics]=useState("");
    const [synonym,setsynonym]=useState("");
    const [foundWord,setfoundWord]=useState("")
    const [wiki,setwiki]=useState("")
    const synth = window.speechSynthesis;

    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
    
        setfoundWord(data[0]?.word || "");
        setpartOfSpeech(data[0]?.meanings[0]?.partOfSpeech || "");
        setdefinition(data[0]?.meanings[0]?.definitions[0]?.definition || "");
        setaudio(data[0]?.phonetics[0]?.audio || "");
        setphonetics(data[0]?.phonetics[1]?.text || "");
        setsynonym(data[0]?.meanings[0]?.synonyms[0] || "");
        setwiki(data[0]?.sourceUrls[0])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    useEffect(()=>{
        getData()
    },)

    const handleSearch = (e) =>{
        e.preventDefault()
        getData()
    }
    const startSpeech = (text) => {
      if(text!=word) return
      const zvuk = new SpeechSynthesisUtterance(text)
      synth.speak(zvuk)
    }
    const handleSpeech = () => {
      if(!foundWord.trim()) return
      startSpeech(foundWord)
    }

  return (
    <div className='sm:w-30 sm:w-[500px] p-3 pb-6 w-[97vw] gap-2 rounded-xl opacity-90 bg-white flex flex-col justify-center items-center text-black '>
        <h1 className='text-md sm:text-[42px] p-3 pt-6 fancy-font font-bold text-blue-700'>English Dictionary</h1>
        <div className='w-full sm:w-11/12'>
            {/* <input className='w-full h-8 p-4 py-5 text-lg border-solid border-black text-black' placeholder='Enter the word' type="text" /> */}
            <form action="" onSubmit={handleSearch} className='relative'>
                <textarea className=' border-2 w-full p-4 pb-0 sm:py-5 text-lg border-solid border-stone-400 text-black' placeholder='Enter the word'
                onChange={(e)=> setWord(e.target.value)} onKeyPress={(e)=>e.key == "Enter" ? handleSearch(e) : ""}  name="" id="" cols="30" rows="3" ></textarea>
                <Link target="_blank" to={wiki}><FaWikipediaW className='text-3xl absolute bottom-2 right-1 hover:scale-110 cursor-pointer' /></Link>  
                <AiFillSound className='text-3xl absolute bottom-2 right-10 hover:scale-110 cursor-pointer' onClick={handleSpeech}/>
            </form>
            
        </div>
        <div className='w-full sm:w-11/12 gap-0 sm:gap-2 flex flex-col bg-yellow-400 pl-1 '>
            <h1 className='text-2xl sm:text-3xl font-bold fancy-font'>{foundWord}</h1>
            <h3 className='text-md sm:text-l'>{phonetics}</h3>
            <h2 className='text-l font-bold sm:text-xl'>{partOfSpeech}</h2>
        </div>
        <div className='w-full sm:w-11/12 gap-0 sm:gap-2 flex flex-col  bg-slate-400 pl-1 '>
            <h2 className='text-lg sm:text-xl font-bold'>Meaning:</h2>
            <h3 className='text-md sm:text-lg'>{definition}</h3>
        </div>
        <div className='w-full sm:w-11/12 gap-0  sm:gap-2 flex flex-col justify-center bg-red-400 pl-1 '>
            <h2 className='text-lg sm:text-xl font-bold'>Synonym:</h2>
            <h3 className='text-md sm:text-lg'>{synonym}</h3>
        </div>

    </div>
  )
}

export default Dictionary