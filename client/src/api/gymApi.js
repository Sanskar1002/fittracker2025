
const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest?limit=10`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "50e70c89afmsh402222ff69749adp145b61jsn7c1d8b1e2149",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

async function fetchData() {
  try {
    // fetching();
    const response = await fetch(url, options);
    const result = await response.json(); // Assuming the response is JSON
    console.log(result);
    return result; // Return the fetched data
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of error
  }
}

export default fetchData;
