angular.module('Calc', []).controller('combustivel', function($scope) {

  $scope.calcular = function() {
  	$scope.bGas = false;
	$scope.bAlc = false;
	$scope.resultado = 0;

  	if($scope.alc >= 0.01 && $scope.gas >= 0.01){
  		$scope.resultado = (($scope.alc/$scope.gas) * 100).toFixed(2);

  			if($scope.resultado > 70){
  				$scope.bGas = true;
  				$scope.bAlc = false;
          navigator.vibrate([500, 200, 500]);
	  		}
  			else if($scope.resultado ){
  				$scope.bGas = false;
  				$scope.bAlc = true;
          navigator.vibrate(500);
  			}
  		}
  };
});