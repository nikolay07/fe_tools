const baseUrl = 'http://5e4ebaa86272aa0014230ec4.mockapi.io/todolist';

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
}

export const createTask = (taskData) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
}

export const updateTask = (taskData, taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
}

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE'
    })
}