class InputValidator
{

    constructor(TargetElement, params) {
        var originalFormStyle = {
            border : this.getBorder(TargetElement),
            backgroundColor : this.getBackgroundColor(TargetElement),
            color : this.getFontColor(TargetElement)
        }

        if (params.pattern.test(TargetElement.value) == false) {
            this
               .invalidInputStyle(TargetElement)
               .preventSubmit(this.getForm(TargetElement))
               .renderErrorMessage(TargetElement, params)
               .removeErrorMessage(TargetElement, params, originalFormStyle)
        } else {
            this.restoreSubmit(this.getForm(TargetElement))
                .validInputStyle(TargetElement)
        }
    }
    
    getForm(el) {
        switch ('FORM') {
            case el.parentElement.tagName:
                return el.parentElement
            case el.parentElement.parentElement.tagName:
                return el.parentElement.parentElement
            case el.parentElement.parentElement.parentElement.tagName:
                return el.parentElement.parentElement.parentElement
        }
    }

    getBorder(el) {
        return window.getComputedStyle(el)['border']
    }
    
    getBackgroundColor(el) {
        return window.getComputedStyle(el)['backgroundColor']
    }
    
    getFontColor(el) {
        return window.getComputedStyle(el)['color']
    }

    invalidInputStyle (el) {
        el.style.border = '3px solid OrangeRed'
        el.style.backgroundColor = 'LavenderBlush'
        return this
    }

    validInputStyle (el) {
        el.style.border = '3px solid LightGreen'
        return this
    }
    
    restoreOriginalInputStyle (el, originalFormStyle) {
        el.style.border = originalFormStyle.border
        el.style.backgroundColor = originalFormStyle.backgroundColor
        el.style.color = originalFormStyle.color
        el.value = ''
    }
        

    preventKeystroke (el) {
        el.onkeydown = function (e) {e.preventDefault()}
        return this
    }
    
    preventSubmit (form) {
        form.onsubmit = function () {return false}
        return this
    }
    
    restoreSubmit (form) {
        form.onsubmit = function () {return true}
        return this
    }
    
    restoreKeystroke (el) {
        el.onkeydown = function () {return}
        return this
    }

    renderErrorMessage (el, params) {
        var ErrorDisplayElement = params.ErrorDestination
        var message = document.createTextNode(params.ErrorMessage)
		this.preventKeystroke(el)

        if (ErrorDisplayElement.hasChildNodes()) {
            return this
        } else {
            ErrorDisplayElement.appendChild(message)
        }

        return this
    }

    removeErrorMessage (el, params, originalFormStyle) {
        var ErrorDisplayElement = params.ErrorDestination
        var restoreKeystroke = this.restoreKeystroke
        var restoreOriginalInputStyle = this.restoreOriginalInputStyle
        setTimeout(function () {
            if (ErrorDisplayElement.hasChildNodes() == false) {
                return this
            }
    		restoreKeystroke(el)
    		restoreOriginalInputStyle(el, originalFormStyle)
            ErrorDisplayElement.firstChild.remove()
        }, 2000)
        return this
    }

}
