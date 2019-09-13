const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = express.Router();
const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/views/index.html'))
})

app.listen(port, () => {
	console.log('server started running on port ' + port);
});