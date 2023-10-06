// import { createClient } from 'redis';
const { createClient } = require("redis");
const client = createClient({ url: "redis://127.0.0.1:6379" });

client
  .connect()
  .then(async (res) => console.log(await res.dbSize()))
  .catch((err) => console.log(err));

exports.client;
