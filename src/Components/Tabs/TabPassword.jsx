

function TabPassword() {

    const handleSubmit = (event) => {
        event.preventDefault();
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
                            <input className="form-control mb-2" type="password" name="password" id="password"
                            placeholder="" />
                        </div>
                        <div className="form-group space-y-2">
                            <label htmlFor="" className="text-gray-500 font-bold">
                                New Password
                            </label>
                            <input className="form-control mb-2" type="password" name="password" id="password"
                            placeholder="" />
                        </div>
                        <div className="form-group space-y-2">
                            <label htmlFor="" className="text-gray-500 font-bold">
                                Confirm Password
                            </label>
                            <input className="form-control" type="password" name="password" id="password"
                            placeholder="" />
                        </div>
                        <button className="bg-[#362F62] mt-4 p-2 text-white rounded-md"
                        onClick={handleSubmit}>
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TabPassword
