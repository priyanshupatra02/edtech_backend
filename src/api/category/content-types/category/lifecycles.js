const api_key = "local-order";

const utils = require("@strapi/utils");
const { UnauthorizedError, ApplicationError, ForbiddenError } = utils.errors;
module.exports = {
    async beforeCreate(event) {
        const { data } = event.params;
        const ctx = strapi.requestContext.get();
        if (!ctx.state.user) {
            throw new UnauthorizedError("User not found!");
        }
        if (!ctx.state.user.isAdmin) {
            throw new ApplicationError("You must be an admin to create category!");
        }
    },
};