import { Link } from "react-router-dom";

// funktion för categoires menyn
function SidebarMenu () {
// en array med objekt som länkar till alla olika kategorier
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
        // mappar igenom varje länk och tar title som id för varje kategori
        <>        
         {links.map((link)=>(
            <div key={link.title}>
                <Link className="cursor-pointer hover:font-bold ml-5 uppercase font-semibold font-libre" key={link.title} to={link.path}>{link.title}</Link>
            </div>
         ))}

    </>
    )
}

export default SidebarMenu;

