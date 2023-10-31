import { Link } from "react-router-dom";
import classes from "./Plane.module.css";

function Plane() {
  return (
    <section className={classes.plane}>
      <h1 className={classes.head}>Choose your Plane</h1>
      <div className={classes.card}>
        <h2>Basic</h2>
        <div className={classes.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_841_76)">
              <path
                d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM10.8105 6.12305C11.0859 5.84766 11.0859 5.40234 10.8105 5.12988C10.5352 4.85742 10.0898 4.85449 9.81738 5.12988L6.56543 8.38184L5.18848 7.00488C4.91309 6.72949 4.46777 6.72949 4.19531 7.00488C3.92285 7.28027 3.91992 7.72559 4.19531 7.99805L6.07031 9.87305C6.3457 10.1484 6.79102 10.1484 7.06348 9.87305L10.8105 6.12305Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_841_76">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>4K Monitor</p>
        </div>
        <div className={classes.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_841_76)">
              <path
                d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM10.8105 6.12305C11.0859 5.84766 11.0859 5.40234 10.8105 5.12988C10.5352 4.85742 10.0898 4.85449 9.81738 5.12988L6.56543 8.38184L5.18848 7.00488C4.91309 6.72949 4.46777 6.72949 4.19531 7.00488C3.92285 7.28027 3.91992 7.72559 4.19531 7.99805L6.07031 9.87305C6.3457 10.1484 6.79102 10.1484 7.06348 9.87305L10.8105 6.12305Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_841_76">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Unlimited Games</p>
        </div>
        <div className={classes.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_841_76)">
              <path
                d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM10.8105 6.12305C11.0859 5.84766 11.0859 5.40234 10.8105 5.12988C10.5352 4.85742 10.0898 4.85449 9.81738 5.12988L6.56543 8.38184L5.18848 7.00488C4.91309 6.72949 4.46777 6.72949 4.19531 7.00488C3.92285 7.28027 3.91992 7.72559 4.19531 7.99805L6.07031 9.87305C6.3457 10.1484 6.79102 10.1484 7.06348 9.87305L10.8105 6.12305Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_841_76">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>More than 4 players</p>
        </div>
        <div className={classes.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_841_88)">
              <path
                d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM5.12695 5.12695C4.85156 5.40234 4.85156 5.84766 5.12695 6.12012L6.50391 7.49707L5.12695 8.87402C4.85156 9.14941 4.85156 9.59473 5.12695 9.86719C5.40234 10.1396 5.84766 10.1426 6.12012 9.86719L7.49707 8.49023L8.87402 9.86719C9.14941 10.1426 9.59473 10.1426 9.86719 9.86719C10.1396 9.5918 10.1426 9.14648 9.86719 8.87402L8.49023 7.49707L9.86719 6.12012C10.1426 5.84473 10.1426 5.39941 9.86719 5.12695C9.5918 4.85449 9.14648 4.85156 8.87402 5.12695L7.49707 6.50391L6.12012 5.12695C5.84473 4.85156 5.39941 4.85156 5.12695 5.12695Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_841_88">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Non-VR Games</p>
        </div>
        <div>
          <Link to="/plane">
            <button>SELECT PLAN</button>
          </Link>
        </div>
      </div>
      <div className={classes.card}>
        <h2>Premium</h2>
        <div className={classes.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_841_76)">
              <path
                d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM10.8105 6.12305C11.0859 5.84766 11.0859 5.40234 10.8105 5.12988C10.5352 4.85742 10.0898 4.85449 9.81738 5.12988L6.56543 8.38184L5.18848 7.00488C4.91309 6.72949 4.46777 6.72949 4.19531 7.00488C3.92285 7.28027 3.91992 7.72559 4.19531 7.99805L6.07031 9.87305C6.3457 10.1484 6.79102 10.1484 7.06348 9.87305L10.8105 6.12305Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_841_76">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>4K Ultra Monitor</p>
        </div>
        <div className={classes.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_841_76)">
              <path
                d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM10.8105 6.12305C11.0859 5.84766 11.0859 5.40234 10.8105 5.12988C10.5352 4.85742 10.0898 4.85449 9.81738 5.12988L6.56543 8.38184L5.18848 7.00488C4.91309 6.72949 4.46777 6.72949 4.19531 7.00488C3.92285 7.28027 3.91992 7.72559 4.19531 7.99805L6.07031 9.87305C6.3457 10.1484 6.79102 10.1484 7.06348 9.87305L10.8105 6.12305Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_841_76">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>Unlimited Games</p>
        </div>
        <div className={classes.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_841_76)">
              <path
                d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM10.8105 6.12305C11.0859 5.84766 11.0859 5.40234 10.8105 5.12988C10.5352 4.85742 10.0898 4.85449 9.81738 5.12988L6.56543 8.38184L5.18848 7.00488C4.91309 6.72949 4.46777 6.72949 4.19531 7.00488C3.92285 7.28027 3.91992 7.72559 4.19531 7.99805L6.07031 9.87305C6.3457 10.1484 6.79102 10.1484 7.06348 9.87305L10.8105 6.12305Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_841_76">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>More than 4 players</p>
        </div>
        <div className={classes.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
          >
            <g clip-path="url(#clip0_841_76)">
              <path
                d="M7.5 1.40625C9.11616 1.40625 10.6661 2.04827 11.8089 3.19107C12.9517 4.33387 13.5938 5.88384 13.5938 7.5C13.5938 9.11616 12.9517 10.6661 11.8089 11.8089C10.6661 12.9517 9.11616 13.5938 7.5 13.5938C5.88384 13.5938 4.33387 12.9517 3.19107 11.8089C2.04827 10.6661 1.40625 9.11616 1.40625 7.5C1.40625 5.88384 2.04827 4.33387 3.19107 3.19107C4.33387 2.04827 5.88384 1.40625 7.5 1.40625ZM7.5 15C9.48912 15 11.3968 14.2098 12.8033 12.8033C14.2098 11.3968 15 9.48912 15 7.5C15 5.51088 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48912 0 7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5C0 9.48912 0.790176 11.3968 2.1967 12.8033C3.60322 14.2098 5.51088 15 7.5 15ZM10.8105 6.12305C11.0859 5.84766 11.0859 5.40234 10.8105 5.12988C10.5352 4.85742 10.0898 4.85449 9.81738 5.12988L6.56543 8.38184L5.18848 7.00488C4.91309 6.72949 4.46777 6.72949 4.19531 7.00488C3.92285 7.28027 3.91992 7.72559 4.19531 7.99805L6.07031 9.87305C6.3457 10.1484 6.79102 10.1484 7.06348 9.87305L10.8105 6.12305Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_841_76">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>VR Games</p>
        </div>
        <div>
          <Link to="/plane">
            <button>SELECT PLAN</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Plane;
