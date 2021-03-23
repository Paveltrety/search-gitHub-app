import { addInfoProjects } from "./dataInfoAction";

export const loadInfoProjects = (inputText) => (dispath) => {
  fetch(`https://api.github.com/search/repositories?q=${inputText}`)
    .then((response) => response.json())
    .then(({ items }) => dispath(addInfoProjects(items)));
};
