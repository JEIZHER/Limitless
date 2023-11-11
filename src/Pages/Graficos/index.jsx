import { useLocation } from 'react-router-dom'
import TradingViewWidget from '../../Components/TradingViewWidget'

const Graficos = ()=>{
  let { state } = useLocation()
  console.log(state)
  return 	<div className=' text-sm  text-gray-100 pt-12 sm:text-base lg:ml-[200px] min-w-[420px] px-5  h-screen bg-gradient-to-l from-blue-400 to-blue-800'>
           < TradingViewWidget cripto={state}/>
            </div>
  

}
export default Graficos