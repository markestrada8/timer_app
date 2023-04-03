const input = document.querySelector('input')
const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const circle = document.querySelector('circle')

const circumference = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', circumference)

let totalTime

const appTimer = new Timer(input, playButton, pauseButton, {
  onStart: () => {
    totalTime = input.value
  },
  onTick: (timeRemaining) => {
    circle.setAttribute(
      'stroke-dashoffset',
      currentOffset = (circumference * timeRemaining) / totalTime - circumference
    )
  },
  onComplete: () => console.log('Timer Completed')
})
