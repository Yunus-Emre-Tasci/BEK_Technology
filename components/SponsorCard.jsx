import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SponsorCard = ({ sponsor }) => {

  // console.log(sponsor);
  return (
    <Link href="siparis">
      <div className="border border-gray-300 rounded-lg shadow-md border-1 w-[250px] h-[285px]">
        <div className="p-2 mx-auto">
          <Image
            src={sponsor.url}
            alt=""
            height={150}
            width={230}
            style={{ height: "150px" }}
          />
          <h3 className="mt-2 font-extrabold"> {sponsor.title} </h3>
          <p className="mt-1"> {sponsor.model} </p>
          <p className="text-[12px] font-bold mt-2 pb-2">
            {" "}
            Çekilişte Verilecek Ürün Sayısı {sponsor.adet} Adet{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SponsorCard