import "./App.css";
// import Board from "./components/Board/Board";
import NormalButton from "./components/StyleButton/NormalButton";
import StyledComponentsButton from "./components/StyleButton/StyledComponentsButton";
import EmotionButton from "./components/StyleButton/EmotionButton";
// import Todo from "./pages/Todo";

function App() {
  return (
    <>
      {/* <Board /> */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <NormalButton />
        <StyledComponentsButton />
        <EmotionButton />
      </div>
    </>
  );
}

export default App;


