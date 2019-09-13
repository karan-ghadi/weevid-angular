var app = angular.module("mainController", []);

app.controller("mainCtrl", function ($scope, $location, $timeout, $interval, $location, $window) {
  // scope varaibles
  $scope.$location = $location;
  $scope.playIcon = true;
  $scope.mute = true;
  $scope.ytUrl;
  $scope.loader = false;
  $scope.modalView = false;
  $scope.embedView = false;
  $scope.downloadView = false;
  $scope.durationSlider = 0;
  $scope.durationSlidermin = 0;
  $scope.durationSlidermax = 150;

  $scope.videos = {
    videoSrc: "../../../assets/videos/temp-video.mp4"
  };
  // for carousal video
  $scope.trendingVideo = [{
    id: "videos1",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }, {
    id: "videos2",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }];
  // for trending videos
  $scope.trendingVideos = [{
    id: "Tvideos03",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }, {
    id: "Tvideos04",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }, {
    id: "Tvideos05",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }, {
    id: "Tvideos06",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }];
  // for all other videos
  $scope.videos = [{
    id: "videos03",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }, {
    id: "videos04",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }, {
    id: "videos05",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }, {
    id: "videos06",
    videoSrc: "../../../assets/videos/temp-video.mp4"
  }];

  // navigate to othe page
  $scope.navigateToTab = link => {
    $location.path(link);
  };

  // navigate one page back
  $scope.goBack = () => {
    $window.history.back();
  };

  // video custom button functions
  $scope.playVideo = id => {
    $scope.id = id;
    $scope.vid = document.getElementById($scope.id);
    $scope.vid.play();
  };
  $scope.pauseVideo = id => {
    $scope.id = id;
    $scope.vid = document.getElementById($scope.id);
    $scope.vid.pause();
    $scope.vid.currentTime = 0;
  };
  $scope.muteVideo = id => {
    $scope.mute = true;
    $scope.id = id;
    $scope.vid = document.getElementById($scope.id);
    $scope.vid.muted = true;
  };
  $scope.unmuteVideo = id => {
    $scope.mute = false;
    $scope.id = id;
    $scope.vid = document.getElementById($scope.id);
    $scope.vid.muted = false;
  };
  $scope.playTrendingVideo = id => {
    $scope.playIcon = false;
    $scope.id = id;
    $scope.playVideo(id);
  };
  $scope.pauseTrendingVideo = id => {
    $scope.playIcon = true;
    $scope.id = id;
    $scope.pauseVideo(id);
  };

  // show copy to clipboard
  $scope.setActive = item => {
    $scope.activeItem = item;
    $interval(function () {
      $scope.activeItem = "";
    }, 3000);
  };

  // get video Url;
  $scope.getVideoUrl = (url) => {
    $scope.loader = true;
    $timeout(function () {
      $scope.loader = false;
      $location.path("/create1-2");
    }, 4000)
  }

  // hide/show share links modal
  $scope.openModal = () => {
    $scope.embedView = false;
    $scope.downloadView = false;
    $scope.modalView = true;
  }
  $scope.openEmbed = () => {
    $scope.modalView = false;
    $scope.downloadView = false;
    $scope.embedView = true;
  }
  $scope.openDownload = () => {
    $scope.modalView = false;
    $scope.embedView = false;
    $scope.downloadView = true;
  }
  $scope.closeModal = () => {
    $scope.modalView = false;
    $scope.embedView = false;
    $scope.downloadView = false;
  }

  $scope.likeFunction = (index) => {
    console.log(index);
    $scope.activeLike = index;
  };

  // drag caption text
  $timeout(function () {
    $('.normalHeart, .activeHeart').on('click', function () {
      $(this).parent().find('.normalHeart').toggle();
      $(this).parent().find('.activeHeart').toggle();
    });
  }, 1000);
});
