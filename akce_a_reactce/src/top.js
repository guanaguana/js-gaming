const Header= (gaming)=>{
    return(
        <header>
            <h1>{gaming.title}</h1>
        </header>
    )
}

Header.defaultProps={
    title:"mudraptor"
};

export default Header