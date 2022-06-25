import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function Merchant() {

  const [merchant, setMerchant] = useState([])
  const auth_token = localStorage.getItem('token');

  useEffect(() => {
    fetchMerchant()
  }, )


  const fetchMerchant = () => {
    axios.get('https://somtinsomtin-api.herokuapp.com/api/v1.0/merchants/approved_merchants/', {
      headers: {
        Authorization: `Bearer ${auth_token}`
      }
    })

      .then((response) => {
        console.log(response);
        setMerchant(response.data.result)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <Sidebar>
      <div className="container-fluid">
        <div className="row">
          <h3 className="text-xl font-semibold text-[#E4043C] mb-0 pt-4"> Merchants </h3>
          <p className="text-gray-500 text-sm"> Approved Somtins Merchants </p>
        </div>
        <div>
          {merchant}
        </div>
      </div>

    </Sidebar>
  )
}