import styled from "styled-components";
import { TiDeleteOutline, TiEdit } from "react-icons/ti";

const colorRandom = {
  0: "linear-gradient(90deg,#149fff,#117aff)",
  1: "linear-gradient(90deg,#ff7614,#ff5411)",
  2: "linear-gradient(90deg,#ffafbd ,#ffc3a0)",
  3: "linear-gradient(90deg,#cc2b5e ,#753a88)",
  4: "linear-gradient(90deg,#ee9ca7 ,#ffdde1)",
  5: "linear-gradient(90deg,#06beb6 ,#fa0087)",
  6: "linear-gradient(90deg,#eb3349 ,#f45c43)",
  7: "linear-gradient(90deg,#56ab2f ,#a8e063)",
  8: "linear-gradient(90deg,#614385 ,#516395)",
};

export const getRandomColor = (e) => {
  // var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // var bgColor = "#" + randomColor;
  var bgColor = colorRandom[Math.floor(Math.random() * 8 + 1)];
  console.log(bgColor);
  return bgColor;
};

export const Table = styled.div`
  min-height: 60vh;
  min-width: 50vw;
  padding: 20px 0;
  background-color: #161a2b;
  border-radius: 10px;
  overflow: auto;

  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const H2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;
`;

export const FormInput = styled.form`
  background: linear-gradient(90deg, #5d0cff, #9b00fa);
  height: 50px;
  width: 80%;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoInput = styled.input`
  flex-basis: 75%;
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 420px;
  background: #333;
  color: #fff;
`;

export const TodoAddBtn = styled.button`
  padding: 16px 8px 16px 8px;
  flex-basis: 16%;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(90deg, #5d0cff, #9b00fa);
  color: #fff;
  text-transform: capitalize;
  text-align: center;
`;

export const TodoLists = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TodoItem = styled.li`
  width: 90%;
  height: 60px;
  padding: 4px 26px;
  background: ${getRandomColor};

  border-radius: 7px;
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentItem = styled.p`
  color: #ffffff;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteIcon = styled(TiDeleteOutline)`
  font-size: 30px;
  fill: #ffffff;
  cursor: pointer;
`;

export const EditIcon = styled(TiEdit)`
  font-size: 30px;
  fill: #ffffff;
  cursor: pointer;
`;
