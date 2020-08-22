const rethinkDB = require('rethinkdbdash');
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const rtDB = rethinkDB({
  port: 28015,
  host: 'localhost',
  db: 'SitePoint',
});

rtDB
  .tableCreate('Employee')
  .run()
  .then(function (response: any) {
    console.log(response);
  })
  .error(function (err: any) {
    console.log('error while creating table ', err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello world');
});
app.listen(3000, () => {
  console.log('server started at port :3000 ::.::.::');
});
