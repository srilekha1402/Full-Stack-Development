import { useState } from "react";

const Child = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
        onClick={() => setShow(true)}
      >
        Show Data
      </button>

      {show && (
        <table className="border-collapse border border-gray-500 mx-auto">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Name</th>
              <th className="border border-gray-500 px-4 py-2">Age</th>
              <th className="border border-gray-500 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">{data.name}</td>
              <td className="border border-gray-500 px-4 py-2">{data.age}</td>
              <td className="border border-gray-500 px-4 py-2">{data.email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Child;
