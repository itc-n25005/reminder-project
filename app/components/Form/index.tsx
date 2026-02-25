"use client";

import { useState } from "react";

type Props = {
  type: "task" | "todo";
  onAdd: (data: {
    event: string;
    date: string;
    time: string;
    done: boolean;
  }) => void;
  onClose: () => void;
};

export default function TaskForm({ onClose }: Props) {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>追加</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="予定"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <button type="submit">保存</button>
          <button type="button" onClick={onClose}>
            キャンセル
          </button>
        </form>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
};
