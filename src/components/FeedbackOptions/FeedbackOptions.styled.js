import styled from '@emotion/styled';

export const BtnList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const Btn = styled.button`
  text-transform: capitalize;
  align-items: center;
  background-image: linear-gradient(144deg, #c6ffdd, #fbd786 50%, #f7797d);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  padding: 16px 24px;
  transition: ease 300ms;
  &:hover {
    scale: 1.1;
  }
`;
