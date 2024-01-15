import { Link } from "react-router-dom";


function SidebarMenu () {
    const links = [
        { title: "sweatshirts", path: "/Sweatshirt" },
        { title: "blouses", path: "/Blouses" },
        { title: "t-shirts", path: "/Tshirts" },
        { title: "jeans", path: "/Jeans" },
        { title: "skirts", path: "/Skirts" },
        { title: "dresses", path: "/Dress" },
        { title: "sales", path: "/Sales" },
        { title: "news", path: "/News" },
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

