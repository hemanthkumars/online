let initData=function () {
    if(parseInt($("#tradeSide").val())===1){
        $(".tradeSide").text("Buy");
    }else {
        $(".tradeSide").text("Sell");
    }
}
initData();

let resetCalculation=function () {
    $("#capital").val("");
    $("#stockPrice").val("");
    calculateTradeData();
    
}


let calculateTradeData=function () {
    if($("#capital").val().toString().trim()===""||
            $("#stockPrice").val().toString().trim()===""
    ){
        initData();
        return;
    }
    
    initData();
    let stockPrice=parseFloat($("#stockPrice").val());
    let capital=parseFloat($("#capital").val());
    let leverage=parseInt($("#leverage").val());
    let stopLossInDecimal=parseFloat($("#stopLossPercentage").val())/100;
    let profitInDecimal=parseFloat($("#profitPercentage").val())/100;
    
    
    let tradeQuantity=capital/stockPrice;
    tradeQuantity= Math.round( tradeQuantity);
    tradeQuantity=tradeQuantity*leverage;
    $("#tradeQuantity").empty();
    $("#tradeQuantity").append(tradeQuantity);
    
    if(parseInt($("#tradeSide").val())===1){
       let stopLossValue=stockPrice-roundToTwo(stockPrice*stopLossInDecimal)
        stopLossValue=roundToTwo(stopLossValue);
        let targetPrice=stockPrice+roundToTwo(stockPrice*profitInDecimal);
        targetPrice=roundToTwo(targetPrice);
        $("#stopLossPrice").empty();
        $("#targetPrice").empty();
        $("#stopLossPrice").append(stopLossValue);
        $("#targetPrice").append(targetPrice);
    }else if(parseInt($("#tradeSide").val())===2){
        let stopLossValue=stockPrice+roundToTwo(stockPrice*stopLossInDecimal)
        stopLossValue=roundToTwo(stopLossValue);
        let targetPrice=stockPrice-roundToTwo(stockPrice*profitInDecimal);
        targetPrice=roundToTwo(targetPrice);
        $("#stopLossPrice").empty();
        $("#targetPrice").empty();
        $("#stopLossPrice").append(stopLossValue);
        $("#targetPrice").append(targetPrice);
    }
}

function roundToTwo(number) {
    return +(Math.round(number + "e+2") + "e-2");
}