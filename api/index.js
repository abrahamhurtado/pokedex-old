const BASE_URL = "https://pokeapi.co/api/v2";

export const GET = (uri = "") =>
  fetch(`${BASE_URL}/${uri}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
