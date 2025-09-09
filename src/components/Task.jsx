import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "../redux/taskSlice";
import { useState } from "react";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleSave = () => {
    if (newDesc.trim()) {
      dispatch(editTask({ id: task.id, desc: newDesc }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white shadow p-3 rounded">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
          className="h-4 w-4"
        />
        {isEditing ? (
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="border p-1 rounded"
          />
        ) : (
          <p className={`${task.isDone ? "line-through text-gray-400" : ""}`}>
            {task.description}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
