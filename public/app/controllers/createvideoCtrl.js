var app = angular.module('createvideoCtrl', []);

app.controller('createvideoCtrl', function ($scope, $timeout, $location) {
    // scope variables
    $scope.addAnotherVideo = false;
    $scope.duration = '00:00:00';
    $scope.startValue = '00:00:00';
    $scope.startnum = 0;
    $scope.durnum = 0;
    $scope.states = {};
    $scope.states.activeColor = 'divColor-1';
    $scope.states.activeFont = 'DEFAULT';
    $scope.states.captionText = '';
    $scope.hideCloseIcon = true;
    $scope.videoReported = false;

    // colors
    $scope.colors = [{
        class: 'divColor-1'
    }, {
        class: 'divColor-2'
    }, {
        class: 'divColor-3'
    }, {
        class: 'divColor-4'
    }, {
        class: 'divColor-5'
    }, {
        class: 'divColor-6'
    }, {
        class: 'divColor-7'
    }, {
        class: 'divColor-8'
    }];

    // fonts
    $scope.fonts = [{
        class: 'DEFAULT'
    }, {
        class: 'MEME'
    }, {
        class: 'Pixel'
    }, {
        class: 'Subtitle'
    }];

    // to add another video
    $scope.onAddanotherVideo = () => {
        $scope.addAnotherVideo = true;
    };
    $scope.onClose = () => {
        $scope.addAnotherVideo = false;
    };

    // convert number to time format for video range bar
    Number.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return hours + ':' + minutes + ':' + seconds;
    };
    $scope.startValueFunc = num => {
        $scope.startValue = num.toHHMMSS();
    }
    $scope.durFunc = num => {
        $scope.duration = num.toHHMMSS();
    }

    // functions on submit
    $scope.onVideoTagsSubmit = (data) => {
        $scope.videoTagsForm.$invalid ? {} : $location.path("/create1-5");
    };
    $scope.onaddVideoSubmit = (data) => {
        $scope.addVideoForm.$invalid ? {} : $location.path("/create1-4");
    };
    $scope.onMergeVideoSubmit = (data) => {
        $scope.mergeVideoForm.$invalid ? {} : $location.path("/create1-4");
    };

    $scope.reportVideo = () => {
        $scope.hideCloseIcon = false;
    }

    $scope.reported = ($event) => {
        $event.target.textContent = 'Reported'
    }

    $scope.closeOptions = () => {
        $scope.hideCloseIcon = true;
    }
});