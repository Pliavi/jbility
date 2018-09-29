class JBility {

    constructor({ useCookie = true, cookiePath = '/' }) {
        if(useCookie){
            this.cookiePath = cookiePath

            window.addEventListener("beforeunload", () => this.setConfigToCookies()) 
        }

        this.configs = {
            contrast: false,
            fontsize: 16
        }

    }

    setConfigToCookies(configs = this.configs, path = this.cookiePath) {
        for(key in configs){
            let value = configs[key]
            document.cookie = `${key}=${value};path=${path}`
        }
    }

    updateFromCookies() {
        let newConfig = {}
        let assignTo = (cookie) => {
            let i = cookie.indexOf('=')
            let fragment = [ cookie.slice(0,i).trim(), cookie.slice(i+1) ]
            newConfig[fragment[0]] = fragment[1]
        }

        document.cookie.split(';').forEach(assignTo)

        for(key in this.configs) {
            this.configs[key] = newConfig[key]
        }
    }

    getAllTextElements() {
        let elements = []
        let node;
        let iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function(node) { 
                getComputedStyle(node)
                // NodeFilter.FILTER_SKIP
                return NodeFilter.FILTER_ACCEPT; 
            }
        })
        while(node = iterator.nextNode()) elements.push(node)

        return elements
    }

    getAllFontRules() {
        // TODO usar isso aqui
        rules = document.styleSheets[1].cssRules
        rules.filter(rule => ) 
    }

    updateFontSize() {
        this.getAllTextElements().forEach(el => {
            style = el.parentNode.style
            style
        } )
    }


    getAllTextElements().forEach(el => el.style.fontSize = Number.parseFloat(el.style.fontSize) + 12 + 'px')

}