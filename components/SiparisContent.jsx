import React from 'react'
import SiparisCard from './SiparisCard';

const SiparisContent = ({ filteredCards }) => {
  return (
    <div className="flex">
      <div className="w-[75%] flex flex-wrap mt-3 gap-x-6 gap-y-4">
        {filteredCards.map((siparis, i) => (
          <SiparisCard key={i} siparis={siparis} />
        ))}
      </div>
      <div className="w-[25%] mt-2 relative">
        <div className="shadow-lg">
          <div className="mt-2 bg-gradient-to-r from-blue-700 to-blue-500 font-extrabold text-white p-2 rounded-lg">
            BEK Puanınız:
          </div>
          <div className="absolute right-0 top-0  z-10 text-blue-700 border-2 border-blue-700 bg-gray-100 text-xl rounded-xl p-3 font-extrabold shadow-lg">
            100
          </div>
        </div>
        <div className='mt-5'>
          <div className='flex justify-between items-center p-2 bg-gray-300 border-b-2'>
             <p>Sepetiniz</p>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiparisContent