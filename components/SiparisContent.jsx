import React from 'react'
import SiparisCard from './SiparisCard';
import {SlBasket} from "react-icons/sl"
import { BEK_PUAN } from '@/Data';
import { useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from '@/helpers/ToastNotify';

const SiparisContent = ({ filteredCards }) => {

  const {totalPoints} = useSelector((state) => state.cart);

  const kalanPuan=BEK_PUAN-totalPoints

  const handleSubmit=()=>{
    if(kalanPuan<0){
      toastWarnNotify(
        `Limitinizi aştınız! Lütfen sepetinizden ${
          kalanPuan * -1
        } puan kadarıyla ürün çıkarınız. Ya da daha fazla satış yaparak BEK Puanınızı arttırabilirsiniz.`
      );
    }else if(kalanPuan==BEK_PUAN){
      toastErrorNotify("Sepetinizde ürün bulunmamaktadır! 🙁");
    }else{
      toastSuccessNotify(
        `Siparişleriniz Hazırlanıyor 😊 İsterseniz kullanabileceğiniz ${kalanPuan} puanınız daha bulunmakta!`
      );
    }
  }

  return (
    <div className="flex">
      <div className="w-[75%] flex flex-wrap mt-3 gap-x-6 gap-y-4">
        {filteredCards.map((siparis, i) => (
          <SiparisCard key={i} siparis={siparis} />
        ))}
      </div>
      <div className="w-[25%] mt-2 relative">
        <div className="shadow-lg">
          <div className="p-2 mt-2 font-extrabold text-white rounded-lg bg-gradient-to-r from-blue-700 to-blue-500">
            BEK Puanınız:
          </div>
          <div className="absolute top-0 right-0 z-10 p-3 text-xl font-extrabold text-blue-700 bg-gray-100 border-2 border-blue-700 shadow-lg rounded-xl">
            {BEK_PUAN}
          </div>
        </div>
        <div className="mt-10 border-2 border-gray-300 rounded-md">
          <div className="flex items-center justify-between px-3 py-2 font-bold bg-gray-300 border-b-2 border-gray-300">
            <p>Sepetiniz</p>
            <SlBasket />
          </div>
          <div className="p-4">
            <p className="font-extrabold text-[15px]">
              Sepet Puanı: {totalPoints} BEK Puan
            </p>
            <p className="mt-2 text-[14px]">Kalan BEK Puanınız: {kalanPuan} </p>
          </div>
        </div>
        <div className="mt-3">
          <button onClick={handleSubmit} className="w-full p-2 text-center text-white bg-orange-600 rounded-md">
            Siparişi Tamamla
          </button>
        </div>
      </div>
    </div>
  );
};

export default SiparisContent