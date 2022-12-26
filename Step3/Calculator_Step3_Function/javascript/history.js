var myHistory = (function (){
    
    function clickHistory(){
        input = "";
        screen = this.firstChild.textContent.slice(0, -2);
        Calculate.display(this.lastChild.textContent);
    }
    return{
      clickHistory:clickHistory  
    }
})(); 