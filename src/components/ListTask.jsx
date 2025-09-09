import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  // ✅ Get the task list and active filter from Redux store
  const { list, filter } = useSelector((state) => state.tasks);

  // ✅ Apply filtering logic based on current filter value
  const filteredList = list.filter((item) => {
    if (filter === "done") return item.isDone;      // show only completed
    if (filter === "notDone") return !item.isDone;  // show only not completed
    return true; // "all" → show everything
  });

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      {/* ✅ Check if filtered list has tasks, else show fallback message */}
      {filteredList.length > 0 ? (
        filteredList.map((item) => (
          <Task key={item.id} task={item} /> // ✅ Pass task props to Task component
        ))
      ) : (
        <p className="text-gray-500 text-center">No tasks found</p>
      )}
    </div>
  );
};

export default ListTask;
