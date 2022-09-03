
function Todo (title, details, dueDate, priority){
  this.title = title;
  this.details = details;
  this.dueDate = dueDate;
  this.priority = priority;
  // return this.title +''+this.details+''+this.dueDate+''+this.priority+''+this.notes;
  this.info = function() {
    return this.title, this.details, this.dueDate, this.priority
    };
  };

export default Todo;