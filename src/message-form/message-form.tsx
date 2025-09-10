import { useState, type FormEvent } from "react";

const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
const USER_ID = import.meta.env.VITE_USER_ID;

export const MessageForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const text = `New message from ${name}: ${message}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
    
    setName("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};
