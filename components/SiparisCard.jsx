import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addToCart,removeFromCart } from "@/redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const SiparisCard = ({ siparis }) => {

  const dispatch = useDispatch();
  const [count, setCount] = useState(0); 

  const handleAddToCart = () => {
    const increment = 1; // Eklenecek ürünün adet sayısı
    const { id, puan } = siparis;
    dispatch(addToCart({ id, count: increment, rating: puan }));
    setCount(count + increment); // count state'ini güncelle
  };

  const handleRemoveFromCart = () => {
    if (count > 0) {
      const decrement = 1; // Çıkarılacak ürünün adet sayısı
      const { id, puan } = siparis;
      dispatch(removeFromCart({ id, count: decrement, rating: puan }));
      setCount(count - decrement); // count state'ini güncelle
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md border-1 w-[250px] h-[295px]">
      <div className="p-2 mx-auto">
        <Image
          src={siparis.url}
          alt=""
          height={150}
          width={230}
          style={{ height: "150px" }}
        />
        <p className="mt-2 text-[15px]">
          <span className="font-extrabold">{siparis.title}</span> Paket İçeriği{" "}
          {siparis.adet} Adet
        </p>

        <div className="flex items-center justify-between pb-2 mt-3 mb-3">
          <p className="font-bold text-[13px]"> {siparis.puan} BEK Puan </p>
          <div className="flex gap-x-2 justify-evenly items-center rounded-full py-1 text-[14px] border-2 border-gray-200 px-4">
            <button
              onClick={handleRemoveFromCart}
              className="flex items-center justify-center w-5 h-5 text-lg border-2 border-gray-200 rounded-full "
            >
              -
            </button>
            <p className="text-md">0</p>
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center w-5 h-5 text-lg border-2 border-gray-200 rounded-full"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiparisCard
