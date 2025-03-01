import { useState } from "react";

export default function FlagToggle() {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setIsEnglish(!isEnglish)}
        className="rounded-lg p-2"
      >
        {isEnglish ? (
          <img src="/svgs/flag-spain.svg" alt="Spain Flag" className="w-6" />
        ) : (
          <img src="/svgs/flag-us.svg" alt="UK Flag" className="w-6" />
        )}
      </button>
    </div>
  );
}
