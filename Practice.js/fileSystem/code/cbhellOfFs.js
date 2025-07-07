const fs = require("fs"); // CommonJS

console.log("Start 📝");
fs.writeFile("output/cbHell.txt", "🎉🚲", () => {
    console.log("write done ✅");
        // ----------------------------Read------------------------//
        console.log("reading mode (READABLE)");
        fs.readFile("output/cbHell.txt", (err,data) => {
            console.log(err, data.toString());
                // ----------------------------Append---------------------------------//
                console.log("append mode");
                fs.appendFile("output/cbHell.txt", "\n\n🍕☕🍵🧉🍽", () => {
                    console.log("append done");
                        // ----------------------------ReRead------------------------//
                        fs.readFile("output/cbHell.txt", (err,data) => {
                        console.log(err, '\n',data.toString());})
});
});
});
