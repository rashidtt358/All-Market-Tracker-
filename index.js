const fs = require('fs');

async function fetchWebsiteData() {
    const url = 'https://www.goodreturns.in/?ref=pwa';
    try {
        console.log('Fetching data from Goodreturns...');
        const response = await fetch(url);
        const htmlContent = await response.text();

        // ലഭ്യമായ ഡാറ്റ HTML ഫയൽ ആയി സേവ് ചെയ്യാൻ
        fs.writeFileSync('goodreturns_data.html', htmlContent);
        console.log('HTML file successfully saved as goodreturns_data.html');
    } catch (error) {
        console.error('Error fetching the website:', error);
    }
}

fetchWebsiteData();
