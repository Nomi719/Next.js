function Header(){

    return(
<>

{/* <h1 className="text-6xl text-center my-2 bg-white text-black shadow-neutral-600">HEADER</h1> */}
<nav className="text-6xl text-center my-2 bg-white text-black shadow-neutral-600">
    <div className="flex justify-between items-center py-4 px-9">
            <div className="text-fuchsia-500 hover:text-fuchsia-700 cursor-pointer">logo</div>
        <div className="flex items-center justify-around gap-3 font-mono">
            <a href="#" className="text-lg font-bold text-black hover:text-blue-500">Home
                </a>
                <a href="#" className="text-lg font-bold text-black hover:text-blue-500">About
                    </a>
                    <a href="#" className="text-lg font-bold text-black hover:text-blue-500">Contact
                        </a>
                        
        </div>
    </div> 
</nav>
</>

    )
}


export default Header