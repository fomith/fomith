window.onload = function () {
    let name = prompt('Введите Ваше имя');
    let surname = prompt('Введите Вашу фамилию');
    let patronymic = prompt('Введите Ваше отчество');
    let years = parseInt(prompt('Количество полных лет?'));
    let male = confirm('Ваш пол мужской?');
    let logotypeNumber1 = parseInt(prompt('У нас есть для Вас 5 логотипов, введите номер логотипа'));

    let logotype = 0;
    let logonumber = 0;

    male = (male > 0) ? logonumber = 10 : logonumber = 20;

    let logotypeNumber = logonumber + logotypeNumber1

    switch (logotypeNumber) {
        case 11:
            logotype = '<img class="logotype" src="./Image/1.jpg" alt="">';
            break;
        case 12:
            logotype = '<img class="logotype" src="./Image/2.jpg" alt="">';
            break;
        case 13:
            logotype = '<img class="logotype" src="./Image/3.jpg" alt="">';
            break;
        case 14:
            logotype = '<img class="logotype" src="./Image/4.jpg" alt="">';
            break;
        case 15:
            logotype = '<img class="logotype" src="./Image/5.jpg" alt="">';
            break;
        case 21:
            logotype = '<img class="logotype" src="./Image/11.jpg" alt="">';
            break;
        case 22:
            logotype = '<img class="logotype" src="./Image/22.jpg" alt="">';
            break;
        case 23:
            logotype = '<img class="logotype" src="./Image/33.jpg" alt="">';
            break;
        case 24:
            logotype = '<img class="logotype" src="./Image/44.jpg" alt="">';
            break;
        case 25:
            logotype = '<img class="logotype" src="./Image/55.jpg" alt="">';
            break;
        default:
            logotype = '<img class="logotype" src="./Image/1.jpg" alt="">';
    }

    name = (name === null) ? name = "Аноним" : name ;

    patronymic = (patronymic === null) ?patronymic = "Анонимусович" : patronymic;

    let fullname = name + ' ' + patronymic;

    let yearsName = 0;

    yearsName = (years == 1 || years == 21 || years == 31 || years == 41 || years == 51 || years == 61 || years == 71) ? yearsName = ' год.':
    yearsName = (years == 2 || years == 3 || years == 4 || years == 22 || years == 23 || years == 24 || years == 32 || years == 33 || years == 34 || years == 42 || years == 43 || years == 44 || years == 52 || years == 53 || years == 54 || years == 62 || years == 63 || years == 64 || years == 72 || years == 73 || years == 74) ? yearsName = ' года.' :
    yearsName = ' лет.';

    let oldyears = 0;

    oldyears = (years >= 61 && male == 1 || years == 56 && male == 0) ? ' Пенсионер' : ' В рассвете сил!' ;

    years = (Number.isNaN(years)) ? 'Неизвестно сколько' : years;

    days = (Number.isNaN(years)) ? 'Неизвестно' : years * 365; 

    document.getElementById('logotype').innerHTML = logotype;
    document.getElementById('fullname').innerHTML = fullname;
    document.getElementById('surname').innerHTML = surname;
    document.getElementById('years').innerHTML = years + yearsName;
    document.getElementById('days').innerHTML = 'Возраст в днях: ' + days;
    document.getElementById('old').innerHTML = oldyears;

};
