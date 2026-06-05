class SubmissionViewer {

    constructor() {
        this.data =
            JSON.parse(localStorage.getItem("customers")) || [];

        this.renderTable(this.data);

        document
            .getElementById("search")
            .addEventListener("input", (e) => {
                this.searchData(e.target.value);
            });
    }

    renderTable(records) {

        const tbody =
            document.getElementById("tableBody");

        const noData =
            document.getElementById("nodata");

        tbody.innerHTML = "";

        if (records.length === 0) {

            noData.innerHTML = "No Data Found";

            return;
        }

        noData.innerHTML = "";

        records.forEach((customer, index) => {

            tbody.innerHTML += `
                <tr>
                    <td>${customer.firstName} ${customer.lastName}</td>
                    <td>${customer.phone}</td>
                    <td>${customer.email}</td>
                    <td>${customer.checkin}</td>
                    <td>${customer.checkout}</td>
                    <td>${customer.adults}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteRecord(${index})">
                    Delete
                        </button>
                    </td>
                </tr>
            `;
        });
    }

    searchData(keyword) {

        keyword = keyword.toLowerCase();

        const filteredData =
            this.data.filter((customer) => {

                const fullName =
                    `${customer.firstName} ${customer.lastName}`.toLowerCase();

                return (
                    fullName.includes(keyword) ||
                    customer.checkin.includes(keyword)
                );
            });

        this.renderTable(filteredData);
    }
}

new SubmissionViewer();

function deleteRecord(index) {

    if (confirm("Are you sure you want to delete this record?")) {

        let customers =
            JSON.parse(localStorage.getItem("customers")) || [];

        customers.splice(index, 1);

        localStorage.setItem(
            "customers",
            JSON.stringify(customers)
        );

        location.reload();
    }
}