"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";
import Search from "@/app/components/Search";
import Task from "@/app/components/Task";
import Todo from "@/app/components/Todo";
import ButtonLink from "@/app/components/ButtonLink";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [todos, setTodos] = useState([]);

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
        <Search />
        <li className={styles.settingButton}>
          <Link href="/setting">
            <Image src="/setting.png" alt="設定" width={30} height={30} />
          </Link>
        </li>
      </div>

      <h2 className={styles.subtitle}>今後の予定</h2>
      <Task tasks={tasks} />
      <div className={styles.taskLink}>
        <ButtonLink href="/Task">もっとみる</ButtonLink>
        <ButtonLink href="/Taskadd">追加</ButtonLink>
      </div>
      <h3 className={styles.subtitle}>定期リマインダー</h3>
      <Todo todos={todos} />
      <div className={styles.todoLink}>
        <ButtonLink href="/Todo">もっとみる</ButtonLink>
        <ButtonLink href="/Todoadd">追加</ButtonLink>
      </div>
    </main>
  );
}
