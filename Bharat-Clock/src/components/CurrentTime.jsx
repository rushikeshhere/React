import styles from "./CurrentTime.module.css";
function CurrentTime({ time, date }) {
  return (
    <p className={`lead ${styles.mine}`}>
      This is the current time :{date} -{""} {time}
    </p>
  );
}
export default CurrentTime;
