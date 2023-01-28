import { nanoid } from "nanoid";
import update from "immutability-helper";
import { useCallback, useState } from "react";

import useWindowWidth from "../hooks/useWindowWidth";
import { useTodoStore } from "../contexts/TodoContext";
import { observer } from "mobx-react-lite";

import Filters from "./Filters";
import TaskItem from "./TaskItem";

import "../style/TasksList.scss";

const TasksList = observer(function TasksList() {
  const [cards, setCards] = useState([
    {
      id: nanoid(),
      description: "Complete online JavaScript course",
      active: false,
    },
    {
      id: nanoid(),
      description: "Jog around the park 3x",
      active: true,
    },
    {
      id: nanoid(),
      description: "10 minutes meditation",
      active: true,
    },
    {
      id: nanoid(),
      description: "Read for 1 hour",
      active: true,
    },
    {
      id: nanoid(),
      description: "Pick up groceries",
      active: true,
    },
    {
      id: nanoid(),
      description: "Complete Todo App on Frontend Mentor",
      active: true,
    },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);
  const renderCard = useCallback((card, index) => {
    return (
      <TaskItem
        key={card.id}
        index={index}
        id={card.id}
        description={card.description}
        active={card.active}
        moveCard={moveCard}
      />
    );
  }, []);

  const { tasks, taskCounter, clearTasks, filter } = useTodoStore();

  // const showTasks = useCallback((card, index) => {
  //   const allTasks = tasks.map(({ id, description, active }) => (
  //     <TaskItem
  //       key={id}
  //       id={id}
  //       index={index}
  //       description={description}
  //       active={active}
  //       moveCard={moveCard}
  //     />
  //   ));
  //   const activeTasks = tasks.map(({ id, description, active }) =>
  //     active ? (
  //       <TaskItem
  //         key={id}
  //         id={id}
  //         index={index}
  //         description={description}
  //         active={active}
  //         moveCard={moveCard}
  //       />
  //     ) : null
  //   );
  //   const completedTasks = tasks.map(({ id, description, active }) =>
  //     !active ? (
  //       <TaskItem
  //         key={id}
  //         id={id}
  //         index={index}
  //         description={description}
  //         active={active}
  //         moveCard={moveCard}
  //       />
  //     ) : null
  //   );
  //   switch (filter) {
  //     case "all":
  //       return allTasks;
  //     case "active":
  //       return activeTasks;
  //     case "completed":
  //       return completedTasks;
  //     default:
  //       return allTasks;
  //   }
  // }, []);
  return (
    <section className="list">
      <ul>
        {/* {showTasks()} */}
        {cards.map((card, i) => renderCard(card, i))}
      </ul>

      <div className="summary">
        <p className="task_counter">{taskCounter()} items left</p>
        {useWindowWidth() < 376 ? null : <Filters filter={filter} />}
        <button
          onClick={() => clearTasks()}
          className="clear_btn"
        >
          Clear Completed
        </button>
      </div>
    </section>
  );
});

export default TasksList;
