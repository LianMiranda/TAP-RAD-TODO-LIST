class taskController{
    constructor(){
        this.btnAddTask = document.querySelector("#icon-plus")
        this.addTask = document.querySelector("#task");
        this.init();
        this.closetask();
    }

    init(){
        this.btnAddTask.addEventListener("click", () =>{

            const view = new viewTask();
            this.addTask.innerHTML = view.render();
        })
    }

    closetask(){
            const send = document.querySelector("#send-task")
            //Tratar e salvar os dados aqui antes de excluir a task 
            send.addEventListener("click", () =>{                 
                this.addTask.innerHTML = "" 
            })
        
        }
    }
