import Title from "./components/Title";
import UserList from "./components/UserList";
import Container from "./UI/Container";
import Map from "./UI/Map";
import "./App.css"

function App() {
  return (
    <Container className="App">
      <Title title="Hello World" text="Always ready to meet with you." />
      <Map />
      <UserList />
    </Container>
  );
}

export default App;
