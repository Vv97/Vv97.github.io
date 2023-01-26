import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import "./contribute.css";

export const Contribute = () => {
  return (
    <div className="contributer">
      <div className="contributerWrapper">
        <GitHubCalendar
          blockSize={17}
          username="Vv97"
          hideTotalCount
          fontSize={16}
          color="#393739"
          blockRadius={2}
          showWeekdayLabels={false}
          hideColorLegend={true}
        >
          <ReactTooltip html />
        </GitHubCalendar>
      </div>
    </div>
  );
};
