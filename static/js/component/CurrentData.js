const CurrentData = ({mydata}) => {
  
  return (
    <React.Fragment>
    <ul>
      {mydata && mydata.map((todo, index) => {
        return <li key={index}>{todo.nama}, {todo.alamat}</li>;
      })}
    </ul>
    </React.Fragment>
  );
};