class Timer {
  constructor(input, startButton, pauseButton, behaviorCallbacks = {}) {
    this.input = input
    this.startButton = startButton
    this.pauseButton = pauseButton
    this.behaviorCallbacks = behaviorCallbacks

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start = () => {
    this.behaviorCallbacks.onStart ? this.behaviorCallbacks.onStart() : null
    this.tick()
    this.timerInterval = setInterval(this.tick, 50)
  }

  pause = () => {
    clearInterval(this.timerInterval)
    return true
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause()
      this.behaviorCallbacks.onComplete ? this.behaviorCallbacks.onComplete() : null
    } else {
      this.timeRemaining = this.timeRemaining - 0.05
      this.behaviorCallbacks.onTick ? this.behaviorCallbacks.onTick(this.timeRemaining) : null
    }
  }

  get timeRemaining() {
    return parseFloat(this.input.value)
  }

  set timeRemaining(time) {
    this.input.value = time.toFixed(2)
  }
}

