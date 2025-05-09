function ImageTitle ({title}) {
    return (
        <button className="text-4xl font-Playfair z-10 top-50 mb-5 md:mb-0 hover:text-purple-900">
        <p className="bg-purple-300  w-58 h-16 flex justify-center items-center bg-opacity-45 hover:bg-opacity-50 p-5">
            {title}
        </p>
    </button>
    )
}
export default ImageTitle