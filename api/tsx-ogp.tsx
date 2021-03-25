import * as React from 'react'

const Style = () => <style dangerouslySetInnerHTML={{ __html: `
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
` }} />

export default ({ query }: { query: { [key: string]: string } }) => <html>
    <head>
        <Style />
    </head>
    <body>
        <div className="wrapper">
            <div className="inter">{ query['title'] ? decodeURIComponent(query['title']) : 'Hello' }</div>
            <div>generated from tsx</div>
        </div>
    </body>
</html>
