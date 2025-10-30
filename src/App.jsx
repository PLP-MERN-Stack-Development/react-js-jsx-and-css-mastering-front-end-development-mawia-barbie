import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import TaskManager from "./components/TaskManager";
import ThemeSwitcher from "./components/ThemeSwitcher";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Theme toggle button */}
      <div className="p-4 flex justify-end">
        <ThemeSwitcher />

      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <Card>
          <h2 className="text-xl font-bold mb-2">Welcome to your Task App!</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Use this app to add, complete, and manage your tasks. Your tasks will
            be saved in localStorage, and you can switch between light and dark mode!
          </p>
        </Card>

        {/* Task Manager */}
        <TaskManager />
      </div>

      <Footer />
    </div>
  );
}

export default App;
