import { Link } from "react-router-dom";


const menu = () => {


  const handleLinkClick = event =>{
    console.log("Link clicked");
    console.log(event.currentTarget)
  }

  return (
    <div id="main-content">
     <ul>
      <Link onClick={handleLinkClick} to="/simmered">Simmered</Link>
      {/* <li><Link onClick={handleLinkClick} to="/Simmered">{category[0]}</Link></li> */}
        {/* {category} */}
           
        <Link onClick={handleLinkClick} to="/wok">Wok</Link>
        <Link onClick={handleLinkClick} to="/pickle">Pickle</Link>
        <Link onClick={handleLinkClick} to="/fried">Fried</Link>
     </ul>
    </div>
  );
};
export default menu;
