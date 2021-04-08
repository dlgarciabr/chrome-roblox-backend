const http = require('http');
const url = require('url');
const axios = require('axios');

const requestListener =  (req, res) => {
    
    const currentUserId = url.parse(req.url).query.split("=")[1];
    const userStatusUrl = `https://api.roblox.com/users/${currentUserId}/onlinestatus/`;

      axios.get(userStatusUrl)
      .then(function (response) {
        // handle success
        res.writeHead(200);
        res.end(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        res.writeHead(200);
      });
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT);