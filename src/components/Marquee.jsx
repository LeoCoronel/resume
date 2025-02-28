const Marquee = ({ word, reverse }) => {
  const repeatedText = `${word} <span class='text-orange-500 align-middle'>*</span> `;

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`text-4xl lg:text-5xl xl:text-6xl flex whitespace-nowrap ${reverse ? "animate-[marquee-reverse_30s_linear_infinite]" : "animate-[marquee_30s_linear_infinite]"}`}
      >
        <span
          dangerouslySetInnerHTML={{ __html: repeatedText.repeat(50) }}
        ></span>
        <span
          dangerouslySetInnerHTML={{ __html: repeatedText.repeat(50) }}
        ></span>
      </div>
    </div>
  );
};

export default Marquee;
