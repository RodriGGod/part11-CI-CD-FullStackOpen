
const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error('boom');
  res.send('ok');
});

app.get('/version', (_req, res) => {
  res.send('3');           // cambia este número para verificar despliegues
});

app.use(express.static('dist'))

// get the port from env variable
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})




