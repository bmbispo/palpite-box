import React from 'react'

const Footer = () => {
    return(
        <div className='bg-gray-700 p-1'>
            <div className='flex-row mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por:
                <a className='px-2'>Breno Bispo</a> 
                <a href='https://www.instagram.com/brenombispo'>
                    <img className='inline px-3' src='/Instagram_icon-icons.png'/></a>
                <a href='https://www.linkedin.com/in/breno-macedo-bispo-20ab92140'>
                    <img className='inline' src='/LI-In-Bug.png'/></a>
                <a href='https://github.com/bmbispo'>
                    <img className='inline px-3'src='/GitHub-Mark.png'/></a>
                        
            <div className='mt-2'>
                <img className='inline p-4' src='/logo_semana_fsm.png'/>
                <img className='inline p-4' src='/logo_devpleno.png'/>                  
            </div>
            </div>
      </div>
    )
}
export default Footer