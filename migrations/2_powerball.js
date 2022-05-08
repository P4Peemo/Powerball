const Powerball = artifacts.require("Powerball");

module.exports = (deployer) => {
  deployer.deploy(Powerball, 1);
};