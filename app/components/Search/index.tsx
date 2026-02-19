import styles from "./index.module.css";

export default function Search() {
  return (
    <form className={styles.searchForm}>
      <label className={styles.search}>
        <input type="text" placeholder="検索" className={styles.searchInput} />
        <button type="submit">検索</button>
      </label>
    </form>
  );
}
