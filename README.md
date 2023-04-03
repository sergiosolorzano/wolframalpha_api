# wolframalpha_api
Call to Wolfram Alpha Math Show Steps API: shows step by step the solution to a math problem

## To Make calls to Wolfram Show Steps:
- Create in this same folder your self-signed SSL certificate for localhost

- Get your WolframAlpha API key - currently free avaialble - by creating [your developer account](https://account.wolfram.com/login/create)

- Create private_data.js file in this same folder with this code, create a wolfram alpha webapp API key and enter it here:

   const mydata = 
  {
    appid:"YOUR_API_KEY",
  };
module.exports = { mydata };

- Install node.js and run nodejs server:
G:>node app.js
Server running at https://localhost:8000/

- on browser open webapp https://localhost:8000/ will call public/index.html

## Entering your query in your webapp:
See [Examples](https://www.wolframalpha.com/examples/mathematics) what to enter in your query.
- Example to solve matrices treat them as an array: 
<img width="215" alt="image" src="https://user-images.githubusercontent.com/24430655/229432136-095696d0-b7f9-4219-9af7-1bffc86b7f07.png">
solve {{.4,.3,.25},{.1,.4,.25},{.5,.3,.5}}.{{100},{200},{700}}
<img width="346" alt="image" src="https://user-images.githubusercontent.com/24430655/229371905-89371b57-bb5c-42da-8c0b-884a361fedab.png">
