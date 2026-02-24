import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
	return (
		<nav className="flex items-center gap-8 mt-4 ml-5 p-4">
			<Link href="/">
				<Image
					alt="Site logo"
					width={70}
					height={70}
					src="/logo.png"
					priority
				/>
			</Link>
			<div className="ml-auto mr-8 flex space-x-6">
				<Link href="/" className="">
					Home
				</Link>
				<Link href="/about" className="">
					About Me
				</Link>
				<Link href="/contact" className="">
					Contact
				</Link>
			</div>
		</nav>
	);
}
