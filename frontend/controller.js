var app = angular.module("app", []);

app.controller("userController", function ($http, $scope) {
    $scope.age;
    $scope.CountryList;
    $scope.selectedCountry;
    $scope.selectedgender='Male';
    $scope.name;
    $scope.isSubmitted = true;
    $http.get("https://restcountries.eu/rest/v1/region/Europe").then((result) => {
        $scope.CountryList = result.data.map((country) => {
            return country;
        })
    })
    $scope.onsubmit = function (country, gender, name, age) {
        $scope.age = age;
        $scope.selectedCountry = country;
        $scope.selectedgender = gender;
        $scope.name = name;
        var data = {
            age: age,
            country: country,
            gender: gender,
            name: name
        }
        console.log(arguments)

        $http.post("http://localhost:3000/createProfile", data).then(function (success) {
            $scope.isSubmitted = false;
        }).catch((error)=>{
            console.log("error while registering the user Info : ",error.data.error);
        })
        
    }
})