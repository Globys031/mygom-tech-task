import "./App.css";
import Modal from "./components/Modal";
import Card from "./components/Card";
import { useState, useRef } from "react";
import { useOutsideClick } from "./hooks/useOutsideClick";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close Modal after clicking outside of it
  useOutsideClick(modalRef, closeModal);

  const title = "Lorem ipsum";
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";

  return (
    <div className="h-screen flex justify-center items-center">
      <Card
        title={title}
        paragraph={content}
        buttonLabel="Open Modal Window"
        buttonAction={openModal}
      />
      {isModalOpen && (
        <Modal
          ref={modalRef}
          title={title}
          description={content}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
