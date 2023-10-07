import {createContext} from 'react'
import {webSocket}from '../Hooks/useWebSocket'


export const ContextDatCryptos =createContext()


export const ContextCryptosProvider =({children})=>{
 let data_sec={} 
//  let SIMBOL = ''
//  let PRICE=''

try{data_sec = webSocket()
    // SIMBOL =data_sec[0].s
    // PRICE=data_sec[0].c      
} catch{(e)=>{console.log('verrrga')}}   
 
data_sec && data_sec?.map((cripto)=>{
    let allChildren=[]
    let color = cripto.c>cripto.o?'text-green-700' : 'text-red-600'
    allChildren = document.getElementById(cripto.s)?.childNodes
    allChildren?allChildren[1].children[1].classList.add(color):null
    allChildren?allChildren[1].children[1].textContent=cripto.c:null
    allChildren?allChildren[2].children[1].textContent=cripto.v:null

  
  //  console.log(allChildren)
})

//console.log(data_sec)
    return ( 
         <ContextDatCryptos.Provider 
         value={
            {
            // SIMBOL,
            // PRICE,
            //data_sec
            }
            }>
             {children}
         </ContextDatCryptos.Provider>
    )
   
}