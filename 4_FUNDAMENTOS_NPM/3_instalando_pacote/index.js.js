const _ = require("lodash")

const a = [1, 2, 3, 4, 5]
const b = [2, 4, 6, 7, 8]

const diff = _.difference(a,b) // executa a diferença entre dois arrays

console.log(diff)