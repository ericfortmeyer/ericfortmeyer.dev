class PasswordMatcher
{

    constructor(VerifyPasswordField, PasswordField) {
        var originalFormStyle = {
            border : this.getBorder(VerifyPasswordField),
            backgroundColor : this.getBackgroundColor(VerifyPasswordField),
            color : this.getFontColor(VerifyPasswordField)
        }

        if (VerifyPasswordField.value != PasswordField.value) {
            this
               .invalidInputStyle(VerifyPasswordField)
               .invalidInputStyle(PasswordField)
        } else {
            this
                .validInputStyle(VerifyPasswordField)
                .validInputStyle(PasswordField, originalFormStyle)
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
        el.style.border = '3px solid LightGreen';
        el.style.backgroundColor = 'White'
        return this
    }    
}
