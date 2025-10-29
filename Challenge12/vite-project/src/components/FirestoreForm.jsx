import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../features/firestore/firestoreThunks";

export default function FirestoreForm({ selected }) {
    const [name, setName] = useState(selected ? selected.name : "");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
    e.preventDefault();
    if (selected) {
        dispatch(updateItem({ id: selected.id, newData: { name } }));
    } else {
        dispatch(addItem({ name }));
    }
    setName("");
    };

    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Nombre del item"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">{selected ? "Actualizar" : "Agregar"}</button>
    </form>
    );
}
