import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";

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

  //   .then((response) => {
  //     setMerchants(response.data.result)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

  useEffect(() => {
    axios.get('https://somtinsomtin-api.herokuapp.com/api/v1.0/merchants/approved_merchants/', {
      headers: {
        Authorization: `Bearer ${auth_token}`
      }
    })

      .then((response) => {
        setMerchants(response.data.result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [loading])
  console.log(merchants);

  return (
    <Sidebar>
      <div className="container-fluid m-auto pt-56">
        {loading ? (
          <div className="text-center">
            loading...
          </div>
        ) : (
          <>
            <div className="row">
              <h3 className="text-xl font-semibold text-[#E4043C] mb-0 pt-4"> Merchants </h3>
              <p className="text-gray-500 text-sm"> Approved Somtins Merchants </p>
            </div>
            <div>
              {
            merchants.map(merchant => (
              <div>
                clement
              </div>
            ))
          }
            </div>
          </>
        )}

      </div>

    </Sidebar>
  )
}