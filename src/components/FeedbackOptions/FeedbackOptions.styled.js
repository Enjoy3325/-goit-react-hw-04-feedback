import styled from 'styled-components';

export const BoxButton = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;
export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  background: none;
  width: 150px;
  border: 3px solid #ffe425;
  border-radius: 20px;
  line-height: 1.62;
  transition: 0.35s;
  margin: 15px auto;
  padding: 15px 55px;
  color: #456071;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 0 0.8em 0.8em -0.6em #00e3ff;
    transform: translateY(-0.35em);
    border: 3px solid #00e3ff;
    color: #ff4157;
  }
`;
export const ListButton = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ItemButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
`;
export const TextButton = styled.p`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.62;
  text-align: center;
`;
