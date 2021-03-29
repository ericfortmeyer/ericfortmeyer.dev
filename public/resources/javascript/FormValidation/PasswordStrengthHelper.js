class PasswordStrengthHelper
{
    constructor(TargetElement, meter) {
        var password = TargetElement.value
        var passwordStrength = this.checkPassword(password)
        this.updatePasswordMeter(meter, passwordStrength)
        this.changeFieldBorderColor(TargetElement, passwordStrength)
    }
    
    checkPassword(password) {
        var total = 0
        
        if (password.match(/[a-z]/)) {
            total += 20
        }
        
        if (password.match(/[A-Z]/)) {
            total += 20
        }
        
        if (password.match(/[0-9]/)) {
            total += 20
        }
        
        if (password.match(/[^a-zA-Z0-9\s]/)) {
            total += 20
        }
        
        if (password.length >= 8) {
            total += 20
        }
	    return total
	}
	
	updatePasswordMeter(meter, passwordStrength) {
	    meter.value = passwordStrength
	}
	
	changeFieldBorderColor(el, passwordStrength) {
        el.style.border = "3px solid " + this.getColorMap()[this.getStrengthMap().indexOf(passwordStrength)]
    }

	getStrengthMap() {
	    return [20,40,60,80,100]
	}
	
	getColorMap() {
	    return ['OrangeRed', 'Orange', 'Yellow', 'GreenYellow', 'LightGreen']
	}
	
	
}
