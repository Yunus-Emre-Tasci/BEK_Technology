import React from 'react'
import SiparisCard from './SiparisCard';

const SiparisContent = ({ filteredCards }) => {
  return (
    <div className="flex">
      <div className="w-[75%] flex flex-wrap mt-3 gap-x-6 gap-y-4">
        {filteredCards.map((siparis,i)=>(
          <SiparisCard key={i} siparis={siparis} />
        ))}
      </div>
      <div className="w-[25%]">SEPET</div>
    </div>
  );
};

export default SiparisContent