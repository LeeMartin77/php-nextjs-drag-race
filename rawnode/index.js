const http = require('http');
const fs = require('node:fs')

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("./mockdata_200.json");
  const mockData = JSON.parse(data.toString());
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<!DOCTYPE html><html><body><div>${mockData.reduce((acc, md) => {
    return acc + `<div>
          <h1>${md.dob}</h1>
          <h2>${md.salary}</h2>
          <p>${md.description}</p>
          <ul>
            <li>${md.address.street}</li>
            <li>${md.address.town}</li>
            <li>${md.address.postode}</li>
          </ul>
          <button>${md.verified ? "Yes" : "No"}</button>
        </div>`
  }, "")}</div></body></html>`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});