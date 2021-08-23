const express = require('express');
const app = express()
const PortId = process.env.APPID;

app.get('/', (req, res) => res.send(`The current AppId : ${PortId}`));

app.listen(appId, () => console.log(`Current port being used is:  ${PortId}!`))
