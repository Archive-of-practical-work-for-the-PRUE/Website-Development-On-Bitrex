document.addEventListener('DOMContentLoaded', function () {
    // Лабораторная работа 1: Верстка сайта

    // Функция расчета возраста
    function calculateAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

    // Обновление возраста
    function updateAge() {
        const birthDate = '2006-06-04'; // 4 июня 2006
        const age = calculateAge(birthDate);

        // Обновляем основной счетчик возраста
        const ageDisplay = document.getElementById('ageDisplay');

        if (ageDisplay) {
            ageDisplay.textContent = age;
        }

        // Анимированное обновление лет в IT
        const codingYears = document.getElementById('codingYears');
        if (codingYears) {
            const itStartDate = new Date('2020-10-01'); // 1 октября 2021
            const now = new Date();

            // Рассчитываем точное количество лет с дробями
            const diffTime = Math.abs(now - itStartDate);
            const msPerYear = 1000 * 60 * 60 * 24 * 365.25; // Миллисекунд в году
            const yearsInIT = diffTime / msPerYear;

            // Округляем до одного знака после запятой
            const displayYears = Math.round(yearsInIT * 10) / 10;

            animateDecimalNumber(codingYears, 0, displayYears, 4000);
        }
    }

    // Анимация десятичного числа
    function animateDecimalNumber(element, start, end, duration) {
        const startTime = performance.now();

        function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = start + (end - start) * easeOutQuart;

            element.textContent = current.toFixed(1);

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }

        requestAnimationFrame(updateNumber);
    }

    // Function to update education timeline based on data attributes
    function updateEducationTimeline() {
        const educationBars = document.querySelectorAll('.education-bar');
        const timelineStart = 2021; // Start year of the timeline
        const timelineEnd = 2026;   // End year of the timeline
        const timelineDuration = timelineEnd - timelineStart; // Total timeline duration in years

        educationBars.forEach(bar => {
            // Parse start date (supporting both "yyyy" and "mm.yyyy" formats)
            let startYear, startMonth = 0;
            const startData = bar.dataset.start;
            if (startData.includes('.')) {
                // Format: mm.yyyy
                const [month, year] = startData.split('.');
                startYear = parseInt(year);
                startMonth = parseInt(month) - 1; // Convert to 0-based month
            } else {
                // Format: yyyy
                startYear = parseInt(startData);
            }

            // Parse end date (supporting both "yyyy"/"mm.yyyy" formats and "current")
            let endYear, endMonth = 11; // Default to December (11 in 0-based)
            if (bar.dataset.end === 'current') {
                const now = new Date();
                endYear = now.getFullYear();
                endMonth = now.getMonth(); // 0-based month
            } else {
                if (bar.dataset.end.includes('.')) {
                    // Format: mm.yyyy
                    const [month, year] = bar.dataset.end.split('.');
                    endYear = parseInt(year);
                    endMonth = parseInt(month) - 1; // Convert to 0-based month
                } else {
                    // Format: yyyy
                    endYear = parseInt(bar.dataset.end);
                }
            }

            // Convert to decimal years for precise calculation
            // Position the start at the beginning of the month and end at the end of the month
            const startDecimal = startYear + (startMonth / 12);
            const endDecimal = endYear + ((endMonth + 1) / 12); // End at the end of the specified month
            const timelineStartDecimal = timelineStart;
            const timelineEndDecimal = timelineEnd;
            const timelineDurationDecimal = timelineEndDecimal - timelineStartDecimal;

            // Calculate position and width based on timeline duration
            const startPercent = ((startDecimal - timelineStartDecimal) / timelineDurationDecimal) * 100;
            const widthPercent = ((endDecimal - startDecimal) / timelineDurationDecimal) * 100;

            // Apply calculated styles
            bar.style.marginLeft = `${startPercent}%`;
            bar.style.width = `${widthPercent}%`;
        });
    }

    // Run the update function when the page loads
    updateEducationTimeline();

    // Запускаем обновление возраста
    updateAge();

    // Анимация смены ролей
    const roleText = document.getElementById('roleText');
    const roles = ['Python Developer', 'SQL Developer', 'Android Developer', 'Data Analyst'];
    let currentRoleIndex = 0;
    let isTransitioning = false;

    function switchRole() {
        if (isTransitioning) return;

        isTransitioning = true;

        roleText.style.opacity = '0';

        setTimeout(() => {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            roleText.textContent = roles[currentRoleIndex];

            roleText.style.opacity = '1';
            isTransitioning = false;
        }, 300);
    }

    // Запуск анимации смены ролей каждые 3.5 секунды
    setInterval(switchRole, 3500);

    // Анимация навигации при скролле
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.7)';
            navbar.style.backdropFilter = 'blur(18px) saturate(140%)';
            navbar.style.webkitBackdropFilter = 'blur(18px) saturate(140%)';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.35)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.6)';
            navbar.style.backdropFilter = 'blur(15px) saturate(120%)';
            navbar.style.webkitBackdropFilter = 'blur(15px) saturate(120%)';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            navbar.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.3)';
        }

        // Скрытие/показ навигации при скролле
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Добавляем наблюдение за элементами
    const animatedElements = document.querySelectorAll('.section-header, .about-info, .stat-card');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Плавная прокрутка для навигации
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Убираем активное состояние со всех ссылок
            navLinks.forEach(l => l.classList.remove('active'));
        });
    });

    // Параллакс эффект для фоновых элементов
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-shapes .shape');

        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Добавление CSS стилей
    const style = document.createElement('style');
    style.textContent = `
        .navbar {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);

    // Инициализация всех анимаций
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // Функциональность модального сертификата
    const modal = document.getElementById('certificateModal');
    const modalTitle = document.getElementById('modalTitle');
    const certificateImage = document.getElementById('certificateImage');
    const modalClose = document.querySelector('.modal-close');

    const certificates = {
        'python': {
            title: 'Сертификат Python',
            image: 'img/certificates/python-certificat.jpg'
        },
        'javascript': {
            title: 'Сертификат JavaScript',
            image: 'img/certificates/js-certificate.png'
        }
    };

    const clickableTechCards = document.querySelectorAll('.tech-card-clickable');
    clickableTechCards.forEach(card => {
        card.addEventListener('click', function () {
            const certificateType = this.dataset.certificate;
            const certificate = certificates[certificateType];

            if (certificate) {
                modalTitle.textContent = certificate.title;
                certificateImage.src = certificate.image;
                certificateImage.alt = certificate.title;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Закрытие модального окна
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalContent = document.querySelector('.modal-content');
    modalContent.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // Функциональность индикатора прокрутки
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function () {
            const nextSection = document.querySelector('#about');
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Функциональность кнопки возвращения назад
    const backToTopButton = document.getElementById('backToTop');

    // Отображение кнопки
    window.addEventListener('scroll', function () {
        if (backToTopButton) {
            if (window.scrollY > 600) { // Show button after scrolling 600px
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Наведения курсора на навигационную панель
    if (navbar) {
        navbar.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(0)';
        });

        navbar.addEventListener('mouseleave', function () {
            if (window.scrollY > 200) {
                this.style.transform = 'translateY(-100%)';
            }
        });
    }

    // Обработчик формы обратной связи
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Получаем значения полей формы
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // В реальном приложении здесь был бы код для отправки данных на сервер
            console.log('Форма отправлена:', { name, email, subject, message });

            // Показываем сообщение об успешной отправке
            alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);

            // Очищаем форму
            contactForm.reset();
        });
    }
});

// jQuery функциональность
// Лабораторная работа: Изучение основ JavaScript, библиотек jQuery и jQuery UI

// 1. Метод .ready()
$(document).ready(function () {
    // 2. Метод .click() - добавим клик по кнопкам технологий
    $('.tech-card').click(function () {
        // 3. Метод .addClass() - добавим класс при клике
        $(this).addClass('clicked');

        // 4. Метод .css() - изменим стиль при клике
        $(this).css('border-color', '#00f5ff');

        // 5. Метод .animate() - анимируем элемент
        $(this).animate({
            opacity: 0.8
        }, 300, function () {
            $(this).animate({
                opacity: 1
            }, 300);
        });

        // Применено минимум 5 методов jQuery как требуется в лабораторной работе:
        // .ready(), .click(), .addClass(), .css(), .animate()

        // Удалим класс через некоторое время
        setTimeout(() => {
            $(this).removeClass('clicked');
            $(this).css('border-color', '');
        }, 1000);
    });

    // Добавим анимацию для навигационных ссылок
    $('.nav-link').hover(
        function () {
            // При наведении
            $(this).addClass('hovered');
        },
        function () {
            // При убирании курсора
            $(this).removeClass('hovered');
        }
    );

    // Анимация для секций при прокрутке с использованием jQuery
    $(window).scroll(function () {
        $('.section-title').each(function () {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                // 6. Метод .fadeIn() - плавное появление
                $(this).fadeIn();
            }
        });
    });

    // Использование jQuery UI - виджет Accordion для списка навыков
    // Создадим массив навыков
    // Это первый компонент jQuery UI, как требуется в лабораторной работе
    const skills = [
        { name: 'Python', level: 90, description: 'Продвинутый уровень. Используется для разработки Telegram ботов, Data Science и веб-приложений.' },
        { name: 'JavaScript', level: 75, description: 'Средний уровень. Используется для фронтенд разработки и интерактивности сайта.' },
        { name: 'HTML/CSS', level: 80, description: 'Продвинутый уровень. Создание адаптивных и современных веб-интерфейсов.' },
        { name: 'SQL', level: 70, description: 'Средний уровень. Работа с базами данных PostgreSQL, MySQL, T-SQL.' },
        { name: 'Git', level: 85, description: 'Продвинутый уровень. Контроль версий, работа в команде, CI/CD.' }
    ];

    // Создадим HTML для accordion
    let accordionHtml = '';
    skills.forEach((skill, index) => {
        accordionHtml += `
        <h3>${skill.name}</h3>
        <div>
            <p>${skill.description}</p>
            <p>Уровень владения: ${skill.level}%</p>
            <div class="skill-progress">
                <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
            </div>
        </div>`;
    });

    // Добавим accordion в страницу
    $('#skills-accordion').html(accordionHtml);

    // Инициализируем jQuery UI Accordion
    $('#skills-accordion').accordion({
        collapsible: true,
        heightStyle: "content",
        active: false
    });

    // Использование jQuery UI - виджет Dialog для модального окна
    // Это второй компонент jQuery UI, как требуется в лабораторной работе
    $('#open-dialog').click(function () {
        $('#dialog-modal').dialog({
            modal: true,
            width: 400,
            height: 300,
            buttons: {
                "Закрыть": function () {
                    $(this).dialog("close");
                }
            }
        });
    });

    // Продемонстрировано 2 компонента из библиотеки jQuery UI как требуется в лабораторной работе:
    // 1. Accordion (аккордеон) - для отображения навыков
    // 2. Dialog (диалоговое окно) - для модального окна
});