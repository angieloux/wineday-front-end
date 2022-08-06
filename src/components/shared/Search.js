// import React, { useState } from "react";

// const Search = () => {
//   const [errorMessage, setErrorMessage] = useState("");

//   function handleChange(event) {
//     setFormValues({
//       ...formValues,
//       [event.target.name]: event.target.value,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     logInUser(formValues)
//       .then((response) => {
//         globalDispatch({ type: "setLoggedInUser", data: response.username });
//         globalDispatch({ type: "setJWT", data: response.jwt });
//         navigate("/");
//       })
//       .catch((error) => {
//         const message = parseError(error);
//         setErrorMessage(message);
//         console.log(message);
//       });
//   }
//   return (
//     <>
//       <form id="search-form" onSubmit={handleSubmit}>
//         <input type="text" placeholder="search..."></input>
//       </form>
//     </>
//   );
// };

// // export default Search;
