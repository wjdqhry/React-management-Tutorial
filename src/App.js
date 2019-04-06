import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [{
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
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(a => {
            return(
              <Customer
                key={a.id}
                id={a.id}
                iamge={a.image}
                name={a.name}
                birthday={a.birthday}
                gender={a.gender}  
                job={a.job}              
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
