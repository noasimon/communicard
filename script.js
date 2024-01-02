function exportToPdf() {
    var businessCard = document.getElementById('businessCard');
    html2pdf().from(businessCard).save('BusinessCard.pdf');
}
