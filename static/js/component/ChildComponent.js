const ChildComponent = ({ parentCallback }) => {
	const [nilai, setNilai] = React.useState(0);

	parentCallback(3);

	const handleEvent = () => {
		const angka = nilai + 1;
		setNilai(angka);
	}
	
	return (
		<button onClick={handleEvent}>Klik</button>
	)
}