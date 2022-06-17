import axios from 'axios';
import { useState } from 'react';
import ProfileLogo from '../../Assets/sometinlogo1024.png'



function ProfileTab() {

    const [ userData, setUserData ] = useState([]);


    const auth_token = localStorage.getItem('token');
    console.log(auth_token)
    const url = "https://somtinsomtin-api.herokuapp.com/api/v1.0/users/me/"

    const getUserData = () => {
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${auth_token}`
            }
        })
            .then(response => {
                setUserData(response.data)
                console.log(response)
                localStorage.getItem('auth_token')
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <form action="">
                <div className="w-[90px] pt-3 mb-3">
                    <img src={ ProfileLogo} alt="" />
                </div>
                <div>
                    <label htmlFor="firstName" className="font-semibold text-gray-600">First Name</label>
                    
                    
                </div>
            </form>
        </div>

    )
}

export default ProfileTab




// This is the smi