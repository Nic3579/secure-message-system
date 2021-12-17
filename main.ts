input.onButtonPressed(Button.A, function () {
    number = randint(100, 1000)
    radio.sendValue("A", number)
})
radio.onReceivedValue(function (name, value) {
    // if this is the receiving micro:bit, it will send back the value multiplied by 696969
    if (name == "A") {
        radio.sendValue("B", value * 696969)
    } else if (name == "B") {
        // if this is the sending micro:bit, check to see if good connection and show appropriate image
        if (value / 696969 == number) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
    basic.clearScreen()
})
let number = 0
radio.setGroup(10)
