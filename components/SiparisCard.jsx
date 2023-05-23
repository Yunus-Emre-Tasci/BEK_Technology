import Link from 'next/link';
import Image from "next/image";

const SiparisCard = ({ siparis }) => {
  return (
      <div className="border border-gray-300 rounded-lg shadow-md border-1 w-[250px] h-[285px]">
        <div className="p-2 mx-auto">
          <Image
            src={siparis.url}
            alt=""
            height={150}
            width={230}
            style={{ height: "150px" }}
          />
          <h3 className="font-extrabold mt-2"> {siparis.title} </h3>
          <p className="mt-1"> {siparis.puan} </p>
          <p className="text-[12px] font-bold mt-2 pb-2">
            {" "}
            Çekilişte Verilecek Ürün Sayısı {siparis.adet} Adet{" "}
          </p>
        </div>
      </div>
  );
};

export default SiparisCard
