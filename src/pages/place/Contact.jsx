import React from 'react'

const Contact = () => {
  return (
    <div>
        <form>
            <div className='mb-3'>
                <input 
                    type="text" 
                    name='name' 
                    id='name' 
                    placeholder="Enter your name" 
                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                    required />
            </div>
            <div className='mb-3'>
                <input 
                    type="email" 
                    name='email' 
                    id='email' 
                    placeholder="Enter your email" 
                    className="bg-transparent px-5 py-3 outline-none placeholder-slate-600 border border-slate-300 rounded-md w-full"
                    required />
            </div>
            <div className='mb-5'>
                <textarea 
                    className="textarea textarea-bordered outline-none bg-transparent placeholder-slate-600 border-slate-300 rounded-md w-full" 
                    placeholder="Message...">
                </textarea>
            </div>
            <input 
                type="submit" 
                className='text-white w-full cursor-pointer bg-[#ff7e01] border-0 font-medium text-center py-2 rounded-md hover:bg-black hover:text-white duration-500' 
                value="Contact" />
        </form>
    </div>
  )
}

export default Contact