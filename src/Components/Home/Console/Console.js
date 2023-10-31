// import { Link } from "react-router-dom";
import classes from "./Console.module.css";
function Console() {
  function ps() {
    window.location.href = "https://www.playstation.com/en-in/ps5/buy-now/";
  }
  function xb() {
    window.location.href = "https://www.xbox.com/en-IN/consoles/xbox-series-x";
  }
  function vr() {
    window.location.href = "https://www.playstation.com/en-in/ps-vr2/";
  }
  function wee() {
    window.location.href =
      "https://www.playstation.com/en-in/accessories/racing-wheels/";
  }
  return (
    <section className={classes.console}>
      <div className={classes.card}>
        <div className={classes.logo}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
            >
              <g clip-path="url(#clip0_834_42)">
                <path
                  d="M39.6479 27.7458C38.8631 28.8552 36.9534 29.6443 36.9534 29.6443L22.7104 35.3943V31.1521L33.1895 26.949C34.377 26.4724 34.5645 25.7927 33.5923 25.4333C32.627 25.074 30.877 25.1755 29.6895 25.6599L22.7104 28.4333V24.0271C24.3215 23.4177 25.9812 22.9646 27.9673 22.7146C30.8076 22.363 34.2798 22.7615 37.009 23.9255C40.0784 25.0193 40.4256 26.6365 39.6479 27.7458ZM24.0645 20.5193V9.65991C24.0645 8.38648 23.8562 7.2146 22.7937 6.87866C21.9812 6.58179 21.4743 7.43335 21.4743 8.70679V35.8865L14.9604 33.5583V1.15991C17.7312 1.73804 21.7659 3.10522 23.9326 3.92554C29.4534 6.05835 31.3215 8.7146 31.3215 14.6912C31.3215 20.5115 28.127 22.7224 24.0645 20.5193ZM3.00203 30.7068C-0.150749 29.7068 -0.678527 27.6208 0.758973 26.4255C2.08536 25.3162 4.34925 24.4802 4.34925 24.4802L13.6895 20.7458V25.0037L6.96731 27.7068C5.77981 28.1833 5.59925 28.863 6.56453 29.2224C7.52981 29.5818 9.27981 29.4802 10.4673 28.9958L13.6895 27.6755V31.488C10.1062 32.2146 6.64786 32.0583 3.00203 30.7068Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_834_42">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0 0.159912)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div>
          <h3>PlayStation5</h3>
        </div>
        <div className={classes.pa}>
          <p>
            Experience lightning-fast loading with an ultra-high speed SSD, 3D
            Audio and an all-new generation of incredible playStation games.
          </p>
        </div>
        <div className={classes.btn}>
          <svg
            onClick={ps}
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="32"
            viewBox="0 0 71 32"
            fill="none"
          >
            <rect width="71" height="32" rx="16" fill="black" />
            <path
              d="M44.7071 16.7071C45.0976 16.3166 45.0976 15.6834 44.7071 15.2929L38.3431 8.92893C37.9526 8.53841 37.3195 8.53841 36.9289 8.92893C36.5384 9.31946 36.5384 9.95262 36.9289 10.3431L42.5858 16L36.9289 21.6569C36.5384 22.0474 36.5384 22.6805 36.9289 23.0711C37.3195 23.4616 37.9526 23.4616 38.3431 23.0711L44.7071 16.7071ZM27 17L44 17V15L27 15V17Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.logo}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_834_66)">
                <path
                  d="M28.8985 24.8594C32.3594 29.1016 33.9531 32.5781 33.1485 34.1328C32.5313 35.3125 28.7188 37.6172 25.9141 38.5C23.6016 39.2266 20.5703 39.5391 18.0703 39.2969C15.086 39.0078 12.0625 37.9375 9.46877 36.25C7.28909 34.8281 6.7969 34.2422 6.7969 33.0781C6.7969 30.7422 9.36721 26.6485 13.7656 21.9766C16.2656 19.3281 19.7422 16.2188 20.125 16.3047C20.8594 16.4688 26.711 22.1719 28.8985 24.8594ZM14.7344 11.2344C12.4141 9.13284 10.1953 7.02346 7.9844 6.28127C6.7969 5.88284 6.71096 5.90627 5.74221 6.91409C3.46096 9.28909 1.56252 13.1406 1.03127 16.4766C0.6094 19.1485 0.554712 19.8985 0.70315 21.2031C1.14065 25.1485 2.05471 27.875 3.86721 30.6485C4.6094 31.7891 4.81252 32 4.59377 31.4219C4.26565 30.5625 4.57034 28.4922 5.33596 26.4219C6.45315 23.375 9.5469 17.6016 14.7344 11.2344ZM39.0781 16.1953C37.7578 9.94534 33.8047 6.01565 33.25 6.01565C32.6797 6.01565 31.3594 6.52346 30.4375 7.10159C28.6172 8.2344 27.2344 9.55471 25.4141 11.2266C28.7266 15.3906 33.3985 22.1172 35.0156 27.0313C35.5469 28.6485 35.7735 30.2422 35.5938 31.1172C35.461 31.7813 35.461 31.7813 35.7031 31.4766C36.1797 30.875 37.2578 29.0313 37.6875 28.0781C38.2656 26.8125 38.8594 24.9375 39.1406 23.4922C39.4766 21.7344 39.4453 17.961 39.0781 16.1953ZM11.0391 3.3594C14.7656 3.16409 19.6094 6.05471 19.9688 6.12502C20.0235 6.13284 20.7813 5.7969 21.6563 5.36721C26.6485 2.93752 29 3.35159 30.0469 3.39846C25.0547 0.328148 18.1172 -0.50779 11.7735 2.4844C9.94534 3.35159 9.89846 3.41409 11.0391 3.3594Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_834_66">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div>
          <h3>Xbox series-x</h3>
        </div>
        <div className={classes.pa}>
          <p>
            Make the most of every gaming minute with Quick Resume,
            lighting-fast load times and gameplay of up to 120 FPS powered by
            Xbox.
          </p>
        </div>
        <div className={classes.btn}>
          <svg
            onClick={xb}
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="32"
            viewBox="0 0 71 32"
            fill="none"
          >
            <rect width="71" height="32" rx="16" fill="black" />
            <path
              d="M44.7071 16.7071C45.0976 16.3166 45.0976 15.6834 44.7071 15.2929L38.3431 8.92893C37.9526 8.53841 37.3195 8.53841 36.9289 8.92893C36.5384 9.31946 36.5384 9.95262 36.9289 10.3431L42.5858 16L36.9289 21.6569C36.5384 22.0474 36.5384 22.6805 36.9289 23.0711C37.3195 23.4616 37.9526 23.4616 38.3431 23.0711L44.7071 16.7071ZM27 17L44 17V15L27 15V17Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.logo}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              viewBox="0 0 50 40"
              fill="none"
            >
              <path
                d="M42.5 9H6.5C4.01797 9 2 10.8685 2 13.1667V29.8333C2 32.1315 4.01797 34 6.5 34H14.9656C16.6672 34 18.2281 33.1081 18.9875 31.6953L21.2375 27.5286C21.8563 26.3893 23.1148 25.6667 24.493 25.6667C25.8711 25.6667 27.1297 26.3893 27.7484 27.5286L29.9984 31.6953C30.7578 33.1081 32.3188 34 34.0203 34H42.5C44.982 34 47 32.1315 47 29.8333V13.1667C47 10.8685 44.982 9 42.5 9ZM8.75 20.4583C8.75 19.3533 9.22411 18.2935 10.068 17.5121C10.9119 16.7307 12.0565 16.2917 13.25 16.2917C14.4435 16.2917 15.5881 16.7307 16.432 17.5121C17.2759 18.2935 17.75 19.3533 17.75 20.4583C17.75 21.5634 17.2759 22.6232 16.432 23.4046C15.5881 24.186 14.4435 24.625 13.25 24.625C12.0565 24.625 10.9119 24.186 10.068 23.4046C9.22411 22.6232 8.75 21.5634 8.75 20.4583ZM35.75 16.2917C36.9435 16.2917 38.0881 16.7307 38.932 17.5121C39.7759 18.2935 40.25 19.3533 40.25 20.4583C40.25 21.5634 39.7759 22.6232 38.932 23.4046C38.0881 24.186 36.9435 24.625 35.75 24.625C34.5565 24.625 33.4119 24.186 32.568 23.4046C31.7241 22.6232 31.25 21.5634 31.25 20.4583C31.25 19.3533 31.7241 18.2935 32.568 17.5121C33.4119 16.7307 34.5565 16.2917 35.75 16.2917Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div>
          <h3>PlayStation.VR2</h3>
        </div>
        <div className={classes.pa}>
          <p>
            Experience the next generation of virtual reality play with 4K HDR
            visuals, and unique sensations from the ground-breaking PS VR2.
          </p>
        </div>
        <div className={classes.btn}>
          <svg
            onClick={vr}
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="32"
            viewBox="0 0 71 32"
            fill="none"
          >
            <rect width="71" height="32" rx="16" fill="black" />
            <path
              d="M44.7071 16.7071C45.0976 16.3166 45.0976 15.6834 44.7071 15.2929L38.3431 8.92893C37.9526 8.53841 37.3195 8.53841 36.9289 8.92893C36.5384 9.31946 36.5384 9.95262 36.9289 10.3431L42.5858 16L36.9289 21.6569C36.5384 22.0474 36.5384 22.6805 36.9289 23.0711C37.3195 23.4616 37.9526 23.4616 38.3431 23.0711L44.7071 16.7071ZM27 17L44 17V15L27 15V17Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className={classes.card}>
        <div className={classes.logo}>
          <button>
            <svg
              style={{ paddingTop: "3.5px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="21" stroke="white" stroke-width="8" />
              <line
                x1="1.09863"
                y1="21.3846"
                x2="49.1756"
                y2="21.3846"
                stroke="white"
                stroke-width="8"
              />
              <line
                x1="25.5215"
                y1="48.5714"
                x2="25.5215"
                y2="23.956"
                stroke="white"
                stroke-width="5"
              />
              <path
                d="M25.5 37L16.4067 19.75L34.5933 19.75L25.5 37Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div>
          <h3>Drive Wheel</h3>
        </div>
        <div className={classes.pa}>
          <p>
            Feel even greater connection to the roads with a dedicated racing
            wheel controller from PlayStation's licensed partners.
          </p>
        </div>
        <div className={classes.btn}>
          <svg
            onClick={wee}
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="40"
            viewBox="0 0 71 32"
            fill="none"
          >
            <rect width="71" height="32" rx="16" fill="black" />
            <path
              d="M44.7071 16.7071C45.0976 16.3166 45.0976 15.6834 44.7071 15.2929L38.3431 8.92893C37.9526 8.53841 37.3195 8.53841 36.9289 8.92893C36.5384 9.31946 36.5384 9.95262 36.9289 10.3431L42.5858 16L36.9289 21.6569C36.5384 22.0474 36.5384 22.6805 36.9289 23.0711C37.3195 23.4616 37.9526 23.4616 38.3431 23.0711L44.7071 16.7071ZM27 17L44 17V15L27 15V17Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
export default Console;
