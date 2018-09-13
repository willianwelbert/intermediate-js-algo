function myReplace(str, before, after) {
  if (before.match(/([A-Z])/) != null) {
    let UpperCasedAfter = after.replace(
      after,
      `${after[0].toUpperCase()}${after.slice(1)}`
    );
    return str.replace(before, UpperCasedAfter);
  } else {
    return str.replace(before, after);
  }
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
