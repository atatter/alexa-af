const express = require('express');
const app = express();
app.use((_, res) => res.send('up and running'));
app.listen(8080, () => { console.log('Server runnin on port 8080') });