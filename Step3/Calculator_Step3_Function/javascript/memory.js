var memory = (function(){

    function memBtn(type){
        if(memoryBox.innerHTML==""){
            app.newMemory();  
            return  tempMemory = "0";
        }
        var myLable = memoryBox.firstChild.firstChild;
        switch(type){
            case "plus":
                if(tempMemory=="0"){
                    tempMemory = myLable.textContent;
                    myLable.textContent = eval(tempMemory)+Number(historyResult);
                    memoryValue = historyResult;
                }
                else{
                    tempMemory = myLable.textContent;
                    myLable.textContent = eval(tempMemory)+Number(memoryValue);
                }
            break;


            case "minus":
                if(tempMemory=="0"){
                    tempMemory = myLable.textContent;
                    myLable.textContent = eval(tempMemory)-Number(historyResult);
                    memoryValue = historyResult;
                }
                else{
                    tempMemory = myLable.textContent;
                    myLable.textContent = eval(tempMemory)-Number(memoryValue);
                }
            break;
            case "recall":
                resultBox.innerHTML = memoryValue;
            break;
            case "clear":
                if(memoryState == false){
                    memoryState = true;
                    app.recyclebin();
                    memoryState = false;
                }
                else
                app.recyclebin();  
            break;
        }        
    }

    function memoryPlus(){
        var myLable = this.parentNode.parentNode.firstChild;
        
        if(tempMemory=="0"){
            tempMemory = myLable.textContent;
            myLable.textContent = eval(tempMemory)+Number(historyResult);
            memoryValue = historyResult;
        }
        else{
            tempMemory = myLable.textContent;
            myLable.textContent = eval(tempMemory)+Number(memoryValue);
        }
    } 

    function memoryMinus(){
        var myLable = this.parentNode.parentNode.firstChild;
        
        if(tempMemory=="0"){
            tempMemory = myLable.textContent;
            myLable.textContent = eval(tempMemory)-Number(historyResult);
            memoryValue = historyResult;
        }
        else{
            tempMemory = myLable.textContent;
            myLable.textContent = eval(tempMemory)-Number(memoryValue);
        }
    }

    return{
        memoryPlus:memoryPlus,
        memoryMinus:memoryMinus,
        memBtn:memBtn
    }
})();
