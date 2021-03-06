import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProfileLogo from '../../Assets/brand-logo/sometinlogo1024.png'


export default function Profile() {

    const [userData, setUserData] = useState([]);

    const auth_token = localStorage.getItem('token');
    console.log(auth_token)
    const url = "https://somtinsomtin-api.herokuapp.com/api/v1.0/users/me/"

    // const getUserData = () => {
    //     axios.get(url, {
    //         headers: {
    //             Authorization: `Bearer ${auth_token}`
    //         }
    //     })

    //         .then(response => {
    //             setUserData(response.data)
    //             localStorage.getItem('auth_token')
    //             localStorage.getItem('user')

    //         })
    //         .catch(error => console.error(error))
    // }


    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })

            .then(response => {
                setUserData(response.data)
                localStorage.getItem('auth_token')
                localStorage.getItem('user')

            })
            .catch(error => console.error(error))
    }, [auth_token])


    return (
        <Sidebar>
            <div>
                <div className="w-[90px] pt-3 mb-3">
                    <img src={ProfileLogo} alt="" />
                </div>
                {userData.length > 0 && (
                    <ul>
                        {userData.map(user => (
                            <li key={user.id}>{user}</li>
                        ))}
                    </ul>
                )}
            </div>
        </Sidebar>
    )
}