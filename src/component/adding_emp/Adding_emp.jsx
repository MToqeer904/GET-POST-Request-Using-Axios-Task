import React, { useState, useEffect } from "react";
import axios from "axios";

const Postingemp = () => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!isAdded) {
      axios
        .post("https://641b1f8e1f5d999a445bf904.mockapi.io/Employee", {
          name: "Muhammad Boston",
          salary: "1234",
          department: "reactjs",
        })
        .then(function (response) {
          console.log(response);
          if (response.status === 201) {
            setIsAdded(true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [isAdded]);

  return <div>{isAdded ? "Successfully added" : "Adding employee..."}</div>;
};

export default Postingemp;
