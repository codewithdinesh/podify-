import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';


function Header() {
    return (
        <Navbar
            className=' dark:bg-slate-700 shadow-md'
            fluid={true}
            rounded={true}


        >
            <Navbar.Brand href="/">
                <img
                    src="http://localhost:3000/podify+.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Podify+ Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Podify+
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">

                <Link href={"/podcasts/upload"} className='mx-1 '>
                    <Button className='bg-red-600'>
                        Upload Podcast
                    </Button>
                </Link>

                <Link href={"/account/login"} className='mx-1'>
                    <Button>
                        Login
                    </Button>
                </Link>

                <Link href={"/account/signup"} className='mx-1'>
                    <Button>
                        Signup
                    </Button>
                </Link>

                {/* <Navbar.Toggle /> */}
            </div>
            {/* <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/popular">
                    Popular
                </Navbar.Link>

            </Navbar.Collapse> */}
        </Navbar>

    );
}

export default Header;
