"use client";

import styles from "./page.module.css";

import Task from "@/app/components/Task/page";
import Todo from "@/app/components/Todo/page";
import ButtonLink from "@/app/ButtonLink/page";
import { task, todo } from "@/app/libs/microcms";

const tasks: task[] = [
  {
    id: 1,
    text: "オンライン説明会",
    time: "2026-02-12T10:00",
    tag: { name: "NextEvent", color: "blue" },
    done: false,
  },
];

const todos: todo[] = [
  {
    id: 1,
    text: "起床",
    time: "2026-02-12T07:00",
    tag: { name: "Morning", color: "orange" },
    done: false,
  },
];

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Reminder</h1>
      <h2 className={styles.subtitle}>今後の予定</h2>
      <Task tasks={tasks} />
      <div className={styles.taskLink}>
        <ButtonLink href="/task">もっと見る</ButtonLink>
        <ButtonLink href="/taskadd">追加</ButtonLink>
      </div>
      <h3 className={styles.subtitle}>定期リマインダー</h3>
      <Todo todos={todos} />
      <div className={styles.ReminderLink}>
        <ButtonLink href="/todo">もっと見る</ButtonLink>
        <ButtonLink href="/todoadd">追加</ButtonLink>
      </div>
    </main>
  );
}
