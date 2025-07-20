import axios from "axios"

const baseUrl = `http://localhost:3009`

export const getall = () => {
    return axios.get(`${baseUrl}/category`)
}

export const GetAllApartments =()=>{
    return axios.get(`${baseUrl}/apartment`)
}
export const Adduser =(x)=>{
    console.log(x)
    return axios.post(`${baseUrl}/advertise/register`,x)
    .then(response => {
        const token = response.data.token; // גישה לטוקן
        sessionStorage.setItem('token', token); 
        sessionStorage.setItem('idUser',response.data.advertiser._id)
        // console.log('User saved:', response.data.advertiser._id)
        
        console.log('Token saved:', token);
      })
      .catch(error => {
        console.error('Error fetching token:', error);
      });
}
// 
export const Loginuser = (x) => {
  console.log("Sending data to server:", x);

  return axios.post(`${baseUrl}/advertise/login`,x)
  .then(response => {
    console.log(response)
    const token = response.data.token;
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('idUser', response.data.Advertiser._id);
    console.log('User s aved:', response.data.Advertiser._id);
    console.log('Token save:', token);
    alert('התחברת');
  })
  .catch(error => {
    alert('אין כזה משתמש');
    console.error('Error fetching token:', error.response?.data || error.message);
  });
};
export const CityById =(x)=>{
    console.log(x)
    return axios.get(`${baseUrl}/city/citybyid/${x}`)}
export const ApartmentByCdeCategory=(x)=>{
        console.log(x)
        return axios.get(`${baseUrl}/apartment/category/${x}`)}
export const AllCity=()=>{
    return axios.get(`${baseUrl}/city`)

}
export const filter=(x)=>{
    console.log(x)
    return axios.post(`${baseUrl}/apartment/filter`,x)
}
export const advertiseById = (id) => {
    return axios.get(`${baseUrl}/advertise/byid/${id}`);
  };
  export const MyDelete = (id) => {
    return axios.delete(`${baseUrl}/apartment/${id}`);
  };

  export const AddApartment = (x) => {
    console.log(x)
    return axios.post(`${baseUrl}/apartment`,x);
  };