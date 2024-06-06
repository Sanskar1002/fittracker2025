import styled from "styled-components";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  border: 1px solid ${({ theme }) => theme.primary};
  text-align: center;
  background: #ffefd0;
  color: black;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const BodyPart = styled.h1`
//   font-size: 1.5rem;
//   padding: 0px;
// `;

const Name = styled.p`
  font-size: 1rem;
  width: 90%;
`;

const Image = styled.img`
  width: 90%;
`;
const CardFoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 250px;
`;

const Equipment = styled.p`
  font-size: 1rem;
  padding: 0px 10px;
`;

// const Note = styled.p`
//   font-size: 1rem;
//   max-width: 100%;
// `;

const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50vw;
  text-align: center;
  background: #ffefd0;
  color: black;
`;
const PopUpCard = styled.div`
  background: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
  // box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.primary};

  border: 2px solid ${({ theme }) => theme.primary};
`;

const Instructions = styled.div`
  background: #1f1f1f;
  max-width: 400px;
  color: white;
  padding: 10px 20px 10px 20px;

  @media (max-width: 700px) {
    width: 200px;
    font-size: 0.7rem;
  }

  li {
    padding: 0px 10px;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: white;
  border-radius: 50% 50%;
`;

const PopHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PopName = styled.p`
  font-size: 1rem;
  width: 90%;
  font-weight: bold;
`;

const PopImage = styled.img`
  width: 70%;
`;

const PopEquipment = styled.p`
  font-size: 1rem;
  padding: 0px 10px;
`;

// function YogaCard(props) {
//   // const secMus = props.secondarymus.map((item) => <span>{item} </span>);
//   return (
//     <Wrapper>
//       <Head>
//         <BodyPart>{props.poseName}</BodyPart>
//         <Equipment>{props.sanskritName}</Equipment>
//       </Head>
//       <Image src={props.imageUrl} />

//       <CardFoot>
//         <Name>{props.poseBenefits}</Name>
//         {/* <Note>SecondaryMuscles:{secMus} </Note> */}
//       </CardFoot>
//     </Wrapper>
//   );
// }

function YogaCard(props) {
  return (
    <Popup
      trigger={
        <Wrapper>
          <Head>
            <Name>{props.poseName}</Name>
            {/* <Equipment>{props.sanskritName}</Equipment> */}
          </Head>
          <Image src={props.imageUrl} />
          <CardFoot>
            <Equipment>{props.sanskritName}</Equipment>
          </CardFoot>
        </Wrapper>
      }
      modal
      nested
    >
      {(close) => (
        <PopUpCard>
          <Button onClick={() => close()}>X</Button>
          <PopUpWrapper>
            <PopHead>
              <PopName>{props.poseName}</PopName>
            </PopHead>
            <PopImage src={props.imageUrl} />

            <CardFoot>
              <PopEquipment>{props.sanskritName}</PopEquipment>
            </CardFoot>
          </PopUpWrapper>
          <Instructions>{props.poseBenefits}</Instructions>
        </PopUpCard>
      )}
    </Popup>
  );
}
export default YogaCard;
