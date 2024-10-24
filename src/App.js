import "./App.css";
import Modal from "./components/Modal/Modal";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card
        title="Lorem ipsum"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
        buttonLabel="Open Modal Window"
        openModal={() => {}}
      />
    </div>
  );
}

export default App;
