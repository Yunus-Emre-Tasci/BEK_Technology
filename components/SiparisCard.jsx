import Link from 'next/link';
import Image from "next/image";

const SiparisCard = ({ siparis }) => {
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

        <div className="flex justify-between items-center mt-2 pb-2 mb-3">
          <p className="font-bold text-[13px]"> {siparis.puan} BEK Puan </p>
          <div className="flex gap-x-2 justify-evenly items-center rounded-full p-2 text-[14px] border-2 border-gray-200 px-4">
            <button className="w-5 h-5 flex justify-center items-center rounded-full border-2 border-gray-200 text-lg  ">
              -
            </button>
            <p className="text-md">0</p>
            <button className="w-5 h-5 flex justify-center items-center rounded-full border-2 border-gray-200 text-lg">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiparisCard
