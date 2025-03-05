const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

// Middleware
app.use(express.static(path.join(__dirname, 'build')));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
