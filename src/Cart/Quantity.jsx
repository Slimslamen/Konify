// import { useState, useEffect } from "react";


// function Quantity (){
//   const [scores, setScores] = useState(cart.map(() => 1));
//   const [totalPrice, setTotalPrice] = useState(0);

//   const quantityAdd = (idx) => {
//       setScores((prevScores) => {
//         const updatedScores = prevScores.map((score, i) => {
//           if (i === idx) return score + 1;
//           return score;
//         });

//   const quantityRemove = (idx) => {
//     setScores((prevScores) => {
//       const updatedScores = prevScores.map((score, i) => {
//         if (i === idx && score > 0) return score - 1;
//         return score;
//       });
//       updateTotalPrice(updatedScores);
//       return updatedScores;
//     });
//   };

//   const updateTotalPrice = (updatedScores) => {
//     const newTotalPrice = updatedScores.reduce((acc, score, idx) => {
//       const product = cart[idx];
//       return acc + score * product.price;
//     }, 0);
//     setTotalPrice(newTotalPrice);
//   };

//   // Update total price when the component mounts or scores change
//   useEffect(() => {
//     updateTotalPrice(scores);
//   }, [scores]);
// }


