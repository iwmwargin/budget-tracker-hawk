// create variable to hold db connection
let db;

// establish a connection to IndexedDB database called "budget" and set it to version 1
const request = indexedDB.open("budget", 1);

// this event will emit if the database version changes (non-existent to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
      // save a reference to the database 
    const db = event.target.result;

  // create an object store (table) called `new_transaction`, set it to have an auto incrementing primary key of sorts 
    db.createObjectStore("new_transaction", {autoIncrement: true})
}

// upon a successful \
request.onsuccess = function(event) {

      // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable
    db = event.target.result;

      // check if app is online, if yes run uploadTransaction() function to send all local db data to api

    if (navigator.online) {
        uploadTransaction();
    }
};

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
}

function saveRecord(record) {
    const transaction = db.transaction(["new_transaction"], "readwrite");

    const budgetObjectStore = transaction.objectStore("new_transaction");

    budgetObjectStore.add(record);
}

function uploadTransaction() {

    const transaction = (["new_transaction"], "readwrite");

    const budgetObjectStore = transaction.objectStore("new_transaction");

    const getAll = budgetObjectStore.getAll();

    getAll.onsuccess = function() {
        if (getAll.result.length > 0) {
            fetch("/api/transaction", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(serverResponse => {
                if (serverResponse.message) {
                    throw new Error(serverResponse);
                }

                const transaction = db.transaction(["new_transaction"], "readwrite");

                const budgetObjectStore = transaction.objectStore("new_transaction");

                budgetObjectStore.clear();

                alert("All saved transaction has been submitted!");
            })
            .catch(err => {
                console.log(err);
            });
        }
    };
}

window.addEventListener("online", uploadTransaction);