'use client'

import Link from 'next/link'
import { AiOutlineRead } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

export const menu = [
  { icon: <AiFillGithub className="  mx-1 text-xl" />, title: 'Github', url: process.env.NEXT_PUBLIC_GITHUB_URL || '/' },
  { icon: <AiOutlineRead className="  mx-1 text-xl" />, title: 'Read article', url: process.env.NEXT_PUBLIC_ARTICLE_URL || '/'  }
]

export const Navbar = () => {
  return (
    <nav className="sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto w-full max-w-xl">
        <Link href={process.env.NEXT_PUBLIC_WEBSITE_URL || '/'} className="ml-4 flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ruben Mora</span>
        </Link>
        <div className="justify-between items-center  flex  w-auto" id="navbar-sticky">
          <ul className="flex  p-4 items-center content-center rounded-lg  flex-row space-x-8 mt-0 text-sm font-medium border-0 ">
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.url} className="block py-2 pr-4 pl-3 text-white hover:text-indigo-300  rounded md:bg-transparent md:p-0 dark:text-white">
                  <span className="flex flex-row content-center">
                    {item.icon} {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
