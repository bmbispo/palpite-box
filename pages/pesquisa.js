import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const [ form, setForm ] = useState({
         Nome: '',
         Email: '',
         Whatsapp: '',
         nota: 0
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [ sucess, setSuccess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})
    const save = async () => {

        try{
        const response = await fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()
        setSuccess(true)
        setRetorno(data)
      }catch {}
      
    }
        const onChange = evt =>{
            const value = evt.target.value 
            const key = evt.target.name
            setForm(old => ({
              ...old,
              [key]: value 
          }))
        }
    return (
        <div className='pt-6'>
            <PageTitle title='Pesquisa'/>
            <h1 className='text-center font-bold my-6 text-2x1'>Críticas e sugestões</h1>

            {!sucess && <div className='w-1/5 mx-auto'>
                <label className='font-bold'>Seu Nome:</label>
                <input type='text' className='px-12 py-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>
            
                <label className='font-bold'>Email:</label>
                <input type='text' className='px-12 py-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email}/>
            
                <label className='font-bold'>Whatsapp:</label>
                <input type='text' className='px-12 py-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}/>
            
                <label className='font-bold'>Sua sugestão ou crítica:</label>
                <input type='text' className='px-12 py-10 block shadow bg-blue-100 my-2 rounded' />
                <label className='font-bold'>Nota:</label>
                <div className='flex'>
                { notas.map(nota => {
                   return (<label className='text-center block w-1/6'>
                                {nota}<br/>
                                <input type='radio' name='Nota' value={nota} onChange={onChange}/>
                            </label>)
                    })
                }
                </div>
                <button className='my-6 bg-blue-600 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-800 hover:shadow rounded' onClick={save}>Salvar</button>
            </div>}
            {sucess && <div className='w-1/5 mx-auto'>
                <p className='mb-6 text-center text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500'> <b className="capitalize">Obrigado!</b> por contribuir com sua sugestão ou crítica</p>
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                      Seu cupom: <br />  
                      <span className='font-bold text-4x1'>{retorno.Cupom}</span>
                      </div>
                }
                {
                    retorno.showCoupon && <div className='text-center border p-4 mb-4'> 
                      <span className='font-bold'>{retorno.Promo}</span>
                      <br />
                      
                      </div>
                }
                </div>}
        </div>
    )
} 
export default Pesquisa