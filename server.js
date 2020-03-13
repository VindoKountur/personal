const express = require('express');

const app = express();

const provinsi = require('./router/provinsi')

app.use("/api/provinsi", provinsi);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Start at PORT ${PORT}`));