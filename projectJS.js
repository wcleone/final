document.getElementById("myButton").addEventListener('click',myWindow)
        function myWindow()
        {
            visitorName = document.getElementById("myName").value;

    myText = ("<html>\n<head>\n");
    myText += ("<title>Welcome</title>\n");
    myText += ("<style>\nnav\n{position: fixed;\nwidth: 101%;\ntop: 0%;\nfont-size: 100%;\nz-index: 4;\nbackground-color: rgb(33, 31, 50);\noverflow: hidden;\nright: -1%;}</style>\n");
    myText += ("</head>\n<body>\n");
    myText += ("<nav>\n<h1>Cooper Leone WEB.115.0002</h1>\n</a>\n</div>\n</nav>\n");
    myText += ("\n<br>\n");
    myText += ("Hello " + visitorName + ", this page was created on-the-fly!\n");
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    flyWindow.document.write(myText);
        }