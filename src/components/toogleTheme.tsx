"use client";

import { useState, useEffect } from "react";

export default function ToggleTheme() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isChecked) {
      document.body.className = "light mx-auto";
    } else {
      document.body.className = "dark mx-auto";
    }
  }, [isChecked]);

  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}
