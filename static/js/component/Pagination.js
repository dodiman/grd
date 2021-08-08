const Pagination = ({ handleOnClick, handleDisable }) => {
	return (
		<React.Fragment>

			<div classNameName="row">
				<div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Simple Full Width Table</h3>
                

                <div className="card-tools">
                  <ul className="pagination pagination-sm float-right">
                    <li className="page-item"><button className="page-link onClick={handleOnClick} disabled={handleDisable}">&laquo;</button></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="card-body p-0">
                
              </div>
             
            </div>
            

            
          </div>
			</div>
		</React.Fragment>
	)
}