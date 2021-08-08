const Myapp = () => {

	const [loading, setLoading] = React.useState(false);
	const [mydata, setMydata] = React.useState([]);

	const [itemsPerPage, setItemsPerPage] = React.useState(5);
	const [mycallback, setMyCallback] = React.useState(1);

	React.useEffect(() => {
		retrieveData();
	}, []);

	const retrieveData = () => {
		getAll().then(response => {
			setLoading(true);
			setMydata(response.data);
		})
		.catch(e => console.log(e));
	}
	
	// callback dari child
	const parentCallback = (currentpage) => {
			setMyCallback(currentpage);
	}

	// filter tampil data (di potong - potong)
	const indexOfLastItem = mycallback * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mydata.slice(indexOfFirstItem, indexOfLastItem);


	console.log(`currentItems: ${currentItems}`);

	return (
		<React.Fragment>
			{/*  Main content */}
    <section className="content">

      {/*  Default box */}
      <div className="card card-solid">
        <div className="card-body pb-0">
          <div className="row d-flex align-items-stretch">

     


      		{/* mydata */}
          	<CardData loading={loading} mydata={mydata} />
            
          </div>
        </div>
        {/*  /.card-body */}
        <div className="card-footer">


          <nav aria-label="Contacts Page Navigation">
            <ul className="pagination justify-content-center m-0">

        		<Paginate mydata={mydata} parentCallback={parentCallback} itemsPerPage={itemsPerPage} />
              
            </ul>
          </nav>
        </div>
        {/*  /.card-footer */}
      </div>
      {/*  /.card */}

    </section>
    {/*  /.content */}
		</React.Fragment>
	)
}

const CardData = ({ loading, mydata }) => {
	if (!loading) {
		return (
			<React.Fragment>
				<div className="row">
				<SpinnerSatu />
				<h2>Tunggu... </h2>
				</div>
			</React.Fragment>

		)
	}

	return (
		<React.Fragment>
		{ mydata && mydata.map((value, index) => (
			<React.Fragment>

			
			{/* disini akan dilooping */}
            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch" key={index}>
              <div className="card bg-light">
                <div className="card-header text-muted border-bottom-0">
                  Data Anggota
                </div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>{value.nama}</b></h2>
                      <p className="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee Lover </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building"></i></span> Alamat: {value.alamat}</li>
                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone"></i></span> Phone #: + 800 - 12 12 23 52</li>
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src="../../dist/img/user1-128x128.jpg" alt="user-avatar" className="img-circle img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    <a href="#" className="btn btn-sm bg-teal">
                      <i className="fas fa-comments"></i>
                    </a>
                    <a href="#" className="btn btn-sm btn-primary">
                      <i className="fas fa-user"></i> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
        	{/* end looping */}
        	</React.Fragment>
			)) }
		</React.Fragment>
	)
}