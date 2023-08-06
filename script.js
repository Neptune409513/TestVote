// 後端讀取投票
window.onload = function () {
    fetch('/api/votes')
        .then((response) => response.json())
        .then((data) => {
            option1Votes = data.option1Votes;
            option2Votes = data.option2Votes;
            updateDisplay();
        });
};

// 投票
function vote(option) {
    fetch(`/api/vote/${option}`, { method: 'POST' })
        .then((response) => response.json())
        .then((data) => {
            option1Votes = data.option1Votes;
            option2Votes = data.option2Votes;
            updateDisplay();
        });
}

// 更新
function updateDisplay() {
    fetch(`/api/vote/${option}`, { method: 'POST' })
        .then((response) => response.json())
        .then((data) => {
            option1Votes = data.option1Votes;
            option2Votes = data.option2Votes;
            updateDisplay();
        });
}