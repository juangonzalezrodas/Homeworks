
import { useState } from "react";
import CategoryForm from "./CategoryForm";

const CategoryApp = () => {
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);

    const handleAddCategory = () => {
    if (category.trim() !== "") {
        setCategories(prevCategories => [...prevCategories, category]);
        setCategory("");
    }
    };

    return (
    <div>
        <div>
        <h1>
            Categorias
        </h1>
        
        <CategoryForm 
            category={category}
            setCategory={setCategory}
            onAddCategory={handleAddCategory}
        />
        <div>
            <h2>Categories List</h2>
            {categories.length === 0 ? (
            <p>sin categorias agregadas.</p>
            ) : (
            <ul>
                {categories.map((cat, index) => (
                <li 
                    key={index}
                >
                    {cat}
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
    </div>
    );
};

export default CategoryApp;