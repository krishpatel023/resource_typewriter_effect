import Typewriter from "typewriter-effect";
import "./TypewriterEffect.css";

function TypewriterEffect() {
  return (
    <div className="hero-section-type">
      <div className="type-effect">
        <h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: ["Lofi Hollywood", "Nature Sounds", "Lofi Bollywood"],
            }}
          />
        </h1>
      </div>
    </div>
  );
}
export default TypewriterEffect;
