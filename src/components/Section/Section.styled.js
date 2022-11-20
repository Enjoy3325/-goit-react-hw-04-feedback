import styled from 'styled-components';

export const SectionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-image: linear-gradient();
  width: 100vw;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1539035104074-dee66086b5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=2550&q=80');
  background-size: cover;
  transform: translateX(var(--x)) translateY(var(--y)) scale(var(--scale));
  transition: ease-out 0.7s;
`;
export const TitleHead = styled.h1`
  font-size: 900;
  font-weight: 30px;
  line-height: 1.72;
  color: #c98d2a;
`;

// :root {
//   --scale: 1.5
//   --y: 0;
//   overflow: hidden;
// body {
//   margin: 0;
//   background-color: black;
//   outline: none;
//   border: none;
//     #wrapper {
//     width: 100vw;
//     height: 100vh;
//       #image {

//       }
//   }
// }
// }
