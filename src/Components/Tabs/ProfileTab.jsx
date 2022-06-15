import axios from 'axios';
import { useState } from 'react';



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

        getUserData()

    )
}

export default ProfileTab




// This is the smi