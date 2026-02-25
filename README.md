This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## リマインダー

イベント表示
確認、通知、タグ付き

↓

予定から大きく変わってしまった

↓

確認、タグ機能がなくなった

# 作ったきっかけ

課題や締切の管理が苦手で、予定ギリギリだったり、過ぎていたりしていることが多かったので、管理できるようになりたいから。
定期は、今より早く家から出発したいと思っているがなかなかできなかったから。

# 通知

通知許可と通知時間は/Setting,
画面右の歯車のマークから行ける

通知は<h2 className={styles.subtitle}>通知設定</h2>

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
/>で設定できる。

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
      />で何分前に通知するかを決められる。

# 追加削除

<button onClick={() => setShowTaskForm(true)}>追加</button>で追加できる

buttonを押すとformが出てくる
内容は予定を入力できるテキストと日付と時間
項目をすべて入力すると、予定が表示される
削除ボタンを押すと、予定が消える
予定がないと「リマインダーがありません。
予定を追加してみましょう！」が表示される。
