var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    console.log(`Starting Rpc`);
    client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Main-text",
state: "sub-text",
assets : {
large_image : "image name from discord/dev",
large_text : "tool tip kind of thing", // THIS WILL SHOW AS "Playing <Status>" from the outisde
// small_image : "small image like pause and play buttons type",
// samll_text : "same tool tip kinda" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "button 1" , url : "button 1 url"},
{label : "name button 2",url : "button 2 url"}]
}
})
})
client.login({ clientId : "Get yo client id" }).catch(console.error);
