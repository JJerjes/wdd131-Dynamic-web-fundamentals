let names = [ 'Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let namesReduce = names.reduce( (total, name) => total + name.length, 0) / names.length ;
console.log(namesReduce);
 