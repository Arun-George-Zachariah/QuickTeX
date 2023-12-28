function generateText() {
    var latexCode = document.getElementById('latexInput').value;

    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '$$' + latexCode + '$$';
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, outputDiv]);

    var outputContainer = document.getElementById('outputContainer');
    outputContainer.style.display = 'block';

    var downloadButton = document.getElementById('downloadButton');
    downloadButton.style.display = 'inline-block';
}

function downloadPNG() {
    var outputDiv = document.getElementById('output');
    html2canvas(outputDiv).then(function (canvas) {
        var dataURL = canvas.toDataURL('image/png');
        var downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'output.png';
        downloadLink.click();
    });
}
