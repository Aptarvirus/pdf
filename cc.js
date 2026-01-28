document.getElementById("downloadBtn").addEventListener("click", function() {
    const url = document.getElementById("pdfUrl").value.trim();
    const message = document.getElementById("message");
    message.textContent = "";

    if (!url) {
        message.textContent = "Please enter a PDF URL!";
        return;
    }

    // Validate URL ends with .pdf
    if (!url.endsWith(".pdf")) {
        message.textContent = "Please enter a valid PDF URL!";
        return;
    }

    // Create a temporary link and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop(); // filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    message.style.color = "green";
    message.textContent = "Download started!";
});
