





        const apiKey = 'd5757caf4dcf700815e896cd';  

        function convertCurrency() {
            var amount = document.getElementById("amount").value;
            var fromCurrency = document.getElementById("from-currency").value;
            var toCurrency = document.getElementById("to-currency").value;

            if (amount === "") {
                alert("Please enter an amount.");
                return;
            }

            var url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.result === "success") {
                        var rate = data.conversion_rates[toCurrency];
                        var convertedAmount = (amount * rate);
                        document.getElementById("result").innerText = convertedAmount;
                    } else {
                        alert("Error fetching exchange rates.");
                    }
                })
                .catch(error => {
                    alert("Something went wrong: " + error);
                });
        }
    