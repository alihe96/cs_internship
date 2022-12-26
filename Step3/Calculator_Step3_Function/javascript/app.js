var Doc = document.getElementById.bind(document),
    resultBox = Doc("display"),
    screenBox = Doc("screen"),
    memoryBox = Doc("memory-box"),
    historyBox = Doc("historybox"),
    hisBoxMini = Doc("historyboxmini"),
    memBoxMini = Doc("memoryboxmini"),
    memText = Doc("memoryText"),
    historyText = Doc("historyText"),
    removehistory = Doc("rmvHis"),
    minibox = Doc("miniboxx"),
    historyResult = "",
    historyscreen = "",
    screen = "",
    input,
    click = false,
    previousInput = "",
    memoryState = false,
    tempMemory = "0",
    memoryValue = "";

var app = (function () {

    function changeStateRightSide(Mem) {
        var memHead = Doc("mem");
        var historyHead = Doc("hisT");

        if (Mem) {
            memoryState = true;
            historyBox.classList.add("displayoff");
            memoryBox.classList.remove("displayoff");
            memHead.classList.add("active-state");
            historyHead.classList.remove("active-state");
            historyText.classList.add("displayoff");
            if (memoryBox.textContent == "") {
                memText.classList.remove("displayoff");
                removehistory.classList.add("displayoff");
            }
            else {
                memText.classList.add("displayoff");
                removehistory.classList.remove("displayoff");
            }

        }
        else {
            memoryState = false;
            historyBox.classList.remove("displayoff");
            memoryBox.classList.add("displayoff");
            memHead.classList.remove("active-state");
            historyHead.classList.add("active-state");
            memText.classList.add("displayoff");
            if (historyBox.textContent == "") {
                historyText.classList.remove("displayoff");
                removehistory.classList.add("displayoff");
            }
            else {
                historyText.classList.add("displayoff");
                removehistory.classList.remove("displayoff");
            }
        }
    }

    function recyclebin() {
        if (memoryState) {
            memoryBox.innerHTML = "";
            memText.classList.remove("displayoff");
            memBoxMini.innerHTML = "";
        }
        else {
            historyBox.innerHTML = "";
            historyText.classList.remove("displayoff");
            hisBoxMini.innerHTML = "";
        }
        removehistory.classList.add("displayoff");
    }

    function minimizeBox() {

        if (minibox.classList.contains("displayoff"))
            minibox.classList.remove("displayoff");
        else
            minibox.classList.add("displayoff");

        if (memoryState) {
            hisBoxMini.classList.add("displayoff");
            memBoxMini.classList.remove("displayoff");
        }
        else {
            memBoxMini.classList.add("displayoff");
            hisBoxMini.classList.remove("displayoff");
        }
    }

    function newMemory() {
        if (!memoryState)
            memoryBox.classList.add("displayoff");
        else
            removehistory.classList.remove("displayoff");

        memText.classList.add("displayoff");
        var label = document.createElement("div");
        label.className = "lable";
        var newRes = document.createElement("div");
        newRes.className = "number";
        if (!historyResult)
            historyResult = 0;
        newRes.textContent = historyResult;
        var Buttons = document.createElement("div");
        Buttons.className = "button";
        var MC = document.createElement("aside");
        MC.textContent = "MC"
        MC.onclick = memoryLabelClear;
        var MP = document.createElement("aside");
        MP.textContent = "M+"
        MP.onclick = memory.memoryPlus;
        var MM = document.createElement("aside");
        MM.textContent = "M-"
        MM.onclick = memory.memoryMinus;
        Buttons.appendChild(MC);
        Buttons.appendChild(MP);
        Buttons.appendChild(MM);
        label.appendChild(newRes);
        label.appendChild(Buttons);
        var miniMem = label.cloneNode(true);
        memBoxMini.insertBefore(miniMem, memBoxMini.firstChild);
        memoryBox.insertBefore(label, memoryBox.firstChild);
    }

    function newHistory() {
        historyText.classList.add("displayoff");
        if (memoryState == false)
            removehistory.classList.remove("displayoff")
        var newExprssion = historyscreen;
        var newResult = historyResult;
        var lable = document.createElement("div");
        lable.className = "lable";
        lable.onclick = myHistory.clickHistory;
        var screen = document.createElement("div");
        screen.className = "exp";
        screen.textContent = newExprssion + " = ";
        var res = document.createElement("div");
        res.className = "result";
        res.textContent = newResult;
        lable.appendChild(screen);
        lable.appendChild(res);
        historyBox.appendChild(lable);
        var miniHistory = lable.cloneNode(true);
        miniHistory.onclick = myHistory.clickHistory;
        hisBoxMini.appendChild(miniHistory);
    }

    function memoryLabelClear() {
        this.parentNode.parentNode.remove();
        if (memoryBox.textContent == "")
            changeStateRightSide(true);
    }

    function refreshDisplay() {
        if (window.innerWidth == 500) {
            minibox.classList.add('displayoff');
        }
    };

    return {
        newHistory: newHistory,
        newMemory: newMemory,
        changeState: changeStateRightSide,
        recyclebin: recyclebin,
        minimizeBox: minimizeBox,
        refreshDisplay: refreshDisplay

    }

})();
window.addEventListener("resize", app.refreshDisplay);