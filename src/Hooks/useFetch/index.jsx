import { useEffect, useState } from 'react'

const useFetch = (url) => {
	const [data, setData] = useState([])
	const [dataInit, setDataInit] = useState([])
	const [loading , setLoading] =useState(true)
	const [error, setError]=useState(null)
	const [controller,setController]=useState(null)
			useEffect(() => {
				const abortController = new AbortController()
				setController(abortController)
				setLoading(true)
				    fetch(url,{signal:abortController.signal})
					.then((response) => response.json())
					.then((data) => setData(data))
					.catch((error)=>{if(error.name==='AbortError'){console.log('Request canceled')}else {setError(error)}})
					.finally(()=>setLoading(false))

				return ()=> abortController.abort()	
			}, []) 
	const handleCancelRequest = ()=>{
		
		if(controller){
			controller.abort()
			setError('Request canceled')
		}
	}		
	return { data , dataInit, loading , error, handleCancelRequest }
}
export default useFetch