import React, { useState } from "react";
import styled from "styled-components";
import GymCard from "./cards/GymCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "50e70c89afmsh402222ff69749adp145b61jsn7c1d8b1e2149",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  gap: 20px;
  border: 2px solid white;
  margin: 20px 0px;
  padding: 20px 20px;
  max-width: 50%;
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.primary};
  background: black;
  color: white;
  outline: none;
`;

const Input = styled.input`
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.primary};
  background: black;
  color: white;
  outline: none;
`;

function CreateCard(fdata) {
  return (
    <GymCard
      key={fdata.id}
      gifUrl={fdata.gifUrl}
      bodyPart={fdata.bodyPart.toUpperCase()}
      equipment={
        fdata.equipment.charAt(0).toUpperCase() + fdata.equipment.slice(1)
      }
      instructions={fdata.instructions}
      name={fdata.name.charAt(0).toUpperCase() + fdata.name.slice(1)}
      secondarymus={fdata.secondaryMuscles}
    />
  );
}

const Gym = () => {
  // State to track the data fetched
  const [data, setData] = useState(null);
  // State to track loading state
  const [loading, setLoading] = useState(false);
  const [selectedPart, setSelectedPart] = useState("neck");
  const [exerciseCount, setExerciseCount] = useState("0");

  // Async function to fetch data
  const fetchData = async () => {
    setLoading(true); // Set loading state to true
    try {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedPart}?limit=${exerciseCount}`;
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setData(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  const handleExerciseCountChange = (event) => {
    setExerciseCount(event.target.value);
  };
  const handlePartChange = (event) => {
    setSelectedPart(event.target.value);
  };
  return (
    <Wrapper>
      <Container>
        <label htmlFor="part">Choose Body Part :</label>
        <Select
          name="part"
          id="part"
          value={selectedPart}
          onChange={handlePartChange}
        >
          <option value="neck">neck</option>
          <option value="shoulders">shoulders</option>
          <option value="waist">waist</option>
          <option value="back">back</option>
          <option value="chest">chest</option>
          <option value="lower%20arms">lower arms</option>
          {/* <option value="upper%20arm">upper arm</option> */}
          <option value="lower%20legs">lower legs</option>
          <option value="upper%20legs">upper legs</option>
          <option value="cardio">cardio</option>
        </Select>
      </Container>
      <Container>
        <label htmlFor="exerciseCount">Number of Exercises :</label>
        <Input
          type="number"
          id="exerciseCount"
          name="exerciseCount"
          value={exerciseCount}
          onChange={handleExerciseCountChange}
        />
      </Container>
      <Button onClick={fetchData}>Show exercise</Button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data ? (
            <Cards>{data.map(CreateCard)}</Cards>
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default Gym;
