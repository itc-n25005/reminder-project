"use client";

import { useEffect, useState } from "react";

import styles from "./index.module.css";

type Setting = {
  notificationEnabled: boolean;
  notifyBeforeMinutes: number;
};

export default function Setting() {
  const [setting, setSetting] = useState<Setting>({
    notificationEnabled: Notification.permission === "granted",
    notifyBeforeMinutes: 10,
  });
  useEffect(() => {
    const savedSetting = localStorage.getItem("setting");
    if (savedSetting) {
      setSetting(JSON.parse(savedSetting));
    }
  }, []);

  const saveSetting = (newSetting: Setting) => {
    setSetting(newSetting);
    localStorage.setItem("setting", JSON.stringify(newSetting));
    alert("保存しました");
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>⚙️ 設定</h1>
      </div>

      <h2 className={styles.subtitle}>通知設定</h2>
      <p>通知許可</p>
      <input
        type="checkbox"
        checked={setting.notificationEnabled}
        onChange={(e) => {
          const newSetting = {
            ...setting,
            notificationEnabled: e.target.checked,
          };
          saveSetting(newSetting);
        }}
      />

      <p>通知前の時間</p>
      <input
        type="number"
        value={setting.notifyBeforeMinutes}
        onChange={(e) => {
          const newSetting = {
            ...setting,
            notifyBeforeMinutes: parseInt(e.target.value, 10),
          };
          saveSetting(newSetting);
        }}
      />
    </main>
  );
}
