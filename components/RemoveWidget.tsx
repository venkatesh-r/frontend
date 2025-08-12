import axios from "axios";

interface RemoveWidgetProps {
  id: number;
  onRemove: () => void;
}

const RemoveWidget = ({ id, onRemove }: RemoveWidgetProps) => {
  const removeWidget = async () => {
    try {
      await axios.delete("http://localhost:5000/widgets/" + "" + id);
      onRemove();
    } catch (error) {
      console.error("Widget Error:", error);
    }
  };

  return (
    <>
      <button
        className="bg-white shadow-lg text-black mt-10 mb-5 py-2 px-8 rounded-full cursor-pointer"
        onClick={removeWidget}
      >
        Delete
      </button>
    </>
  );
};

export default RemoveWidget;
