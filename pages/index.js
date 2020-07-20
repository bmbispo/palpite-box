import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data, error}  = useSWR('/api/get-promo', fetcher)
    return (
    <div  className='mt-6 text-center'>
       <p>O resatraurante X sempre em busca por atender melhor seus Clientes.<br />
           Por isso, estamos sempre abertos a ouvir sua opinião
        </p> 
    
        <div>
        <PageTitle title='Seja Bem Vindo'/>
          <Link href='/pesquisa'>
            <button className="my-12 bg-blue-600 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-800 hover:shadow-blue-500 rounded">
              Dar opinião ou susgestão
            </button>
          </Link>
        </div>
        { !data && <p>Carregando...</p> }
        {data && data.showCoupon &&
            <p className='my-6 text-center'>
               {data.message}
            </p>
        }
    </div>
    )
}
export default Index