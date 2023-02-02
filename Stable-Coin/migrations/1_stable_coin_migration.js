const stableCoin =artifacts.require('StableCoin');
module.exports=async(deployer)=>{
  await deployer.deploy(stableCoin);
}