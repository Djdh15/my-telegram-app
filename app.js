let score = 0;
const leaderboard = [];

document.getElementById('clickButton').onclick = function() {
    score++;
    document.getElementById('score').innerText = `مجموع النقاط: ${score}`;
};

document.getElementById('leaderboardButton').onclick = function() {
    leaderboard.push(score);
    const leaderboardDiv = document.getElementById('leaderboard');
    leaderboardDiv.classList.remove('hidden');
    leaderboardDiv.innerHTML = "<h2>قائمة المتصدرين:</h2>";
    leaderboard.sort((a, b) => b - a);
    leaderboard.slice(0, 10).forEach((points, index) => {
        leaderboardDiv.innerHTML += `<p>${index + 1}. ${points} نقطة</p>`;
    });
};
