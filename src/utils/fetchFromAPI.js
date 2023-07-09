import axios from 'axios';

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    // url: BASE_URL,
    params: {
      // part: 'snippet',
      maxResults: 29,
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': 'fc806986f7msh683f55ca419109bp110babjsn7e94ab3d1412',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async(url) => {
  //  const response =  await axios.get(`${BASE_URL}/$(url)`,
  //   options);
   const {data} =  await axios.get(`${BASE_URL}/${url}`,
    options);
    return data;
  }

  // example /baseUrl/getvideos 




  
// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };