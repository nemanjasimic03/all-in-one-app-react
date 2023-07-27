import React, { useEffect, useState } from 'react'
import trash from '../../assets/trash.svg'
import remove from "../../assets/remove.png"
import "./tracker.css"

const Tracker = () => {
  
  const [text,setText]=useState("");
  const [amount,setAmount]=useState("");
  const [transactions, setTransactions] = useState(()=>{
    const localTransactions = localStorage.getItem("transactions")
    if(localTransactions==null) return []
    else return JSON.parse(localTransactions)
  });
  const [balance, setBalance] = useState(()=>{
    let localBalance = localStorage.getItem("balance")
    if (localBalance == null) return 0
    else return JSON.parse(localBalance) 
  });
  const [cur, setCur] = useState(()=>{
    const localCur = localStorage.getItem("currency");
    if (localCur === null) return "rsd"
    else return JSON.parse(localCur)
  })
  const [isHovering, setIsHovering] = useState(false);
  const [kursEvra,setKursEvra] = useState(117.3);

  const mouseOver = () =>{
    setIsHovering(true)
  }
  const mouseOut = () =>{
    setIsHovering(false)
  }
  const apiKey = "0dcbc50a3a77142f7a66aa72e72e97e0";
// http://data.fixer.io/api/latest?access_key=0dcbc50a3a77142f7a66aa72e72e97e0

  async function getData(){
    const response = await fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`);
    const data = await response.json();
    setKursEvra(data.rates.RSD);
  }
    
  useEffect(() => {
    setCur("rsd")
    const localCur = localStorage.getItem("currency");
    if (localCur === null || localCur === undefined ) {
      setCur("rsd");
    } else {
      setCur(JSON.parse(localCur));
    }
    getData();
  }, []);
  
  useEffect(()=>{
    localStorage.setItem("transactions",JSON.stringify(transactions));
    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("currency", JSON.stringify(cur));
   },[transactions,balance,cur])

   const handleAdd = (e) => {
    e.preventDefault();
    const newTransaction = {  
      id: Date.now(),
      text: text,
      amount: amount,
      currency: cur === "rsd" ? "rsd" : "eur"
    };
    setTransactions([...transactions, newTransaction]);
    setAmount("");
    setText("");
    calculation(newTransaction.amount);
  };
  
  const calculation = (newValue) => {
    const newBalance= parseFloat(balance) + parseFloat(newValue)
    setBalance(newBalance);
  }
  

  const convert = () =>{
    if(cur === "eur") {
      setBalance( (balance * kursEvra).toFixed(2))
      setCur("rsd");
      return;
    } else if (cur ==="rsd"){
      setBalance((balance/kursEvra).toFixed(2))
      setCur("eur");
      return;
    }
  }

  const handleDelete = (trans) =>{
   const updatedArray = transactions.filter((transaction)=> transaction.id !== trans.id)
   setTransactions(updatedArray)
  if(trans.currency===cur) setBalance(balance-trans.amount)
  else if(cur=="rsd"){
    trans.amount= trans.amount *kursEvra;
    setBalance((balance-trans.amount).toFixed(2))
  } else {trans.amount= trans.amount /kursEvra
  setBalance((balance-trans.amount).toFixed(2))}
  }

  return (
    <div className='flex flex-col container gap-[0.5rem] relative justify-center items-center'>
      <div className='currency'>
        <h4 onClick={convert} className={cur==="eur" ? "active" : ""} >EUR</h4>
        <h4 onClick={convert} className={cur==="rsd" ? "active" : ""}>RSD</h4>
      </div>
      <div className="kurs">
        <h5>Exchange rate:</h5>
        <h5>{kursEvra.toFixed(3) +" rsd"}</h5>
      </div>
        <h2 className='title pb-[10px]'>Expense Tracker</h2>
        <form onSubmit={handleAdd}>
        <div className="flex flex-col justify-center items-center">
            <h3>YOUR BALANCE:</h3>
            <h1 className={`p-1 ${balance>=0 ? "bg-green-600" : "bg-red-600"}`}>{balance} <span >{cur==="rsd" ? "RSD" : "EUR"}</span></h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-[5px] trans-history">
            <div className='flex flex-row justify-center items-center space'>
            <h2 className='pb-[10px]'>History</h2>
            <img src={trash} alt="" className='kanta' onClick={()=> (setTransactions([]), setBalance(0))}/>
            </div>
            <hr />
            <div className='history-items'>
                {transactions.map((transaction)=>(
                      //ITEMS
                      <>
                      <div className='item-tracker flex flex-row justify-center items-center relative' key={transaction.id} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <h3>{transaction.text}</h3>
                        <h3 style={transaction.amount>0 ? {color:"green"} : {color:"red"}}>{transaction.amount+" "}{transaction.currency}</h3>
                        <img src={remove} alt="" className="remove-tracker" onClick={()=>handleDelete(transaction)}/>
                        {/* {isHovering && (
                            <img src={remove} alt="" className="remove" onClick={()=>handleDelete(transaction)}/>
                      )} */}
                      </div>
        
                      </>
                    ))}    
            </div>
      
            </div>
        <div className="flex flex-col justify-center items-center gap-[5px] relative">
            <h2 className='pb-[10px]'>Add a transaction </h2>
            <hr />
              
            <label htmlFor="name">Text</label>
            <input name="name" type="text" 
            className='input-tracker'
            value={text}
            required
            onChange={(e)=>{setText(e.target.value)}}
            placeholder='Enter text' />
            <label htmlFor="name">Amount  * negative - expense, positive - income</label>
            <h3 className='inputValuta'>{cur}</h3>
            <input name="name" type="number" placeholder="Enter the amount"
            value={amount}
            className='input-tracker'
            required
            onChange={(e)=> setAmount(e.target.value)} 
            onKeyPress={(e)=> e.key=="Enter" ? handleAdd(e) : "" } />            
        </div>
        <div className="flex justify-center items-center"><button className='add-tracker mt-4' type='submit'>Add transaction</button></div>
        </form>
    </div>
  )
}

export default Tracker