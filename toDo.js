var radio = 1;

function addNew() {
	var task       = document.createElement("tr");
	task.className = "task";
	task.id        = `task${document.getElementById("tasks").children.length}`;
	task.innerHTML = document
		.getElementById("newTaskContent")
		.innerHTML.replace(/cell/gi, "td");
	document
		.getElementById("tasks")
		.insertBefore(task, document.getElementById("addNew").parentElement);
	document.getElementsByName("new").forEach(function () {
		this.name = `${document.getElementById("tasks").children.length}`;
	});
}

function noTask(element, method) {
	if (confirm("Delete task?\n\nTHIS IS PERMANENT AND CANNOT BE UNDONE")) {
		fade(element);
		switch (method) {
			case "delete":
				element.outerHTML = "";
				break;
			case "hide":
				element.style.display = "none";
				break;
			default:
				console.error(
					'Value of "method" parameter in function "noTask()" may only be "delete" or "hide". Value given: ' +
						method,
				);
				break;
		}
	}
}

function fade(element) {
	element.style.opacity = 1;
	var timesRun          = 0;
	var interval          = setInterval(function () {
		timesRun++;
		if (timesRun === 100) {
			clearInterval(interval);
		}

		element.style.opacity -= 0.01;
	}, 6);
}
