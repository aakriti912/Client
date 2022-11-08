// import React from "react";
// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// // const Rating = ({ value, text, color }) => {
// //   return (
// //     <div className="rating">
// //       <span>
// //         <i
// //           style={{ color }}
// //           className={
// //             value >= 1
// //               ? "fas fa-star"
// //               : value >= 0.5
// //               ? "fas fa-star-half-alt"
// //               : "far fa-star"
// //           }
// //         ></i>
// //       </span>
// //       <span>
// //         <i
// //           style={{ color }}
// //           className={
// //             value >= 2
// //               ? "fas fa-star"
// //               : value >= 1.5
// //               ? "fas fa-star-half-alt"
// //               : "far fa-star"
// //           }
// //         ></i>
// //       </span>
// //       <span>
// //         <i
// //           style={{ color }}
// //           className={
// //             value >= 3
// //               ? "fas fa-star"
// //               : value >= 2.5
// //               ? "fas fa-star-half-alt"
// //               : "far fa-star"
// //           }
// //         ></i>
// //       </span>
// //       <span>
// //         <i
// //           style={{ color }}
// //           className={
// //             value >= 4
// //               ? "fas fa-star"
// //               : value >= 3.5
// //               ? "fas fa-star-half-alt"
// //               : "far fa-star"
// //           }
// //         ></i>
// //       </span>
// //       <span>
// //         <i
// //           style={{ color }}
// //           className={
// //             value >= 5
// //               ? "fas fa-star"
// //               : value >= 4.5
// //               ? "fas fa-star-half-alt"
// //               : "far fa-star"
// //           }
// //         ></i>
// //       </span>
// //       <span>{text && text}</span>
// //     </div>
// //   );
// // };

// // Rating.defaultProps = {
// //   color: "#f8e825",
// // };

// // Rating.propTypes = {
// //   value: PropTypes.number.isRequired,
// //   text: PropTypes.string.isRequired,
// //   color: PropTypes.string,
// // };

// // export default Rating;

// function rating() {
//    const [ratingValue, setRatingValue] = React.useState(0);

//   return (
//     <div style={{ display: 'block', padding: 30 }}>
//       <h4>How to use Rating Component in ReactJS?</h4>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">
//             Please Rate our app
//         </Typography>
//         <Rating
//           name="Rating Label"
//           value={ratingValue}
//           onChange={(event, newValue) => {
//             setRatingValue(newValue);
//           }}
//         />
//       </Box>
//     </div>
//   );
// }
// }
// export default rating;
