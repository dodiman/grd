const Paginate = ({ mydata, parentCallback, itemsPerPage }) => {
	const { useState } = React;

	const [currentPage, setcurrentPage] = useState(1);
	// const [itemsPerPage, setitemsPerPage] = useState(5);

	const [pageNumberLimit, setpageNumberLimit] = useState(5);
	const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
	const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

	const pages = [];
	  for (let i = 1; i <= Math.ceil(mydata.length / itemsPerPage); i++) {
	    pages.push(i);
	  }

	const handleClick = (event) => {
		setcurrentPage(Number(event.target.id));
		parentCallback(Number(event.target.id), Number(itemsPerPage));
	}

	// limit number paginasi
	const renderPageNumber = pages.map((value, index) => {
		if (value < (currentPage + 4) && value > (currentPage - 4)) {

			return (
				<React.Fragment>
					<li key={index} className={"page-item " + ( currentPage == Number(value)? "active" : null)}>
						<button id={value} onClick={handleClick} className="page-link">{value}</button>
					</li>
				</React.Fragment>
			);
		}
		else {
			return null;
		}

	});

	console.log(`itemsPerPage: ${itemsPerPage}`);
	console.log(currentPage == Number(3));
	return (
		<React.Fragment>
			{ renderPageNumber }
		</React.Fragment>
	)
}