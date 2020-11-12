// Radix sort

//here is the function that distributes numbers by the place(1s or 10s)

function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
}

function enqueue (element) {
  this.dataStore.push (element);
}
function dequeue () {
  return this.dataStore.shift ();
}
function empty () {
  if (this.dataStore.length === 0) {
    return `Empty Queue`;
  } else {
    return `Queue is not empty`;
  }
}

// function distribute gtakes r params, the number, the array of queue, the index at the n position and then digit

function distrubuteNum (nums, queues, n, digit) {
  // looping thru the stack
  for (var i = 0; i < n; i++) {
    //if the first digit is equal to 1, then we know it is the 1s digit and the we will store it in the array of queues
    //else we will know it is not the first but instead the 10s and round that number and store in the queue array
    if (digit == 1) {
      queues[nums[i] % 10].enqueue (nums[i]);
    } else {
      queues[Math.floor (nums[i] / 10)].enqueue (nums[i]);
    }
  }
}

// Here is function for colecting numbers in queues

function collectNumbers (queues, nums) {
  var i = 0;
  for (var digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty ()) {
      nums[i++] = queues[digit].dequeue ();
    }
  }
}

// Displaying the Array of Queues
function displayArray (array) {
  for (var i = 0; i < array.length; i++) {
    console.log (array[i] + ' ');
  }
}

var queues = [];
for (var i = 0; i < 10; i++) {
  queues[i] = new Queue ();
}

var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = Math.floor (Math.floor (Math.random () * 101));
}

console.log ('Before the Radix sort ');

displayArray (nums);
distrubuteNum (nums, queues, 10, 1);
collectNumbers (queues, nums);
distrubuteNum (nums, queues, 10, 10);
collectNumbers (queues, nums);
console.log ('After Radix sort');
displayArray (nums);
