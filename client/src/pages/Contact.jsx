import ContactForm from "../components/ContactForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // width: 50vw;
  // border: 2px solid black;
`;

const Heading = styled.h1`
  text-align: center;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
`;
const Para = styled.p`
  color: #0000004f;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

const Form = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3%;
  gap: 3%;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Form>
        <Heading>Contact us</Heading>
        <Para>or give us a feedback</Para>
        <ContactForm></ContactForm>
      </Form>
    </Wrapper>
  );
};

export default Contact;
