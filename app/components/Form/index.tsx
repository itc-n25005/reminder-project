"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
};

export default function TaskForm({ onClose }: Props) {
  const [title, setTitle] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        datetime,
        done: false,
        notified: false,
      }),
    });

    onClose(); // フォーム閉じる
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>タスク追加</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="タイトル"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
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
