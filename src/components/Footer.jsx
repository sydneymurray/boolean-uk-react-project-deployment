import "../styles/Footer.css"
import {useState, useEffect} from "react"

export default function Footer(){
  const [sigTime, setSigTime] = useState()
  
  function startClocking(){
    setInterval(() => setSigTime((new Date).toString().slice(15,24)), 1000)
  }

  useEffect(() => startClocking(), [])  

  return <>
    <div className="Footer">
      <div className="signature">
        <h4>&copy; Brodda Syd Productions</h4>
        <span className="sig-time">{sigTime}</span>
      </div>
      <div className="signature">
        <h4>Contact us:</h4>
        <span>0118 999 881 999 119 7253</span>
      </div>
      <div className="signature">
        <h4>Address:</h4>
        <p>Mind your own BUSINESS!</p>
      </div>
      <div>
        <h4>Email:</h4>
        <span>info@BroddaSydProductions.sport</span>
      </div>
    </div>
  </>
 }




