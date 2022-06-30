import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Loader from '../../Components/Loader/Loader'
import MerchantCard from "./MerchantCard";

export default function Merchant() {

  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth_token = localStorage.getItem('token');

  // const fetchMerchant = () => {
  //   axios.get('https://somtinsomtin-api.herokuapp.com/api/v1.0/merchants/approved_merchants/', {
  //     headers: {
  //       Authorization: `Bearer ${auth_token}`
  //     }
  //   })

  //     .then((response) => {
  //       const allMerchants = response.data.results
  //       setMerchants(allMerchants)
  //       console.log(response.data.results)
  //       setLoading(false)
        
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }

  useEffect(() => {
    axios.get('https://somtinsomtin-api.herokuapp.com/api/v1.0/merchants/approved_merchants/', {
      headers: {
        Authorization: `Bearer ${auth_token}`
      }
    })

      .then((response) => {
        const allMerchants = response.data.results
        setMerchants(allMerchants)
        setLoading(false)
        
      })
      .catch((error) => {
        console.log(error);
      })
  }, [auth_token])


  return (
    <Sidebar>
      <div className="">
        {loading ? (
          <div className="text-center m-auto pt-56">
            <Loader />
          </div>
        ) : (
          <>
            <div className="">
              <h3 className="text-xl font-semibold text-[#E4043C] mb-0 pt-4"> Merchants </h3>
              <p className="text-gray-500 text-sm"> Approved Somtins Merchants </p>
            </div>
            <div className="border" >
              <MerchantCard merchants={merchants}  />
            </div>
          </>
        )}

      </div>

    </Sidebar>
  )
}