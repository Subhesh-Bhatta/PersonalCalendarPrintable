# PersonalCalendarPrintable
This is a customizable, print-ready wall calendar generator designed for Bikram Sambat (BS) (Year 2083) with synchronized Gregorian (AD) date conversions.

This is done so using vanilla JavaScript, HTML, and CSS.

## FIle Strucutre
- index.html: It contains only the layout of themes, and a div to contain the whole calendar. All the subcomponents are rendered dynamically in JS.
- script.js: Core computing layer managing numerical calculations for date conversions, month calculations, grid generation, etc.
- styles.css: Themes, printing specifications.

## Features

- Custom themes: There are custom themes you can choose to print your calendar in. You can also make your own custom theme, or modify existing ones, by modifying some css variables.

- Print Customization: Currently, the print is set to A3, which means you can print all A-series paper as they have the same proportions. You can also modify it for different proportions as per your desire.

- Customizable Calendar format: Even if the base setup is for BS and AD, the calendar can be personalized easily. You can use the elements used in BS for a different calendar system. You can also modify the number of dates, and grid size to your choosing.

## How to print a calendar

- Clone the repo, or only copy the **index.html**, **styles.css**, and **script.js**.
- Use live server extension in vscode or anything equivalent to host the website. 
- Then, right click the website, and select print as pdf. The calendar will be printed with proper formatting. 


## Personalize your own calendar

- You can add any theme in styles.css, by adding an option in the HTML with value being your themes, then add that *data-theme* to the calendar, and modify the values inside of it with your own colors. 
  - You can also make more elements in the css be modifiable by a variable, and also change them according to theme.
- In script.js file, you can modify the nepaliNumerals, and make your own custom numeral for your calendar system. 
- The bsMonths, can be customized to make your own calendar system with any number of days, and can be mapped to another calendar like the Gregorian or a custom calendar of your choosing. (Also Modify the fuctions the *startDayofEachMonthCalculate*, *bsToAdConversion*, etc)
- You can modify the number of days in a week, number of days in a month, the grid size and more from the js and css files.
