import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full z-50 flex items-center justify-around px-4 md:px-16 py-6 shadow-md">
        <Link href="/" className="logo text-var(--main-color) text-2.4rem flex items-center gap-3 text-3xl font-bold">
          <Image src="/logo.png" alt="" height={60} width={60}/>
          <h1 className="font-press-start">GEEKS</h1>
        </Link>
        <ul className="navbar flex gap-2 text-xl">
          <li>
            <Link href="#home" className="text-var(--main-color) border-r border-gray-500 font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500">
                Home
            </Link>
          </li>
          <li>
            <Link href="#home" className="text-var(--main-color) border-r border-gray-500 font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500">
                Sobre
            </Link>
          </li>
          <li>
            <Link href="#home" className="text-var(--main-color) border-r border-gray-500 font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500">
                Imagens
            </Link>
          </li>
          <li>
            <Link href="#home" className="text-var(--main-color) border-r border-gray-500 font-medium text-1.1rem px-4 py-2 hover:text-var(--text-color) transition duration-500">
                Equipe
            </Link>
          </li>
        </ul>
      </header>
  )
}

export default Header