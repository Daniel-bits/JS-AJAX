    const xhr = new XMLHttpRequest();

    xhr.onload = (data) => {

        if (data.target.status == 200) {
            const answer = data.target.response;
            const answerList = JSON.parse(answer);

            let kutyak_table_content = "";

            answerList.forEach(elem => {

                const tableRow = `
                <tr>
                <td scope="row">${elem.id}</td>
                <td>${elem.nev}</td>
                <td>${elem.eletkor}</td>
                <td>${elem.fajta}</td>
                <td>${elem.gazda_neve}</td>
                <tr>`
                kutyak_table_content += tableRow;
            });
            document.getElementById("kutyak_table").innerHTML = kutyak_table_content;

        }

    }

    xhr.open("GET", "data1.json", true);
    xhr.send();