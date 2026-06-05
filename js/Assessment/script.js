class CustomerFormHandler {
    constructor() {

    }
    validateform(inp, err) {

        const idname = inp.id
        const today = new Date().toISOString().split("T")[0];
        let mailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let phoneregex = /^[06789]\d{9}$/;
        let zipregex = /^[0-9]{6}$/
        let aadharregex = /^[0-9]{12}$/
        var dt



        switch (idname) {
            case "fn":
                this.checkempty(inp, err);
                if (inp.value.length > 0 && inp.value.length <= 3) {
                    err.innerHTML = "Name length is more that 3 character"
                    this.errorstyle(err);
                }
                break;
            case "ln":
                this.checkempty(inp, err);
                if (inp.value.length > 0 && inp.value.length <= 3) {
                    err.innerHTML = "Name must be at least 3 characters"
                    this.errorstyle(err);
                }
                break;
            case "mail":
                this.checkempty(inp, err);
                if (!(mailregex.test(inp.value)) && inp.value != "") {
                    err.innerHTML = "Invalid Email"
                    this.errorstyle(err);
                }
                break;
            case "phone":
                this.checkempty(inp, err);
                if (!(phoneregex.test(inp.value)) && inp.value != "") {
                    err.innerHTML = "Please enter Valid 10 Digit Phone Number"
                    this.errorstyle(err);
                }
                break;
            case "add":
                this.checkempty(inp, err);
                break;
            case "city":
                this.checkempty(inp, err);
                break;
            case "state":
                this.checkempty(inp, err);
                break;
            case "zip":
                this.checkempty(inp, err);
                if (!(zipregex.test(inp.value)) && inp.value != "") {
                    err.innerHTML = "Please enter Valid 6 Digit Zip Code"
                    this.errorstyle(err);
                }
                break;
            case "aadhar":
                this.checkempty(inp, err);
                if (!(aadharregex.test(inp.value))) {
                    err.innerHTML = "Please enter Valid 12 Digit Aadhar Number"
                    this.errorstyle(err);
                }
                break;
            case "no_adult":
                this.checkempty(inp, err);
                if ((inp.value < 0 || inp.value > 20) && inp.value != "") {
                    err.innerHTML = "Maximum 20 Number of Adult allowed per booking"
                    this.errorstyle(err);
                }
                break;
            case "chkin":
                this.checkempty(inp, err);
                if (inp.value < today) {
                    err.innerHTML = "Please enter future Date"
                    this.errorstyle(err);
                }
                break;
            case "chkout":
                this.checkempty(inp, err);
                const checkin =
                    document.getElementById("chkin").value;

                if (inp.value <= checkin && inp.value !== "") {
                    err.innerHTML =
                        "Check-out date must be after Check-in date";
                    this.errorstyle(err);
                }
                break;

                break;
            case "purvisit":
                this.checkempty(inp, err);
                break;
            case "state":
                if (inp.value === "Choose...") {
                    err.innerHTML = "Please select state";
                    this.errorstyle(err);
                }
                break;
        }
    }
    checkempty(inp1, err1) {
        if (inp1.value == "") {
            err1.innerHTML = "Required Field"
            this.errorstyle(err1);
        } else {
            err1.innerHTML = ""
        }
    }
    errorstyle(a) {
        a.style.color = "Red"
        a.style.fontSize = "14px"
    }
    chkindt(e) {
        let dt
        if (e.id == "chkin" && dt == null) {
            dt = e.value
            console.log(dt)
            console.log("True in check")
        } else {
            console.log("False in check")
        }
    }

    saveToLocalStorage(data) {
        let customers =
            JSON.parse(localStorage.getItem("customers")) || [];

        customers.push(data);

        localStorage.setItem(
            "customers",
            JSON.stringify(customers)
        );
    }

    clearForm() {
        document.querySelector("form").reset();
    }

    showMessage(msg) {
        alert(msg);
    }


}
const validate = new CustomerFormHandler();

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    validate.validateform(fn, fnerr);
    validate.validateform(ln, lnerr);
    validate.validateform(mail, mailerr);
    validate.validateform(phone, phoneerr);
    validate.validateform(add, adderr);
    validate.validateform(city, cityerr);
    validate.validateform(state, stateerr);
    validate.validateform(zip, ziperr);
    validate.validateform(aadhar, aadharerr);
    validate.validateform(no_adult, no_adulterr);
    validate.validateform(chkin, chkinerr);
    validate.validateform(chkout, chkouterr);
    validate.validateform(purvisit, purvisiterr);

    // Check if any error exists
    let errors = document.querySelectorAll("span");

    for (let error of errors) {
        if (error.innerHTML !== "") {
            return; // stop submission
        }
    }

    const customer = {
        firstName: fn.value,
        lastName: ln.value,
        email: mail.value,
        phone: phone.value,
        address: add.value,
        city: city.value,
        state: state.value,
        zip: zip.value,
        aadhar: aadhar.value,
        adults: no_adult.value,
        checkin: chkin.value,
        checkout: chkout.value,
        purpose: purvisit.value
    };

    validate.saveToLocalStorage(customer);
    validate.clearForm();
    validate.showMessage("Data Saved Successfully");
});
