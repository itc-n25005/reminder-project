"use client";

import Image from "next/image";
import styles from "./page.module.css";

import Task from "@/app/components/Task";
import Todo from "@/app/components/Todo";
import ButtonLink from "@/app/components/ButtonLink";
import { task, todo } from "@/app/libs/microcms";

const tasks: task[] = [
  {
    id: 1,
    event: "オンライン説明会",
    date: "2026-02-12",
    time: "10:00",
    done: false,
  },
];

const todos: todo[] = [
  {
    id: 1,
    event: "起床",
    date: "2026-02-12",
    time: "07:00",
    done: false,
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>📌 Reminder</h1>
        <div className={styles.settingButton}>
          <ButtonLink href="/setting">
            <Image src="/setting.png" alt="設定" width={30} height={30} />
          </ButtonLink>
        </div>
      </div>
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
