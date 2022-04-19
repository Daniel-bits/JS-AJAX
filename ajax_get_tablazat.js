    const xhr = new XMLHttpRequest();

    xhr.onload = (data) => {

        if (data.target.status == 200) {
            const answer = data.target.response;
            const answerList = JSON.parse(answer);

            let tableBody = document.querySelector("#kutyak_table");

            for (let elem in answerList) {
                let row = document.createElement("tr");
                for (let data of Object.values(answerList[elem])) {
                    let column = document.createElement("td");
                    column.innerHTML = data;
                    row.appendChild(column);
                }
                tableBody.appendChild(row);
            }
        }

    }

    xhr.open("GET", "data1.json", true);
    xhr.send();