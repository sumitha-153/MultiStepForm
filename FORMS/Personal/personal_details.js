const next = document.getElementById("next");

next.addEventListener('click', (e) => {

    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const gender = document.getElementById('gender');
    const address = document.getElementById("address");
    const dob = document.getElementById("dob").value;
    const currentdate = new Date(); // Current date
    const datevalue = new Date(dob); // Date selected by the user
    
    localStorage.clear();
    
    function validateDate() {
        if (datevalue > currentdate || dob === "") {
            return false; 
        } else {
            return true; 
        }
    }

    fname.addEventListener('focus', () => {
        document.getElementById("nameerror").textContent = "";
        fname.style.borderColor = '';
    });
    lname.addEventListener('focus', () => {
        document.getElementById("nameerror").textContent = "";
        lname.style.borderColor = '';
    });
    gender.addEventListener('focus', () => {
        document.getElementById("gendererror").textContent = "";
        gender.style.borderColor = '';
    });
    address.addEventListener('focus', () => {
        document.getElementById("addresserror").textContent = "";
        address.style.borderColor = '';
    });
    document.getElementById("dob").addEventListener('focus', () => {
        document.getElementById("doberror").textContent = "";
        document.getElementById("dob").style.borderColor = '';
    });


    if (fname.value !== "" && fname.value.length >= 3 && lname.value !== "" && address.value.length >= 5 && dob !== "" && gender.value !== "" && validateDate()) {
        
        let personal_details = {
            firstName: "",
            lastName: "",
            Gender: "",
            DOB: "",
            Address: ""
        };

        const values = [fname.value, lname.value, gender.value, dob, address.value];
        console.log(values);

        let i = 0;
        for (const keys in personal_details) {
            personal_details[keys] = values[i];
            i++;
        }

        localStorage.setItem(fname.value, JSON.stringify(personal_details));
        window.location.href = '../Education/education.html';
        window.history.go(1);

    } else {
        e.preventDefault();

        if (fname.value === "" || fname.value.length <= 3) {
            nameerror.textContent = "First Name should not be empty or less than 3 characters";
            nameerror.style.display = 'block';
            fname.style.borderColor = 'red';
            lname.style.borderColor='red';
        }
        if (gender.value === "") {
            gendererror.textContent = "Please select the gender";
            gendererror.style.display = 'block';
            gender.style.borderColor = 'red';
        }
        if (dob === "" || !validateDate()) {
            doberror.textContent = "Please enter a valid date (no future dates allowed)";
            doberror.style.display = 'block';
            document.getElementById("dob").style.borderColor = 'red';
        }
        if (address.value.length <= 5 || address.value === "") {
            addresserror.textContent = "Address field should not be empty or too short";
            addresserror.style.display = 'block';
            address.style.borderColor = 'red';
        }
    }
});
