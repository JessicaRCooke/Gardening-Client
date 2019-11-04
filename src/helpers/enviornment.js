let APIURL = '';

switch(window.location.hostname) {
    //Local host name of react app
    case 'localhost' || '127.0.0.1': 
    //local host name of API
    APIURL = 'http://localhost:3000';
    break;
    //deployed version fo react app
    case 'jrc-gardening-client.herokuapp.com':
        // full URL of deployed API
        APIURL = 'https://jrc-gardening-server.herokuapp.com'
}

export default APIURL;