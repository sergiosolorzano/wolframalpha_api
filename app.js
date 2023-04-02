const express = require('express');
const https = require('https');
const fs = require('fs');
let fetch;
const mydata = require('./private_data').mydata; // import private data

async function startServer() {
  const app = express();
  app.use(express.static('public'));

  console.log('key:', mydata.appid);

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/query', async (req, res) => {
    if (!fetch) {
      fetch = (await import('node-fetch')).default;
    }

    const query = req.query.query;
    const url = `https://api.wolframalpha.com/v2/query?input=${encodeURIComponent(query)}&format=plaintext&podstate=Result__Step-by-step+solution&output=json&appid=${mydata.appid}`;
    console.log('Sending request:', url); // Debugging statement
    const response = await fetch(url);
    const json = await response.json();
    const pods = json.queryresult.pods;
    let answer = '';
    for (let i = 0; i < pods.length; i++) {
      const pod = pods[i];
      //console.log('pod:', pod); // Debugging statement
      if (pod.primary === true) {
        const subpods = pod.subpods;
        for (let j = 0; j < subpods.length; j++) {
          const subpod = subpods[j];
          if (subpod.title === 'Possible intermediate steps') {
            answer += subpod.plaintext;
            break;
          }
        }
        break;
      }
    }
    console.log('Answer:', answer); // Debugging statement
    res.send(answer);
  });

  https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app).listen(8000, () => {
    console.log('Server listening on https://localhost:8000');
  });
}

startServer();
