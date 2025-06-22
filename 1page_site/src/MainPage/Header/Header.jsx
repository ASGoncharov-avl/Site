
import Grid2 from './Grid2';
import Grid3 from './Grid3';
import './Header.css'

function Header (){

    return (
    <header>
        <div className="header">
            <img src={`${process.env.PUBLIC_URL}/Components/img/RadRaylogo.png`}  alt="RadRay" />
        </div>
        <Grid2 />
        <div></div>
        <Grid3 />
        <div></div>
    </header>
    )
}

export default Header;