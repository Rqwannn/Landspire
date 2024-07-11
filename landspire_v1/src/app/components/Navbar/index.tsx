import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-landspire_blue flex justify-between px-4 py-5 text-landspire_white">
            <div className="title text-xl">
                Landspire
            </div>
            <div className="list_menu">
                <ul className="flex gap-7 px-3">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Wallet</Link></li>
                    <li><Link href="/">Service</Link></li>
                    <li><Link href="/">Contact</Link></li>
                    <li><Link href="/">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;