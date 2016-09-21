import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log('GET express server on port ' + PORT);
});

app.use(express.static('./dist'));
app.use(bodyParser.urlencoded({ extended: false }));
