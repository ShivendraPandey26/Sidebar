"use client";
import HomePage from "./HomePage";

const Dashboard = () => {
    return (
      <div className="flex flex-1">
        <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full ">
          <HomePage />
        </div>
      </div>
    );
  };

  export default Dashboard;