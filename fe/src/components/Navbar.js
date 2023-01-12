import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const items = [
    {
      label: "ĐẠI LÝ / SALE / DỊCH VỤ",
      key: "1",
      //   icon: <MailOutlined />,
    },
    {
      label: "TRAO ĐỔI MUA BÁN",
      key: "2",
      //   icon: <LaptopOutlined />,
    },

    {
      label: "CHIẾT KHẤU / ƯU ĐÃI",
      key: "3",
      //   icon: <StrikethroughOutlined />,
    },
  ];
  return (
    <header>
      <h3>M - A</h3>
      <nav ref={navRef}>
        {items.map((e) => (
          <a href="#">{e.label}</a>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
