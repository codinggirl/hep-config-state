/**
 * this middleware assign options object to ctx.hepConfigState object
 * it is a common way to pass your config state between middleware
 * @param options
 */

const middleware = function (options) {
    return async (ctx, next) => {
        
        ctx.hepConfigState = options
        await next()
    }
}

module.exports = middleware
