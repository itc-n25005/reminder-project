import style from "./index.module.css";
import { Todo } from "@/app/libs/microcms";

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
};

export default function TodoList({ todos, onDelete }: Props) {
  if (todos.length === 0) {
    return (
      <div className={style.empty}>
        <p>定期リマインダーがありません。</p>
        <p>予定を追加してみましょう！</p>
      </div>
    );
  }

  return (
    <ul className={style.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} className={style.todoItem}>
          <div className={style.todoContent}>
            <p className={style.todoText}>{todo.event}</p>
            <p className={style.todoDate}>
              {new Date(todo.date).toLocaleDateString()}
            </p>
            <p className={style.todoTime}>{todo.time}</p>

            <button onClick={() => onDelete(todo.id)}>削除する</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
