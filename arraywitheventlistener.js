// const arr = [];
// arr.addListener('add', (eventName, items, array) => {
//   console.log('items were added', items);
// });

// arr.addListener('remove', (eventName, item, array) => {
//   console.log(item, ' was removed');
// });

// arr.pushWithEvent('add', [4, 5]);
// arr.popWithEvent('remove');

// Output:
// "items were added" // [object Array] (2)
// [4,5]

// 5 " was removed"

// D: Provide argument to callback. How?

/* 
We will extend the array prototype and add the required methods to it
● listeners:Thiswillstorethelistofeventlistenersassociatedwith the event name.
● addListener(eventName,callback):Thiswilladdacallbackto the event.
● pushWithEvent(eventName,items):Addsalltheitemsinthe array and triggers the event with the given name.
● popWithEvent(eventName):Removesthelastitemsfromthe array and triggers the event with the given name.
● triggerEvent(eventName,args):Ahelperfunctionthattriggers all the callbacks associated with the given event name.
● removeListener(eventName,callback):Removesthecallback attached to the eventName. Note: It won’t work for anonymous functions.
*/
// to track the events and their callbacks
Array.prototype.listeners = {};
// to add/assign a new event with listener
Array.prototype.addListener = function (name, callback) {
  // if there are no listener present
  // create a new one
  // we will invoke all the callbacks when event is triggered
  if (!this.listeners[name]) {
    this.listeners[name] = [];
  }
  this.listeners[name].push(callback);
};
// add a new method that triggers an event on push
// Calls trigger event
Array.prototype.pushWithEvent = function (event, args) {
  // push the new values
  this.push(...args);
  // trigger add event
  this.triggerEvent(event, args);
};
// add a new method that triggers an event on pop
// Calls trigger event
Array.prototype.popWithEvent = function (event, args) {
  // push the new values
  const element = this.pop();
  // trigger add event
  this.triggerEvent(event, element);
};

Array.prototype.triggerEvent = function (eventName, elements) {
  // if the event is present
  // trigger all the callbacks with the value
  if (this.listeners[eventName]) {
    this.listeners[eventName].forEach((callback) =>
      callback(eventName, elements, this)
    );
  }
};
Array.prototype.removeListener = function (eventName, callback) {
  // if event exists
  if (this.listeners[eventName]) {
    // filter out the listener
    // note: this won't work for anonymous function.
    this.listeners[eventName] = this.listeners[eventName].filter(
      (e) => e !== callback
    );
  }
};
