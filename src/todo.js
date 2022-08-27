
class ToDo {
  constructor (title, details, dueDate, priority, notes){
  this.title = title;
  this.details = details;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  return this.title +''+this.details+''+this.dueDate+''+this.priority+''+this.notes;
}
}

export default ToDo;