import { useSelector } from "react-redux";
import "./App.css";
import Description from "./components/Description";
import InputSearch from "./components/InputSearch";
import Result from "./components/Result/Result";

function App() {
  const state = useSelector((state) => ({
    itemsResult: state.dataInfo.itemsResult,
  }));
  return (
    <div className="wrapper">
      <InputSearch />
      {state.itemsResult === null ? (
        <div className="result">
          <Description text="Текст должен быть более 3 символов. Задержка 1 секунда" />
        </div>
      ) : (
        <Result itemsResult={state.itemsResult} />
      )}
    </div>
  );
}

export default App;
