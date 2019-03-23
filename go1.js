const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
client
    .logoDetection('thing1.jpg')
    .then(results => {
        const labels = results[0].logoAnnotations;
        console.log('Labels:');
        labels.forEach(label => console.log(label.description));
    })
    .catch(err => {
        console.error('ERROR:', err)
    });