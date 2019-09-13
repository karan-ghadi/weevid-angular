var app = angular.module('draggableController', []);
app.controller('draggableCtrl', function ($scope, $timeout, $location) {
	$scope.captionText = "";
	$scope.colorHandler = colorHandler;
	$scope.fontHandler = fontHandler;

	// create a wrapper around native canvas element (with id="c")
	var canvas = new fabric.Canvas('c');
	var canvasWidth = document.getElementsByClassName('canvas-container')[0];
	
	// create a rectangle object
	var iText6 = new fabric.IText($scope.captionText, {
		left: 25,
		top: 50,
		originX: 'left',
		originY: 'top',
		fontFamily: 'Montserrat',
		fontSize: 26,
		fontWeight: 'normal',
		fill: '#FFFFFF',
		angle: 0,
		padding: 10,
		caching: false,
		rotatingPointOffset: 25,
		transparentCorners: true,
		fixedWidth: canvasWidth.clientWidth - 50
	});


	// set side controls
	iText6.setControlsVisibility({
		bl: false,
		br: true,
		tl: false,
		tr: false,
		mb: false,
		ml: false,
		mr: false,
		mt: true,
		mtr: true,
	});

	// set controls on canvas selected
	canvas.on('object:selected', function (e) {
		e.target.transparentCorners = false;
		e.target.borderColor = '#FFFFFF';
		e.target.cornerColor = '#FFFFFF';
		e.target.minScaleLimit = 2;
		e.target.cornerStrokeColor = '#FFFFFF';
		e.target.cornerStyle = 'square';
		e.target.minScaleLimit = 0;
		e.target.lockScalingFlip = true;
		e.target.selectionDashArray = [10, 5];
		e.target.borderDashArray = [10, 5];
		e.target.borderScaleFactor = 3;
	});

	// set height and width;
	canvas.setHeight(254);
	canvas.setWidth(609);

	// event listener
	document.getElementById('captionText').addEventListener('keyup', function (e) {
		var obj = canvas.getActiveObject();
		if (!obj) return;
		obj.set('text', e.target.value);
		if (obj.width > obj.fixedWidth) {
			obj.fontSize *= obj.fixedWidth / (obj.width + 1);
			obj.width = obj.fixedWidth;
		}
		canvas.renderAll();
	});

	// "add" rectangle onto canvas
	canvas.add(iText6);
	canvas.item(0).set({
		borderColor: '#fff',
		cornerColor: '#fff',
		cornerSize: 6,
		transparentCorners: false
	});
	canvas.setActiveObject(canvas.item(0));
	// this.__canvases.push(canvas);

	$scope.setColor = (color) => {
		colorHandler(color.class);
	}
	$scope.setFont = (font) => {
		fontHandler(font.class);
	}

	function colorHandler(style) {
		let colors = [{
			div: 'divColor-1',
			color: '#FFFFFF'
		}, {
			div: 'divColor-2',
			color: '#000000'
		}, {
			div: 'divColor-3',
			color: '#FF6766'
		}, {
			div: 'divColor-4',
			color: '#00FF99'
		}, {
			div: 'divColor-5',
			color: '#9933FF'
		}, {
			div: 'divColor-6',
			color: '#FEF35B'
		}, {
			div: 'divColor-7',
			color: '#E645B5'
		}, {
			div: 'divColor-8',
			color: '#00E6CA'
		}];

		colors.map(color => {
			if (color.div === style) {
				iText6.set('fill', color.color);
				canvas.renderAll();
			}
		});
	}

	function fontHandler(style) {
		console.log(style)
		let fonts = [{
			div: 'DEFAULT',
			font: 'Montserrat'
		}, {
			div: 'MEME',
			font: 'Anton'
		}, {
			div: 'Pixel',
			font: 'C-CRedAlertLAN'
		}, {
			div: 'Subtitle',
			font: 'Montserrat'
		}];

		fonts.map(font => {
			if (font.div === style) {
				iText6.set('fontFamily', font.font);
				canvas.renderAll();
			}
		});
	}
});