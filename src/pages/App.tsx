import React from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";

function App() {
  const datas = useTypedSelector(
    ({ firstReducuer: { order, data, error, loading } }) => data
  );

  console.log(datas);

  return <div className="bg-blue-300">App</div>;
}

export default App;
