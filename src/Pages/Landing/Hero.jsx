import Image from '../../Assets/hero-img.png'
export default function Hero () {

    return (
        <main>
            <div className="flex">
                <div className="flex flex-col items-center md:flex-row-reverse">
                    <div className="">
                        <img src={ Image } alt="" 
                        className=""/>
                    </div>
                    <div className="flex flex-col items-center p-20">
                        <h3>SomtinSomtin</h3>
                    </div>
                </div>
            </div>
        </main>
    )
}