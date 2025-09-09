import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask = () => {
  // ✅ Local state to store the input value
  const [description, setDescription] = useState("");

  // ✅ Redux dispatch function to trigger actions
  const dispatch = useDispatch();

  // ✅ Handler for adding a task
  const handleAdd = () => {
    // ⚠️ Prevents adding empty or whitespace-only tasks
    if (description.trim()) {
      // ✅ Dispatches the addTask action with the description
      dispatch(addTask(description));

      // ✅ Clears the input field after adding
      setDescription("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      {/* Input field for task description */}
      <input
        type="text"
        placeholder="Enter task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} // updates local state
        className="border rounded p-2 w-64"
      />

      {/* Add button that triggers handleAdd */}
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
