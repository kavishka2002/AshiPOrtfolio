export default function PulseDivider() {
  return (
    <div className="container mx-auto max-w-[1240px] px-8">
      <div className="h-11 w-full overflow-hidden opacity-80">
        <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="h-full w-[200%] animate-pulseMove">
          <path
            d="M0,20 L60,20 L72,4 L84,36 L96,20 L400,20 M400,20 L460,20 L472,4 L484,36 L496,20 L800,20"
            fill="none"
            stroke="url(#pulseGradient)"
            strokeWidth={1.5}
          />
          <defs>
            <linearGradient id="pulseGradient" x1="0" x2="1">
              <stop offset="0" stopColor="#33f2c2" stopOpacity="0" />
              <stop offset="0.5" stopColor="#33f2c2" />
              <stop offset="1" stopColor="#33f2c2" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
