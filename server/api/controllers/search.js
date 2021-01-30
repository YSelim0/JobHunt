const app = require("express")();
const ash = require("express-async-handler");
const SearchService = require("../../services/search");
const ApiRoutes = require("../helpers/apiRoutes");

app.use(ApiRoutes.searchURL, ash(async (req, res) => {
    const { keyword, page, limit, location, type } = req.query;

    let results = await SearchService.search(keyword, parseInt(page), limit, location, type);

    res.status(200).json({
        resultCount: results.length,
        currentPage: page,
        limit,
        results
    });
}));

module.exports = app;
