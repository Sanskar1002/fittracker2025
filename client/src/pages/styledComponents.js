import styled from "styled-components";

const RotatingText = styled.div`
  font-family: sans-serif;
  font-weight: 600;
  font-size: 36px;
  color: white;
  transform: translateX(-80px);
`;

const RotatingTextParagraph = styled.p`
  display: inline-flex;
  margin: 0;
  vertical-align: top;
`;

const Word = styled.span`
  position: absolute;
  display: flex;
  opacity: 0;
`;

const Letter = styled.span`
  transform-origin: center center 25px;
`;

const OutLetter = styled(Letter)`
  transform: rotateX(90deg);
  transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
`;

const InLetter = styled(Letter)`
  transition: 0.38s ease;
`;

const BehindLetter = styled(Letter)`
  transform: rotateX(-90deg);
`;

const StyledWord = styled(Word)`
  color: ${(props) => props.color};
`;

export const StyledComponents = {
  RotatingText,
  RotatingTextParagraph,
  Word,
  Letter,
  OutLetter,
  InLetter,
  BehindLetter,
  StyledWord,
};
