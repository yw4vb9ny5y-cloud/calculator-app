const display = document.getElementById("display");
const historyList = document.getElementById("history");

let history = [];

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value =""
}

function calculateResult() {
    try {
        const expression = display.value;
        const result = eval(expression);

        if (expression === "") {
            return;
        }

        const entry =`${expression} = ${result}`;
        history.pushState(entry);
        renderHistory();

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function renderHistory() {
    historyList.innerHTML = "";

    for (let item of history) {
        const li = document.createElement("Li");
        li.textContent = item;
        historyList.appendChild(Li);
    }
}

function clearHistory() {
    history = [];
    renderHistory();
}