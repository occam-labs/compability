// require("@babel/polyfill");
import {data} from './scripts/data';
import './css/root.scss';

var arrowFunction = () => {

}


var defaultParameters = function (height = 50, color = 'red', url = 'http://azat.co') {

}


var id = 5;
var templateLiterals = `http://localhost:3000/api/messages/${id}/hellow,${id}`


var { house, mouse } = { house: 5, mouse: 6 }

var multiLine = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`

var wait1000 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000)
}).then(function () {
    console.log('Yay!')
})



data();