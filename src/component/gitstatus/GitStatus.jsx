import React from "react";

import "./gitstatus.css";

export const GitStatus = () => {
  return (
    <div className="gitstatus">
      <div className="gitstatuscontainer">
        <div>
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=vv97&show_icons=true&theme=transparent&bg_color=fbfbfb&title_color=393739&text_color=393739&icon_color=7fd1ae&border_radius=0&border_color=true"
            alt=""
          />
        </div>
        <div>
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=vv97&theme=violet-dark&border_radius=0&background=fbfafb&ring=393739&stroke=393739&currStreakNum=393739&fire=7fd1ae&sideNums=393739&currStreakLabel=393739&sideLabels=393739&dates=393739&hide_border=true"
            alt=""
          />
        </div>
      </div>

      <div className="gitlanguagecard">
        <div>
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=vv97&layout=compact&title_color=393739&bg_color=fbfafb&hide_border=true&text_color=393739"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
