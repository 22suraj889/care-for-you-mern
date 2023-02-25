const Ward = require("../models/wardModel");

const postData = async (req, res) => {
  const { cleanPoints, patientNumber, wardName, wardNumber, workerNumber } =
    req.body;
  console.log(req.body);
  try {
    let existingWard = await Ward.findOne({ wardName });
    if (existingWard) {
      console.log("Ward already exists");
      return res.status(404).json({ message: "Ward already exists" });
    }

    const newWard = await Ward.create({
      cleanPoints,
      patientNumber,
      wardName,
      wardNumber,
      workerNumber,
    });

    console.log(newWard);
    res.status(200).json({ message: "Ward created" });
  } catch (e) {
    console.log(e);
  }
};

const getData = async (req, res) => {
  try {
    const wardData = await Ward.find();
    res.status(200).json(wardData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postData, getData };
