import { useContext } from 'react'
import {ContextDatCryptos} from '../../Context'
//import cards from '../../Components/CardsCryptos'


const ActualizadorCryptoCards=()=>{
    const context =useContext(ContextDatCryptos)        
    const card = document.getElementById('1')  
    card.h1.titulo=context[0].s

}