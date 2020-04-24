import { SET_DATA, API, FETCH_DATA } from "./types";

export function fetchData() {
  return apiAction({
    url: "http://testapi.xyz",
    onSuccess: setData,
    onFailure: () => console.log("Error occured loading data"),
    label: FETCH_DATA
  });
}

function setData(data) {
  return {
    type: SET_DATA,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
