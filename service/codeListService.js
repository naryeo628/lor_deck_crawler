const axios = require('axios');

function getCodeList() {
    return axios.get('https://lor.mobalytics.gg/api/v1/meta/tier-list')
    .then(function (response) {
        let data = response.data;
        let archetypes = data.archetypes
        //console.log(archetypes);
        let numStr = "";
        let codeList = new Array;
        archetypes.forEach(function(element, index) {
            let num = index + 1;
            let code = {};
            if(num < 10) {
                numStr = "0" + num;
            } else {
                numStr = num + "";
            }
            code.title = numStr + "." + element.title;
            code.code = element.mostPopularDeck.exportUID;

            codeList.push(code);
        });
        //console.log(codeList);
        return codeList;
    });
}

module.exports = {
    getCodeList
}