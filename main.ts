input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    GRPNR += 1
    radio.setGroup(GRPNR)
    basic.showNumber(GRPNR)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(GRPNR)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(randint(1, 250))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (EFFEKT == 6) {
        EFFEKT = 1
    } else {
        EFFEKT += 1
    }
    basic.showNumber(EFFEKT)
})
let EFFEKT = 0
let GRPNR = 0
GRPNR = 100
radio.setGroup(GRPNR)
EFFEKT = 6
radio.setTransmitPower(EFFEKT)
basic.forever(function () {
	
})
