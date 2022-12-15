import {company} from '../utils/company'
import { useGeneralContext } from '../context/generalContext'
import {Result} from '../components'

const Search = () => {

  const {receipt, courier, result, loading, handleReceipt, handleCourier, getPackageInformation} = useGeneralContext()

  return (
    <section className='w-[80%] mx-auto text-center pt-[20%] md:pt-[10%]'>
        <h1 className='font-semibold text-center font-space text-heading_one dark:text-heading_dark_one duration-200 text-2xl md:text-3xl'>Track Your Package !</h1>

        <main className='flex flex-col justify-center items-center md:flex-wrap py-[10%] md:py-[5%]'>
          <div className='w-full md:w-[50%] py-[4%] flex justify-center flex-wrap gap-x-16'>
              {company.map((item, index) => {return <h5 key={index} onClick={() => handleCourier(index, item.name)} className={`${courier.id === index ? 'text-heading_two dark:text-heading_dark_one scale-125 -translate-y-1' : 'text-heading_two/50 dark:text-heading_dark_one/50'} hover:text-heading_two hover:dark:text-heading_dark_one duration-200 text-md md:text-lg uppercase cursor-default`}>{item.name}</h5>})}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-[90%] py-[5%] md:py-0 flex flex-col items-center'>
            <input className='mb-[4%] rounded w-full md:w-2/3 font-space outline-none text-center focus:placeholder:text-transparent placeholder:text-sm md:placeholder:text-lg dark:placeholder:text-heading_dark_two text-lg text-black/60 bg-heading_one dark:bg-heading_dark_one focus:drop-shadow-2xl duration-200 px-3 py-2 md:px-4 md:py-3' type='text' placeholder="Shipping code ..." value={receipt} onChange={e => handleReceipt(e.target.value)} />
            <button disabled={receipt ? false : true} onClick={() => getPackageInformation(receipt, courier.text)} className='rounded w-[50%] lg:w-[20%] disabled:hidden block text-sm md:text-lg uppercase tracking-wider font-play font-semibold bg-transparent border-[1px] border-white/90 dark:border-heading_dark_two duration-200 text-heading_one dark:text-heading_dark_one hover:drop-shadow-xl px-3 py-1.5 md:px-4 md:py-2'>Track</button>
          </form>
        </main>

        <main className='py-[4%]'>
          {loading ? <h1 className='text-heading_one dark:text-heading_dark_one text-2xl font-semibold font-space animate-bounce duration-75 tracking-widest'>Tracking . . . </h1> : (
            result.status >= 200 && result.status <400 ? <Result /> : null
          )}
        </main>
    </section>
  )
}

export default Search