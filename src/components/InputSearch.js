import React from "react";
import { useDispatch } from "react-redux";
import { loadInfoProjects } from "../redux/API service";

function InputSearch() {
  const dispatch = useDispatch();
  function useDebouncedFunction(delay) {
    let timeoutId;

    return (valueText) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => dispatch(loadInfoProjects(valueText)),
        delay
      );
    };
  }
  const debouncedValueLogging = useDebouncedFunction(1000);

  let changeText = (e) => {
    if (e.target.value.length > 3) debouncedValueLogging(e.target.value);
  };
  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Поиск"
        type="search"
        onChange={changeText}
      />
    </div>
  );
}

export default InputSearch;
