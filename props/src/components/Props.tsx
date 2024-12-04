type headerProp = {
  header: string;
};

type Obj = {
  obj: {
    name: string;
    age: number;
    cgpa: number;
  };
};

export default function Props({ header, obj }: headerProp & Obj) {
  const clickedProp = () => {
    alert(`your cgpa is ${obj.cgpa}`);
    console.log(header, obj);
  };
  return (
    <div>
      <h1>{obj.name}</h1>
      <p>{obj.cgpa}</p>
      <button onClick={clickedProp}>{header}</button>
    </div>
  );
}
