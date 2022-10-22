import "./styles.css";
import { BiBell } from "react-icons/bi";
import Profile from "../SVG/Profile";
import Wallets from "../Wallets/Wallets";
import Categories from "../Categories/Categories";
import HorizontalSeparator from "../../tools/Separator/HorizontalSeparator";
type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="container">
      <div className="profile__container">
        <BiBell className="bell__icon" />
        <Profile width={60} height={60} />
      </div>
      <div className="wallets">
        <Wallets />
      </div>
      <HorizontalSeparator />
      <div className="categories">
        <Categories />
      </div>
    </div>
  );
};

export default SideBar;
