import { Link } from "react-router-dom";


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

    </>
    )
}

export default SidebarMenu;

