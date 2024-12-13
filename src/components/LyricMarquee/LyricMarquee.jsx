import Marquee from "react-fast-marquee";
import "./LyricMarquee.css";

const LyricMarquee = () => {
  return (
    <div className="marquee-wrapper">
      {/* Forward scrolling marquee */}
      <Marquee speed={60} gradient={false} pauseOnHover>
        <div className="marquee-container">
          <div className="marquee3k">
            <h4>
              <span>WORSHIP</span>
              <span>FAITHFULNESS</span>
              <span>HOLY SPIRIT</span>
              <span>GRACE</span>
            </h4>
            <h4>
              <span>SALVATION</span>
              <span>LOVE OF GOD</span>
              <span>PEACE</span>
              <span>HEAVEN</span>
            </h4>
            <h4>
              <span>JESUS</span>
              <span>HOPE</span>
              <span>BLESSINGS</span>
              <span>REDEMPTION</span>
            </h4>
          </div>
        </div>
      </Marquee>

      {/* Reverse scrolling marquee */}
      <Marquee speed={60} gradient={false} pauseOnHover direction="right">
        <div className="marquee-container">
          <div className="marquee3k">
            <h4>
              <span>WORSHIP</span>
              <span>FAITHFULNESS</span>
              <span>HOLY SPIRIT</span>
              <span>GRACE</span>
            </h4>
            <h4>
              <span>SALVATION</span>
              <span>LOVE OF GOD</span>
              <span>PEACE</span>
              <span>HEAVEN</span>
            </h4>
            <h4>
              <span>JESUS</span>
              <span>HOPE</span>
              <span>BLESSINGS</span>
              <span>REDEMPTION</span>
            </h4>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default LyricMarquee;
