import axios from 'axios';
export const BASE_URL = 'https://fakestoreapi.com';

const options = {
  method: 'GET',
  url: `${BASE_URL}/products`,
};

export const getProducts = async () => {
  const data = await axios
    .request(options)
    .then((res) => res)
    .catch((error) => {
      console.error(error);
    });

  return data;
};

// export const getPlayers = async () => {
//   const data = await axios
//     .request(options)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   return data;
// };
