"use client";

import styles from "./page.module.css";

type Task = {
  id: number;
  text: string;
  time: string;
  tag: {
    name: string;
    color: string;
  };
  done: boolean;
};

const tasks: Task[] = [
  {
    id: 1,
    text: "オンライン説明会",
    time: "2026-02-12T10:00:00",
    tag: { name: "NextEvent", color: "blue" },
    done: false,
  },
];

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>リマインダーアプリへようこそ！</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className={styles.tag}
              style={{ backgroundColor: task.tag.color }}
            >
              {task.tag.name}
            </span>
            <span className={styles.text}>{task.text}</span>
            <span className={styles.time}>{task.time}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
