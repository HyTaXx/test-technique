import Link from 'next/link';

const Navbar = () =>
{
    return (
        <nav className="flex p-6">
            <a href='/' className="mr-6 text-blue-500 hover:text-blue-800">Home</a>
            <a href='/login' className="mr-6 text-blue-500 hover:text-blue-800">Login</a>
            <a href='/register' className="mr-6 text-blue-500 hover:text-blue-800">Register</a>
        </nav>
    );
};

export default Navbar;