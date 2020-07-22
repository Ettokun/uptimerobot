const axios = require("axios")
const urls = ["https://crawlbeed.glitch.me", "https://amelia-official.glitch.me", ""https://teitokuofficial.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Terping ke glitch kontol! udh online." + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
