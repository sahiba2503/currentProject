import { useState, useEffect } from "react";

// Decode Your Plate

function Decode() {
  const [foodname, setFoodname] = useState("");
  const [foods, setFoods] = useState([]);
  const [error , setError] = useState("");

  // GET API: Fetch existing foods
  useEffect(() => {
    fetch("http://localhost:3000/tasksinf")
      .then((data) => data.json())
      .then((response) => {
        setFoods(response);
      })
      .catch((error) => console.log(error));
  }, []);

  // POST API: Submit food
  function foodDetails(e) {
    e.preventDefault();

   
    if (foodname.trim() === "") {
  setError("Please enter food name");
   return;
}
else if (
  foodname.includes("1") ||
  foodname.includes("2") ||
  foodname.includes("3") ||
  foodname.includes("4") ||
  foodname.includes("5") ||
  foodname.includes("6") ||
  foodname.includes("7") ||
  foodname.includes("8") ||
  foodname.includes("9") ||
  foodname.includes("0")
) {
  setError("Numbers are not allowed");
   return;
}
else if (
  foodname.includes("@") ||
  foodname.includes("#") ||
  foodname.includes("$") ||
  foodname.includes("%") ||
  foodname.includes("!") ||
  foodname.includes("&")
) {
  setError("Special characters are not allowed");
   return;
}
else if (foodname !== foodname.toLowerCase()) {
  setError("Please enter lowercase letters only");
   return;
}
else {
  setError("");
  console.log("Valid food name");
}

    fetch("http://localhost:3000/foodDetail", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        foodName: foodname,
      }),
    })
      .then((data) => {
        if (!data.ok) {
          throw new Error("Food not found");
        }

        return data.json();
      })
      .then((response) => {
        setFoods((previousFoods) => [...previousFoods, response]);

        setFoodname("");
      })
      .catch((error) => {
        console.log("Something went wrong:", error);
      });
  }

  return (
    <div>
      <h2>Decode Your Plate</h2>

      <form onSubmit={foodDetails}>
        <input
          type='text'
          placeholder='Enter your food'
          value={foodname}
          onChange={(e) => setFoodname(e.target.value)}
        />

        <button type='submit'>Add Food</button>
      </form>

      <div>
        <h3>Food Details</h3>

        <ul>
          {foods.map((value) => (
            <li key={value.id}>
              <h4>{value.item}</h4>

              {value.nutrition.map((nutrition, index) => (
                <div key={index}>
                  <p>Calories: {nutrition.calorie}</p>

                  <p>Protein: {nutrition.protein}</p>

                  <p>Fat: {nutrition.fat}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default Decode;
