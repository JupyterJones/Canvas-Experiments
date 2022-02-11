import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
localStorage.setItem("the item you want to add", "the info in the item");
function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}
console.log("AllStorage", allStorage());

const Container = styled.div`
  overflow: hidden;
  display: flex;
  border: 3px solid white;
  background-color: blue;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Container>
      </header>
    </div>
  );
}

export default App;
