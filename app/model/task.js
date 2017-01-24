"use strict";
var Task = (function () {
    function Task(content, completed, softDelete) {
        this.content = content;
        this.completed = completed;
        this.softDelete = softDelete;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map