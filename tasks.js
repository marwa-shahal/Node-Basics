/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.trim().split(" ")[0] === "hello") {
    hello(text);
  } else if (text === "list\n") {
    list();
  } else if (text.trim().startsWith("add")) {
    add(text);
  } else if (text.trim().startsWith("remove")) {
    remove(text);
  } else if (text.trim().startsWith("edit")) {
    edit(text);
  }else if (text === "help\n") {
    help();
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  console.log(text.trim() + "!");
}

let tasks = ["do js exercise", "study git"];
/**
 * display tasks list
 *
 * @returns {void}
 */
function list() {
  tasks.map((task, index) => {
    console.log(index + 1, task);
  });
}

/**
 * add item to tasks arr
 *
 * @returns {void}
 */
function add(task) {
  if (task.trim() === "add") {
    console.log("error");
  } else {
    tasks.push(task.trim().slice(3).trim());
  }
}

/**
 * remove item from arr
 *
 * @returns {void}
 */
function remove(text) {
  if (text.trim() === "remove") {
    tasks.splice(-1, 1);
  } else {
    if (parseInt(text.trim().split(" ")[1]) < tasks.length && parseInt(text.trim().split(" ")[1]) > 0) {
      tasks.splice(parseInt(text.trim().split(" ")[1]) - 1, 1);
    } else {
      console.log("you entered a number that does not exist");
    }
  }
}

/**
 * edit item from arr
 *
 * @returns {void}
 */
function edit(text) {
  if (text.trim().split(" ").length === 1) {
    console.log("error");
  } else if (text.trim().split(" ").length === 2){
    tasks[tasks.length - 1]=text.trim().split(" ")[1]
  } else{
    tasks[parseInt(text.trim().split(" ")[1])-1]=text.trim().split(" ")[2]
  }
}


/**
 * Help
 *
 * @returns {void}
 */
function help() {
  console.log(
    "hello \n hello x\n quit \n list \n add x \n remove \n remove x\n"
  );
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Marwa Al Shahal");
