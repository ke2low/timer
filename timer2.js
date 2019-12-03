
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  else if (key === '\u0062' || key === '\u0042') {
    process.stdout.write('\x07')
  }
  else if (key === '\u0031' || key === '\u0032'  || key === '\u0033'  || key === '\u0034' || key === '\u0035' || key === '\u0036' || key == '\u0037' || key == '\u0038' || key === '\u0039') {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(function() {process.stdout.write('\x07')}, key * 1000);
  }
})