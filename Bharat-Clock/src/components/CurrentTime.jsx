function CurrentTime() {
  let time = new Date();

  return (
    <p className="lead" style={{ margin: "10px" }}>
      This is the current time : {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
