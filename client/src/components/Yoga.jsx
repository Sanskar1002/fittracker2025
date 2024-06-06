import React, { useState } from "react";
import styled from "styled-components";
import YogaCard from "./cards/YogaCard";

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
  background: black;
  color: white;
`;

const Select = styled.select`
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.primary};
  background: black;
  color: white;
  outline: none;
`;

// const Input = styled.input`
//   padding: 5px;
//   border: 2px solid ${({ theme }) => theme.primary};
//   background: black;
//   color: white;
//   outline: none;
// `;

function CreateCard(pose) {
  return (
    <YogaCard
      key={pose.id}
      poseName={pose.english_name}
      sanskritName={pose.sanskrit_name_adapted}
      poseBenefits={pose.pose_benefits}
      imageUrl={pose.url_svg}
    />
  );
}

const YogaPoses = () => {
  // State to track the yoga poses data fetched
  const [poses, setPoses] = useState(null);
  // State to track loading state
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState("Chest Opening Yoga");

  // Async function to fetch yoga poses data
  const fetchData = async () => {
    setLoading(true); // Set loading state to true
    try {
      const apiUrl = `https://yoga-api-nzy4.onrender.com/v1/categories?name=${selectedCategory}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setPoses(data.poses); // Update state with fetched yoga poses data
    } catch (error) {
      console.error("Error fetching data:", error);
      setPoses([]); // Update state with an empty array in case of an error
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Wrapper>
      <Container>
        <label htmlFor="category">Choose Yoga Category:</label>
        <Select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="Chest Opening Yoga">Chest Opening Yoga</option>
          <option value="Core Yoga">Core Yoga</option>
          <option value="Seated Yoga">Seated Yoga</option>
          <option value="Strengthening Yoga">Strengthening Yoga</option>
          <option value="Backbend Yoga">Backbend Yoga</option>
          <option value="Forward Bend Yoga">Forward Bend Yoga</option>
          <option value="Hip Opening Yoga">Hip Opening Yoga</option>
          <option value="Standing Yoga">Standing Yoga</option>
          <option value="Restorative Yoga">Restorative Yoga</option>
          <option value="Arm Balance Yoga">Arm Balance Yoga</option>
          <option value="Balancing Yoga">Balancing Yoga</option>
          <option value="Inversion Yoga">Inversion Yoga</option>
        </Select>
      </Container>
      <Button onClick={fetchData}>Fetch Yoga Poses</Button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {poses ? (
            <Cards>{poses.map(CreateCard)}</Cards>
          ) : (
            <p>No yoga poses available</p>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default YogaPoses;
