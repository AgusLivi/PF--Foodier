const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { cargarPruevas } = require("./src/controllers/controladorPrueva.js")

const port = process.env.PORT || 3001


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    cargarPruevas()
    console.log(`%s listening at ${port} `); // eslint-disable-line no-console
  });
});