const display = document.getElementById("display");

function AppendToDisplay(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

function ClearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        if (!display.value) return;
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

