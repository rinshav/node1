const os=require('os');
var totMem=os.totalmem();
var freeMem=os.freemem();
console.log(`Total Memory=${totMem}`);
console.log(`Total memory=${freeMem}`);
