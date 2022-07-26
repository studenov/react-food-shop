import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        getFilteredCategories(name).then((data) => setMeals(data.meals));
    }, [name]);

    function goBack() {
        navigate(-1);
    }

    return (
        <>
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };
