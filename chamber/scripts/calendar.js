//Received help from chat.openai.com
document.addEventListener("DOMContentLoaded", function () {
    const monthYearElement = document.getElementById("month-year");
    const daysContainer = document.getElementById("days-container");
  
    let currentYear, currentMonth;
  
    function updateCalendar() {
      // Set month and year in the header
      monthYearElement.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth));
  
      // Clear previous days
      daysContainer.innerHTML = '';
  
      // Get the first day of the month
      const firstDay = new Date(currentYear, currentMonth, 1);
      const startingDay = firstDay.getDay();
  
      // Get the last day of the month
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const totalDays = lastDay.getDate();
  
      // Add empty cells for the days before the first day of the month
      for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day", "empty");
        daysContainer.appendChild(emptyDay);
      }
  
      // Add days to the calendar
      for (let day = 1; day <= totalDays; day++) {
        const calendarDay = document.createElement("div");
        calendarDay.classList.add("day");
        calendarDay.textContent = day;
        daysContainer.appendChild(calendarDay);
      }
    }
  
    function nextMonth() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    }
  
    function prevMonth() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    }
  
    // Add event listeners to the next and previous buttons
    document.getElementById("next-btn").addEventListener("click", nextMonth);
    document.getElementById("prev-btn").addEventListener("click", prevMonth);
  
    // Initialize current month and year
    const currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth();
  
    // Initial update
    updateCalendar();
  });
  