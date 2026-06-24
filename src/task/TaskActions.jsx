export default function TaskActions({ onAddClick, onDeleteAllClick }) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-80"
          style={{
            background: "rgba(59, 130, 246, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(59, 130, 246, 0.5)",
          }}
          onClick={onAddClick}
        >
          Add Task
        </button>
        <button
          className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-80"
          style={{
            background: "rgba(239, 68, 68, 0.3)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(239, 68, 68, 0.5)",
          }}
          onClick={onDeleteAllClick}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
