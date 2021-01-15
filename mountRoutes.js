const downloadRoutes = require("./routes/download");

// Mount routes to the app.
module.exports = (app) => {
    app.use("/", downloadRoutes);
    
}