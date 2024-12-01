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

