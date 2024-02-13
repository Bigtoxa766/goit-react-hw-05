import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzQ5NTc0MTllZWI5ZGUxNWNmN2ViYTE3ZWI4M2EyYSIsInN1YiI6IjY1YzRkNzZmZTJmZjMyMDE4NDI2MTBhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q9IpDU80NNkPliBRGeNdeEfNiDLfV1RWolcU3-iDl7M',
  }
};

export const fachApi = async () => {

  const response = await axios.get('/trending/movie/day?include_adult=false&language=en-US&page=1', options)
  return (response.data.results)
};

export const fachApiById = async (movieID) => {

  const response = await axios.get(`/movie/${movieID}`, options)
  return(response.data)
};

export const fachApiBySearch = async (searchQuery) => {

  const response = await axios.get(`/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`, options)
  return(response.data)
};

export const fetchApiCast = async (movieID) => {
  const response = await axios.get(`/movie/${movieID}/credits`, options)
  return (response.data)
}

export const fetchApiReviews = async (movieID) => {
  const response = await axios.get(`/movie/${movieID}/reviews`, options)
  return (response.data)
}