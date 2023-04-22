let temperature = 0
radio.setGroup(1)
basic.forever(function () {
    temperature = input.temperature()
    radio.sendValue(control.deviceName(), temperature)
    basic.showString("" + (temperature))
    basic.pause(500)
})
