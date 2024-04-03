var API = process.env.REACT_APP_API_URL === "." ? `${window.location.origin}` : process.env.REACT_APP_API_URL;
console.log(API)
let default_fetch_options = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};
function error_handle(error) {
  console.error(error);
}

/////////////////////////////////////////////
function fetch_put(url, fetchOptions, callback) {
  fetch_post(url, fetchOptions, callback, 'PUT');
}
function fetch_post(url, fetchOptions, callback, method = 'POST') {

  fetchOptions.method = method;
  fetchOptions.headers = {
    ...default_fetch_options,
    ...fetchOptions.headers
  }
  if (fetchOptions.headers['Content-Type'] === "delete")
    delete fetchOptions.headers['Content-Type'];
  //add cookies before fire
  fetchOptions.credentials = "include";
  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch(error => {
      error_handle(error);
      callback(error);
    });
}

function fetch_get(url, callback) {

  const body = {
    method: "GET",
    headers: {
      ...default_fetch_options,
    },
    credentials: "include",
  }

  fetch(url, body)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch(error => {
      error_handle(error);
      callback({ error: "fetch error" });
    });
}
/////////////////////////////////////////////////
const getAllRaffles = (callback) => {
  fetch_get(`${API}/api/raffles`, callback);
}
const createNewRaffle = (newRaffleData, callback) => {
  const body = { body: JSON.stringify(newRaffleData) };
  fetch_post(`${API}/api/raffles`, body, callback);
}

const getRaffleById = (id, callback) => {

  fetch_get(`${API}/api/raffles/${id}`, callback);

}
/////////////////////////////////////////////////
const exp = {
  getAllRaffles,
  createNewRaffle,
  getRaffleById
};
export default exp;