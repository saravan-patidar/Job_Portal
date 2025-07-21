import { Facebook, GitBranch, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-t-gray-200 py-4'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='mb-4'>
                    <h2 className='text-xl font-bold text-center'>Job <span className='text-[#f83002]'>Portal</span></h2>
                    <p className='text-sm'>&copy;2025 Shrvn Patidar. All rights reserved.</p>
                </div>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer