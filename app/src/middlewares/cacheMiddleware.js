const mcache = require('memory-cache');
const container = require('../startup/container');
const config = require('../config/config');

module.exports = (duration) => {
  return (req,res,next) => {
    const key = config.CACHE_KEY + req.originUrl || req.url;
    const cachedBody = mcache.get(key);
    
    if(cachedBody){
      return res.send(JSON.parse(cachedBody));
    }else{
      res.sendResponse = res.send;
      res.send = body => {
        mcache.put(key, body, duration*1000);
        res.sendResponse(body);
      };
      next();
    }
  }
}