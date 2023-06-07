const Navbar = () => {
    return ( 
        <div className="navbar">
       <h1>JP Blog</h1>
       <div className="links">
       <a href="/">Link1</a>
        <a href="/about">Link2</a>
        <a href="/create" style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px'

        }}>New blog post</a>
       </div>

        </div>
     );
}
 
export default Navbar;