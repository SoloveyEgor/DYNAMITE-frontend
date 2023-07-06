const form = document.querySelector('form');
form.addEventListener('submit', calculateProgram);

function calculateProgram(event) {

    event.preventDefault();
    
    // Индекс БМО

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value);
    const age = parseInt(document.querySelector('#age').value);
    const gender = parseInt(document.querySelector('#gender').value);
    let BMO = (10 * weight) + (6.25 * height) - (5 * age);
    if (gender == 1) {
        BMO = (BMO + 5) / 1000;
    } else {
        BMO = (BMO - 161) / 1000; 
    }

    // давляк
    const davlenie = parseInt(document.querySelector('#davlenie').value);
    let cardioRatio = 5 * davlenie;

    // количество подходов

    const desired_load = parseInt(document.querySelector('#desired_load').value);
    const level = parseInt(document.querySelector('#level').value);
    const training_amount = parseInt(document.querySelector('#training_amount').value);
    const dexperience = parseInt(document.querySelector('#experience').value);
    const cel = parseInt(document.querySelector('#cel').value);
    const telo = parseInt(document.querySelector('#telo').value);

    let colRatio = Math.round((+BMO * +desired_load * +level * +cel * +telo)/ training_amount);
    if (colRatio <2) {
        colRatio = 2;
    }

    if (colRatio > 3) {
        colRatio = 4;
    }

    console.log(colRatio);

    // тип желаемой программы сил/кардио

    const tip = parseInt(document.querySelector('#tip').value);
    let tipRatioStart = '';
    let tipRationEnd = '';
    if (tip == 3) {
        tipRatioStart =`
        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Работа на кардиотренажёре</p>
                <p>${cardioRatio}</p>
            </div>
        </div>
        `;

        tipRationEnd =`
        <div class="calc_wrap_program-header">Конец суперсета</div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Сгибание ног в тренажёре лёжа</p>
                <p>${colRatio} x ${Math.floor(BMO*5)}</p>
            </div>
        </div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Работа на кардиотренажёре</p>
                <p>${cardioRatio}</p>
            </div>
        </div>
        `;
    } else if (tip == 2) {
        tipRatioStart =`
        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Работа на кардиотренажёре</p>
                <p>${cardioRatio}</p>
            </div>
        </div>
        `;

        tipRationEnd = `

        <div class="calc_wrap_program-header">Начало суперсета</div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Сгибание ног в тренажёре лёжа</p>
                <p>${colRatio} x ${Math.round(BMO*5)} - ${Math.round(BMO*6)}</p>
            </div>
        </div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Приседание с грифом</p>
                <p>${colRatio} x ${Math.round(BMO*5)} - ${Math.round(BMO*6)}</p>
            </div>
        </div>

        <div class="calc_wrap_program-header">Конец суперсета</div>


        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Работа на кардиотренажёре</p>
                <p>${cardioRatio}</p>
            </div>
        </div>
        `
    } else {
        tipRatioStart=`
        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Приседание с грифом</p>
                <p>${colRatio} x ${Math.floor(BMO*5)}</p>
            </div>
        </div>
        `

        tipRationEnd = `
        <div class="calc_wrap_program-header">Конец суперсета</div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Приседание с грифом</p>
                <p>${colRatio} x ${Math.floor(BMO*5)}</p>
            </div>
        </div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Работа на кардиотренажёре</p>
                <p>${cardioRatio}</p>
            </div>
        </div>

        `
    }

    if (document.querySelector('ul')) {
        const program = document.createElement('ul');
        program.innerHTML = `
               
        <div class="calc_wrap_program-header">Разминка</div>

         ${tipRatioStart}

        <div class="calc_wrap_program-header">Начало суперсета</div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Скручивания на наклонной лавке</p>
                <p>${colRatio} x ${Math.round(BMO*6)} - ${Math.round(BMO*7)}</p>
            </div>
        </div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/3.jpeg" alt="">
            <div>
                <p>Жим штанги с груди стоя</p>
                <p>${colRatio} x ${Math.floor(BMO*5)}</p>
            </div>
        </div>

        <div class="calc_wrap_program-header">Начало суперсета</div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/3.jpeg" alt="">
            <div>
                <p>Жим штанги из-за головы стоя</p>
                <p>${colRatio} x ${Math.round(BMO*5)} - ${Math.round(BMO*6)}</p>
            </div>
        </div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/1.jpeg" alt="">
            <div>
                <p>Отжимания от брусьев в гравитроне</p>
                <p>${colRatio} x ${Math.round(BMO*6)} - ${Math.round(BMO*7)}</p>
            </div>
        </div>


        <div class="calc_wrap_program-header">Начало суперсета</div>

        <div class="calc_wrap_program-content">
        <img src="./assets/img/form/4.webp" alt="">
            <div>
                <p>Подтягивания обратным хв. в гравитроне</p>
                <p>${colRatio} x ${Math.round(BMO*5)} - ${Math.round(BMO*6)}</p>
            </div>
        </div>

        <div class="calc_wrap_program-content">
            <img src="./assets/img/form/3.jpeg" alt="">
            <div>
                <p>Жим ногами в тренажёре</p>
                <p>${colRatio} x ${Math.round(BMO*5)} - ${Math.round(BMO*6)}</p>
            </div>
        </div>
        ${tipRationEnd}

        <p class="calc_wrap_program-bottom">*Суперсет, это когда вы делаете 2, 3 или даже 4 упражнения одновременно. Пример из 2-х упражнений: делаете 1 подход первого упражнения. Затем тут же без отдыха 1 подход второго. Затем отдых и повторяете заново.</p>

        `;
        document.querySelector("#org_div1").appendChild(program);
    }
}