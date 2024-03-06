// Отримуємо елементи зі сторінки за їх ідентифікаторами
let intro = document.getElementById('intro');
let experience = document.getElementById('experience');
let skill = document.getElementById('skill');
let project = document.getElementById('project');
let contact = document.getElementById('contact');

// Отримуємо всі посилання "a" на сторінці
let aHref = document.querySelectorAll('a');

// Встановлюємо початкове значення змінних active і zIndex
let active = 'intro'; // Початковий активний таб
let zIndex = 2; // Початкове значення zIndex для накладання

// Додаємо обробник подій click для кожного посилання <a>
aHref.forEach(a => {
    a.addEventListener('click', function(event){
        // Отримуємо значення табу з атрибута дата-таб посилання
        let tab = a.dataset.tab;
        // Перевіряємо чи не є таб нулем і чи він відмінний від поточного active
        if(tab !== null && tab !== active){
            let activeOld = document.querySelector('.tab.active');
            if (activeOld) activeOld.classList.remove('active');

            // Встановлюємо новий активний таб
            active = tab;

            // Збільшуємо значення zIndex і встановлюємо його для нового активного табу, що відповідає позиції курсора миші
            zIndex++;
            let tabActive = document.getElementById(active); 
            tabActive.style.zIndex = zIndex; 

            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');

            // Додаємо клас active до нового активного табу
            tabActive.classList.add('active');
        }
    });
});

