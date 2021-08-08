const MyPaginasi = ({ parentCallback }) => {
  const { useState, useEffect } = React;

  const [data, setData] = useState([]);
  const [loading, setLoading] = React.useState(false);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);


  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          
          className="page-item"
        >
           <button className="page-link" key={number} id={number} onClick={handleClick}>{number}</button>
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {

      retrieveData();

  }, []);

  const retrieveData = () => {
    getAll().then(response => {
      setLoading(true);
      setData(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }


  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className="page-item" onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="page-item" onClick={handlePrevbtn}> &hellip; </li>;
  }

  // kirim ke parant
  parentCallback(currentItems);
  console.log(`currentItems child: ${currentItems}`);

  return (
    <React.Fragment>
        <li className="page-item">
          <button className="page-link"
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            &laquo;
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li className="page-item">
          <button className="page-link"
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            &raquo;
          </button>
        </li>
    </React.Fragment>
  );
}