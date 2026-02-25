import styles from "./index.module.css";
import { Task } from "@/app/libs/microcms";

type Props = {
  tasks: Task[];
  onDelete: (id: number) => void;
};

export default function TaskList({ tasks, onDelete }: Props) {
  if (tasks.length === 0) {
    return (
      <div className={styles.empty}>
        <p>リマインダーがありません。</p>
        <p>予定を追加してみましょう！</p>
      </div>
    );
  }

  return (
    <ul className={styles.reminderList}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.reminderItem}>
          <div className={styles.reminderContent}>
            <p className={styles.reminderText}>{task.event}</p>
            <p className={styles.reminderDate}>
              {new Date(task.date).toLocaleDateString()}
            </p>
            <p className={styles.reminderTime}>{task.time}</p>

            <button onClick={() => onDelete(task.id)}>削除する</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
