import React from 'react';
import Overviewcard from '../../assets/images/Overviewcard.png';
import { LuTrendingUpDown } from 'react-icons/lu';


const AuthLayout = ({ children }) => {
  return <div className='flex'>
    <div className='w-screen h-screen md:w-(60vw) px-12 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
        {children}
    </div>

        

        <div className=' md:block w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-center overflow-hidden relative p-8 bg-no-repeat'>
            <div className='w-48 h-48 rounded-[40px] bg-blue-600 absolute -top-7 -left-5'></div>
            <div className='w-48 h-56 rounded-[40px] border-[20px] border-blue-500 absolute top-(30%)'></div>
            <div className='w-48 h-48 rounded-[40px] bg-blue-500 absolute -bottom-7 -left-5'></div>
            


            <div className='grid grid-cols-1 z-20'>
                <StatsInfocard
                    icon={<LuTrendingUpDown size={26} />}
                    label="Track your income and expenses"
                    value="430,000"
                    color=""
                />
            </div>

            <img 
                src={Overviewcard}
                className='w-94 h-60 lgtw-[90%] absolute bottom-10 shadow-lg shadow-blue-400/15 rounded-2xl'
            /> 
        </div>
    </div>
  

}

export default AuthLayout

const StatsInfocard = ({ icon, label, value, color }) => {
    return <div className="flex gap-6 bg-white rounded-xl shadow-md shadow-blue-400/10 border border-gray-200/50 z-10">
        <div 
            className='w-12 h-12 flex items-center justify-center text-(26px) text-white ${color} rounded-full drop-shadow-xl'
            >
            {icon}
        </div>

        <div>
            <h6 className='text-xss text-gray-500 mb-1'>{label}</h6>
            <span className='tet-[20px]'>{value}</span>
        </div>
    </div>
}
