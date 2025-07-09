const express = require("express");
const cors = require("cors");
const app = express();
const areaRoutes = require("./routes/area.routes");

const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: corsOrigin }));

app.use(express.json());

app.use("/areas", areaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
