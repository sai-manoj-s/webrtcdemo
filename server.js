const express = require('express');

const app = express();
var port_number = server.listen(process.env.PORT || 3000);

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder from the client-side
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port_number, () => {
  console.info('listening on %d', port);
});