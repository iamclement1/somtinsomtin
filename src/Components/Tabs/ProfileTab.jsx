import axios from 'axios';
import { useEffect, useState } from 'react'


function ProfileTab() {

    const [userData, setUserData] = useState([])
    const auth_token = JSON.parse(sessionStorage.getItem('user'));
    

    useEffect(() => {
        axios.get('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/me/', {
            headers: {
                "Authorisation": `Bearer ${auth_token}`,
                
            }
        })
            .then((res) => {
                console.log(res.data)
                setUserData(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [auth_token]);
    return (
        <>
            <form action="">
                {
                    userData && userData.map(field => {
                        return <input key={field.key} value={field.type} name={field.name} />
                    })
                }

            </form>
        </>
    )
}

export default ProfileTab