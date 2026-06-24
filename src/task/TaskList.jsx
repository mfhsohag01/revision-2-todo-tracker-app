import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="[&>td]:align-baseline [&>td]:px-4 [&>td]:py-2"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <td>
                <button onClick={() => onFav(task.id)}>
                  {task.isFavorite ? (
                    <FaStar color="yellow" />
                  ) : (
                    <FaStar color="gray" />
                  )}
                </button>
              </td>
              <td>{task.title}</td>
              <td>
                <div>{task.description}</div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag) => (
                    <li key={tag}>
                      <span
                        className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]"
                        style={{
                          background: "rgba(0, 217, 145, 0.25)",
                          border: "1px solid rgba(0, 217, 145, 0.4)",
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    className="text-red-400 hover:text-red-300 transition-colors"
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    onClick={() => onEdit(task)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
