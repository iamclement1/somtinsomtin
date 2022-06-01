

function MerchantList(props) {
    return (
        <li>
            <div className="container">
                <div className="row">
                    <div className="card-container">
                        <div className="mb-4">
                            <div className="card-body flex bg-white py-5 space-x-6 rounded-md shadow-md">
                                <div className="text-3xl text-[#362F62]">
                                    { props.MerchantData.img }
                                </div>
                                <div>
                                    <span> {props.MerchantData.name} </span>
                                    <p> {props.MerchantData.number} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default MerchantList
