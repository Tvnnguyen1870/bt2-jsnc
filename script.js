class ToDo {
    constructor(date) {
        this.date = date;
        this.works = [];
    }

    addWork(work) {
        this.works.push(work);
    }

    // kiểm tra điều kiện thời gian
    // setTime(time) {
    //     if(this.time !== time){
    //        return console.log('time successful');
    //     }
    
    //     this.time = time;
    //     console.log('Please re-enter your time');
    // }
}

class ToDoList {
    constructor() {
        this.toDos = [];
    }

} 
const todoList = new ToDoList();

const todo1 = new ToDo('18-9-2023');
const todo2 = new ToDo('19-9-2023');
todo1.addWork("work 1");
todo1.addWork("work 2");
todo2.addWork('work 1');

// todo1.setTime('19-9-2023');
// todo2.setTime('19-9-2023');

console.log(todo1);
console.log(todo2);
