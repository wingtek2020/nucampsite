import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../assets/img/logo.png';

const Header = () => {
    return (
        <div>
        <Navbar dark color='primary' sticky='top' expand='md'>
           <Container>
             <NavbarBrand href='/'>
               <img src={NucampLogo} alt='nucamp logo' />
             </NavbarBrand>
           </Container>
         </Navbar>
      </div>
    );
};

export default Header;