const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

const pg = require('pg');
const { Client } = pg
const client = new Client(process.env.DATABASE_URL);
client.connect();

















module.exports = client;