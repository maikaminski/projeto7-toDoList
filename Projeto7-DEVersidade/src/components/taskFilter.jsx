export default function TaskFilter({ currentFilter, onChangeFilter }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => onChangeFilter("all")}
        className={`px-3 py-1 rounded ${
          currentFilter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Todas
      </button>

      <button
        onClick={() => onChangeFilter("pending")}
        className={`px-3 py-1 rounded ${
          currentFilter === "pending" ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
      >
        Pendentes
      </button>

      <button
        onClick={() => onChangeFilter("completed")}
        className={`px-3 py-1 rounded ${
          currentFilter === "completed" ? "bg-green-500 text-white" : "bg-gray-200"
        }`}
      >
        Concluídas
      </button>
    </div>
  );
}
