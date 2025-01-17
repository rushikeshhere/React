import styles from "./CurrentTime.module.css";
function CurrentTime({ time }) {
  return (
    <p className={`lead ${styles.mine}`}>This is the current time : {time}</p>
  );
}
export default CurrentTime;
