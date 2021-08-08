const FullSpinner = () => {
	return (
		<React.Fragment>
		<div className="dd-wrapper">
		<div className="dd-center-content">
			<h1 className="dd-title">Loading Spinners In CSS</h1>
			<div className="dd-elements">
				<div className="box">
					<div className="card">
						<div className="spinner dot"></div>
					</div>
					<div className="card">
						<div className="spinner line"><span></span></div>
					</div>
					<div className="card">
						<div className="spinner line two"><span></span></div>
					</div>
					<div className="card">
						<div className="spinner line three"><span></span></div>
					</div>
				</div>
				<div className="box">
					<div className="card"><div className="spinner moon"></div></div>
					<div className="card"><div className="spinner moon two"></div></div>
					<div className="card"><div className="spinner moon three"></div></div>
					<div className="card"><div className="spinner filled half"></div></div>
					<div className="card">
						<div className="spinner filled fourth">
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
				<div className="box">
					<div className="card">
						<div className="loader solid square rotate"></div>
					</div>
					<div className="card">
						<div className="loader solid circle rotate"></div>
					</div>
					<div className="card">
						<div className="loader solid square fade"></div>
					</div>
					<div className="card">
						<div className="loader solid circle fade"></div>
					</div>
				</div>
				<div className="box">
					<div className="card">
						<div className="loader circle-full blink-half"></div>
					</div>
					<div className="card">
						<div className="loader circle-full blink"></div>
					</div>
					<div className="card">
						<div className="loader circle-full zoomIO-half"></div>
					</div>
					<div className="card">
						<div className="loader circle-full zoomIO"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
		</React.Fragment>
	)
}