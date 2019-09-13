var app = angular.module('vendorController', []);

app.controller('vendorCtrl', function ($scope, $location, $timeout, $interval, $location, $window) {

    // carousal options, init and custom functions for homepage trending video
    $scope.owlOptionsTestimonials = {
        singleItem: true,
        autoPlay: false,
        stopOnHover: true,
        slideSpeed: 300,
        paginationSpeed: 600,
        navigation: false,
        navigationText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        pagination: false,
        rewindNav: false,
    }
    $scope.nextSlide = () => {
        $scope.playIcon = true;
        var owl = $(".owl-carousel").data('owlCarousel');
        owl.next();
        video = document.querySelector("video");
        video.pause();
        video.currentTime = 0;
    }
    $scope.prevSlide = () => {
        $scope.playIcon = true;
        var owl = $(".owl-carousel").data('owlCarousel');
        owl.prev();
        video = document.querySelector("video");
        video.pause();
        video.currentTime = 0;
    }

    // get video Url;
    $scope.getVideoUrl = (url) => {
        console.log(url);
        $scope.loader = true;
        $timeout(function () {
            $scope.loader = false;
            $scope.navigateToTab("/create1-2");
        }, 4000)
    }
    // get video Url;
    $scope.getNewVideoUrl = (url) => {
        console.log(url);
        $scope.loader = true;
        $timeout(function () {
            $scope.loader = false;
        }, 4000)
    }
});
// directives for owl carousal
app.directive("owlCarousel", function () {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function (element) {
                // provide any default options you want
                var defaultOptions = {};
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for (var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                var curOwl = $(element).data('owlCarousel');
                if (!angular.isDefined(curOwl)) {
                    $(element).owlCarousel(defaultOptions);
                }
                scope.cnt++;
            };
        }
    };
});

app.directive('owlCarouselItem', [
    function () {
        return {
            restrict: 'A',
            transclude: false,
            link: function (scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }
]);