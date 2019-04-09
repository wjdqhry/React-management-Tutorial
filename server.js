const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '정보교',
        'birthday': '010317',
        'gender': '남자',
        'job': '고등학생'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '정보교',
        'birthday': '010317',
        'gender': '남자',
        'job': '고등학생'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '정보교',
        'birthday': '010317',
        'gender': '남자',
        'job': '고등학생'
      }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
