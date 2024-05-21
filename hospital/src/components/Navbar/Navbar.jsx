import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.titlelogo}>
            <img src={getImageUrl('nav/logo.svg')} className={styles.logo}></img>
            <h1 className={styles.title}>RFI Clinic</h1>
        </div>
        <nav className={styles.links}>
            <a href="/" className={styles.link}>
                <svg width="53" height="34" className={styles.dashboard} viewBox="0 0 53 34" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.9915 20.5952C52.9834 15.1787 50.1996 9.9821 45.2417 6.12839C40.2839 2.27468 33.5501 0.0733168 26.4954 0C19.4408 0.0733168 12.707 2.27468 7.74911 6.12839C2.79125 9.9821 0.00747075 15.1787 -0.000679234 20.5952C-0.114042 24.041 0.91132 27.4526 2.97974 30.5118H19.2094C20.1172 31.3103 21.237 31.9503 22.4938 32.3888C23.7505 32.8274 25.115 33.0543 26.4954 33.0543C27.8759 33.0543 29.2403 32.8274 30.4971 32.3888C31.7538 31.9503 32.8737 31.3103 33.7814 30.5118H50.0111C52.0795 27.4526 53.1049 24.041 52.9915 20.5952ZM46.3681 12.7134V15.2568L32.7888 24.156C32.9312 24.5743 33.0414 24.9986 33.1189 25.4268C33.1189 26.4325 32.7304 27.4157 32.0026 28.2519C31.2748 29.0881 30.2404 29.7399 29.0301 30.1247C27.8198 30.5096 26.4881 30.6103 25.2033 30.4141C23.9184 30.2179 22.7383 29.7336 21.812 29.0224C20.8857 28.3113 20.2548 27.4052 19.9993 26.4188C19.7437 25.4325 19.8749 24.41 20.3762 23.4809C20.8775 22.5517 21.7264 21.7575 22.8156 21.1988C23.9049 20.64 25.1854 20.3418 26.4954 20.3418C27.417 20.359 28.3221 20.5327 29.1458 20.8505L43.0552 12.7134H46.3681ZM33.1189 5.085H36.4318V7.62841H33.1189V5.085ZM16.5591 5.085H19.872V7.62841H16.5591V5.085ZM6.62275 25.4268H3.31223V22.8852H6.62275V25.4268ZM9.93566 15.2568H6.62275V12.7134H9.93566V15.2568ZM49.6786 25.4268H46.3681V22.8852H49.681L49.6786 25.4268Z"/>
                <path d="M29.806 25.4286C29.806 25.9317 29.6116 26.4235 29.2475 26.8418C28.8834 27.2601 28.3658 27.5861 27.7603 27.7786C27.1548 27.971 26.4886 28.0213 25.8459 27.923C25.2032 27.8247 24.6129 27.5823 24.1497 27.2264C23.6864 26.8705 23.3711 26.4172 23.2435 25.9237C23.116 25.4302 23.1819 24.9187 23.433 24.454C23.6842 23.9893 24.1092 23.5922 24.6543 23.3129C25.1994 23.0337 25.8401 22.8848 26.4955 22.8852C27.3737 22.8857 28.2157 23.1539 28.8365 23.6308C29.4573 24.1077 29.806 24.7544 29.806 25.4286V25.4286Z" />
                </svg>
                  
                <span className={styles.navtext} >Dashboard</span></a>
                <a href="/patients" className={styles.link}>
                    <svg className={styles.clients} width="70" height="49" viewBox="0 0 70 49" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.7484 24.4984C52.4793 24.4984 54.1713 23.9851 55.6105 23.0235C57.0497 22.062 58.1714 20.6952 58.8338 19.0962C59.4962 17.4971 59.6695 15.7376 59.3318 14.0401C58.9942 12.3425 58.1606 10.7832 56.9367 9.55939C55.7128 8.33553 54.1534 7.50207 52.4557 7.16441C50.7581 6.82675 48.9984 7.00005 47.3993 7.6624C45.8001 8.32474 44.4333 9.44639 43.4716 10.8855C42.51 12.3246 41.9967 14.0165 41.9967 15.7473C41.9933 16.8975 42.2173 18.037 42.6559 19.1003C43.0944 20.1636 43.739 21.1296 44.5523 21.9429C45.3657 22.7562 46.3318 23.4007 47.3952 23.8393C48.4585 24.2778 49.5981 24.5018 50.7484 24.4984ZM24.5033 20.9986C26.5797 20.998 28.6093 20.3817 30.3355 19.2278C32.0617 18.0739 33.407 16.4341 34.2014 14.5157C34.9957 12.5973 35.2033 10.4865 34.7981 8.45019C34.3928 6.41383 33.3929 4.54333 31.9246 3.07518C30.4564 1.60702 28.5857 0.607128 26.5493 0.201906C24.5128 -0.203316 22.4018 0.00432767 20.4833 0.798589C18.5648 1.59285 16.9249 2.93806 15.7709 4.66416C14.6169 6.39026 14.0006 8.41974 14 10.496C13.9939 11.8769 14.2615 13.2454 14.7872 14.5224C15.3128 15.7993 16.0863 16.9595 17.0628 17.936C18.0393 18.9125 19.1996 19.6858 20.4767 20.2115C21.7537 20.7371 23.1223 21.0047 24.5033 20.9986V20.9986ZM50.7484 31.4979C44.3442 31.4979 31.4967 34.7194 31.4967 41.1231V48.9967H70V41.1231C70.0065 34.7161 57.159 31.4979 50.7484 31.4979ZM24.5033 27.9981C16.3475 27.9981 0 32.0806 0 40.2489V49H24.5033V41.1231C24.5996 38.5221 25.4297 36.0015 26.8977 33.8522C28.3658 31.703 30.4119 30.0129 32.7998 28.977C30.0726 28.3822 27.294 28.0544 24.5033 27.9981V27.9981Z"/>
                    </svg>
                    <span className={styles.navtext} >Patients</span></a>
                <a href="/appointments" className={styles.link}>
                    <svg viewBox="0 0 84 86" className={styles.appointments} xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.9863 85.0193H77.3942C79.1462 85.0193 80.8264 84.4611 82.0652 83.4675C83.304 82.4739 84 81.1263 84 79.7211V5.29818C84 4.60204 83.829 3.91272 83.4967 3.26963C83.1643 2.62653 82.6772 2.04227 82.0633 1.55023C81.4493 1.05819 80.7204 0.668024 79.9183 0.402027C79.1162 0.13603 78.2566 -0.000581173 77.3887 1.85835e-06H30.2132V1.75275C30.2387 1.93842 30.2516 2.12506 30.2519 2.31185V16.8219C30.2505 18.7999 29.2701 20.6964 27.5263 22.095C25.7825 23.4937 23.4179 24.2799 20.9518 24.2811H2.8661C2.67799 24.2811 2.47883 24.2811 2.31286 24.2811H-0.00524902V79.7477C-0.00524902 81.1529 0.690725 82.5005 1.92955 83.4941C3.16838 84.4877 4.84858 85.0459 6.60054 85.0459H42.0085L41.9863 85.0193ZM43.3197 67.017H20.2436C19.4161 67.017 18.6224 66.7533 18.0373 66.284C17.4521 65.8147 17.1233 65.1781 17.1233 64.5144C17.1233 63.8506 17.4521 63.2141 18.0373 62.7447C18.6224 62.2754 19.4161 62.0117 20.2436 62.0117H43.3362C44.1638 62.0117 44.9574 62.2754 45.5426 62.7447C46.1278 63.2141 46.4565 63.8506 46.4565 64.5144C46.4565 65.1781 46.1278 65.8147 45.5426 66.284C44.9574 66.7533 44.1638 67.017 43.3362 67.017H43.3197ZM66.4122 54.2419H20.2436C19.4161 54.2419 18.6224 53.9783 18.0373 53.5089C17.4521 53.0396 17.1233 52.403 17.1233 51.7393C17.1233 51.0755 17.4521 50.439 18.0373 49.9696C18.6224 49.5003 19.4161 49.2366 20.2436 49.2366H66.4178C67.2453 49.2366 68.039 49.5003 68.6242 49.9696C69.2093 50.439 69.5381 51.0755 69.5381 51.7393C69.5381 52.403 69.2093 53.0396 68.6242 53.5089C68.039 53.9783 67.2453 54.2419 66.4178 54.2419H66.4122ZM20.2436 35.6717H66.4178C67.2453 35.6717 68.039 35.9354 68.6242 36.4047C69.2093 36.8741 69.5381 37.5106 69.5381 38.1744C69.5381 38.8381 69.2093 39.4747 68.6242 39.944C68.039 40.4133 67.2453 40.677 66.4178 40.677H20.2436C19.4161 40.677 18.6224 40.4133 18.0373 39.944C17.4521 39.4747 17.1233 38.8381 17.1233 38.1744C17.1233 37.5106 17.4521 36.8741 18.0373 36.4047C18.6224 35.9354 19.4161 35.6717 20.2436 35.6717V35.6717Z" />
                    <path d="M2.86592 21.2795H21.0014C22.4553 21.2714 23.8468 20.8045 24.8748 19.98C25.9029 19.1554 26.485 18.0394 26.4951 16.8732V2.30105C26.4952 2.00782 26.4227 1.71749 26.282 1.44685C26.1412 1.17621 25.935 0.930637 25.6752 0.724322C25.4154 0.518007 25.1072 0.355046 24.7683 0.244861C24.4295 0.134677 24.0668 0.079454 23.7013 0.0823863C23.3379 0.0820621 22.9782 0.140438 22.6436 0.254031C22.3091 0.367625 22.0064 0.534108 21.7538 0.743549L0.896335 17.4723C0.500028 17.7821 0.228677 18.1802 0.117401 18.615C0.00612442 19.0498 0.060046 19.5014 0.272141 19.9113C0.484235 20.3213 0.844771 20.6709 1.30716 20.9148C1.76955 21.1587 2.31254 21.2857 2.86592 21.2795Z"/>
                    </svg>
                    <span className={styles.navtext} >Appoinments</span> </a>
                <a href="/doctors" className={styles.link}>
                    <svg className={styles.doctors} width="102" height="77" viewBox="0 0 102 77" xmlns="http://www.w3.org/2000/svg">
                    <path d="M101.985 66.4565C101.979 65.3712 101.648 64.3001 101.016 63.3188C100.384 62.3374 99.4666 61.4697 98.328 60.7769C89.7964 55.7167 80.5981 51.2936 70.8696 47.5731L63.5154 77H102L101.985 66.4565ZM31.2987 33.1871C31.7634 35.1881 32.7135 37.1117 34.1037 38.8667V43.9439L49.3578 52.1116L43.6917 57.4619L47.5473 62.0078L44.4873 76.9925H57.528L54.5394 62.0265L58.395 57.4806L52.632 52.119L67.932 43.9626V38.8779C69.3222 37.1229 70.2723 35.1993 70.737 33.1983C71.8386 33.131 73.287 31.9935 74.8578 27.9378C76.8978 22.5762 74.8578 21.6333 73.0014 21.6895C77.6475 5.97517 65.6472 5.93028 65.6472 5.93028C64.699 3.97426 62.8483 2.32307 60.4155 1.2626C57.9827 0.202141 55.1211 -0.200825 52.326 0.123473C46.2735 0.587168 40.1689 0.545743 34.1292 0C34.121 0.622076 34.2995 1.23786 34.652 1.80365C35.0046 2.36944 35.5226 2.87136 36.1692 3.27381C25.398 8.07789 27.8766 18.6738 28.8354 21.7231C27.0096 21.7231 25.1022 22.7558 27.1167 27.9714C28.6977 31.9823 30.141 33.1197 31.2987 33.1871ZM31.1304 47.5731C21.4 51.2754 12.1967 55.6797 3.6567 60.7208C2.51871 61.4132 1.60153 62.2803 0.969738 63.261C0.337951 64.2416 0.00693309 65.3119 0 66.3966V76.9963H38.4846L31.1304 47.5731Z"/>
                    </svg>

                    <span className={styles.navtext} >Doctors</span> </a>
                <a href="/inventory" className={styles.link}>
                    <svg className={styles.inventory} width="76" height="72" viewBox="0 0 76 72" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.125 20.25V58.5C64.125 59.0967 63.8748 59.669 63.4294 60.091C62.984 60.5129 62.3799 60.75 61.75 60.75H14.25C13.6201 60.75 13.016 60.5129 12.5706 60.091C12.1252 59.669 11.875 59.0967 11.875 58.5V20.25H64.125Z" />
                    <path d="M61.75 60.75H14.25C13.6201 60.75 13.016 60.5129 12.5706 60.091C12.1252 59.669 11.875 59.0967 11.875 58.5V20.25L16.625 11.25H59.375L64.125 20.25V58.5C64.125 59.0967 63.8748 59.669 63.4294 60.091C62.984 60.5129 62.3799 60.75 61.75 60.75Z" stroke="#7F8F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M27.9237 42.2041L37.9999 51.75L48.0762 42.2041" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M38 29.25V51.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.875 20.25H64.125" stroke="#7F8F98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <span className={styles.navtext} >Medicine Inventory </span></a>
              
                <a href="/locations" className={styles.link}>
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_145_898)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11 5.34375C9.86081 5.34375 8.9375 6.14116 8.9375 7.125C8.9375 8.10884 9.86081 8.90625 11 8.90625C12.1392 8.90625 13.0625 8.10884 13.0625 7.125C13.0625 6.14116 12.1392 5.34375 11 5.34375ZM11 10.0938C9.10181 10.0938 7.5625 8.76494 7.5625 7.125C7.5625 5.48506 9.10181 4.15625 11 4.15625C12.8982 4.15625 14.4375 5.48506 14.4375 7.125C14.4375 8.76494 12.8982 10.0938 11 10.0938ZM11 0C6.44394 0 2.75 3.19022 2.75 7.125C2.75 10.1044 9.62844 19.0065 11 19C12.3502 19.0065 19.25 10.0641 19.25 7.125C19.25 3.19022 15.5561 0 11 0Z"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_145_898">
                    <rect width="22" height="19" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                  
                    <span className={styles.navtext} >Locations </span>
                </a>
        </nav>

        </div>
  )
}
