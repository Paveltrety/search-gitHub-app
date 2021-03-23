export const ADD_INFO_PROJECTS = "ADD_INFO_PROJECTS";
export const IS_NOTHING_FOUND = "IS_NOTHING_FOUND";

export const addInfoProjects = (infoProjects) => ({
  type: ADD_INFO_PROJECTS,
  payload: infoProjects,
});

export const isNothingFound = (isValue) => ({
  type: IS_NOTHING_FOUND,
  payload: isValue,
});
