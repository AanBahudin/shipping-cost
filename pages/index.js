import {Footer, Search} from '../components'
import React from 'react'
import { useGeneralContext } from '../context/generalContext'
import {BsFillSunFill} from 'react-icons/bs'

export default function Home() {

  const {theme, handleTheme} = useGeneralContext()

  return (
    <section className='min-h-[100vh] h-fit relative bg-background dark:bg-dark duration-200'>
      <button onClick={() => handleTheme(!theme)} className="w-10 h-10 md:w-14 md:h-14 rounded-full fixed z-20 top-6 right-6 bg-dark/30 duration-200 dark:bg-background/30"><BsFillSunFill className='m-auto fill-dark/70 dark:rotate-180 duration-200 dark:fill-background/70' size='50%'/></button>
      <Search />
      {/* <Footer /> */}
    </section>
  )
}
