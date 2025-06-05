import { useParams } from "react-router-dom";

export default function Contest() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1 className="text-5xl tracking-tighter text-center p-12">
        Contest Page
      </h1>
    </>
  );
}
