(function () {
    'use strict';

    function helloWorld() {
        console.log('Hello World');
    }
    function log(message) {
        console.log(message);
    }

    const App = ({ message, name, version }) => {
        helloWorld();
        log(message);
    };

    const props = {
        message: 'Logging 📝 this message 💌!',
    };
    App(props);

})();
