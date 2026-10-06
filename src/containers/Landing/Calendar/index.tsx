import { PageIntro } from "src/components/_common/PageIntro";
import { calendarEvents } from "src/data/site";

export default function Calendar() {
  return (
    <>
      <PageIntro
        kicker="Calendar"
        title="The day, before the print."
        text="A styled economic calendar. Events below are sample rows, not a live feed."
      />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-white/5 text-mist">
              <tr>
                {["Time", "Region", "Event", "Impact", "Forecast", "Previous"].map((head) => (
                  <th key={head} className="px-4 py-3 font-medium">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendarEvents.map((event) => (
                <tr key={event.event} className="border-t border-white/10">
                  <td className="px-4 py-4">{event.time}</td>
                  <td className="px-4 py-4">{event.region}</td>
                  <td className="px-4 py-4 font-medium">{event.event}</td>
                  <td className="px-4 py-4">
                    <span className={event.impact === "High" ? "text-rose" : "text-gold"}>{event.impact}</span>
                  </td>
                  <td className="px-4 py-4">{event.forecast}</td>
                  <td className="px-4 py-4 text-mist">{event.previous}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
