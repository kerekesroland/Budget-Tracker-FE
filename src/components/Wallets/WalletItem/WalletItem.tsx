import "./styles.css";
import { IWalletItem } from "../../../models/IWalletItem";

type Props = {
  walletItem: IWalletItem;
};

const WalletItem = ({ walletItem }: Props) => {
  return (
    <div className="walletItem__container">
      <div
        className="wallet__item__icon__container"
        style={{
          backgroundColor: walletItem.iconColor,
        }}
      >
        <div className="wallet__icon">{walletItem.icon}</div>
      </div>
      <div className="wallet__item__details__container">
        <div className="wallet__item__name">{walletItem.name}</div>
        <div className="wallet__item__amount">{`$${walletItem.amount}`}</div>
      </div>
    </div>
  );
};

export default WalletItem;
