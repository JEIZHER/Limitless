import Boton from '../Boton'
const Form = () => {
	return (
		<div className='lg:flex lg:gap-6 '>
			<form method='post' action='#'>
				<div className='flex flex-col mb-8 '>
					<div className='sm:flex sm:flex-row justify-between'>
						<div className='pb-5  sm:w-[calc(50%-10px)]'>
							<label htmlFor='name' className='block pb-3 '>
								Name
							</label>
							<input
								type='text'
								name='name'
								id='name'
								autoComplete='given-name'
								className=' block  appearance-none focus:outline-none focus:border-white-500 focus:border-2 border rounded-md px-4  bg-transparent w-full h-10 '
							/>
						</div>
						<div className=' pb-5  sm:w-[calc(50%-10px)]'>
							<label htmlFor='email' className='block pb-3'>
								Email
							</label>
							<input
								type='text'
								name='email'
								id='email'
								autoComplete='email'
								className='block focus:outline-none focus:border-white-500 focus:border-2 border rounded-md px-4 appearance-none bg-transparent w-full h-10'
							/>
						</div>
					</div>

					<div className=' pb-5'>
						<label htmlFor='message' className='block mb-3'>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							rows='5'
							className='block appearance-none bg-transparent border rounded-md focus:outline-none focus:border-white-500 focus:border-2 px-4 py-3 w-full resize'
						></textarea>
					</div>
				</div>
				<Boton referencia='#' Titulo='SEND MESSAGE' />
			</form>
			<section className='pt-12 mt-12 border-t lg:pt-0 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-6'>
				<ul className='mb-8'>
					<li>
						<h3 className='text-1xl font-bold mb-3'>Address</h3>
						<span>
							12345 Somewhere Road #654
							<br />
							Nashville, TN 00000-0000
							<br />
							USA
						</span>
					</li>
					<li className='mt-6'>
						<h3 className='text-1xl font-bold mb-3'>Email</h3>
						<a href='#'>user@untitled.tld</a>
					</li>
					<li className='mt-6'>
						<h3 className='text-1xl font-bold mb-3'>Phone</h3>
						<span>(000) 000-0000</span>
					</li>
					<li className='mt-6'>
						<h3 className='text-1xl font-bold mb-3'>Social</h3>
						<ul className='mb-8'>
							<li className='inline-block pr-3'>
								<a href='#' className='nf nf-fa-twitter'>
									{/* <span class='label'>Twitter</span> */}
								</a>
							</li>
							<li className='inline-block pr-3'>
								<a href='#' className='nf nf-fa-facebook'>
									{/* <span class='label'>Facebook</span> */}
								</a>
							</li>
							<li className='inline-block pr-3'>
								<a href='#' className='nf nf-cod-github'>
									{/* <span class='label'>GitHub</span> */}
								</a>
							</li>
							<li className='inline-block pr-3'>
								<a href='#' className='nf nf-fa-instagram'>
									{/* <span class='label'>Instagram</span> */}
								</a>
							</li>
							<li className='inline-block pr-3'>
								<a href='#' className='nf nf-fa-linkedin'>
									{/* <span class='label'>LinkedIn</span> */}
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
		</div>
	)
}
export default Form
