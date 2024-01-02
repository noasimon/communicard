function exportToPdf() {
    var doc = new jsPDF();
    var text = document.getElementById('nextScreenText').textContent;
    doc.text(text, 10, 10);
    doc.save('output.pdf');
}
