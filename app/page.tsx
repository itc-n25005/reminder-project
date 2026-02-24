"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";
import Setting from "@/app/components/Setting";
import Task from "@/app/components/Task";
import Todo from "@/app/components/Todo";
import Form from "@/app/components/Form";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    const savedTodos = localStorage.getItem("todos");

    if (savedTasks) setTasks(JSON.parse(savedTasks));
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      tasks.forEach((task: any) => {
        const taskDate = new Date(`${task.date}T${task.time}`);

        if (
          taskDate.getFullYear() === now.getFullYear() &&
          taskDate.getMonth() === now.getMonth() &&
          taskDate.getDate() === now.getDate() &&
          taskDate.getHours() === now.getHours() &&
          taskDate.getMinutes() === now.getMinutes() &&
          !task.done
        ) {
          new Notification("📌 リマインダー", {
            body: task.todo,
          });
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>📌 Reminder</h1>
        <li className={styles.settingButton}>
          <Link href="/setting">
            <Image src="/setting.png" alt="設定" width={30} height={30} />
          </Link>
        </li>
      </div>

      <h2 className={styles.subtitle}>今後の予定</h2>
      <Task tasks={tasks} />
      <div className={styles.taskLink}>
        <button onClick={() => setShowForm(true)}>追加</button>
        {showForm && <Form onClose={() => setShowForm(false)} />}
      </div>
      <h3 className={styles.subtitle}>定期リマインダー</h3>
      <Todo todos={todos} />
      <div className={styles.todoLink}>
        <button onClick={() => setShowForm(true)}>追加</button>
        {showForm && <Form onClose={() => setShowForm(false)} />}
      </div>
    </main>
  );
}
