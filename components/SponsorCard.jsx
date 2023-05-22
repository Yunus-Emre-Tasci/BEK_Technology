import Image from 'next/image';
import React from 'react'

const SponsorCard = ({ sponsor }) => {

  console.log(sponsor);
  return (
      <div className="border border-gray-300 rounded-t-lg shadow border-1 w-[250px] h-[250px]">
        <div className='p-2'>
           <Image src={sponsor.url} alt='' height={150} width={220}/>
           <h3 className='font-extrabold'> {sponsor.title} </h3>
           <p> {sponsor.model} </p>
           <p className='text-[10px] font-bold'> Çekilişte Verilecek Ürün Sayısı {sponsor.adet} Adet </p>
        </div>
      </div>
  );
};

export default SponsorCard