import Image from 'next/image'
import Link from 'next/link'
import { AiFillPlayCircle } from 'react-icons/ai'
import SponsorCard from '@/components/SponsorCard'

const SponsorContent = ({sponsorData}) => {
  return (
    <div>
      <Link
        className="inline-block pl-2 "
        href="https://bek.org.tr/kuruluslar/bek-teknoloji"
        target="_blank"
      >
        <Image
          width={100}
          height={100}
          priority={true}
          style={{
            objectFit: "contain",
          }}
          src="https://bek.org.tr/files/img/2fz5fyhs.jpg"
          alt=""
        />
      </Link>
      <div className="flex items-center justify-between px-2 pb-2 mt-4 border-b-2">
        <Link
          href="/"
          className="flex items-center justify-center px-3 py-2 border-2 border-gray-300 rounded-lg shadow-md"
        >
          <AiFillPlayCircle />
          <p className="ml-2">Ana Ekrana Dön</p>
        </Link>
        <p className="tracking-wide">Sponsorlar Ürün Listesi</p>
      </div>

      <div className="flex flex-wrap mt-3 gap-x-6 gap-y-4">
        {sponsorData.map((sponsor, i) => (
          <SponsorCard key={i} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}

export default SponsorContent