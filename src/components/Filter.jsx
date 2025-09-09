import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/taskSlice";

const Filter = () => {
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 mb-6">
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={`px-3 py-1 rounded ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("done"))}
        className={`px-3 py-1 rounded ${
          filter === "done" ? "bg-green-500 text-white" : "bg-gray-200"
        }`}
      >
        Done
      </button>
      <button
        onClick={() => dispatch(setFilter("notDone"))}
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
