const ListData = ({loading, mydata}) => {
	if (!loading) {
		return (
			<React.Fragment>
				<SpinnerSatu />
			</React.Fragment>
		)
	}

	console.log(mydata);

	return (
		<React.Fragment>
			<h2>tampil data</h2>

		</React.Fragment>
	)
}