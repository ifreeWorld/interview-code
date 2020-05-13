function createTask(ms) {
  return () => {
    console.log('start', ms)
    return new Promise(r => setTimeout(() => {
      console.log('end', ms)
      r(ms)
    }, ms))
  }
}
const tasks = Array(5).fill(null).map((_, i) => createTask(i * 1000))

Promise.all(tasks.map(task => task())).then(console.log)

start 0
start 1000
start 2000
start 3000
start 4000
end 0
end 1000
end 2000
end 3000
end 4000
[0, 1000, 2000, 3000, 4000]