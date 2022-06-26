import { Link } from 'react-router-dom'
import Logo from '../../Assets/sometinlogo250-150-red.png'
export default function Footer() {
    return (
        <div className="relative bg-light">
            <div className="pt-4">
                <div className="md:flex md:p-24 md:space-x-4">
                    <div>
                        <img src={ Logo } alt="brand__logo" 
                        className="w-3/6"/>
                    </div>
                    <div>
                        <Link to="/" className="text-[#0E1133] no-underline hover:text-red-600">
                            <h2 className="text-xl font-bold">Home</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}