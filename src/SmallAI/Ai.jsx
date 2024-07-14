import React, { useState } from "react";

const Ai = () =>{
  const answersArray = [
    'დარწმუნებული ვარ.',
    'დიახ.',
    'უდაოდ.',
    'შესაძლებელია.',
    'სავარაუდოდ კი.',
    'პასუხის გაცემა მიჭირს, ახლიდან მკითხე.',
    'სჯობს ახლა არ გითხრა.',
    'არა.',
    'არასდროს.',
    'ცუდი იდეაა.',
    'არ გარისკო!',
  ];

  const [answer, setAnswer] = useState(`მკითხე რაც გინდა!`)
  return(
    <>
    <form>
    <input type="text" placeholder="Ask a question..." />
    <button onClick={(event)=>{
        let i = Math.floor(Math.floor(Math.random() * answersArray.length))
        setAnswer(answersArray[i])
        event.preventDefault()
    }} type="submit">Ask</button>
    </form>
    <p>{answer}</p>
    </>
  )
}


export default Ai;