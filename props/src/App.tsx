import Props from "./components/Props";

export default function App() {
  const obj = {
    name: `Rithvik`,
    age: 25,
    cgpa: 3.9,
  };
  return (
    <div>
      <h1>Understanding props</h1>
      <Props header="This is Prop 1" obj={obj} />
      <Props header="This is Prop 2" obj={obj} />
    </div>
  );
}
