import React, { FC } from "react";
import { ICategoryItem } from "../../../models/ICategoryItem";
import "./styles.css";

type Props = {
  category: ICategoryItem;
};

const CategoryItem: FC<Props> = ({ category }) => {
  return (
    <div className="categoryItem__container">
      <div
        className="category__item__icon__container"
        style={{
          backgroundColor: category.iconColor,
        }}
      >
        <div className="category__icon">{category.icon}</div>
      </div>
      <div className="category__item__details__container">
        <div className="category__item__name">{category.name}</div>
        <div className="category__item__amount">{`$${category.amount}`}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
