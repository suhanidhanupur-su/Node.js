const os = require('node:os');
console.log(os.freemem())
// console.log(os.EOL())
console.log(os.hostname())
console.log(os.availableParallelism())
// console.log(os.constants())
console.log(console.log())
console.log(os.devNull)
console.log(os.endianness())
console.log(os.networkInterfaces())
console.log(os.platform())
console.log(os.release())
console.log(os.type())
console.log(os.version())
console.log(os.hostname())
const cpu = os.cpus();
console.log("Processor:", cpu[0].model);
console.log("CPU cores:", cpu.length);
console.log(os.cpus()[0].model)

