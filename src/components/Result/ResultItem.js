import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";

function ResultItem(props) {
  const { name, stargazers_count, watchers_count, className, url } = props;
  //Если имя слишком длинное, то укорачиваем его, ибо портится вид
  let newName = name.length > 50 ? `${name.substr(0, 50)}...` : name;

  return (
    <div className={`result__item-${className}`}>
      <div className="result__item-name">
        <a
          className="result__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {newName}
        </a>
      </div>
      <div className="result__item__counts">
        <div className="result__item-stargazers">
          <FontAwesomeIcon icon={faStar} /> {stargazers_count}
        </div>
        <div className="result__item-watchers">
          <FontAwesomeIcon icon={faEye} /> {watchers_count}
        </div>
      </div>
    </div>
  );
}

export default ResultItem;
