type headerProp = {
  header: string;
};

export default function Props({ header }: headerProp) {
  const clickedProp = () => {
    prompt(`the prop is clicked`);
  };
  return (
    <div>
      <h1>{header}</h1>
      <p>{header}</p>
      <button onClick={clickedProp}>{header}</button>
    </div>
  );
}
