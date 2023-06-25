import Container from "./components/Container/Container";
import Cards from "./components/Cards/Cards";
import Title from "./components/Title/Title";

function App() {
	return (
		<>
			<Container>
				<Title className="centered">Anne's Pokemon Cards</Title>
				<Cards />
			</Container>
		</>
	);
}

export default App;
