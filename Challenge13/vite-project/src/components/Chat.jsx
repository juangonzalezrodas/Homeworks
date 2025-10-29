// src/components/Chat.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ref, push, onValue } from "firebase/database";

export default function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

  // Escuchar mensajes en tiempo real
    useEffect(() => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        const messageList = data ? Object.values(data) : [];
        setMessages(messageList);
    });
    }, []);

  // Enviar mensaje
    const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    const messagesRef = ref(db, "messages");
    await push(messagesRef, {
        text: message,
        timestamp: Date.now(),
    });

    setMessage("");
    };

    return (
        <div style={styles.container}>
        <h2>Chat contigo mismo</h2>
        <div style={styles.chatBox}>
        {messages.map((msg, index) => (
            <p key={index} style={styles.message}>
            {msg.text}
            </p>
        ))}
        </div>

        <form onSubmit={sendMessage} style={styles.form}>
        <input
            style={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
        />
        <button style={styles.button}>Enviar</button>
        </form>
    </div>
    );
}

const styles = {
    container: {
    maxWidth: 400,
    margin: "40px auto",
    padding: 20,
    border: "2px solid #ddd",
    borderRadius: 12,
    textAlign: "center",
    background: "#f9f9f9",
    },
    chatBox: {
    height: 300,
    overflowY: "auto",
    marginBottom: 10,
    border: "1px solid #ccc",
    padding: 10,
    background: "#fff",
    },
    message: {
    background: "#e3f2fd",
    padding: "6px 10px",
    borderRadius: 6,
    marginBottom: 6,
    textAlign: "left",
    },
    form: {
    display: "flex",
    gap: 10,
    },
    input: {
    flex: 1,
    padding: 8,
    borderRadius: 6,
    border: "1px solid #ccc",
    },
    button: {
    padding: "8px 14px",
    background: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    },
};
