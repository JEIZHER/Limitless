import {createContext} from 'react'
import {webSocket}from '../Hooks/useWebSocket'


export const ContextDatCryptos =createContext()


export const ContextCryptosProvider =({children})=>{
 let data_sec_3={} 
 let BTC = ''
try{data_sec_3 = webSocket()
    BTC =data_sec_3[0].c
} catch{(e)=>{console.log('verrrga')}}   

console.log(data_sec_3)
    return ( 
         <ContextDatCryptos.Provider 
         value={
            {data_sec_3 ,
            BTC
            }
            }>
             {children}
         </ContextDatCryptos.Provider>
    )
   
}