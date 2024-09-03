import React from 'react'

const Modal = ({isOpen, onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ?"":"hidden"}`}>
        <div className='modal-container'>
            <div className='bg-green-800 text-center p-5 lg:w-[500px] h-96 rounded shadow-md'>
                <h3 className='font-poppins text-xl font-semibold mb-5
                 mt-6 uppercase'>Please Login here</h3>
                 <form>
                    <div className='px-4'>
                        <input type="email" name='email' id='email' placeholder='exmpol@gmail.com' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium font-poppins text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'/>
                    </div>
                    <div className='px-4 mt-5'>
                        <input type="password" name='pasword' id='password' placeholder='Enter your Password' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium font-poppins text-[#687280] outline-none focus:border-[#6a64f1] focus:shadow-md'/>
                    </div>
                    <div className='mt-5'>
                        <button type='submit' className='hover:shadow-md rounded-md bg-green-500 hover:bg-green-700 duration-300 px-8 py-3 text-base font-semibold font-poppins text-white outline-none'>Login</button>
                    </div>
                 </form>
                 {/* close button */}
                 <div className='mt-5'>
                    <button onClick={onClose} className='hover:shadow-md rounded-md bg-gray-500 hover:bg-gray-700 duration-300 px-5 py-3 text-base font-semibold font-poppins text-white outline-none inline-flex items-center'>Close</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Modal