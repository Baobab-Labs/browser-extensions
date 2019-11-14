function stripUtm(request) {
    let redirect = request.url.replace(/utm_[^&]+&?/g, '')
                              .replace(/&$/, '')
                              .replace(/^\?$/, '');
    return redirect !== request.url ? { redirectUrl: redirect } : {cancel: false}
}

let apiInterface = (typeof browser != "undefined") ? browser : chrome;
apiInterface.webRequest.onBeforeRequest.addListener(
    stripUtm,
    {
        urls: [
            "http://*/*",
            "https://*/*"
        ],
        types: ["main_frame", "sub_frame", "ping"]
    },
    ["blocking"]
);
