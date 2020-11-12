function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.toString = toString;
}

function enqueue (element) {
  this.dataStore.push (element);
}
// function dequeue () {
//   return this.dataStore.shift ();
// }
function empty () {
  if (this.dataStore.length === 0) {
    return `Empty Queue`;
  } else {
    return `Queue is not empty`;
  }
}

// Priority Queue
//A priority queue is one where elements are removed from the queue based on a priority constraint.

//Let’s begin building a priority queue system by first defining an object that will store the elements of the queue:

function patient (name, code) {
  this.name = name;
  this.code = code;
}

//Let’s begin building a priority queue system by first defining an object that will store the elements of the queue:
//define the highest priority element as being the element with the lowest code.
//dequeue() function will move through the queue’s underlying array and find the element with the lowest code.
//Then the function uses the splice() function to remove this element.

function dequeue () {
  var entry = 0;
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code < this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice (entry, 1);
}

function toString () {
  var getStr = '';

  for (var i = 0; i < this.dataStore.length; i++) {
    getStr += this.dataStore[i].name + 'code' + this.dataStore[i].code + '\n';
  }
  return getStr;
}

var theQ = new Queue ();
var p = new patient ('Andres' + 5);
theQ.enqueue (p);

p = new patient ('smith' + 4);
theQ.enqueue (p);

p = new patient ('john' + 7);
theQ.enqueue (p);

p = new patient ('ryan' + 1);
theQ.enqueue (p);

console.log (theQ.toString ());

// first round

seen = theQ.dequeue ();
console.log (`patient being treated ${seen[0].name}`);
console.log (`next patient to be seen `);
console.log (theQ.toString ());

// second round
seen = theQ.dequeue ();
console.log (`patient being treated ${seen[0].name}`);
console.log (`next patient to be seen `);
console.log (theQ.toString ());
