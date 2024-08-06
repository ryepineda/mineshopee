// import { useEffect } from 'react';
// import Script from 'next/script';
// import '../styles/globals.css'; // Adjust the path as needed

// const MyApp = ({ Component, pageProps }) => {
//   useEffect(() => {
//     if (window.FB) {
//       window.FB.XFBML.parse();
//     }
//   }, []);

//   return (
//     <>
//       <Script
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.fbAsyncInit = function() {
//               FB.init({
//                 appId      : 'YOUR_APP_ID',
//                 xfbml      : true,
//                 version    : 'v13.0'
//               });
//             };

//             (function(d, s, id){
//                var js, fjs = d.getElementsByTagName(s)[0];
//                if (d.getElementById(id)) {return;}
//                js = d.createElement(s); js.id = id;
//                js.src = "https://connect.facebook.net/en_US/sdk.js";
//                fjs.parentNode.insertBefore(js, fjs);
//              }(document, 'script', 'facebook-jssdk'));
//           `,
//         }}
//       />
//       <Component {...pageProps} />
//     </>
//   );
// };

// export default MyApp;
