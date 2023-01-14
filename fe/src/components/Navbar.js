import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../image/logoMA.jpg";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const items = [
    {
      label: "Đại Lý / SEO",
      key: "/seo",
      //   icon: <MailOutlined />
    },
    {
      label: "Mua Bán 0 Đồng",
      key: "/404",
      //   icon: <LaptopOutlined />,
    },
    {
      label: "Thiết kế Event",
      key: "/404",
      //   icon: <LaptopOutlined />,
    },
    {
      label: "Ưu Đãi Người Chơi",
      key: "/endow",
      //   icon: <StrikethroughOutlined />,
    },
    {
      label: "Giới Thiệu",
      key: "/company",
      //   icon: <StrikethroughOutlined />,
    },
  ];
  return (
    <header>
      <div className='logo-MHA'>
        <img src={logo} atl='logo' />
      </div>
      <nav ref={navRef}>
        {items.map((e) => (
          <a href={e.key}>{e.label}</a>
        ))}
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
