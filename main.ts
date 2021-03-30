pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
