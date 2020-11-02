let db;
const request = indexedDB.open("budget", 1);

// function for when the app comes back online to post pendings
function checkDatabase() {
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    const getAll = store.getAll();

    