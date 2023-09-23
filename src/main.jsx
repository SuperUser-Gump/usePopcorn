import React from "react";
import ReactDOM from "react-dom/client";
import StarRatings from "./StarRatings.jsx";
// import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StarRatings
      maxRating={"5"}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRatings size={24} color="red" defaultRating={3} />
    {/*<App />*/}
  </React.StrictMode>
);
