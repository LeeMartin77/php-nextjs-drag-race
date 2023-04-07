const fs = require("node:fs");
const data = fs.readFileSync("./mockdata.json");
const mockData = JSON.parse(data.toString());

fs.writeFileSync("./mockdata_200.json", JSON.stringify(mockData.slice(0, 200), undefined, 2))