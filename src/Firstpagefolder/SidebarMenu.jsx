import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Tshirts from "../Tshirts/Tshirts";

function SidebarMenu () {
    const links = [
        { title: "sweatshirt", path: "/sweatshirt" },
        { title: "blouses", path: "/blouses" },
        { title: "t-shirts", path: "/tshirts" },
        { title: "jeans", path: "/jeans" },
        { title: "skirts", path: "/skirts" },
        { title: "dresses", path: "/dresses" },
        { title: "sales", path: "/sales" },
        { title: "news", path: "/news" },
      ];

    const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };
    return (
        <>
         {links.map((link)=>(
            <div key={link.title}>
                <div>
                    <Link className="cursor-pointer hover:font-bold ml-5 uppercase font-semibold font-libre" key={link.title} to={link.path}>{link.title}</Link>
                </div>
            </div>
         ))

        }

        <Routes>
          <Route
            key={t-shirts}
            path="/tshirts"
            element={<Tshirts />}
          />

        </Routes>
    </>
    )
}

export default SidebarMenu;

