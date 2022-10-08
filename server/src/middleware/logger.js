const fs = require("fs");

const logger = (req, res, next) => {
  if (!fs.existsSync("logs/log.txt")) {
    fs.mkdirSync("logs");
    fs.writeFileSync("logs/log.txt", "");
  }

  let dateTime = new Date().toLocaleString();
  let browser = req.headers["sec-ch-ua"];
  let platform = req.headers["sec-ch-ua-platform"];
  let method = req.method;
  let route = req.headers["origin"];
  let url = req.url;

  const data = `TIMESTAMP: ${dateTime}\nURL: ${url}\nBROWSER: ${browser}\nPLATFORM: ${platform}\nROUTE: ${route}\nMETHOD: ${method}`;
  const file = fs.readFileSync("logs/log.txt", "utf8");

  if (file.length > 0) {
    fs.appendFileSync("logs/log.txt", `\n\n\n${data}`);
  } else {
    fs.writeFileSync("logs/log.txt", data);
  }

  next();
};

module.exports = logger;
