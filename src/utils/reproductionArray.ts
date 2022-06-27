import { GameArrayType } from "../Pages/CasePage";

const reproductionArray= (array: GameArrayType[]  = [], length = 0) => [
    ...Array(length)
      .fill('_')
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];
  
  export default reproductionArray
  