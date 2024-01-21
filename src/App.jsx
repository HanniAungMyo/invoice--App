import React, { useState } from "react";
import Header from "./components/Header";
import CheckoutForm from "./components/CheckoutForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/footer";
import Drawer from "./components/Drawer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.5 },
    { id: 2, name: "Banana", price: 0.79 },
    { id: 3, name: "Orange", price: 2.49 },
    { id: 4, name: "Grapes", price: 3.99 },
    // Add more fruits as needed
  ]);
  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };
  const [records, setRecord] = useState([]);
  const addRecord = (newRecord) => setRecord([...records, newRecord]);
  const removeRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };
  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm addRecord={addRecord} products={products} />
      <RecordTable removeRecord={removeRecord} records={records} />
      <Footer handleOpen={handleOpen} />
      <Drawer
        addProduct={addProduct}
        products={products}
        handleOpen={handleOpen}
        isOpen={isOpen}
      />
    </div>
  );
};

export default App;
