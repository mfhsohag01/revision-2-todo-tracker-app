import { useState } from "react";

export default function AddTaskModal({ onSave, taskToUpdate, onCloseClick }) {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    },
  );

  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setTask({ ...task, [name]: value });
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.07)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "white",
  };

  return (
    <>
      <div
        className="h-full w-full z-10 absolute top-0 left-0"
        style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      ></div>
      <form
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3"
        style={{
          background: "rgba(25, 29, 38, 0.75)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md px-3 py-2.5"
              style={inputStyle}
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md px-3 py-2.5 lg:min-h-[180px]"
              style={inputStyle}
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md px-3 py-2.5"
                style={inputStyle}
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md px-3 py-2.5"
                style={inputStyle}
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            type="button"
            className="rounded px-4 py-2 text-white transition-all hover:opacity-80"
            style={{
              background: "rgba(239,68,68,0.3)",
              border: "1px solid rgba(239,68,68,0.5)",
              backdropFilter: "blur(8px)",
            }}
            onClick={onCloseClick}
          >
            Close
          </button>
          <button
            type="button"
            className="rounded px-4 py-2 text-white transition-all hover:opacity-80"
            style={{
              background: "rgba(59,130,246,0.3)",
              border: "1px solid rgba(59,130,246,0.5)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => onSave(task, isAdd)}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
