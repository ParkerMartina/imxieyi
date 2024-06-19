export class StableVault{
  constructor(collateralRatio = 1.5){
    this.collateralRatio = collateralRatio;
  }
  mint(collateralUsd){
    return Math.floor(collateralUsd / this.collateralRatio);
  }
}
