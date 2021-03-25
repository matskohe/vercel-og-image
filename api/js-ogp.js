module.exports.default = ({ query }) => `
<!DOCTYPE HTML>
<html>
    <head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

            body {
                margin: 0;
                padding: 0;
            }

            .wrapper {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100vh;
                justify-content: center;
                align-items: center;
            }

            .inter {
                font-family: 'Inter';
                font-size: 64px;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="inter">${ query['title'] ? decodeURIComponent(query['title']) : 'Hello' }</div>
            <div>generated from js</div>
        </div>
    </body>
</html>
`