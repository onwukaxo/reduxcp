import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const { list, filter } = useSelector((state) => state.tasks);

  const filteredList = list.filter((item) => {
    if (filter === "done") return item.isDone;
    if (filter === "notDone") return !item.isDone;
    return true; // "all"
  });

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      {filteredList.length > 0 ? (
        filteredList.map((item) => <Task key={item.id} task={item} />)
      ) : (
        <p className="text-gray-500 text-center">No tasks found</p>
      )}
    </div>
  );
};

export default ListTask;
