/*******************************************************************************
    Application - Plugin - Cookies.js https://github.com/js-cookie/js-cookie
 *******************************************************************************/

Cookies.setJSON = function (cookieName, data, cookieOptions) {
    Cookies.set(cookieName, JSON.stringify(data), cookieOptions);
}

Cookies.getJSON = function (cookieName) {
    var cookieValue = Cookies.get(cookieName);
    if (cookieValue) {
        try {
            return JSON.parse(cookieValue)
        } catch (error) {
            Cookies.remove(cookieName);
            console.warn(["invalid cookie removed", cookieName, error])
            return null;
        }

    }
    else {
        return cookieValue
    }
}