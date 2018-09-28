import React from 'react';
import axios from 'axios';

export default class App extends React.PureComponent {

  componentDidMount = () => {

    axios({
      url: '/add',
      method: 'POST',
      data: {
        firstName: 'Esterling',
        lastName: 'Patrick'
      },
      timeout: 5000
    })
      .then((response) => {
        console.log('Data: ', response.data);
      })
      .catch((error) => {
        console.log('Errors: ', error.response);
      });
  }

  render() {

    return (
      <div>
        <h2>Hello World</h2>
      </div>
    );
  }
};


