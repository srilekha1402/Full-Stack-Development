// Parent.js
import Child from "./Child";

const Parent = () => {
  const data = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com"
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Pass Object via Props</h1>
      <Child data={data} />
    </div>
  );
};

export default Parent;