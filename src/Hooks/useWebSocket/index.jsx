import { useEffect, useState } from 'react'
const ws= new WebSocket('wss://stream.binance.com:443/ws/!miniTicker@arr')

const webSocket = ()=>{
    const [objet,setObjet]= useState([])    
        ws.onmessage=(event)=>{
        let objeto = JSON.parse(event.data) 
        setObjet(objeto)
        console.log(objeto)  
        }
    return objet 
    
}
// const wsClose =()=>{
//  ws.addEventListener("close", close)
// }

   // Función que hace un ping (el parámetro es un callback vacío)
//const ping = () => ws.ping(() => {});

  // Establecer la ejecución periódica del ping. Para cancelar, utilizar clearInterval
//setInterval(ping, PING_TIME * 1000);

export { webSocket}