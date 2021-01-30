const { ApiService, ApiRoutes, RequestType } = require("../helpers/common"); 

class SearchService {
    static async search(query) {
        const result = await ApiService.sendRequest(RequestType.POST, ApiRoutes.searchURL + query);
        return result.data;
    }
}

module.exports = SearchService;
