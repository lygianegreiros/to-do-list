const apiUrl = 'http://localhost:3000/tasks';

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Função para buscar e exibir as tarefas
    const loadTasks = async () => {
        const response = await fetch(apiUrl);
        const tasks = await response.json();
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.textContent = task.title;
            if (task.completed) {
                taskElement.classList.add('completed');
            }
            taskElement.addEventListener('click', () => toggleTask(task._id, task.completed));
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', () => deleteTask(task._id));
            taskElement.appendChild(deleteButton);
            taskList.appendChild(taskElement);
        });
    };

    // Adicionar nova tarefa
    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const newTask = { title: taskInput.value };
        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });
        taskInput.value = '';
        loadTasks();
    });

    // Alternar tarefa entre completa/incompleta
    const toggleTask = async (id, completed) => {
        await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: !completed })
        });
        loadTasks();
    };

    // Deletar tarefa
    const deleteTask = async (id) => {
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        loadTasks();
    };

    
    loadTasks();
});
