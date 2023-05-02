import NavItems from "./NavItems";
import Cart from "./Cart.js"
import logoIcon from '../../assets/logo.png' 
import Auth from './Auth'
import { Link } from "react-router-dom";
import useConnectivityCheck from "../../utils/useConnectivityCheck";

const Title = () => {
    return (
      <>
        <Link to='/'>
        <img width='200px'
            className="logo"
            src={logoIcon}
          ></img>
        </Link>
         
        
      </>
    );
  };


  const HeaderComponent = () => {
    const connection = useConnectivityCheck();
    return (
      <div className="flex justify-between bg-pink-50 box-border shadow-md">
        <div>
          <div>
            <Title />
          </div>
        </div>
        <div className="">
            <NavItems />
          </div>
          <div className="pt-12" >
            {connection ? 'Online✅' :'Offline🔴'}
          </div>
          <div>
            <Auth />
          </div>
          <div className="cart-container">
            <Cart />
          </div>
          
         
        
      </div>
    );
  };
  
  export default HeaderComponent;