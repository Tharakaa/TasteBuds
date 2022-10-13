//import { Link } from "react-router-dom";
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="wrapper">
      <div className="top"> 
<span className="logo">TasteBuds </span>
</div>

      <div className="items">

      <div className="item">
      <SearchIcon/>
          <input type="text" placeholder="Search Here"/>
          
         <NotificationsIcon className="icon"/>
         
      </div>
      <div className="item"><FormatListBulletedIcon className="icon"/></div>
      <div className="item"> 
      <img 
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAMAAAD0BqoRAAAAMFBMVEXk5ueutLfMz9GrsbXn6erq7O3c3+CorrKzuLvR1Nbh4+TW2dq/w8a6v8LGyszDx8k/6w4EAAADcUlEQVR4nO2ay5bbIAxADci8wf//t8XxNHHTJCBsyekpdzGb2dwIIQPSNA0Gg8FgMBgMBoPBYDAYfATmAlxtsQEAOji5xLhkFzxcrQUQohVC/SCEzfpKKfBSmKKxRxnr/EVOMC3iSWdzUlZeEqe5xOeFzw0j9MztAz69is8jUAtzlEC/XLB9mBJrNoGr+KxRsppPCUJdaIUtShDepvQTmklIN/qUeskj5JuFhEoc6waxLYk2JUmvBBIhVIqApzdCCZV1IxfKOCNhAvG6aaRQ2W+0X7h5QRtRBwktJARpJoFrrdY7FGnlTnghYTJhJiHK9Q5Ll0hdi0a6bDPmA7LDkQVptl1CKpMZ+b4QEZ4A8AV7g+yYBKFPSAgyI9cppKiOJC03kNdGVNsfeVj7P4268+j7jMgyu/Eq+zdEQl9YITsPI5Rfke/70vaeRujO/t93Yus91VLe2GKHkKF8jej71pI+RgDeR0VKIfxDBP0tG53bKhG/taODpKhfa7CZpCL5sx9yuxlqn1UJ84Sk6K6ze2otEdY1W2l/YVeEryJ/KjWeJZX9ssaI4uvU3O7b1TApO7E22Oodv8gqtPKxCCjB0BB5ppTK951jvpz+Q2mW9pWTMjawd7J/O03O3iYhdjpKpcCeQXunWedUNMw6o1H+2Cj9VfF5SIHXQeacpQt6unySZfoZ9LlzpRCs4dA6uBxjsispxVug/Po/7pGIGXzIS7L3KZ97XhujhI3ZaWCLV/n13i1WPW0y8bTjlEhScwxIbZvreejotZZRdglAuvVg0kubzcPKRLryBOBS+/Fxt4I2e4qcAp/ff8eqkYqnT7e9mxBrD1Q6dfYHpvxhY7XG6UQncIfi84jTck6Og/48sYZxEu6EWgDy8ILtnQ5Pt4GPvRvsjdLB01y5mZ0YoA2TDwjNvc2ijxx4UYJ87ordlXrvBajxMBYlMqGVjmpJF6EVhW8ndTzKIpWQQersgGCUkINS7WOh/Uq4Hhe9EO7pHfX42U97dvd3iHGo2Fq8ZxafgmmsSvT77E5jS9n39Yd7aGuadE+H9Bg1NUyBL0RtmdQ+xH8GLWUSFkahUpPqTVzGvF5pmAVgqo53o6WW2yA500g0jCfMPdPFR6hOS3U09A8aVfc/u1Gtb6oVN7WWjpfchMqi3Z6iWakJDQaDwWDwL/ML6WwreR2UNC4AAAAASUVORK5CYII="
      alt=""
      className="avatar"/>
      </div>

      </div>

      </div>
    </div>
  )
};

export default Navbar;
