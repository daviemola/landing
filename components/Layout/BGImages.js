import React, { useState, useEffect } from "react";

export default function Footer() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="943.781"
          height="950.729"
          viewBox="0 0 943.781 950.729"
          className="absolute right-[30%] top-[-200px] opacity-[0.7] translate-x-[50%] -z-10"
        >
          <g
            id="Polygon_5"
            data-name="Polygon 5"
            transform="translate(505.145) rotate(51)"
            fill="#dbeafe"
          >
            <path d="M348.5,0,697,650H0Z" stroke="none" />
            <path
              d="M 348.5 2.11639404296875 L 1.6708984375 649 L 695.3291015625 649 L 348.5 2.11639404296875 M 348.5 -6.103515625e-05 L 697 650 L 0 650 L 348.5 -6.103515625e-05 Z"
              stroke="none"
              fill="rgba(112,112,112,0)"
            />
          </g>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="468"
          height="479"
          viewBox="0 0 468 479"
          className="absolute left-[75%] top-[20%] opacity-[0.5] translate-x-[50%] -z-10 w-[500px]"
        >
          <g
            id="Ellipse_4"
            data-name="Ellipse 4"
            fill="#dbeafe"
            stroke="rgba(112,112,112,0)"
            strokeWidth="1"
          >
            <ellipse cx="234" cy="239.5" rx="234" ry="239.5" stroke="none" />
            <ellipse cx="234" cy="239.5" rx="233.5" ry="239" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="468"
          height="479"
          viewBox="0 0 468 479"
          className="absolute left-[25%] top-[20%] opacity-[0.5] translate-x-[50%] -z-10 w-[100px]"
        >
          <g
            id="Ellipse_4"
            data-name="Ellipse 4"
            fill="#dbeafe"
            stroke="rgba(112,112,112,0)"
            strokeWidth="1"
          >
            <ellipse cx="234" cy="239.5" rx="234" ry="239.5" stroke="none" />
            <ellipse cx="234" cy="239.5" rx="233.5" ry="239" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="272"
          height="210"
          viewBox="0 0 272 210"
          className="absolute left-[75%] top-[0%] opacity-[0.5] translate-x-[10%] -z-10 w-[100px]"
        >
          <g id="Polygon_5" data-name="Polygon 5" fill="#bfdbfe">
            <path d="M136,0,272,210H0Z" stroke="none" />
            <path
              d="M 136 1.839630126953125 L 1.8389892578125 209 L 270.1610107421875 209 L 136 1.839630126953125 M 136 0 L 272 210 L 0 210 L 136 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="334.376"
          height="343.541"
          viewBox="0 0 334.376 343.541"
          className="absolute left-[75%] top-[10%] opacity-[0.5] translate-x-[10%] -z-10 w-[100px]"
        >
          <g
            id="Polygon_5"
            data-name="Polygon 5"
            transform="translate(163.201) rotate(51)"
            fill="#bfdbfe"
          >
            <path d="M136,0,272,210H0Z" stroke="none" />
            <path
              d="M 136 1.839630126953125 L 1.8389892578125 209 L 270.1610107421875 209 L 136 1.839630126953125 M 136 0 L 272 210 L 0 210 L 136 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="334.376"
          height="343.541"
          viewBox="0 0 334.376 343.541"
          className="absolute left-[15%] top-[10%] opacity-[0.5] translate-x-[10%] -z-10 w-[100px]"
        >
          <g
            id="Polygon_5"
            data-name="Polygon 5"
            transform="translate(163.201) rotate(51)"
            fill="#bfdbfe"
          >
            <path d="M136,0,272,210H0Z" stroke="none" />
            <path
              d="M 136 1.839630126953125 L 1.8389892578125 209 L 270.1610107421875 209 L 136 1.839630126953125 M 136 0 L 272 210 L 0 210 L 136 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="334.376"
          height="343.541"
          viewBox="0 0 334.376 343.541"
          className="absolute left-[05%] top-[20%] opacity-[0.5] translate-x-[10%] -z-10 w-[200px]"
        >
          <g
            id="Polygon_5"
            data-name="Polygon 5"
            transform="translate(163.201) rotate(51)"
            fill="#bfdbfe"
          >
            <path d="M136,0,272,210H0Z" stroke="none" />
            <path
              d="M 136 1.839630126953125 L 1.8389892578125 209 L 270.1610107421875 209 L 136 1.839630126953125 M 136 0 L 272 210 L 0 210 L 136 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="468"
          height="479"
          viewBox="0 0 468 479"
          className="absolute left-[25%] top-[30%] opacity-[0.5] translate-x-[10%] -z-10 w-[200px]"
        >
          <g
            id="Ellipse_4"
            data-name="Ellipse 4"
            fill="#dbeafe"
            stroke="rgba(112,112,112,0)"
            strokeWidth="1"
          >
            <ellipse cx="234" cy="239.5" rx="234" ry="239.5" stroke="none" />
            <ellipse cx="234" cy="239.5" rx="233.5" ry="239" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="468"
          height="479"
          viewBox="0 0 468 479"
          className="absolute left-[5%] top-[40%] opacity-[0.5] translate-x-[10%] -z-10 w-[200px]"
        >
          <g
            id="Ellipse_4"
            data-name="Ellipse 4"
            fill="#dbeafe"
            stroke="rgba(112,112,112,0)"
            strokeWidth="1"
          >
            <ellipse cx="234" cy="239.5" rx="234" ry="239.5" stroke="none" />
            <ellipse cx="234" cy="239.5" rx="233.5" ry="239" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="468"
          height="479"
          viewBox="0 0 468 479"
          className="absolute left-[65%] top-[40%] opacity-[0.5] translate-x-[10%] -z-10 w-[150px]"
        >
          <g
            id="Ellipse_4"
            data-name="Ellipse 4"
            fill="#dbeafe"
            stroke="rgba(112,112,112,0)"
            strokeWidth="1"
          >
            <ellipse cx="234" cy="239.5" rx="234" ry="239.5" stroke="none" />
            <ellipse cx="234" cy="239.5" rx="233.5" ry="239" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="334.376"
          height="343.541"
          viewBox="0 0 334.376 343.541"
          className="absolute left-[45%] top-[40%] opacity-[0.5] translate-x-[10%] -z-10 w-[200px]"
        >
          <g
            id="Polygon_5"
            data-name="Polygon 5"
            transform="translate(163.201) rotate(51)"
            fill="#bfdbfe"
          >
            <path d="M136,0,272,210H0Z" stroke="none" />
            <path
              d="M 136 1.839630126953125 L 1.8389892578125 209 L 270.1610107421875 209 L 136 1.839630126953125 M 136 0 L 272 210 L 0 210 L 136 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="468"
          height="479"
          viewBox="0 0 468 479"
          className="absolute left-[45%] top-[50%] opacity-[0.5] translate-x-[10%] -z-10 w-[400px]"
        >
          <g
            id="Ellipse_4"
            data-name="Ellipse 4"
            fill="#dbeafe"
            stroke="rgba(112,112,112,0)"
            strokeWidth="1"
          >
            <ellipse cx="234" cy="239.5" rx="234" ry="239.5" stroke="none" />
            <ellipse cx="234" cy="239.5" rx="233.5" ry="239" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="259"
          height="408"
          viewBox="0 0 259 408"
          className="absolute left-[75%] top-[55%] opacity-[0.5] translate-x-[10%] -z-10 w-[400px]"
        >
          <g id="Group_1" data-name="Group 1" transform="translate(-960 -208)">
            <g
              id="Polygon_6"
              data-name="Polygon 6"
              transform="translate(960 208)"
              fill="#93c5fd"
            >
              <path d="M129.5,0,259,204H0Z" stroke="none" />
              <path
                d="M 129.5 1.865890502929688 L 1.81927490234375 203 L 257.1807250976563 203 L 129.5 1.865890502929688 M 129.5 0 L 259 204 L 0 204 L 129.5 0 Z"
                stroke="none"
                fill="rgba(112,112,112,0)"
              />
            </g>
            <g
              id="Polygon_7"
              data-name="Polygon 7"
              transform="translate(1219 616) rotate(180)"
              fill="#93c5fd"
            >
              <path d="M129.5,0,259,204H0Z" stroke="none" />
              <path
                d="M 129.5 1.865890502929688 L 1.81927490234375 203 L 257.1807250976563 203 L 129.5 1.865890502929688 M 129.5 0 L 259 204 L 0 204 L 129.5 0 Z"
                stroke="none"
                fill="rgba(112,112,112,0)"
              />
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="468"
          height="479"
          viewBox="0 0 468 479"
          className="absolute left-[25%] top-[65%] opacity-[0.5] translate-x-[10%] -z-10 w-[400px]"
        >
          <g
            id="Ellipse_4"
            data-name="Ellipse 4"
            fill="#dbeafe"
            stroke="rgba(112,112,112,0)"
            strokeWidth="1"
          >
            <ellipse cx="234" cy="239.5" rx="234" ry="239.5" stroke="none" />
            <ellipse cx="234" cy="239.5" rx="233.5" ry="239" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="1253.644"
          height="1098.913"
          viewBox="0 0 1253.644 1098.913"
          className="absolute left-[10%] top-[40%] opacity-[0.5] translate-x-[10%] -z-10 w-[400px]"
        >
          <g
            id="Polygon_5"
            data-name="Polygon 5"
            transform="matrix(0.951, -0.309, 0.309, 0.951, 0, 325.704)"
            fill="#bfdbfe"
          >
            <path d="M527,0l527,813H0Z" stroke="none" />
            <path
              d="M 527 1.83843994140625 L 1.8399658203125 812 L 1052.160034179688 812 L 527 1.83843994140625 M 527 0 L 1054 813 L 0 813 L 527 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0.01)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="1253.644"
          height="1098.913"
          viewBox="0 0 1253.644 1098.913"
          className="absolute left-[0%] top-[80%] opacity-[0.5] translate-x-[10%] -z-10 w-[400px]"
        >
          <g
            id="Polygon_5"
            data-name="Polygon 5"
            transform="matrix(0.951, -0.309, 0.309, 0.951, 0, 325.704)"
            fill="#bfdbfe"
          >
            <path d="M527,0l527,813H0Z" stroke="none" />
            <path
              d="M 527 1.83843994140625 L 1.8399658203125 812 L 1052.160034179688 812 L 527 1.83843994140625 M 527 0 L 1054 813 L 0 813 L 527 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0.01)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="468"
          height="479"
          viewBox="0 0 468 479"
          className="absolute left-[25%] top-[90%] opacity-[0.5] translate-x-[50%] -z-10 w-[100px]"
        >
          <g
            id="Ellipse_4"
            data-name="Ellipse 4"
            fill="#dbeafe"
            stroke="rgba(112,112,112,0)"
            strokeWidth="1"
          >
            <ellipse cx="234" cy="239.5" rx="234" ry="239.5" stroke="none" />
            <ellipse cx="234" cy="239.5" rx="233.5" ry="239" fill="none" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="272"
          height="210"
          viewBox="0 0 272 210"
          className="absolute left-[75%] top-[0%] opacity-[0.5] translate-x-[10%] -z-10 w-[100px]"
        >
          <g id="Polygon_5" data-name="Polygon 5" fill="#bfdbfe">
            <path d="M136,0,272,210H0Z" stroke="none" />
            <path
              d="M 136 1.839630126953125 L 1.8389892578125 209 L 270.1610107421875 209 L 136 1.839630126953125 M 136 0 L 272 210 L 0 210 L 136 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0)"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
          width="334.376"
          height="343.541"
          viewBox="0 0 334.376 343.541"
          className="absolute left-[75%] top-[90%] opacity-[0.5] translate-x-[10%] -z-10 w-[100px]"
        >
          <g
            id="Polygon_5"
            data-name="Polygon 5"
            transform="translate(163.201) rotate(51)"
            fill="#bfdbfe"
          >
            <path d="M136,0,272,210H0Z" stroke="none" />
            <path
              d="M 136 1.839630126953125 L 1.8389892578125 209 L 270.1610107421875 209 L 136 1.839630126953125 M 136 0 L 272 210 L 0 210 L 136 0 Z"
              stroke="none"
              fill="rgba(112,112,112,0)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
