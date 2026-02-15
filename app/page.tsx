"use client";

import styles from "./page.module.css";
import ButtonLink from "./ButtonLink/page";

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

type Todo = {
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

const todos: Todo[] = [
  {
    id: 1,
    text: "起床",
    time: "2026-02-12T07:00:00",
    tag: { name: "Morning", color: "orange" },
    done: false,
  },
];

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>リマインダーアプリへようこそ！</h1>
      <h2 className={styles.subtitle}>今日の予定</h2>
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
      <h3 className={styles.subtitle}>定期リマインダー</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={styles.tag}
              style={{ backgroundColor: todo.tag.color }}
            >
              {todo.tag.name}
            </span>
            <span className={styles.text}>{todo.text}</span>
            <span className={styles.time}>{todo.time}</span>
          </li>
        ))}
      </ul>
      <div className={styles.reminderLink}>
        <ButtonLink href="/reminder">リマインダーを確認する</ButtonLink>
      </div>
    </main>
  );
}
