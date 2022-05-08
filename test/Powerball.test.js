const Powerball = artifacts.require("Powerball")

contract("Powerball", (accounts) => {
    before(async () => {
        instance = await Powerball.deployed()
    })
})