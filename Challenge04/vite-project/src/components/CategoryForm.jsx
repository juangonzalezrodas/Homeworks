const CategoryForm = ({ category, setCategory, onAddCategory }) => {
    return (
    <div>
        <h2>Añadir nueva categoria</h2>
        <div>
        <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Ingrese la categoria"
        />
        <button
            onClick={onAddCategory}
        >
            Add Category
        </button>
        </div>
    </div>
    );
};

export default CategoryForm;