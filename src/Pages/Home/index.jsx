import '../../index.css'
function Home() {
	
	return (
		<>
			{/* Wrapper  */}
			<div id='wrapper' className='mt-10 text-white'>
				{/*------------------------------------- Intro  */}
				<section
					id='intro'
					className='flex flex-col bg-gradient-to-r from-violet-500 to-blue-700 '
				>
					<div className='pt-11 pl-7 pr-7 pb-4 w-screen max-w-full'>
						<h1 className='text-3xl font-bold mb-4'>X-Limitless</h1>
						<p className='mb-7'>
							Responsive site template designed by Joseph Izarra
						</p>
						<ul>
							<li className='grow shrink'>
								<a href='#one'className='flex flex-col items-center grow shrink border rounded-full mb-7  w-full pt-2 pb-2'> Learn more</a>
							</li>
						</ul>
					</div>
				</section>

				{/*--------------------------------------- One */}
				<section
					id='one'
					className='relative flex flex-col bg-gradient-to-r from-violet-500 to-blue-700 '
				>
					<section>
						<a href='#' className=' block bg-pic01 bg-center w-full h-60'>
							{/* <img src="public/pic01.jpg" alt="" data-position="center center" className="hidden w-full align-baseline" /> */}
						</a>
						<div className='pt-11 pl-7 pr-7 pb-4 w-screen max-w-full'>
							<div>
								<h2 className='text-2xl font-bold mb-4'>Sed ipsum dolor</h2>
								<p className='mb-7'>
									Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
									turpis mauris, eu ultricies erat malesuada quis. Aliquam
									dapibus.
								</p>
								<ul >
									<li>
										<a href='#' className='flex flex-col items-center grow shrink border rounded-full mb-7  w-full pt-2 pb-2'>Learn more</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section>
						<a href='#' className=' block bg-pic01 bg-center w-full h-60'>
							{/* <img src="images/pic02.jpg" alt="" data-position="top center" /> */}
						</a>
						<div className='pt-11 pl-7 pr-7 pb-4 w-screen max-w-full'>
							<div>
								<h2 className='text-2xl font-bold mb-4'>Feugiat consequat</h2>
								<p className='mb-7'>
									Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
									turpis mauris, eu ultricies erat malesuada quis. Aliquam
									dapibus.
								</p>
								<ul >
									<li>
										<a href='#' className='flex flex-col items-center grow shrink border rounded-full mb-7  w-full pt-2 pb-2'>Learn more</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section>
						<a href='#' className=' block bg-pic01 bg-center w-full h-60'>
							{/* <img src="images/pic03.jpg" alt="" data-position="25% 25%" /> */}
						</a>
						<div className='pt-11 pl-7 pr-7 pb-4 w-screen max-w-full'>
							<div>
								<h2 className='text-2xl font-bold mb-4'>Ultricies aliquam</h2>
								<p className='mb-7'>
									Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
									turpis mauris, eu ultricies erat malesuada quis. Aliquam
									dapibus.
								</p>
								<ul>
									<li>
										<a href='#'className='flex flex-col items-center grow shrink border rounded-full mb-7  w-full pt-2 pb-2'>Learn more</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</section>

				{/* ----------------------------------------------------Two */}
				<section
					id='two'
					className='relative flex flex-col bg-gradient-to-r from-indigo-400 to-blue-800'
				>
					<div className='pl-8 pr-8 pb-4 pt-11'>
						<h2 className='text-2xl font-bold mb-4'>What we do</h2>
						<p className='mb-8'>
							Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
							turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
							lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
							imperdiet est velit quis lorem.
						</p>
						<div className='flex flex-col flex-wrap border rounded-sm mb-8'>
							<section className='pl-6 pr-6 pt-8 pb-1 border-b '>
								<span className='block mb-5'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-6 h-6'
									>
										<path
											fillRule='evenodd'
											d='M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
								<h3 className='text-1xl font-bold mb-3'>Lorem ipsum amet</h3>
								<p className='mb-8'>
									Phasellus convallis elit id ullam corper amet et pulvinar.
									Duis aliquam turpis mauris, sed ultricies erat dapibus.
								</p>
							</section>
							<section className='pl-6 pr-6 pt-8 pb-1 border-b'>
								<span className='block mb-5'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-6 h-6'
									>
										<path
											fillRule='evenodd'
											d='M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
								<h3 className='text-1xl font-bold mb-3'>Aliquam sed nullam</h3>
								<p className='mb-8'>
									Phasellus convallis elit id ullam corper amet et pulvinar.
									Duis aliquam turpis mauris, sed ultricies erat dapibus.
								</p>
							</section>
							<section className='pl-6 pr-6 pt-8 pb-1 border-b'>
								<span className='block mb-5'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-6 h-6'
									>
										<path
											fillRule='evenodd'
											d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
											clipRule='evenodd'
										/>
										<path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
									</svg>
								</span>
								<h3 className='text-1xl font-bold mb-3'>
									Sed erat ullam corper
								</h3>
								<p className='mb-8'>
									Phasellus convallis elit id ullam corper amet et pulvinar.
									Duis aliquam turpis mauris, sed ultricies erat dapibus.
								</p>
							</section>
							<section className='pl-6 pr-6 pt-8 pb-1 border-b'>
								<span className='block mb-5'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-6 h-6'
									>
										<path
											fillRule='evenodd'
											d='M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
								<h3 className='text-1xl font-bold mb-3'>Veroeros quis lorem</h3>
								<p className='mb-8'>
									Phasellus convallis elit id ullam corper amet et pulvinar.
									Duis aliquam turpis mauris, sed ultricies erat dapibus.
								</p>
							</section>
							<section className='pl-6 pr-6 pt-8 pb-1 border-b'>
								<span className='block mb-5'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-6 h-6'
									>
										<path d='M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z' />
									</svg>
								</span>
								<h3 className='text-1xl font-bold mb-3'>Urna quis bibendum</h3>
								<p className='mb-8'>
									Phasellus convallis elit id ullam corper amet et pulvinar.
									Duis aliquam turpis mauris, sed ultricies erat dapibus.
								</p>
							</section>
							<section className='pl-6 pr-6 pt-8 pb-1 '>
								<span className='block mb-5'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-6 h-6'
									>
										<path d='M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z' />
										<path
											fillRule='evenodd'
											d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
								<h3 className='text-1xl font-bold mb-3'>
									Aliquam urna dapibus
								</h3>
								<p className='mb-8'>
									Phasellus convallis elit id ullam corper amet et pulvinar.
									Duis aliquam turpis mauris, sed ultricies erat dapibus.
								</p>
							</section>
						</div>
						<ul>
							<li>
								<a href='#' className='flex flex-col items-center grow shrink border rounded-full mb-7  w-full pt-2 pb-2'>
									Learn more
								</a>
							</li>
						</ul>
					</div>
				</section>

				{/*------------------------------------------------------------- Three */}
				<section
					id='three'
					className='relative flex flex-col bg-gradient-to-r from-violet-500 to-blue-700 '
				>
					<div className='pl-8 pr-8 pb-4 pt-11'>
						<h2 className='text-2xl font-bold mb-4'>Get in touch</h2>
						<p className='mb-8  text-sm'>
							Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
							turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
							lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
							imperdiet est velit quis lorem.
						</p>
						<div>
							<section>
								<form method='post' action='#' >
									<div  className="flex flex-col mb-8 ">
										<div className="  pb-5">
											<label htmlFor='name' className="block pb-3 ">Name</label>
											<input type='text' name='name' id='name' autoComplete="given-name" className=" block  appearance-none focus:outline-none focus:border-white-500 focus:border-2 border rounded-md pl-4 pr-4  bg-transparent w-full h-10 " />
										</div>
										<div className=" pb-5">
											<label htmlFor='email'className="block pb-3">Email</label>
											<input type='text' name='email' id='email' autoComplete="given-email" className="block focus:outline-none focus:border-white-500 focus:border-2 border rounded-md pl-4 pr-4 appearance-none bg-transparent w-full h-10" />
										</div>
										<div className=" pb-5">
											<label htmlFor='message' className="block mb-3">Message</label>
											<textarea name='message' id='message' rows='5' className="block appearance-none bg-transparent border rounded-md focus:outline-none focus:border-white-500 focus:border-2 pl-4 pr-4 pt-3 pb-3 w-full resize"></textarea>
										</div>
									</div>
									<ul>
										<li>
											<a href='' className='flex flex-col items-center grow shrink border rounded-full mb-7  w-full pt-2 pb-2'>
												Send Message
											</a>
										</li>
									</ul>
								</form>
							</section>
							<section className="pt-12 mt-12 border-t">
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
										<ul className="mb-8">
											<li className="inline-block pr-3">
												<a href='#' className="nf nf-fa-twitter" >
													{/* <span class='label'>Twitter</span> */}
												</a>
											</li>
											<li className="inline-block pr-3">
												<a href='#' className='nf nf-fa-facebook'>
													{/* <span class='label'>Facebook</span> */}
												</a>
											</li>
											<li className="inline-block pr-3">
												<a href='#' className='nf nf-cod-github'>
													{/* <span class='label'>GitHub</span> */}
												</a>
											</li>
											<li className="inline-block pr-3">
												<a href='#' className='nf nf-fa-instagram'>
													{/* <span class='label'>Instagram</span> */}
												</a>
											</li>
											<li className="inline-block pr-3">
												<a href='#' className='nf nf-fa-linkedin'>
													{/* <span class='label'>LinkedIn</span> */}
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</section>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Home
