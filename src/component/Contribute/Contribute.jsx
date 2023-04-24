import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
import "./contribute.css";
import { GitStatus } from "../gitstatus/GitStatus";

export const Contribute = () => {
  return (
    <div className="contributer">
      <h1 className="contributeTitle">Git Status</h1>
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
