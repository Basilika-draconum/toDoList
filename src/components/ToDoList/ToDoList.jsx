import css from './todoList.module.scss';
export const ToDoList = ({ toDos, onChecked, onOpenModal }) => {
  return (
    <>
      <div className={css.listContainer}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {toDos.map(({ title, description, isDone, id }) => (
              <tr
                onClick={() => onOpenModal({ title, description, isDone })}
                className={css.listItem}
                key={id}
              >
                <td>{Number(id)}</td>
                <td>
                  {title.length > 12 ? title.slice(0, 12) + '...' : title}
                </td>
                <td>
                  {description.length > 12
                    ? description.slice(0, 12) + '...'
                    : description}
                </td>
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={isDone}
                    onClick={e => {
                      onChecked(id);
                      e.stopPropagation();
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
