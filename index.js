require("dotenv").config();
const express = require("express");
const port = process.env.DEV_PORT || 3000;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hit /bfhl endpoint with a post request</h1>");
});

let odd=[];
let even=[];
let alpha=[];

app.post("/bfhl", (req, res) => {
  const array = req.body.data;
  array.forEach((item) => {
    let num = parseInt(item);
    if (num) {
      if(num%2==0)
        even.push(num);
      else
        odd.push(num);
    }
    else alpha.push(item.toUpperCase());
  });
  const responseObj = {
    is_success: true,
    user_id: "akshu_thakur",
    email: "akshit1293.be20@chitkarauniversity.edu.in",
    roll_number: 2011981293,
    odd_numbers: odd,
    even_numbers:even,
    alphabets: alpha,
  };
  res.json(responseObj);
});

app.listen(port, (err) => {
  const starterText = err
    ? `Error in starting server`
    : `Server started at port http://localhost:${port}/`;
  console.log(starterText);
});