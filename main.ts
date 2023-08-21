let temperature = 0
radio.setGroup(0)
basic.forever(function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    temperature = input.temperature()
    radio.sendValue(control.deviceName(), temperature)
    basic.showString("" + (temperature))
})
