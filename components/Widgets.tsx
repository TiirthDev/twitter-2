import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="px-2 mt-2 hidden col-span-2 lg:inline">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="bg-transparent outline-none flex-1"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="ElonMusk"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
