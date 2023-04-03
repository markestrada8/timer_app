// V1 ****************************************************************
// let time = 60
// let timer

// const input = document.querySelector('input')
// input.value = time
// const playButton = document.querySelector('.play')

// playButton.addEventListener('click', () => {
//   timer = setInterval(() => {
//     time = input.value
//     time--
//     input.value = time
//     console.log(time)
//   }, 1000)
// })

// const pauseButton = document.querySelector('.pause')

// pauseButton.addEventListener('click', () => {
//   clearInterval(timer)
// })

// V2 ****************************************************************
class Timer {
  constructor(input, startButton, pauseButton) {
    this.input = input
    this.startButton = startButton
    this.pauseButton = pauseButton
    this.timer = null
    this.time = 60
  }

  stopTimer = (interval) => {
    clearInterval(interval)
    return true
  }

  init = () => {
    console.log(this)
    this.startButton.addEventListener('click', () => {
      console.log(this)
      this.timer = setInterval(() => {
        console.dir(this)
        this.time = this.input.value ? this.input.value : 60
        --this.time
        this.input.value = this.time
        this.time === 0 ? this.stopTimer(this.timer) && alert('Timer Finished!') : null
      }, 1000)
    })

    this.pauseButton.addEventListener('click', () => {
      this.stopTimer(this.timer)
    })

  }
}

const selectElement = (element) => {
  return document.querySelector(element)
}

const input = selectElement('input')
const playButton = selectElement('.play')
const pauseButton = selectElement('.pause')

const myTimer = new Timer(input, playButton, pauseButton)
myTimer.init()