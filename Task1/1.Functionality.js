// 1. Sample Data
const userData = { id: 1, name: "John Doe" };
const tasksData = [
    { userId: 1, task: "Write code" },
    { userId: 1, task: "Review PRs" }
];
// 2. Using Callbacks
function getUserData(callback) {
    setTimeout(() => {
        if (Math.random() > 0.1) {
            callback(null, userData);
        } else {
            callback("Error fetching user data", null);
        }
    }, 1000);
}

function getUserTasks(userId, callback) {
    setTimeout(() => {
        if (Math.random() > 0.1) {
            const tasks = tasksData.filter(task => task.userId === userId);
            callback(null, tasks);
        } else {
            callback("Error fetching tasks", null);
        }
    }, 1000);
}

// Invoke using callbacks
getUserData((err, user) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("User:", user);
    getUserTasks(user.id, (err, tasks) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Tasks:", tasks);
    });
});

// 3. Using Promises
function getUserDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(userData);
            } else {
                reject("Error fetching user data");
            }
        }, 1000);
    });
}

function getUserTasksPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                const tasks = tasksData.filter(task => task.userId === userId);
                resolve(tasks);
            } else {
                reject("Error fetching tasks");
            }
        }, 1000);
    });
}

// Invoke using promises
getUserDataPromise()
    .then(user => {
        console.log("User:", user);
        return getUserTasksPromise(user.id);
    })
    .then(tasks => {
        console.log("Tasks:", tasks);
    })
    .catch(error => {
        console.error(error);
    });

// 4. Using Async / Await
function getUserDataAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(userData);
            } else {
                reject("Error fetching user data");
            }
        }, 1000);
    });
}

function getUserTasksAsync(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                const tasks = tasksData.filter(task => task.userId === userId);
                resolve(tasks);
            } else {
                reject("Error fetching tasks");
            }
        }, 1000);
    });
}

async function fetchUserAndTasks() {
    try {
        const user = await getUserDataAsync();
        console.log("User:", user);
        const tasks = await getUserTasksAsync(user.id);
        console.log("Tasks:", tasks);
    } catch (error) {
        console.error(error);
    }
}

// Invoke using async/await
fetchUserAndTasks();

