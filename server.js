const http = require("http");
const handler = require("serve-handler");

const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: ".",
    cleanUrls: true,
  });
});

server.listen(port, () => {
  console.log("Birthday site running on port " + port);
});
