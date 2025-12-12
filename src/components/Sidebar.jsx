import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import React from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

export default function Sidebar({
  sections = [],
  activeId,
  onSelect,
  
  onAddCustom,
  onDelete,
  onReorder,
}) {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 text-gray-100">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Sections</h2>

    
  <button
    onClick={onAddCustom}
    className="text-sm px-2 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-2"
  >
    <FiPlus /> Add
  </button>

      </div>


      {/* DRAGGABLE LIST */}
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;
          onReorder(result.source.index, result.destination.index);
        }}
      >
        <Droppable droppableId="sections">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2">
              
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided) => (
                    <div
                      className="flex items-center justify-between"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                    >
                      {/* Drag Handle */}
                      <div
                        {...provided.dragHandleProps}
                        className="cursor-grab pr-2 text-gray-400 hover:text-gray-200"
                      >
                        ☰
                      </div>

                      {/* Select Button */}
                      <button
                        onClick={() => onSelect(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-md transition ${
                          activeId === section.id
                            ? "bg-indigo-600 text-white"
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                        }`}
                      >
                        <div className="font-medium">{section.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{section.type}</div>
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => onDelete(section.id)}
                        className="ml-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}

            </div>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  );
}
