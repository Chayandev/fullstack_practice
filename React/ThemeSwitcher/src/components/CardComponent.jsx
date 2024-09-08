function CardComponent() {
  return (
    <div className="flex flex-col flex-wrap bg-white dark:bg-slate-700 rounded-md border border-slate-200 dark:border-slate-600 shadow-sm">
      <div className="w-full h-50">
        <img
          src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg"
          alt="image"
          className="object-cover w-full h-full rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold font-mono text-slate-800 dark:text-white">
          Hi I'm Catty Pe!
        </h2>
        <p className="font-sans text-slate-800 dark:text-slate-100 text-sm">
          Hello there! I’m Catty Pie, your purr-fectly curious and charming
          companion. With a whisker twitch and a playful bounce, I’m always
          ready to explore new corners and chase after intriguing shadows. My
          sleek fur and keen eyes might seem aloof, but beneath that cool
          exterior is a warm heart full of affection and a playful spirit.
          Whether I’m napping in a cozy spot or frolicking with a feather toy,
          I’m here to add a touch of feline magic and a sprinkle of joy to your
          day. So, let’s embark on a whimsical adventure together, one purr at a
          time! 🐾
        </p>
      </div>
    </div>
  );
}
export default CardComponent;
