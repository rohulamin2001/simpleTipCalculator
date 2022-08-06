const tipCalculator = document.querySelector(".tip-calculator");


const data = {
    bill: 0,
    tip: 0,
    person: 1
}

tipCalculator.addEventListener("keyup", function (e) {


    if (validateInput(e.target.value)) {

        e.target.classList.remove('err');

        data[e.target.name] = parseInt(e.target.value);


        const tip = (data.bill * data.tip) / 100;

        console.log(tip);

        let total = data.bill + tip;

        total = total / data.person;

        total = total.toFixed(2)

        document.querySelector(".bottom-side h1 span").innerHTML = total;

        let tipPerPerson = tip / data.person;

        tipPerPerson = tipPerPerson.toFixed(2)

        document.querySelector(".top-side h1 span").innerHTML = tipPerPerson

    } else {
        e.target.classList.add('err');
    }

})


function validateInput(value) {

    return (/^\d+$/).test(value);
};

