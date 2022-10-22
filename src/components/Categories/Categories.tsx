import { FiPlus } from "react-icons/fi";
import { ICategoryItem } from "../../models/ICategoryItem";
import CategoryItem from "./CategoryItem/CategoryItem";
import { RiBillLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./styles.css";

type Props = {};

const CATEGORIES: ICategoryItem[] = [
  {
    name: "Bills",
    icon: <RiBillLine />,
    iconColor: "#08B681",
    amount: 2350000,
  },
  {
    name: "Education",
    icon: <IoSchoolOutline />,
    iconColor: "#EABB73",
    amount: 1250000,
  },
  {
    name: "Utility",
    icon: <IoHeadsetOutline />,
    iconColor: "#FF9D9C",
    amount: 4334200,
  },
  {
    name: "Shopping",
    icon: <HiOutlineShoppingBag />,
    iconColor: "#A078FF",
    amount: 1266000,
  },
  {
    name: "Bills",
    icon: <RiBillLine />,
    iconColor: "#08B681",
    amount: 2350000,
  },
  {
    name: "Education",
    icon: <IoSchoolOutline />,
    iconColor: "#EABB73",
    amount: 1250000,
  },
  {
    name: "Utility",
    icon: <IoHeadsetOutline />,
    iconColor: "#FF9D9C",
    amount: 4334200,
  },
  {
    name: "Shopping",
    icon: <HiOutlineShoppingBag />,
    iconColor: "#A078FF",
    amount: 1266000,
  },
];

const Categories = (props: Props) => {
  return (
    <>
      <div className="categories__container">
        <div className="main__title">Categories</div>
        <div className="icon__container">
          <FiPlus className="plus__icon" />
        </div>
      </div>
      <div className="category__items">
        {CATEGORIES.map((category) => (
          <div className="category__item">
            <CategoryItem key={category.name} category={category} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
