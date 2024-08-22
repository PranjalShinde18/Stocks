const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

// Connect Database

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
