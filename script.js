function submitWorksheet() {

    const studentName =
        document.getElementById("studentName").value.trim();

    const result =
        document.getElementById("result");


    if (studentName === "") {

        result.innerHTML =
            "⚠️ કૃપા કરીને વિદ્યાર્થીનું નામ લખો.";

        return;
    }


    result.innerHTML =
        "✅ Worksheet successfully submitted!";

}
