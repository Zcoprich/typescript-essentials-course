interface ToDo{
    id: number;
    title: string;
    status: toDoStatus;
    completedOn?: Date;
}

enum toDoStatus {
    InProgress = "in-progress",
    ToDo = "todo",
    Done = "done"
}

const todoItems: ToDo[] = [
    { id: 1, title: "Learn HTML", status: toDoStatus.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: toDoStatus.InProgress },
    { id: 3, title: "Write the best app in the world", status: toDoStatus.ToDo },
]

function addTodoItem(todo: string): ToDo{
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: toDoStatus.ToDo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends{id: number}>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))