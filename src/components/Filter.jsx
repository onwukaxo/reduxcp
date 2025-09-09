import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/taskSlice";

const Filter = () => {
  // ✅ Access the current filter value from Redux store
  const filter = useSelector((state) => state.tasks.filter);

  // ✅ Dispatch function to trigger filter change
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 mb-6">
      {/* Button for showing all tasks */}
      <button
        onClick={() => dispatch(setFilter("all"))} // ✅ Sets filter to "all"
        className={`px-3 py-1 rounded ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>

      {/* Button for showing only completed tasks */}
      <button
        onClick={() => dispatch(setFilter("done"))} // ✅ Sets filter to "done"
        className={`px-3 py-1 rounded ${
          filter === "done" ? "bg-green-500 text-white" : "bg-gray-200"
        }`}
      >
        Done
      </button>

      {/* Button for showing only not completed tasks */}
      <button
        onClick={() => dispatch(setFilter("notDone"))} // ✅ Sets filter to "notDone"
        className={`px-3 py-1 rounded ${
          filter === "notDone" ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
      >
        Not Done
      </button>
    </div>
  );
};

export default Filter;
