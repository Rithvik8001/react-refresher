import { useState } from "react";

export default function EmojiCounter() {
  const [emojiCount, setEmojiCount] = useState(0);

  const addCount = (e) => {
    setEmojiCount((prev) => prev + 1);
  };
  const resetCount = (e) => {
    setEmojiCount(0);
  };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 bg-orange-50">
        <p>Count: {emojiCount}</p>
        <p className="p-4">{"😊".repeat(emojiCount)}</p>
        <div className="flex gap-2">
          <button
            onClick={addCount}
            className="cursor-pointer rounded-md bg-black px-2.5 py-1 text-sm text-white"
          >
            Add Emoji
          </button>
          <button
            onClick={resetCount}
            disabled={emojiCount == 0}
            className={`cursor-pointer rounded-md bg-black px-2.5 py-1 text-sm text-white ${emojiCount == 0 ? `bg-gray-500` : `bg-black`}`}
          >
            Reset Emoji
          </button>
        </div>
      </div>
    </>
  );
}
