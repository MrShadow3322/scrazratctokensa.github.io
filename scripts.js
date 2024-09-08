document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const minBalance = 1000;
    const maxBalance = 10000;

    // Генерация случайного баланса при первом запуске
    if (!localStorage.getItem('userBalance')) {
        const randomBalance = Math.floor(Math.random() * (maxBalance - minBalance + 1)) + minBalance;
        localStorage.setItem('userBalance', randomBalance);
        balanceElement.textContent = `${randomBalance.toLocaleString()} RATC`;
    } else {
        balanceElement.textContent = `${localStorage.getItem('userBalance')} RATC`;
    }
});

function showPage(page) {
    if (page === 'main') {
        document.querySelector('.main-page').style.display = 'block';
        document.querySelector('.tasks-page').style.display = 'none';
    } else if (page === 'tasks') {
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.tasks-page').style.display = 'block';
    }
}

function completeTask() {
    // Проверка, было ли выполнено задание (чтобы награду можно было получить только один раз)
    if (!localStorage.getItem('taskCompleted')) {
        let currentBalance = parseInt(localStorage.getItem('userBalance')) || 0;
        localStorage.setItem('userBalance', currentBalance + 500);
        localStorage.setItem('taskCompleted', 'true'); // Задаем флаг о завершении задания
        alert('Вы получили 500 RATC за подписку!');
        location.reload(); // Обновляем страницу, чтобы отобразить новый баланс
    } else {
        alert('Вы уже выполнили это задание!');
    }
}
