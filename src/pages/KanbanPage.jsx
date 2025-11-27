import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function KanbanPage() {
  const [columns, setColumns] = useState({
    todo: {
      name: "To Do",
      items: [
        { id: "1", title: "Design Login Page" },
        { id: "2", title: "Fix Navbar Styles" },
      ],
    },
    progress: {
      name: "In Progress",
      items: [
        { id: "3", title: "Build Dashboard Widgets" }
      ],
    },
    done: {
      name: "Completed",
      items: [
        { id: "4", title: "Set up Project Structure" }
      ],
    },
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Same column movement
    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }

    // Moving task to a different column
    else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Kanban Board</h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {Object.entries(columns).map(([columnId, column]) => (
            <div key={columnId} className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">{column.name}</h2>

              <Droppable droppableId={columnId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="min-h-[300px] p-2 bg-white rounded-lg"
                  >
                    {column.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="p-3 mb-3 bg-blue-50 border-l-4 border-blue-600 rounded shadow-sm cursor-pointer hover:shadow-md transition"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {item.title}
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
