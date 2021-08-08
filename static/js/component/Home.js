const Home = () => {
	const handleClick = () => {
		console.log('handle click di home');
	}
	console.log('dua dua nya bagus');
	return (
		<React.Fragment>
			<div className="row">
				<div className="col-12">
					<h2>ini adalah halaman home tiga</h2>
					<LoadMore />
					<TombolSatu handleClick={handleClick} />
				</div>
			</div>
		</React.Fragment>
	)
}