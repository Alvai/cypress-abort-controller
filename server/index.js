const http = require("http");

const host = 'localhost';
const port = 8000;

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const requestListener = async (req, res) => {
  await sleep(10000);
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});