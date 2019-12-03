const args = process.argv.splice(2);
const filteredArgs = [];

args.forEach(function(items)  {
  if (items % items == 0 || items > 0) {
    filteredArgs.push(items);
  }
});

let newArgs = filteredArgs.map(function(time) {
    return time * 1000;
});

if (newArgs.length == 0)  {
  return;
}
else if (newArgs.length !== 0)  {
  for (const time of newArgs)  {
    if (time < 0 || typeof time !== "number") {
      return "";
    } else {
      setTimeout(() => {process.stdout.write('\x07')}, time);
    }
  }
}




