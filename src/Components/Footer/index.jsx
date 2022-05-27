import Currency from "../Common/Currency"
import Language from "../Common/Language"
import nav from "./navFooter.json"

function index() {
  return (
    <footer className="footer flex container">
        <div className="footer__item footer__left">
            <div className="footer__logo-mobile">
                <button className="footer__logo">
                    <svg width="54" height="57" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.9777 2.2704C19.4858 5.67502 18.6694 14.3308 19.7778 16.2216L27.3025 16.3404C24.6506 11.8464 26.2952 5.53607 29.9777 2.2704Z" fill="#DD0000" />
                        <path d="M32.828 4.67486C26.5465 7.9786 27.3446 14.879 28.2471 16.1527C30.1263 16.6003 32.6667 16.2788 33.702 16.0621C31.5442 13.0339 32.4558 7.1409 32.828 4.67486Z" fill="#3D0A66" />
                        <path d="M15.1527 43.159C19.4183 39.5028 23.6838 38.6955 26.8838 38.6061C30.0838 38.6955 34.3493 39.5028 38.6148 43.159C43.1767 47.0692 52.3005 51.6311 53.6039 39.9005C54.9073 28.17 48.3903 11.2258 35.3564 14.4843C32.5678 15.4137 28.8824 15.7218 26.8838 15.7778C24.8852 15.7218 21.1997 15.4137 18.4112 14.4843C5.37726 11.2258 -1.13971 28.17 0.163687 39.9005C1.46708 51.6311 10.5908 47.0692 15.1527 43.159Z" fill="white" />
                        <circle cx="14.0022" cy="28.5048" r="8.95723" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.2377 23.8964C10.7287 23.3874 9.90347 23.3874 9.39446 23.8964C8.88545 24.4054 8.88545 25.2307 9.39446 25.7397L12.1589 28.5042L9.39347 31.2696C8.88447 31.7786 8.88447 32.6039 9.39347 33.1129C9.90248 33.6219 10.7277 33.6219 11.2368 33.1129L14.0022 30.3474L16.7676 33.1128C17.2766 33.6218 18.1018 33.6218 18.6109 33.1128C19.1199 32.6038 19.1199 31.7785 18.6108 31.2695L15.8455 28.5042L18.6099 25.7398C19.1189 25.2308 19.1189 24.4055 18.6099 23.8965C18.1009 23.3875 17.2756 23.3875 16.7666 23.8965L14.0022 26.6609L11.2377 23.8964Z" fill="#DD0000" />
                        <circle cx="41.2481" cy="23.8181" r="2.4723" transform="rotate(15.884 41.2481 23.8181)" fill="#3D0A66" />
                        <circle cx="44.3028" cy="29.3067" r="2.4723" transform="rotate(15.884 44.3028 29.3067)" fill="#3D0A66" />
                        <circle cx="38.8145" cy="32.3612" r="2.4723" transform="rotate(15.884 38.8145 32.3612)" fill="#3D0A66" />
                        <circle cx="35.7598" cy="26.8727" r="2.4723" transform="rotate(15.884 35.7598 26.8727)" fill="#3D0A66" />
                        <path d="M19.836 56.2788C19.8376 53.0712 20.1106 51.9139 21.0484 49.1387C21.0484 49.1387 19.2358 48.5619 18.7334 48.3523C18.231 48.1427 16.4934 47.1207 16.4934 47.1207C16.3006 48.3225 15.7714 53.4864 19.836 56.2788Z" fill="#DD0000" />
                        <path d="M34.2492 56.1482C34.2476 52.9406 34.0219 51.588 33.0841 48.8128C33.0841 48.8128 34.6297 48.3057 35.2568 47.9922C35.8839 47.6786 37.4345 46.7806 37.4345 46.7806C37.6273 47.9824 38.3138 53.3558 34.2492 56.1482Z" fill="#DD0000" />
                    </svg>
                    <div className="footer__logo-txt">Game Monster</div>
                </button>
            </div>
            <ul className="footer__menu">
                <li className="footer__logo-desk">
                    <button className="footer__logo">
                        <svg width="54" height="57" viewBox="0 0 54 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.9777 2.2704C19.4858 5.67502 18.6694 14.3308 19.7778 16.2216L27.3025 16.3404C24.6506 11.8464 26.2952 5.53607 29.9777 2.2704Z" fill="#DD0000" />
                        <path d="M32.828 4.67486C26.5465 7.9786 27.3446 14.879 28.2471 16.1527C30.1263 16.6003 32.6667 16.2788 33.702 16.0621C31.5442 13.0339 32.4558 7.1409 32.828 4.67486Z" fill="#3D0A66" />
                        <path d="M15.1527 43.159C19.4183 39.5028 23.6838 38.6955 26.8838 38.6061C30.0838 38.6955 34.3493 39.5028 38.6148 43.159C43.1767 47.0692 52.3005 51.6311 53.6039 39.9005C54.9073 28.17 48.3903 11.2258 35.3564 14.4843C32.5678 15.4137 28.8824 15.7218 26.8838 15.7778C24.8852 15.7218 21.1997 15.4137 18.4112 14.4843C5.37726 11.2258 -1.13971 28.17 0.163687 39.9005C1.46708 51.6311 10.5908 47.0692 15.1527 43.159Z" fill="white" />
                        <circle cx="14.0022" cy="28.5048" r="8.95723" fill="black" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.2377 23.8964C10.7287 23.3874 9.90347 23.3874 9.39446 23.8964C8.88545 24.4054 8.88545 25.2307 9.39446 25.7397L12.1589 28.5042L9.39347 31.2696C8.88447 31.7786 8.88447 32.6039 9.39347 33.1129C9.90248 33.6219 10.7277 33.6219 11.2368 33.1129L14.0022 30.3474L16.7676 33.1128C17.2766 33.6218 18.1018 33.6218 18.6109 33.1128C19.1199 32.6038 19.1199 31.7785 18.6108 31.2695L15.8455 28.5042L18.6099 25.7398C19.1189 25.2308 19.1189 24.4055 18.6099 23.8965C18.1009 23.3875 17.2756 23.3875 16.7666 23.8965L14.0022 26.6609L11.2377 23.8964Z" fill="#DD0000" />
                        <circle cx="41.2481" cy="23.8181" r="2.4723" transform="rotate(15.884 41.2481 23.8181)" fill="#3D0A66" />
                        <circle cx="44.3028" cy="29.3067" r="2.4723" transform="rotate(15.884 44.3028 29.3067)" fill="#3D0A66" />
                        <circle cx="38.8145" cy="32.3612" r="2.4723" transform="rotate(15.884 38.8145 32.3612)" fill="#3D0A66" />
                        <circle cx="35.7598" cy="26.8727" r="2.4723" transform="rotate(15.884 35.7598 26.8727)" fill="#3D0A66" />
                        <path d="M19.836 56.2788C19.8376 53.0712 20.1106 51.9139 21.0484 49.1387C21.0484 49.1387 19.2358 48.5619 18.7334 48.3523C18.231 48.1427 16.4934 47.1207 16.4934 47.1207C16.3006 48.3225 15.7714 53.4864 19.836 56.2788Z" fill="#DD0000" />
                        <path d="M34.2492 56.1482C34.2476 52.9406 34.0219 51.588 33.0841 48.8128C33.0841 48.8128 34.6297 48.3057 35.2568 47.9922C35.8839 47.6786 37.4345 46.7806 37.4345 46.7806C37.6273 47.9824 38.3138 53.3558 34.2492 56.1482Z" fill="#DD0000" />
                        </svg>
                        <div className="footer__logo-txt">Game Monster</div>
                    </button>
                </li>
                {
                    nav.map(
                        ( obj,index ) => 
                            <li key={index}>
                                <button href={obj.linkUrl}>{obj.title}</button>
                            </li>
                    )
                }
                
            </ul>
        </div>
        <div className="footer__item footer__right">
            <div className="footer__dops">
                <button className="footer__rent" >Аренда аккаунтов</button>
                <button className="footer__mail" >support@gamemonster.store</button>
                <div className="footer__payment">
                    <img src="img/footer/Combined Shape.svg" alt=""/>
                    <img src="img/footer/Group1.svg" alt=""/>
                    <img src="img/footer/Group2.svg" alt=""/>
                    <img src="img/footer/Group3.svg" alt=""/>
                    <img src="img/footer/Group 66.svg" alt=""/>
                    <img src="img/footer/Group 65.svg" alt=""/>
                    <img src="img/footer/Group.svg" alt=""/>
                </div>
                <div className="footer__year">© 2020</div>
            </div>
            <div className="footer__subblock">
                <div className="footer__authorization flex">
                    <button className="footer__sing" >Вход</button>
                    <div className="footer__separator">/</div>
                    <button className="footer__out" >Регистрация</button>
                </div>
                <Language />
                <Currency />
                <div className="footer__search">
                    <input type="text" placeholder="Поиск по Game Monster"/>
                </div>
            </div>
            <div className="footer__social">
                <button >
                    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.93824 21.3508V11.6247H11.2663L11.7646 7.83435H7.93824V5.4143C7.93824 4.31692 8.24893 3.569 9.8533 3.569L11.8995 3.56807V0.178002C11.5454 0.131978 10.3309 0.0288086 8.91787 0.0288086C5.96775 0.0288086 3.94803 1.79514 3.94803 5.03911V7.83446H0.611328V11.6248H3.94792V21.3509L7.93824 21.3508Z" fill="#B0B0B0" />
                    </svg>
                </button>
                <button >
                    <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.3115 2.09911C30.5208 1.41383 30.3115 0.910156 29.3155 0.910156H26.0224C25.185 0.910156 24.7992 1.34521 24.5899 1.82509C24.5899 1.82509 22.9151 5.83439 20.5426 8.43872C19.775 9.19262 19.4262 9.43221 19.0075 9.43221C18.7982 9.43221 18.4952 9.19262 18.4952 8.50734V2.09911C18.4952 1.27659 18.2522 0.910156 17.5543 0.910156H12.3793C11.8562 0.910156 11.5415 1.29184 11.5415 1.65366C11.5415 2.43343 12.7275 2.61318 12.8498 4.80625V9.56968C12.8498 10.614 12.6579 10.8035 12.2392 10.8035C11.1228 10.8035 8.40735 6.7759 6.79653 2.16773C6.48086 1.27197 6.16425 0.910156 5.32261 0.910156H2.02947C1.08857 0.910156 0.900391 1.34521 0.900391 1.82509C0.900391 2.6818 2.017 6.93116 6.09885 12.5511C8.8204 16.3887 12.6541 18.4695 16.1429 18.4695C18.2364 18.4695 18.4952 18.0074 18.4952 17.2115V14.3107C18.4952 13.3865 18.6935 13.2022 19.3561 13.2022C19.8449 13.2022 20.6821 13.442 22.6361 15.2924C24.8688 17.4852 25.2367 18.4695 26.4928 18.4695H29.786C30.7269 18.4695 31.1973 18.0074 30.9259 17.0955C30.629 16.1865 29.563 14.8682 28.1483 13.305C27.3808 12.4138 26.2294 11.4543 25.8808 10.9747C25.3922 10.3578 25.5317 10.0838 25.8808 9.53572C25.8808 9.53572 29.8928 3.9842 30.3115 2.09934V2.09911Z" fill="#B0B0B0" />
                    </svg>
                </button>
                <button >
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.60862 17.3469C4.69146 17.3051 4.19296 17.1524 3.86167 17.0233C3.42247 16.8523 3.1091 16.6487 2.77962 16.3197C2.45015 15.9907 2.2462 15.6776 2.07597 15.2384C1.94683 14.9073 1.79406 14.4087 1.75236 13.4915C1.70676 12.5 1.69765 12.2021 1.69765 9.69006C1.69765 7.178 1.70751 6.88097 1.75236 5.88859C1.79413 4.97147 1.94803 4.47381 2.07597 4.14172C2.24695 3.70253 2.4506 3.38917 2.77962 3.05971C3.10865 2.73025 3.42172 2.52631 3.86167 2.35608C4.19281 2.22695 4.69146 2.07418 5.60862 2.03249C6.60021 1.98688 6.89808 1.97778 9.40912 1.97778C11.9202 1.97778 12.2183 1.98764 13.2107 2.03249C14.1279 2.07426 14.6256 2.22815 14.9577 2.35608C15.3969 2.52631 15.7103 2.7307 16.0397 3.05971C16.3692 3.38872 16.5724 3.70253 16.7434 4.14172C16.8725 4.47283 17.0253 4.97147 17.067 5.88859C17.1126 6.88097 17.1217 7.178 17.1217 9.69006C17.1217 12.2021 17.1126 12.4992 17.067 13.4915C17.0252 14.4087 16.8717 14.9071 16.7434 15.2384C16.5724 15.6776 16.3688 15.991 16.0397 16.3197C15.7107 16.6484 15.3969 16.8523 14.9577 17.0233C14.6266 17.1524 14.1279 17.3052 13.2107 17.3469C12.2191 17.3925 11.9213 17.4016 9.40912 17.4016C6.89695 17.4016 6.59991 17.3925 5.60862 17.3469ZM9.40912 14.5203C6.74124 14.5203 4.57865 12.3578 4.57865 9.68999C4.57865 7.02222 6.74124 4.85972 9.40912 4.85972C12.077 4.85972 14.2396 7.02222 14.2396 9.68999C14.2396 12.3578 12.077 14.5203 9.40912 14.5203ZM13.4919 5.29541C13.368 5.10972 13.3019 4.89145 13.302 4.66819C13.3022 4.36894 13.4212 4.08202 13.6329 3.87045C13.8446 3.65888 14.132 3.53997 14.4313 3.53983C14.6545 3.53992 14.8728 3.60621 15.0583 3.73032C15.2439 3.85443 15.3886 4.03079 15.4739 4.23708C15.5593 4.44338 15.5815 4.67036 15.5379 4.88931C15.4942 5.10826 15.3867 5.30935 15.2287 5.46716C15.0708 5.62496 14.8696 5.73239 14.6506 5.77586C14.4316 5.81933 14.2046 5.79688 13.9984 5.71136C13.7922 5.62584 13.6159 5.48109 13.4919 5.29541Z" fill="#B0B0B0" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.60862 17.3469C4.69146 17.3051 4.19296 17.1524 3.86167 17.0233C3.42247 16.8523 3.1091 16.6487 2.77962 16.3197C2.45015 15.9907 2.2462 15.6776 2.07597 15.2384C1.94683 14.9073 1.79406 14.4087 1.75236 13.4915C1.70676 12.5 1.69765 12.2021 1.69765 9.69006C1.69765 7.178 1.70751 6.88097 1.75236 5.88859C1.79413 4.97147 1.94803 4.47381 2.07597 4.14172C2.24695 3.70253 2.4506 3.38917 2.77962 3.05971C3.10865 2.73025 3.42172 2.52631 3.86167 2.35608C4.19281 2.22695 4.69146 2.07418 5.60862 2.03249C6.60021 1.98688 6.89808 1.97778 9.40912 1.97778C11.9202 1.97778 12.2183 1.98764 13.2107 2.03249C14.1279 2.07426 14.6256 2.22815 14.9577 2.35608C15.3969 2.52631 15.7103 2.7307 16.0397 3.05971C16.3692 3.38872 16.5724 3.70253 16.7434 4.14172C16.8725 4.47283 17.0253 4.97147 17.067 5.88859C17.1126 6.88097 17.1217 7.178 17.1217 9.69006C17.1217 12.2021 17.1126 12.4992 17.067 13.4915C17.0252 14.4087 16.8717 14.9071 16.7434 15.2384C16.5724 15.6776 16.3688 15.991 16.0397 16.3197C15.7107 16.6484 15.3969 16.8523 14.9577 17.0233C14.6266 17.1524 14.1279 17.3052 13.2107 17.3469C12.2191 17.3925 11.9213 17.4016 9.40912 17.4016C6.89695 17.4016 6.59991 17.3925 5.60862 17.3469ZM5.53073 0.340171C4.52928 0.385775 3.84497 0.544561 3.24735 0.777097C2.62843 1.01723 2.10449 1.3394 1.58093 1.86211C1.05736 2.38483 0.736013 2.90958 0.495867 3.52847C0.263322 4.12644 0.104529 4.81035 0.0589229 5.81176C0.0125644 6.81475 0.00195312 7.13541 0.00195312 9.68999C0.00195312 12.2446 0.0125644 12.5652 0.0589229 13.5682C0.104529 14.5697 0.263322 15.2535 0.495867 15.8515C0.736013 16.47 1.05744 16.9954 1.58093 17.5179C2.10442 18.0404 2.62843 18.3621 3.24735 18.6029C3.8461 18.8354 4.52928 18.9942 5.53073 19.0398C6.53429 19.0854 6.85443 19.0968 9.40912 19.0968C11.9638 19.0968 12.2845 19.0862 13.2875 19.0398C14.289 18.9942 14.9729 18.8354 15.5709 18.6029C16.1894 18.3621 16.7137 18.0406 17.2373 17.5179C17.7609 16.9951 18.0815 16.47 18.3224 15.8515C18.5549 15.2535 18.7145 14.5696 18.7593 13.5682C18.8049 12.5645 18.8155 12.2446 18.8155 9.68999C18.8155 7.13541 18.8049 6.81475 18.7593 5.81176C18.7137 4.81028 18.5549 4.12606 18.3224 3.52847C18.0815 2.90995 17.76 2.38566 17.2373 1.86211C16.7146 1.33857 16.1894 1.01723 15.5716 0.777097C14.9729 0.544561 14.2889 0.385022 13.2883 0.340171C12.2852 0.294567 11.9646 0.283203 9.40987 0.283203C6.85518 0.283203 6.53429 0.293814 5.53073 0.340171Z" fill="#B0B0B0" />
                        <path d="M6.2739 9.68999C6.2739 7.95831 7.67737 6.55414 9.40912 6.55414C11.1409 6.55414 12.5451 7.95831 12.5451 9.68999C12.5451 11.4217 11.1409 12.8258 9.40912 12.8258C7.67737 12.8258 6.2739 11.4217 6.2739 9.68999Z" fill="#B0B0B0" />
                    </svg>
                </button>
                <button >
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.6564 0.635448C23.7061 0.91806 24.5337 1.74571 24.8163 2.79542C25.3412 4.71314 25.321 8.71009 25.321 8.71009C25.321 8.71009 25.321 12.6869 24.8163 14.6046C24.5337 15.6543 23.7061 16.4819 22.6564 16.7646C20.7386 17.2692 13.0677 17.2692 13.0677 17.2692C13.0677 17.2692 5.417 17.2692 3.47909 16.7444C2.42938 16.4618 1.60173 15.6341 1.31912 14.5844C0.814453 12.6869 0.814453 8.68991 0.814453 8.68991C0.814453 8.68991 0.814453 4.71314 1.31912 2.79542C1.60173 1.74571 2.44957 0.897874 3.47909 0.615261C5.39681 0.110596 13.0677 0.110596 13.0677 0.110596C13.0677 0.110596 20.7386 0.110596 22.6564 0.635448ZM17.0041 8.68986L10.6251 12.3638V5.0159L17.0041 8.68986Z" fill="#B0B0B0" />
                    </svg>
                </button>
                <button >
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.9777 16.111C15.0768 16.5918 15.4889 15.5844 15.4889 15.5844L18.3967 0.976768C18.3738 -0.00775704 17.0458 0.587537 17.0458 0.587537L0.7668 6.9755C0.7668 6.9755 -0.0116613 7.25025 0.0570265 7.73107C0.125714 8.21188 0.743904 8.44084 0.743904 8.44084L4.84227 9.8146C4.84227 9.8146 6.07865 13.8672 6.33051 14.6456C6.55947 15.4012 6.76553 15.4241 6.76553 15.4241C6.99449 15.5157 7.20055 15.3554 7.20055 15.3554L9.85648 12.9513L13.9777 16.111ZM14.6875 3.56387C14.6875 3.56387 15.2599 3.22043 15.237 3.56387C15.237 3.56387 15.3286 3.60966 15.0309 3.93021C14.7562 4.20496 8.2766 10.0205 7.40656 10.799C7.33787 10.8448 7.29208 10.9135 7.29208 11.005L7.04023 13.1573C6.99443 13.3862 6.69679 13.4091 6.6281 13.2031L5.55199 9.67708C5.5062 9.53971 5.55199 9.37944 5.68937 9.28785L14.6875 3.56387Z" fill="#B0B0B0" />
                    </svg>
                </button>
            </div>
        </div>
    </footer>
  )
}

export default index
