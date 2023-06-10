import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css"
function App() {
  const [data,setdata]=useState("");
  useEffect(()=>{
    axios.get('https://dummyjson.com/users')
    .then((res)=>{
      setdata(res.data.users);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <>
    <table>
      <tr>
        <th>id</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>age</th>
        <th>gender</th>
        <th>email</th>
        <th>phone</th>
        <th>username</th>
        <th>birthDate</th>
        <th>image</th>
        <th>height</th>
        <th>weight</th>
        <th>address</th>
        <th>bank</th>
        <th>company</th>
      </tr>
      {
        data.map((val)=>{
          return(
            <>
            <tr>
              <td>{val.id}</td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td>{val.username}</td>
              <td>{val.birthDate}</td>
              <td><img src={val.image} alt="" srcset="" /></td>
              <td>{val.height}</td>
              <td>{val.weight}</td>
              <td>city: {val.address.city} <br />
              coord: {val.address.coordinates.lat} {val.address.coordinates.lng}
              </td>
              <td>cardExpire: {val.bank.cardExpire}</td>
              <td>{val.company.name}</td>
            </tr>
            </>
          );
        })
      }
    </table>
    </>
  );
}

export default App;
