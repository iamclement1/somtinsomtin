
function MerchantCard(props) {

    const displayMerchant = (props) => {
        const { merchants } = props;

        if (merchants.length > 0) {
            return (
                merchants.map((merchant, index) => {
                    // console.log(merchant);
                    return (
                        <>
                            <div className="max-w-sm w-full lg:max-w-2/4 flex items-center bg-white shadow-md mb-4" key={merchant.id}>
                                <img src={merchant.logo} alt="merchant__logo" className="w-3/6"
                                    style={{
                                        width: '80px',
                                        height: '60px',
                                        margin: '18px',
                                        align: 'center'
                                    }} />
                                <div className="bg-white rounded-md p-4 flex flex-col justify-between leading-normal">
                                    <h2 className="merchat__title text-xl">{merchant.name}</h2>
                                    <p className="merchant__body">{merchant.merchant_code}</p>
                                </div>
                            </div>

                        </>
                    )
                })
            )
        }
        else {
            return (
                <h3>
                    No merchant found
                </h3>
            )
        }
    }
    return (
        <>
            {displayMerchant(props)}
        </>
    )

}

export default MerchantCard

