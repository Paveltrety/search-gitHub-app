import React from "react";
import Description from "../Description";
import ResultItem from "./ResultItem";

function Result({ itemsResult }) {
  return (
    <div className="result">
      {!itemsResult.length ? (
        <Description text="Ничего не найдено. Попробуйте еще раз!" />
      ) : (
        itemsResult.map((item, index) => {
          return (
            <ResultItem
              name={item.name}
              key={item.id}
              stargazers_count={item.stargazers_count}
              watchers_count={item.watchers_count}
              url={item.html_url}
              className={index % 2 ? "grey" : "white"}
            />
          );
        })
      )}
    </div>
  );
}

export default Result;
