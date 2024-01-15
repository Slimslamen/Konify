import { Route, Routes, Link, } from "react-router-dom";
import TshirtList from "../Tshirts/TshirtList";

function SidebarMenu () {
    const links = [
        { title: "sweatshirts", path: "/sweatshirt" },
        { title: "blouses", path: "/blouses" },
        { title: "t-shirts", path: "/Tshirts" },
        { title: "jeans", path: "/jeans" },
        { title: "skirts", path: "/skirts" },
        { title: "dresses", path: "/dresses" },
        { title: "sales", path: "/sales" },
        { title: "news", path: "/news" },
      ];

    return (
        <>
         {links.map((link)=>(
            <div key={link.title}>
                <div>
                    <Link className="cursor-pointer hover:font-bold ml-5 uppercase font-semibold font-libre" key={link.title} to={link.path}>{link.title}</Link>
                </div>
            </div>
         ))}

        <Routes>
          <Route
            key={Tshirts}
            path="/Tshirts"
            element={<Tshirts />}
          />

        </Routes>
    </>
    )
}

export default SidebarMenu;

