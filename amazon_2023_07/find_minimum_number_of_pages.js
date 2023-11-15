var findMinimumNumberOfPages = (pages, days) => {
    // Write your code here
    let x = -1;
    // 
    if (pages.length > days)
        return -1;
        
    let reversePages = pages.sort((a, b) => b - a);
    
    for (let i = 0; i < reversePages.length; i++) {
        if ((pages.filter((a) => a > reversePages[i]).length * 2) + (pages.filter((a) => a<= reversePages[i]).length) <= days)
            x = reversePages[i];
        else
            break;    
    }
    
    return x;
}
