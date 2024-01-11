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
                    <h1>{link.title}</h1>
                </div>
            </div>
         ))

        }
    </>
    )
}

export default SidebarMenu;

