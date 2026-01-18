import { useEffect } from "react";
import appStore from "../assets/appstore.png";
import googlePlay from "../assets/googleplay.png";
const Download = () => {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    // Android
    if (/android/i.test(ua)) {
      window.location.replace(
        "https://play.google.com/store/apps/details?id=com.intelegance.tangerine"
      );
      return;
    }

    // iOS
    if (/iPad|iPhone|iPod/.test(ua)) {
      window.location.replace(
        "https://apps.apple.com/us/app/tangerine-market-to-doorstep/id6753591027"
      );
      return;
    }

    // Desktop / unknown
    window.location.replace("https://tangerineshopper.com");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Redirecting you to the app store…</h2>
      <p>If nothing happens, please use the buttons below.</p>

         <div className="store-buttons">

            {/* APP STORE */}
            <a
              href="https://apps.apple.com/us/app/tangerine-shopper/id6753591027"
              target="_blank"
              rel="noopener noreferrer"
              className="badge app-store-badge"
            >
              <img src={appStore} alt="Apple logo" className="badge-icon" />
              <div className="badge-text">
                <span className="small">Available on the</span>
                <span className="big">App Store</span>
              </div>
            </a>

            {/* GOOGLE PLAY */}
            <a
              href="https://play.google.com/store/apps/details?id=com.intelegance.tangerine"
              target="_blank"
              rel="noopener noreferrer"
              className="badge google-play-badge"
            >
              <img src={googlePlay} alt="Google Play icon" className="badge-icon" />
              <div className="badge-text">
                <span className="small">GET IT ON</span>
                <span className="big">Google Play</span>
              </div>
            </a>

          </div>
    </div>
  );
};

export default Download;
