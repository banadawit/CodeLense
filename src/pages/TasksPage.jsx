import { useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix Login Bug", status: "In Progress", assignee: "Bana" },
    { id: 2, title: "Improve Dashboard UI", status: "Pending", assignee: "Miki" },
    { id: 3, title: "Add Unit Tests", status: "Completed", assignee: "Team" },
  ]);

  const [newTask, setNewTask] = useState({ title: "", status: "Pending", assignee: "" });
  const [editingTask, setEditingTask] = useState(null);

  // ADD TASK
  const addTask = () => {
    if (!newTask.title.trim()) return;

    setTasks([...tasks, { id: Date.now(), ...newTask }]);
    setNewTask({ title: "", status: "Pending", assignee: "" });
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // EDIT TASK (Save)
  const saveTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id ? editingTask : task
      )
    );
    setEditingTask(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Task Management</h1>

      {/* ADD TASK SECTION */}
      <div className="mb-6 p-4 border rounded-lg bg-white shadow">
        <h2 className="text-xl font-semibold mb-3">Add New Task</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          <input
            type="text"
            placeholder="Task Title"
            className="border p-2 rounded"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />

          <select
            className="border p-2 rounded"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <input
            type="text"
            placeholder="Assignee"
            className="border p-2 rounded"
            value={newTask.assignee}
            onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
          />
        </div>

        <button
          onClick={addTask}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>

      {/* TASK LIST */}
      <div className="p-4 border rounded-lg bg-white shadow">
        <h2 className="text-xl font-semibold mb-3">Tasks List</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Title</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Assignee</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="border p-2">{task.title}</td>
                <td className="border p-2">{task.status}</td>
                <td className="border p-2">{task.assignee}</td>

                <td className="border p-2 flex gap-2">
                  {/* EDIT BUTTON */}
                  <button
                    onClick={() => setEditingTask(task)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editingTask && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold mb-3">Edit Task</h3>

            <input
              type="text"
              className="border w-full p-2 rounded mb-3"
              value={editingTask.title}
              onChange={(e) =>
                setEditingTask({ ...editingTask, title: e.target.value })
              }
            />

            <select
              className="border w-full p-2 rounded mb-3"
              value={editingTask.status}
              onChange={(e) =>
                setEditingTask({ ...editingTask, status: e.target.value })
              }
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <input
              type="text"
              className="border w-full p-2 rounded mb-3"
              value={editingTask.assignee}
              onChange={(e) =>
                setEditingTask({ ...editingTask, assignee: e.target.value })
              }
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingTask(null)}
                className="bg-gray-500 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>

              <button
                onClick={saveTask}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
