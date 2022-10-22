import { FiPlus } from "react-icons/fi";
import { BsHouseDoor, BsBarChart } from "react-icons/bs";
import "./styles.css";
import WalletItem from "./WalletItem/WalletItem";
import { IWalletItem } from "../../models/IWalletItem";
type Props = {};

const WalletItems: IWalletItem[] = [
  {
    name: "Home Wallet",
    icon: <BsHouseDoor />,
    iconColor: "#7133FF",
    amount: 2350000,
  },
  {
    name: "Investment",
    icon: <BsBarChart />,
    iconColor: "#FF9065",
    amount: 8750000,
  },
  {
    name: "Home Wallet",
    icon: <BsHouseDoor />,
    iconColor: "#7133FF",
    amount: 2350000,
  },
  {
    name: "Investment",
    icon: <BsBarChart />,
    iconColor: "#FF9065",
    amount: 8750000,
  },
];

const Wallets = (props: Props) => {
  return (
    <>
      <div className="wallets__container">
        <div className="main__title">Wallets</div>
        <div className="icon__container">
          <FiPlus className="plus__icon" />
        </div>
      </div>
      <div className="wallet__items">
        {WalletItems.map((walletItem) => (
          <div className="wallet__item">
            <WalletItem key={walletItem.name} walletItem={walletItem} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Wallets;
