//Nepali Numerals to map to english numerals, and type them out
const nepaliNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

//The number here refers to the first day of the year (first day of the first month)
const startDayOfYear = 2; // Tuesday (0: Sun, 1: Mon, 2: Tue, ...)

// This is manily designed for Nepali Calendar(BS) to have English calendar representation, but you can keep on 
// adding properties for calendars like solarCalendar, LunarCalendar and so on.
// Also it'd be better if there was a function which would help calculate the EnglishMonths dynamically, instead of hardcoding it.
const bsMonths = [
    { name: 'Baisakh', days: 31, bsMonth: 1, englishMonths: 'April - May 2026', startDay: startDayOfYear },
    { name: 'Jestha', days: 31, bsMonth: 2, englishMonths: 'May - June 2026', startDay: 0 },
    { name: 'Asadh', days: 32, bsMonth: 3, englishMonths: 'June - July 2026', startDay: 0 },
    { name: 'Shrawan', days: 31, bsMonth: 4, englishMonths: 'July - August 2026', startDay: 0 },
    { name: 'Bhadra', days: 31, bsMonth: 5, englishMonths: 'August - September 2026', startDay: 0 },
    { name: 'Asoj', days: 31, bsMonth: 6, englishMonths: 'September - October 2026', startDay: 0 },
    { name: 'Kartik', days: 30, bsMonth: 7, englishMonths: 'October - November 2026', startDay: 0 },
    { name: 'Mangsir', days: 29, bsMonth: 8, englishMonths: 'November - December 2026', startDay: 0 },
    { name: 'Poush', days: 30, bsMonth: 9, englishMonths: 'December 2026 - January 2027', startDay: 0 },
    { name: 'Magh', days: 29, bsMonth: 10, englishMonths: 'January - February 2027', startDay: 0 },
    { name: 'Falgun', days: 30, bsMonth: 11, englishMonths: 'February - March 2027', startDay: 0 },
    { name: 'Chaitra', days: 30, bsMonth: 12, englishMonths: 'March - April 2027', startDay: 0 }
];

// You can manually type out the 'startDay' for each month, for a unique calendar system,
// but modifying this dynamic start day calculator is advised since calendars are periodic
function startDayofEachMonthCalculate(startDayOfYear) {
    bsMonths[0].startDay = startDayOfYear;
    for (let i = 1; i < bsMonths.length; i++) {
        bsMonths[i].startDay = (bsMonths[i - 1].startDay + bsMonths[i - 1].days) % 7;
    }
}

//Calucalting the start of each day before everything else
startDayofEachMonthCalculate(startDayOfYear);

//Holidays of every month, no need to put Saturday, and Sunday holidays
//Currently manually filled out, would be appreciated if someone finds a json to import, or a way to automate this for every year
const holidays = [
    // Baisakh (Month 1)
    { month: 1, day: 1 },    
    { month: 1, day: 18 },   
    
    // Jestha (Month 2)
    { month: 2, day: 14},
    { month: 2, day: 15 },   
    
    // Shrawan (Month 4)
    { month: 4, day: 7 },    
    
    // Bhadra (Month 5)
    { month: 5, day: 12 },    
    { month: 5, day: 19 },    
    { month: 5, day: 29 },    

    // Asoj/Ashwin (Month 6)
    { month: 6, day: 9 },    
    
    // Kartik (Month 7)
    { month: 7, day: 1 },    
    { month: 7, day: 2 },    
    { month: 7, day: 3 },    
    { month: 7, day: 4 },    
    { month: 7, day: 5 },    
    { month: 7, day: 6 },    
    { month: 7, day: 8 },    
    { month: 7, day: 21 },   
    { month: 7, day: 22 },   
    { month: 7, day: 23 },   
    { month: 7, day: 24 },   
    { month: 7, day: 25 },   
    { month: 7, day: 26 },   
    { month: 7, day: 29 },   
    
    // Mangsir (Month 8)
    { month: 8, day: 8 },   
    { month: 8, day: 17 },   
    
    // Poush (Month 9)
    { month: 9, day: 9 },   
    { month: 9, day: 10 },   
    { month: 9, day: 15 },   
    { month: 9, day: 27 },   
    
    // Magh (Month 10)
    { month: 10, day: 1 },   
    { month: 10, day: 24 },   
    { month: 10, day: 28 },   
    
    // Falgun (Month 11)
    { month: 11, day: 7 },   
    { month: 11, day: 24 },  
    { month: 11, day: 25 },  
    
    // Chaitra (Month 12)
    { month: 12, day: 8 },  
    { month: 12, day: 23 },  

];

// BS month mapoed to the AD month that start in it, currently works, but needs to be hardcoded.
// Would be appreciated if someone finds a json for it or a way to dynamincally automate this.
// A problem that might occur here, is if two AD month start in one BS month, but that's really rare?(or might never happen), so haven't bothered with it
const bsToAdConversion = {
    1: { startAD: { month: 4, day: 14 } }, 2: { startAD: { month: 5, day: 15 } },
    3: { startAD: { month: 6, day: 15 } }, 4: { startAD: { month: 7, day: 17 } },
    5: { startAD: { month: 8, day: 18 } }, 6: { startAD: { month: 9, day: 17 } },
    7: { startAD: { month: 10, day: 17 } }, 8: { startAD: { month: 11, day: 16 } },
    9: { startAD: { month: 12, day: 16 } }, 10: { startAD: { month: 1, day: 15 } },
    11: { startAD: { month: 2, day: 14 } }, 12: { startAD: { month: 3, day: 16 } }
};

//understanding the rest of this code is left as an exercise to the reader
//got bored commenting the code
function toNepaliNumber(num) {
    return String(num).split('').map(digit => nepaliNumerals[parseInt(digit)]).join('');
}

function getEnglishDate(bsMonth, bsDay) {
    const startDate = bsToAdConversion[bsMonth].startAD;
    let adDay = startDate.day + bsDay - 1;
    let adMonth = startDate.month;
    let adYear = adMonth <= 3 ? 2027 : 2026;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

    if (adMonth === 2 && ((adYear % 4 === 0 && adYear % 100 !== 0) || adYear % 400 === 0)) {
        daysInMonth[1] = 29;
    }
    while (adDay > daysInMonth[adMonth - 1]) {
        adDay -= daysInMonth[adMonth - 1];
        adMonth++;
        if (adMonth > 12) { adMonth = 1; adYear++; }
    }
    return `${String(adMonth).padStart(2, '0')}/${String(adDay).padStart(2, '0')}`;
}

function isHoliday(bsMonth, bsDay) {
    return holidays.some(h => h.month === bsMonth && h.day === bsDay);
}

function isWeekend(bsMonth, bsDay, startDay) {
    const dayOfWeek = (startDay + bsDay - 1) % 7;
    return dayOfWeek === 0 || dayOfWeek === 6;
}

function getDayBoxHTML(day, bsMonth, startDay) {
    const isHol = isHoliday(bsMonth, day);
    const isWknd = isWeekend(bsMonth, day, startDay);
    const englishDate = getEnglishDate(bsMonth, day);
    const nepaliNum = toNepaliNumber(day);

    return {
        isHoliday: isHol || isWknd,
        html: `
            <div class="date-top">
                <span class="date-number">${day}</span>
                <span class="nepali-date">${nepaliNum}</span>
            </div>
            <div class="date-space"></div>
            <div class="english-date">${englishDate}</div>
        `
    };
}

function createCalendarMonth(monthData) {
    const page = document.createElement('div');
    page.className = 'calendar-page';

    // Physical Punch Spacer
    // Comment this out, if you don't want spacer to punch holes

    // const spacer = document.createElement('div');
    // spacer.className = 'calendar-punch-spacer';
    // page.appendChild(spacer);

    // Header
    const header = document.createElement('div');
    header.className = 'calendar-header';
    header.innerHTML = `
        <div class="header-left">
            <div class="month-title">${monthData.name}</div>
            <div class="english-months">BS 2083 | ${monthData.englishMonths}</div>
        </div>
        <div class="header-right">
            <div class="extra-label">Extra</div>
            <div class="extra-box"></div>
        </div>
    `;
    page.appendChild(header);

    // Monthly Notes
    const notes = document.createElement('div');
    notes.className = 'monthly-notes';
    notes.innerHTML = `
        <div class="notes-label">Monthly Notes</div>
        <div class="notes-area"></div>
    `;
    page.appendChild(notes);

    // Calendar Body
    const body = document.createElement('div');
    body.className = 'calendar-body';

    // Weekdays
    const weekdaysDiv = document.createElement('div');
    weekdaysDiv.className = 'weekdays';
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.className = 'weekday';
        dayEl.textContent = day;
        weekdaysDiv.appendChild(dayEl);
    });
    body.appendChild(weekdaysDiv);

    // Dates Grid
    const datesGrid = document.createElement('div');
    datesGrid.className = 'dates-grid';

    const totalBoxesNeeded = monthData.startDay + monthData.days;
    const overflowDaysCount = totalBoxesNeeded > 35 ? totalBoxesNeeded - 35 : 0;
    const standardStartDay = monthData.days - overflowDaysCount;

    // 1. Render early wrap-around days if they exist (placed into the very first empty slots)
    for (let day = standardStartDay + 1; day <= monthData.days; day++) {
        const box = document.createElement('div');
        box.className = 'date-box wrapped-top-date';
        
        const boxData = getDayBoxHTML(day, monthData.bsMonth, monthData.startDay);
        if (boxData.isHoliday) box.setAttribute('data-holiday', 'true');
        box.innerHTML = boxData.html;
        
        datesGrid.appendChild(box);
    }

    // 2. Render normal empty padding boxes for remaining grid offset slots
    const remainingEmptySlots = monthData.startDay - overflowDaysCount;
    for (let i = 0; i < remainingEmptySlots; i++) {
        const box = document.createElement('div');
        box.className = 'date-box empty';
        box.innerHTML = '<div class="date-space"></div>';
        datesGrid.appendChild(box);
    }

    // 3. Render standard grid days (from Day 1 up to the point where overflow begins)
    for (let day = 1; day <= standardStartDay; day++) {
        const box = document.createElement('div');
        box.className = 'date-box';

        const boxData = getDayBoxHTML(day, monthData.bsMonth, monthData.startDay);
        if (boxData.isHoliday) box.setAttribute('data-holiday', 'true');
        box.innerHTML = boxData.html;

        datesGrid.appendChild(box);
    }

    // 4. Pad any remaining trailing cells to ensure exactly 35 grid elements exist
    const currentRenderedCount = datesGrid.children.length;
    for (let i = currentRenderedCount; i < 35; i++) {
        const box = document.createElement('div');
        box.className = 'date-box empty';
        box.innerHTML = '<div class="date-space"></div>';
        datesGrid.appendChild(box);
    }

    body.appendChild(datesGrid);

    // Events Section
    const events = document.createElement('div');
    events.className = 'events-section';
    events.innerHTML = `
        <div class="events-label">Events</div>
        <div class="events-area"></div>
    `;
    body.appendChild(events);
    page.appendChild(body);

    return page;
}

// Initialize
const wrapper = document.getElementById('calendars-wrapper');
bsMonths.forEach(monthData => wrapper.appendChild(createCalendarMonth(monthData)));

// Themes selection listener
document.getElementById('theme-select').addEventListener('change', function(e) {
    const chosenTheme = e.target.value;
    if (chosenTheme === 'light-academia') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', chosenTheme);
    }
});