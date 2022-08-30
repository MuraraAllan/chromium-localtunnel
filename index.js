
const puppeteer = require('puppeteer');
const localtunnel = require('localtunnel');

(async () => {
  const browser = await puppeteer.launch({ headless : false });
  
  const endpoint = browser.wsEndpoint()   
  
	  console.log('nedpoint', endpoint)
  const tunnel = await new localtunnel({ port: endpoint.match(/\d{4,5}/)[0] })
  const wsUrl = `ws://${tunnel.url.replace('https://', '')}${endpoint.substring(endpoint.indexOf('/devtools'), endpoint.length)}`
  console.log('tunnel is', wsUrl)
})()

