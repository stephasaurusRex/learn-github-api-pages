import React from "react";
import styled from "styled-components";

const CardTitle = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.3rem;
`;

const Card = ({ className, children, title }) =>
  <div className={className}>
    <CardTitle>{title}</CardTitle>
    {children}
  </div>;

const StyledCard = styled(Card) `
  position: relative;
  border: #000 1px solid;
  cursor: grab;
  background: #fff;
  color: #333;
  font-size: 0.8rem;
  padding: 1rem;
  border-radius: 3px;
  opacity: 1;
  overflow: hidden;
  display: grid;
  min-height: 60px;
  box-shadow: ${(props) => (props.isDragging
    ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    : "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)")};
`;

const CardList = styled.div`
  & > div {
    padding: 5px 0;
  }
  padding: 0 20px;
  max-width: 400px;
  margin: auto;
  transition: all 0.2s ease-in;
`;

CardList.Card = StyledCard;

export default CardList;
