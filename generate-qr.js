const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Website URL
const websiteUrl = 'https://conexus-website.vercel.app';

// Output configuration
const outputPath = path.join(__dirname, 'public', 'conexus-qr-code.png');

// QR Code options for high quality
const options = {
  errorCorrectionLevel: 'H', // High error correction (30% of data can be restored)
  type: 'png',
  quality: 1,
  margin: 2,
  width: 1000, // High resolution for print quality
  color: {
    dark: '#000000',  // Black dots
    light: '#FFFFFF'  // White background
  }
};

// Generate QR Code
QRCode.toFile(outputPath, websiteUrl, options, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
    process.exit(1);
  }
  
  console.log('✅ QR Code generated successfully!');
  console.log(`📍 Location: ${outputPath}`);
  console.log(`🔗 URL: ${websiteUrl}`);
  console.log(`📐 Size: 1000x1000px (print-ready)`);
  console.log(`\nYou can now use this QR code for:`);
  console.log('  • Business cards');
  console.log('  • Pitch decks');
  console.log('  • Marketing materials');
  console.log('  • Conference presentations');
});
