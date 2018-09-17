var Person = function(firstAndLast) {
  const splittedName = firstAndLast.split(" ");

  let firstName = splittedName[0];
  let lastName = splittedName[splittedName.length - 1];

  this.setFirstName = function(first) {
    return (firstName = first);
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.setLastName = function(last) {
    return (lastName = last);
  };

  this.getLastName = function() {
    return lastName;
  };

  this.setFullName = function(firstAndLast) {
    let splittedSet = firstAndLast.split(" ");
    firstName = splittedSet[0];
    lastName = splittedSet[splittedName.length - 1];
  };

  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstName + " " + lastName;
  };
};

var bob = new Person("Bob Ross");
