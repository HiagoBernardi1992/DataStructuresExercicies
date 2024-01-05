function MaxProfit(prices) {
    if(prices.length <= 1) return 0;

    let hold = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(hold < prices[i]) {
            profit = profit + (prices[i] - hold);
        } 
        hold = prices[i];
    }

    return profit;
};