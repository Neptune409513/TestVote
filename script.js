// 初始化選項
let option1Votes = 0;
let option2Votes = 0;

// 投票
function vote(option) {
    if (option === 1) {
        option1Votes++;
    } else if (option === 2) {
        option2Votes++;
    }

    // 更新
    updateDisplay();
}

// 函數更新
function updateDisplay() {
    // 更新電腦票數
    const voteCount1 = document.getElementById('vote-count1');
    voteCount1.textContent = `${option1Votes} 票`;

    // 更新滑鼠票數
    const voteCount2 = document.getElementById('vote-count2');
    voteCount2.textContent = `${option2Votes} 票`;
}