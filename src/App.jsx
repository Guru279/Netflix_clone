
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase"; // or "../firebase" based on location

const db = getDatabase(app);

function App() {
  const putData = async () => {
    try {
      await set(ref(db, "user/Guru"), {
        id: 1,
        name: "Gurunath Mhatugade",
        age: 25,
        city:"kolhapur"
      });
      console.log("✅ Data added");
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  return (
    <>
      <h1>Hello Guru!</h1>
      <button onClick={putData}>Put the data</button>
    </>
  );
}

export default App;
