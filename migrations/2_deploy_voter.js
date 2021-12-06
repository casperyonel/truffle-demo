// this will deploy our smart contract

let Voter = artifacts.require('./Voter.sol')

module.exports = async function(deployer) {
    await deployer.deploy(Voter)
}