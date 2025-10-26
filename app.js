
const express = require('express');
const app = express();


app.use(express.static('dist'))

// get the port from env variable
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})




