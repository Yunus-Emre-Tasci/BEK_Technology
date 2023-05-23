import React from 'react'
import SiparisCard from './SiparisCard';
import {SlBasket} from "react-icons/sl"
import { BEK_PUAN } from '@/Data';
import { useSelector } from "react-redux";

const SiparisContent = ({ filteredCards }) => {

  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

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
            {BEK_PUAN}
          </div>
        </div>
        <div className="mt-10 border-2 border-gray-300 rounded-md">
          <div className="flex font-bold justify-between items-center py-2 px-3 bg-gray-300 border-b-2 border-gray-300">
            <p>Sepetiniz</p>
            <SlBasket />
          </div>
          <div className="p-4">
            <p className="font-extrabold text-[15px]">
              Toplam Sepet Puan: 0 BEK Puan
            </p>
            <p className="mt-2 text-[14px]">Kalan Sepet Puanı: 0</p>
          </div>
        </div>
        <div className='mt-3'>
            <button className='text-center bg-orange-600 text-white w-full p-2 rounded-md'>Siparişi Tamamla</button>
        </div>
      </div>
    </div>
  );
};

export default SiparisContent