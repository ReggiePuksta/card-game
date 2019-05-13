requirejs.config({
    baseUrl: "../js",
    paths: {
        // "app": "../js",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min"
    },
    shim: {

    }
});
requirejs(["jquery", "main"]);
