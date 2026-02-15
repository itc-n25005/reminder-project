import styles from "./page.module.css";

type Reminder = {
  id: string;
  title: string;
  time: string;
};

type Props = {
  reminders: Reminder[];
};

export default function ReminderList({ reminders }: Props) {
  if (reminders.length === 0) {
    return <p>予定はありません</p>;
  }
  return (
    <ul className={styles.list}>
      {reminders.map((reminder) => (
        <li key={reminder.id} className={styles.tasksItem}>
          <div className={styles.text}>{reminder.title}</div>
          <div className={styles.time}>{reminder.time}</div>
        </li>
      ))}
    </ul>
  );
}
