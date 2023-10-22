function MarqueWork({ title, imagePath, link }) {
    return (
        <a href={link} className='max-w-[400px] hover:bg-secondary hover:text-primary transition-all duration-300 text-center p-2 border border-secondaryLight '>
            <div>
                <h3 className="font-bold text-2xl">{title}</h3>
            </div>
            <img className="aspect-square object-cover py-4" src={imagePath} alt="title" />
        </a>
    )
}

export default MarqueWork