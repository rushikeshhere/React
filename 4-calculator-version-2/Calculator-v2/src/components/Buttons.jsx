import styles from "./Buttons.module.css";

const Buttons = ({ handleButtonClick }) => {
  let buttonNames = [
    "AC",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttons}>
      {buttonNames.map((buttonName) => (
        <button
          className={styles.button}
          key={buttonName}
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default Buttons;
