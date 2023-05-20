import Image from "next/image";

const Content = ({ urls }) => {
  return (
    <div className="w-[80%] h-screen  grid grid-cols-3 gap-2 ">
      <div className="relative col-span-3 ">
        {" "}
        <Image
          src={urls[0]}
          fill
          style={{
            objectFit: "cover",
          }}
          alt=""
        />{" "}
      </div>
      <div className="relative col-span-2 ">
        <Image
          src={urls[1]}
          fill
          style={{
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
      <div className="relative">
        <Image
          src={urls[2]}
          fill
          style={{
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
      <div className="relative col-span-2">
        <Image
          src={urls[3]}
          fill
          style={{
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
      <div className="relative">
        <Image
          src={urls[4]}
          fill
          style={{
            objectFit: "cover",
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Content;
