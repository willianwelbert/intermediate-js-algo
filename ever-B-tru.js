function truthCheck(collection, pre) {
  // Is everyone being true?
  let resultVar = true;

  //map first arg
  collection.map(function(item) {
  //map them to verify both != false
    if(!item[pre]){
      console.log("false", item.user);
      return resultVar = false;
    } 
   
  });

  return resultVar;

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
