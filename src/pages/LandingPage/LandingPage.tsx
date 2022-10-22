import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import "./styles.css";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="grid">
      <div>
        <Navbar />
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default LandingPage;
