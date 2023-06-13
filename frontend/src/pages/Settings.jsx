import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../components/UI/Dropdown";
import {
  getTriviaCategories,
  updateCategory,
} from "../redux/triviaDataReducer";
import { Link } from "react-router-dom";

const Settings = () => {
  const dispatch = useDispatch();
  const { categories, categorySuccess } = useSelector(
    (state) => state.triviaData
  );
  const [categoriesArr, setCategoriesArr] = useState([]);

  const categoriesArray = (categories) => {
    for (let item in categories) {
      setCategoriesArr((prev) => [...prev, item]);
    }
  };

  useEffect(() => {
    dispatch(getTriviaCategories());
    if (categorySuccess) categoriesArray(categories);
  }, [dispatch, categorySuccess]);

  const handleSelectedItem = (item) => {
    let category = item.toLowerCase().split(" ").join("_").replace("&", "and");
    dispatch(updateCategory(category));
  };

  return (
    <div>
      <Dropdown list={categoriesArr} handleSelectedItem={handleSelectedItem} />
      <Link style={{ color: "white" }} to={"/trivia"}>
        next
      </Link>
    </div>
  );
};

export default Settings;
