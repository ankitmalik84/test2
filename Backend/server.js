const express = require("express");
const contactRoute = require("./Routes/contactRoutes");
const brochureRoute = require("./Routes/brochureRoute");
const caseStudyRoute = require("./Routes/casestudyRoute");
require("./model/mongodbConn");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/api/var", contactRoute);
app.use("/api/var", brochureRoute);
app.use("/api/var", caseStudyRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
