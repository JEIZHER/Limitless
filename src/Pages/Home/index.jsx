import React, { useEffect,Suspense,useContext } from 'react'
const Form = React.lazy(() => import('../../Components/Form'))
const CardsCryptos = React.lazy(() => import('../../Components/CardsCryptos'))
const CardsNews = React.lazy(() => import('../../Components/CardsNews'))
import Observer from '../../Utils/Observer'
import Carousel from '../../Components/Carousel'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../Utils/Loading'


function Home() {

   
   	const data_sec_1 = [
		{
			titulo: 'Sed ipsum dolor',
			texto:
				'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquamurpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
			imagen: '/pic01.webp',
			referencia: '#',
		},
		{
			titulo: 'Feugiat consequat',
			texto:
				'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquamurpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
			imagen: '/pic01.webp',
			referencia: '#',
		},
		{
			titulo: 'Ultricies aliquam',
			texto:
				'Phasellus convallis elit id ullamcorper pulvinar. Duis aliquamurpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.',
			imagen: '/pic01.webp',
			referencia: '#',
		},
	]


	 const { data,dataInit, loading } = useFetch(
	 	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en'
	 )
	// console.log(data)
	return (
		<>
			<div className=' text-sm  text-gray-200  sm:text-base lg:ml-[200px]'>
			
				<section 
				id='intro'
				 className='bg-intro bg-cover bg-fixed h-screen'>
					<div className=' flex flex-col justify-between w-auto h-screen pb-10  pt-12 px-7 sm:px-16 bg-intro2 opacity-95 bg-cover sm:pt-24  lg:pt-[200px]  '>
						<div className=' sm:flex sm:flex-col sm:space-x-3 '>
							<h1 className='text-3xl sm:text-5xl lg:text-6xl text-white  mb-6 font-bold'>
								X-Limitless
							</h1>
							<p className='select-none mb-7'>Cripto conexiones sin limites</p>
						</div>
						

						 {loading ? (
							<div role='status' className='ml-[40%] mb-[5%]'>
								<svg
									aria-hidden='true'
									className='inline w-12 h-12 mr-4 text-white animate-spin dark:text-gray-600 fill-accent'
									viewBox='0 0 100 101'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
										fill='currentColor'
									/>
									<path
										d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
										fill='currentFill'
									/>
								</svg>
								<span className=''>Loading...</span>
							</div>
						) : null
							
						}
						 <Carousel data={data.slice(1,5)} />  
						
					</div>
				</section>
				
				<section
						id='one'
						className='flex flex-col justify-center pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16 h-full  bg-gradient-to-l from-violet-500 to-blue-700'
					>
						<div className=' sm:flex sm:items-center sm:space-x-3 '>
							<h1 className='text-2xl font-bold sm:text-3xl  mb-4'>NEWS</h1>
						</div>
						<p className='select-none mb-7'>
							Phasellus convallis elit id ullamcorper pulvinar. Duis
							aliquamturpis mauris, eu ultricies erat malesuada quis. Aliquam
							dapibus,lacus eget hendrerit bibendum, urna est aliquam sem, sit
							ametimperdiet est velit quis lorem
						</p>
						<Suspense fallback={<Loading />}>
						{data_sec_1?.map((dat, index) => (
							<CardsNews
								key={index}
								titulo={dat.titulo}
								texto={dat.texto}
								referencia={dat.referencia}
								imagen={dat.imagen}
							/>
						))}
						</Suspense>
				</section>

				<section
						id='two'
						className='flex flex-col justify-center pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-800'
					>
						<div className=' sm:flex sm:items-center sm:space-x-3 '>
							<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>CRYPTOS</h1>
						</div>
						<p className='select-none mb-7'>
						Las criptomonedas son monedas digitales que utilizan la criptografía para asegurar y verificar transacciones. Aunque tienen el potencial de revolucionar la forma en que se realizan las transacciones financieras, también hay algunos riesgos asociados con ellas. Debido a su naturaleza descentralizada y no regulada, las criptomonedas pueden ser vulnerables a la volatilidad del mercado, el fraude y el robo.
						</p>
						<div className='flex flex-row flex-wrap gap-2 justify-center mb-8'>
						<Suspense fallback={<Loading />}>						  
							{data?.map((dat, index) => (
								<CardsCryptos
									key={index}
									id={dat.symbol.toUpperCase()+'USDT'}
									symbol={dat.symbol.toUpperCase()}
									price={dat.current_price}
									//referencia='#'	
									icon={dat.image}
								/>
							))}
							</Suspense>
						</div>
				</section>

				<section
						id='three'
						className='flex flex-col justify-center pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16 h-full  bg-gradient-to-l from-violet-500 to-blue-700'
					>
						<div className=' sm:flex sm:items-center sm:space-x-3 '>
							<h1 className='text-2xl font-bold mb-4'>GET IN TOUCH</h1>
						</div>
						<p className='select-none mb-7'>
							Phasellus convallis elit id ullamcorper pulvinar. Duis
							aliquamturpis mauris, eu ultricies erat malesuada quis. Aliquam
							dapibus,lacus eget hendrerit bibendum, urna est aliquam sem, sit
							ametimperdiet est velit quis lorem.
						</p>
						<Suspense fallback={<Loading />}>
						<Form />
						</Suspense>
				</section>
				
				 { useEffect(() => {
	  	            Observer()
				
	             }, [])}
				
			</div>
		</>
	)
}

export default Home
