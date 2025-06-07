interface RoutingCurvesProps {
  mobile?: boolean;
}

export default function RoutingCurves({ mobile = false }: RoutingCurvesProps) {
  if (mobile) {
    return (
      <svg
        width="100%"
        className="h-10"
        viewBox="0 0 320 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <title>Routing Curves</title>
        <g stroke="currentColor" strokeWidth="1.5">
          <path
            d="M155 2C160 15 60 5 60 18"
            className="origin-center transition-all duration-300 text-slate-6"
          />
          <path
            d="M160 2C160 12 160 15 160 18"
            className="origin-center transition-all duration-300 text-primary"
          />
          <path
            d="M165 2C160 15 260 5 260 18"
            className="origin-center transition-all duration-300 text-slate-6"
          />
        </g>
        <g className="text-slate-7">
          <circle
            cy="24"
            cx="60"
            r="3"
            fill="currentColor"
            className="origin-center transition-all duration-300 text-slate-7"
          />
          <circle
            cy="24"
            cx="160"
            r="4"
            fill="currentColor"
            className="origin-center transition-all duration-300 text-primary"
          />
          <circle
            cy="24"
            cx="260"
            r="3"
            fill="currentColor"
            className="origin-center transition-all duration-300 text-slate-7"
          />
        </g>
      </svg>
    );
  }

  return (
    <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
      <svg
        className="h-80 w-12"
        viewBox="-5 0 50 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <title>Routing Curves</title>
        <g stroke="currentColor" strokeWidth="1.5">
          <path
            d="M2 150C12 150 15 75 25 65"
            className="origin-center transition-all duration-300 text-slate-6"
          />
          <path
            d="M2 160C12 160 22 160 25 160"
            className="origin-center transition-all duration-300 text-primary"
          />
          <path
            d="M2 170C12 170 15 255 25 255"
            className="origin-center transition-all duration-300 text-slate-6"
          />
        </g>
        <g className="text-slate-7">
          <circle
            cx="35"
            cy="60"
            r="4"
            fill="currentColor"
            className="origin-center transition-all duration-300 text-slate-7"
          />
          <circle
            cx="35"
            cy="160"
            r="6"
            fill="currentColor"
            className="origin-center transition-all duration-300 text-primary"
          />
          <circle
            cx="35"
            cy="260"
            r="4"
            fill="currentColor"
            className="origin-center transition-all duration-300 text-slate-7"
          />
        </g>
      </svg>
    </div>
  );
}