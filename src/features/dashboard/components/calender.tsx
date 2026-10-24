import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import timeGridPlugin from "@fullcalendar/react/timegrid";
import listPlugin from "@fullcalendar/react/list";
import interactionPlugin from "@fullcalendar/react/interaction";

import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/monarch/theme.css";
import "@fullcalendar/react/themes/monarch/palettes/purple.css";
import "../../../styles/Calender.css";

export default function CalendarPage() {
  return (
    <main className="nexusCalendar">
      <header className="calendarHeader">
        <div>
          <p className="calendarEyebrow">PLAN YOUR TIME</p>
          <h1>Calendar</h1>
          <p>Manage your schedule and upcoming events.</p>
        </div>

        <button className="addEventButton">
          + New event
        </button>
      </header>

      <section className="calendarCard">
        <FullCalendar
          plugins={[
            themePlugin,
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          height={650}
          dayMaxEvents={3}
          selectable={true}
          editable={true}
          events={[
            {
              title: "Nexus Development",
              start: "2026-10-23",
              backgroundColor: "#6475f5",
              borderColor: "#6475f5",
            },
            {
              title: "Project Review",
              start: "2026-10-25",
              backgroundColor: "#19a88a",
              borderColor: "#19a88a",
            },
          ]}
        />
      </section>
    </main>
  );
}