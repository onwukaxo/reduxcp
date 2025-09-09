import "./App.css";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
}

export default App;
