"use client";

import React, { useEffect, useState } from "react";
import type { Task, Todo } from "@/app/libs/microcms";
import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";
import Form from "@/app/components/Form";
import TaskList from "./components/Task";
import TodoList from "./components/Todo";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showTodoForm, setShowTodoForm] = useState(false);

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

  const handleAddTask = (data: Omit<Task, "id">) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...data,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleAddTodo = (data: Omit<Todo, "id">) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      ...data,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDeleteTask = (id: string) =>
    setTasks((prev) => prev.filter((task) => task.id !== id));

  const handleDeleteTodo = (id: string) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>📌 Reminder</h1>
        <li className={styles.settingButton}>
          <Link href="/Setting">
            <Image src="/setting.png" alt="設定" width={30} height={30} />{" "}
          </Link>
        </li>
      </div>
      <h2>今後の予定</h2>

      <TaskList tasks={tasks} onDelete={handleDeleteTask} />

      <button onClick={() => setShowTaskForm(true)}>追加</button>

      {showTaskForm && (
        <Form
          type="task"
          onClose={() => setShowTaskForm(false)}
          onAdd={handleAddTask}
        />
      )}

      <h2>定期リマインダー</h2>

      <TodoList todos={todos} onDelete={handleDeleteTodo} />

      <button onClick={() => setShowTodoForm(true)}>追加</button>

      {showTodoForm && (
        <Form
          type="todo"
          onClose={() => setShowTodoForm(false)}
          onAdd={handleAddTodo}
        />
      )}
    </main>
  );
}
