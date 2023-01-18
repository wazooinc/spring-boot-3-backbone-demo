import _ from "underscore";

let cache = {};

export const templateFromUrl = async (url, data = {}) => {
    let templateHtml = '';

    if (cache[url]) {
        templateHtml = cache[url];
    } else {
        templateHtml = await fetch(url)
            .then((response) => {
                return response.text()
            }).then((html) => {
                return html
            }).catch((err) => {
                console.error('an error', err)
            })

        cache[url] = templateHtml;
    }

    const compiled = _.template(templateHtml);
    return compiled(data);
}

