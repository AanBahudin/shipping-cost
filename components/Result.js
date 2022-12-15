import moment from 'moment'
import {ImLocation2} from 'react-icons/im'
import { useGeneralContext } from '../context/generalContext'

const Result = () => {

    const {result} = useGeneralContext()
    const {message, data} = result

    return (
        <section className='w-full flex flex-col items-center'>
            <h1 className='text-heading_one dark:text-heading_dark_one duration-200 font-play font-semibold text-xl'>{message} !</h1>

            <main className='grid auto-cols-auto my-[2%] gap-x-10 auto-rows-auto bg-background/25 dark:bg-dark/25 border-white/30 border-[1px] rounded drop-shadow'>

                <main className='flex justify-between p-5 items-center gap-y-4 rounded my-[4%] col-start-1 col-end-2 row-start-1 row-end-2'>
                    <div className='text-left flex flex-col gap-1'>
                        {Object.keys(data.summary).filter(item => {return item !== 'desc'}).map((item, index) => {
                            return (
                                <h3 className='grid grid-cols-2 text-heading_two dark:text-heading_dark_one duration-200 text-md font-semibold' key={index}>
                                    <span className=''>{item}</span>
                                    : {item === 'date' ? moment(data.summary[item]).startOf('day').fromNow() : (item === 'amount' ? `Rp ${Number(data.summary[item])}` : data.summary[item])}</h3>)})}
                        {Object.keys(data.detail).map((item, index) => {
                            return (
                                <h3 className='grid grid-cols-2 text-heading_two dark:text-heading_dark_one duration-200 text-md font-semibold'key={index}>
                                <span>{item} </span> 
                                : {data.detail[item]}
                                </h3>
                                )
                            })}
                    </div>
                </main>

                <div className='flex flex-col gap-y-3 p-5 my-auto rounded col-start-3 col-end-4 row-start-1 row-end-2'>
                    {data.history.reverse().map((item, index) => {
                        return (
                            <article key={index} className="text-left gap-x-4 rounded flex text-heading_two dark:text-heading_dark_one duration-200">
                                <ImLocation2 className='my-auto fill-white dark:fill-heading_dark_one duration-200' size={20} />
                                
                                <article>
                                    <h3 className='text-heading_one duration-200 dark:text-heading_dark_two'>{moment(item.date).startOf('day').fromNow()}</h3>
                                    <h3 className='lowercase font-semibold'>{item.desc}</h3>
                                </article>
                            </article>
                        )
                    })}
                </div>
                
            </main>
        </section>
  )
}

export default Result

