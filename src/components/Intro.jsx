

const Intro = () => {
  const texts = ['D', 'E', 'E', 'V', 'A'];
  const colors = ['#ff00ff', '#00ff00', '#ff0000', '#00ffff', '#ffcc00', '#cc00ff'];

  return (
    <div className="intro-main">
      <div className="intro">
        {texts.map((text, index) => (
          <div key={index} className="start" style={{ backgroundColor: colors[index % colors.length], alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
            {text}
          </div>
        ))}
        <div className="heart">
          <span role="img" aria-label="heart" style={{ color: 'red' }}>
            &#x2764;
          </span>
        </div>
      </div>
      <div className="additional-content">
        <div className="year">2024 <span className="twinkle-star">&#x2605;</span></div>
            <div>THANK YOU</div>
            
      </div>
    </div>
  );
};

export default Intro;


