const Paginasi = ({ parentCallback }) => {
	let history = useHistory();
	const [posts, setPost] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [postPerPage] = React.useState(5);

	React.useEffect(() => {
		retrieveData();

	}, []);

	// set nilai untuk parent

	// get current post
	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	// change page
	const paginate = pageNumbers => setCurrentPage(pageNumbers);

	const retrieveData = () => {
		getAll().then(response => {
			setLoading(true);
			setPost(response.data);
			console.log(response.data);
		})
		.catch(error => {
			console.log(error);
		});
	}

	console.log(currentPage);

	return (
		<React.Fragment>
			<div className="row">
				<div className="col-12">
					<h2>ini adalah halaman paginasi</h2>
					
					{ loading ? (
						<React.Fragment>
						<h2>okelah</h2>
						<SubPaginasi postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} indexOfLastPost={indexOfLastPost} />
						</React.Fragment>
						) : (

					<SpinnerSatu />
						) }
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<ListData loading={loading} mydata={posts} />
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<h2>ini paginasi dari internet</h2>
					<PaginationComponent />
				</div>
			</div>

		</React.Fragment>
	)
}

const SubPaginasi = ({postsPerPage, totalPosts, paginate, indexOfLastPost}) => {
	
	// set limit paginasi


	const pageNumbers = [];
	let nomornya = 0;

	if (indexOfLastPost > totalPosts) {
		nomornya = totalPosts;
	} 
	else {
		nomornya = indexOfLastPost;
	}

	const baru = Math.ceil(totalPosts / postsPerPage);
	for (let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	

	return (
		<React.Fragment>
			<h2>Muncul Paginasi</h2>

			<h4>{nomornya} dari {totalPosts} Data</h4>
			{pageNumbers.map((value) => (
				<span key={value}>
					<button onClick={() => paginate(value)} >
					{value}
					</button>
				</span>
			))}
		</React.Fragment>
	)
};