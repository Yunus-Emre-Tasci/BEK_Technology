import { useEffect, useState } from 'react'
import {FaArrowCircleUp} from "react-icons/fa"

const ScrollToTop = ({show}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 130) {
      setVisible(true);
    } else if (scrolled <= 130) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      //bir sayfanın scroll pozisyonunu belirli bir noktaya götürmek için kullanıyoruz.
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []); // Boş dizi ekledim, böylece sadece komponent monte olduğunda olay dinleyicisi eklenir ve temizlenir.

  return (
    <div className="fixed w-100 bottom-20 h-4 left-[91vw] text-5xl z-1 cursor-pointer text-red-400 hover:text-red-600 dark:text-white dark:hover:text-gray-600">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible || show ? "inline" : "none" }}
      />
    </div>
  );
}

export default ScrollToTop
