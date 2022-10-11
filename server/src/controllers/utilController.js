const formidable = require("formidable");
const fs = require("fs");

const upload = async (req, res) => {
  try {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.send({ message: "failed", err });
        return;
      }
      let fileNames = [];
      Object.keys(files).forEach((item) => {
        let file = files[item];
        let random = Math.floor(Math.random() * 2687632476384320 + 1);
        let split = file.originalFilename.split(".");
        let fileName =
          random + (split.length > 1 ? "." + split[split.length - 1] : "");
        fileNames.push(fileName);
        fs.renameSync(file.filepath, "public/images/" + fileName);
      });
      res.send({ message: "success", res: fileNames });
    });
  } catch (e) {
    res.status(500).send({ message: "failed" });
  }
};

module.exports = { upload };
