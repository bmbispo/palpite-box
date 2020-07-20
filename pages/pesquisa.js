import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'
import InputMask from 'react-input-mask'

const Pesquisa = () => {
    const [ form, setForm ] = useState({
         Nome: '',
         Email: '',
         Telefone: '',
         nota: 0,
         Sugestaocritica:''

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
        <div className='sm:flex-col'>
            <PageTitle title='Pesquisa'/>
            <h1 className='text-center font-bold my-6 text-2x1'>Críticas e sugestões</h1>

            {!sucess && <div className='w-1/5 flex-row mx-auto'>
                <label className=' text-center font-bold'>Seu Nome:</label>
                <input type='text' className='flex-row px-12 py-4 block shadow bg-blue-200 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>
            
                <label className=' text-center font-bold'>Email:</label>
                <input type='text' className=' flex-row px-12 py-4 block shadow bg-blue-200 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email}/>
            
                <label className=' text-center font-bold'>Telefone:</label>
                <InputMask className='flex-row px-12 py-4 block shadow bg-blue-200 my-2 rounded' type="tel" name="telefone" placeholder="Telefone:" mask="(99) 99999-9999" onChange={onChange} name='Telefone' value={form.Telefone}/>
                <label className='text-center font-bold'>Sua sugestão ou crítica:</label>
                <textarea className='flex-row px-12 py-8 shadow bg-blue-200 my-2 rounded' name="mensagem" placeholder="Mensagem:" onChange={onChange} name='Sugestaocritica' value={form.Sugestaocritica}/>
                <label className='font-bold'>Nota:</label>
                <div className='flex'>
                { notas.map(nota => {
                   return( <label className='text-center block w-1/6'>
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