const Loading = () => {
	const gradient = { background: 'linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%' };
	return (
		<ul>
			{Array.from(Array(10).keys()).map((i) => (
				<li key={i} className='flex items-center justify-between'>
					<div className='flex w-fit gap-4 p-4 pl-0'>
						<div style={gradient} className='h-[72px] w-[72px] rounded-full' />
						<div className='gap- flex flex-col justify-center'>
							<div style={gradient} className='mb-[6px] h-[15px] w-[144px] rounded-full'></div>
							<div style={gradient} className='h-[12px] w-[80px] rounded-full'></div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Loading;
