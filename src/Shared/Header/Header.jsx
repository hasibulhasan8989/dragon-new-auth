import logo from '../../assets/pictures/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center space-y-5'>
            <img src={logo} alt="logo" className=' mx-auto' />
            <p className='text-lg dark1'>Journalism Without Fear or Favour</p>
            <p className='text-xl dark1'> <span className='text-black'>{moment().format("dddd,")}</span>  {moment().format("MMMM DD, YYYY,")}</p>

        </div>
    );
};

export default Header;