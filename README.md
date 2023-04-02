# wolframalpha_api
Call to Wolfram Alpha Math Show Steps API: shows steps to solve a math problem

##To Make calls to Wolfram Show Steps:
- Install certificate in this same folder

- Get your WolframAlpha API key - currently free avaialble - by creating [your developer account](https://account.wolfram.com/login/create)

- Install node.js and run nodejs server:
G:>node app.js
Server running at https://localhost:8000/

- Create private_data.js file in this same folder:
const mydata = 
  {
    appid:"YOUR_API_KEY",
  };
module.exports = { mydata };

- on browser open webapp https://localhost:8000/ will call public/index.html
