function SidebarMenu () {
       const links = [
        {title: "sweatshirt"},
        {title: "blouses"},
        {title: "t-shirts"},
        {title: "jeans"},
        {title: "skirts"},
        {title: "dresses"},
        {title: "sales"},
        {title: "news"},
       ]
    return (
        <>
         {links.map(link=>(
            <div>
                <div>
                    <h1 className="cursor-pointer hover:font-bold ml-5 uppercase font-semibold font-libre">{link.title}</h1>
                </div>
            </div>
         ))

        }
    </>
    )
}

export default SidebarMenu;

