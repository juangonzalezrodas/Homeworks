import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteItem } from "../features/firestore/firestoreThunks";
import FirestoreForm from "./FirestoreForm";

export default function FirestoreList() {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.firestore);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
    dispatch(fetchData());
    }, [dispatch]);

    return (
    <div>
        <h2>Firestore Items</h2>
        <FirestoreForm selected={selected} />
        <ul>
        {items.map((item) => (
            <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => setSelected(item)}>Editar</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>Eliminar</button>
            </li>
        ))}
        </ul>
    </div>
    );
}
