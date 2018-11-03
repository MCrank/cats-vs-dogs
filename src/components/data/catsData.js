import axios from 'axios';

// This is the long way to right the Axios Promise
// const getCatsData = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get('https://random-dogs-api.herokuapp.com/cats/25')
//       .then(data => {
//         resolve(data)
//       })
//       .catch(error => {
//         reject(error)
//       });
//   });
// };

const getCatsData = () => axios.get('https://random-dogs-api.herokuapp.com/cats/27');

export default getCatsData;
