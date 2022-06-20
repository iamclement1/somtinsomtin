import axios from 'axios'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function TabPassword() {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const auth_token = localStorage.getItem('token');

    useEffect(() => {
        const password = localStorage.getItem("user", "password")
        setOldPassword(password)
    }, [])


    const handleSubmit = (event) => {
        setIsLoading(true)
        event.preventDefault();

        const data = {
            "old_password": oldPassword,
            "new_password": newPassword,
        }
        // console.log('data', data);

        axios.post('https://somtinsomtin-api.herokuapp.com/api/v1.0/users/change_password/', data, {
            headers: { 
                Authorization: `Bearer ${auth_token}`
            }
        })
            .then(response => {
                console.log(response.data)
                toast('password successfully changed')
                setIsLoading(false)
            })

            .catch(error => {
                console.log(error)
                setIsLoading(false)
            })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <form action="" className="py-3">
                        <div className="form-group space-y-2">
                            <label htmlFor="" className="text-gray-500 font-bold">
                                Current Password
                            </label>
                            <input type="password"
                                name="oldPassword"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                        </div>
                        <div className="form-group space-y-2">
                            <label htmlFor="" className="text-gray-500 font-bold">
                                New Password
                            </label>
                            <input type="password"
                                
                                name="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                        </div>
                        <div className="form-group space-y-2">
                            <label htmlFor="" className="text-gray-500 font-bold">
                                Confirm New Password
                            </label>
                            <input type="password"
                                
                                name="confirmNewpassword"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className={`w-full p-2 text-gray-600 border rounded-md outline-none
                        text-sm transition duration-150 ease-in-out mb-3`} />
                        </div>
                        <div className="pt-3">
                            {!isLoading && (
                                <button className="bg-red-400
                    text-white font-semibold
                    hover:bg-red-600 rounded-sm
                    hover:text-white p-2 mb-2"
                                    onClick={handleSubmit}>
                                    Change Password
                                </button>
                            )}

                            {isLoading && (
                                <button className="bg-red-700
                        text-white text-sm
                        hover:bg-red-600 rounded-sm
                        hover:text-white p-2 mb-2"
                                    disabled>
                                    <FontAwesomeIcon icon={faSpinner}
                                        className='space-x-4 spinner mr-3' />
                                    loading...
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TabPassword
