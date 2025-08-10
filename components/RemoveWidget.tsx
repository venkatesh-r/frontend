import axios from "axios";

const RemoveWidget = ({ id }) => {
  const removeWidget = async (id: number) => {
    const updatedWidget = await axios.delete(
      "http://localhost:5000/widgets/" + "" + id
    );
  };

  return (
    <>
      <button
        className="bg-white text-black mt-10 mb-5 py-2 px-8 rounded-full"
        onClick={() => removeWidget(id)}
      >
        Delete
      </button>
    </>
  );
};

export default RemoveWidget;
