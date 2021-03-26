import React from "react";

import logo from "./footerImg/Weekend лого Heart W 1.png";

const Footer = () => {
  return (
    <div className="min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto text-center">
        <div className="bg-footer sm:bg-lightGreen bg-cover bg-no-repeat pb-5 pt-10">
          <div className="flex justify-center pb-5">
            <div className="w-44 flex justify-between items-center md:ml-12 text-center">
              <a href="https://www.instagram.com/" target="_blank">
                <svg width="17" height="18" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
                  <path className="md:hover:fill-current text-DarkGreen" d="M14.5808 0.944092H2.41923C1.04615 0.944092 0 1.97076 0 3.31826V15.2533C0 16.6008 1.04615 17.6274 2.41923 17.6274H14.5808C15.9538 17.6274 17 16.6008 17 15.2533V3.31826C17 1.97076 15.9538 0.944092 14.5808 0.944092ZM8.5 14.2908C11.3115 14.2908 13.6 12.1091 13.6 9.47827C13.6 9.0291 13.5346 8.51577 13.4038 8.13077H14.8423V14.9324C14.8423 15.2533 14.5808 15.5741 14.1885 15.5741H2.81154C2.48462 15.5741 2.15769 15.3174 2.15769 14.9324V8.0666H3.66154C3.53077 8.51576 3.46539 8.96493 3.46539 9.4141C3.4 12.1091 5.68846 14.2908 8.5 14.2908ZM8.5 12.3658C6.66923 12.3658 5.23077 10.9541 5.23077 9.2216C5.23077 7.4891 6.66923 6.07743 8.5 6.07743C10.3308 6.07743 11.7692 7.4891 11.7692 9.2216C11.7692 11.0183 10.3308 12.3658 8.5 12.3658ZM14.7769 5.49993C14.7769 5.88493 14.45 6.20576 14.0577 6.20576H12.2269C11.8346 6.20576 11.5077 5.88493 11.5077 5.49993V3.76743C11.5077 3.38243 11.8346 3.06159 12.2269 3.06159H14.0577C14.45 3.06159 14.7769 3.38243 14.7769 3.76743V5.49993Z" fill="#00CCA9"/>
                </svg>
              </a>
              <a href="https://vk.com/" target="_blank">
                <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="md:hover:fill-current text-DarkGreen" d="M20.6727 11.5801C20.6727 11.4987 20.5897 11.4987 20.5897 11.4172C20.2576 10.7654 19.5104 9.95065 18.5141 9.05443C18.016 8.64706 17.7669 8.32115 17.6009 8.1582C17.3518 7.83231 17.3518 7.58789 17.4348 7.26199C17.5178 7.01757 17.8499 6.61019 18.4311 5.87692C18.7632 5.46954 18.9292 5.22513 19.1783 4.98071C20.4236 3.35122 21.0048 2.29204 20.8387 1.80319L20.7557 1.72173C20.6727 1.64025 20.5897 1.55878 20.4236 1.55878C20.2576 1.47731 20.0085 1.47731 19.7595 1.55878H16.6046C16.5216 1.55878 16.5216 1.55878 16.3555 1.55878C16.2725 1.55878 16.1895 1.55878 16.1895 1.55878H16.1065H16.0234L15.9404 1.64025C15.8574 1.72172 15.8574 1.72172 15.8574 1.80319C15.5253 2.69941 15.1102 3.43268 14.6951 4.24743C14.446 4.6548 14.1969 5.06218 13.9479 5.38808C13.6988 5.71398 13.5327 5.95839 13.3667 6.12134C13.2006 6.28429 13.0346 6.36577 12.9516 6.52872C12.8685 6.61019 12.7025 6.69167 12.7025 6.61019C12.6195 6.61019 12.5365 6.61019 12.5365 6.52872C12.4534 6.44724 12.3704 6.36576 12.2874 6.28429C12.2044 6.20281 12.2044 6.03987 12.1213 5.87692C12.1213 5.71397 12.1213 5.55102 12.1213 5.46954C12.1213 5.38807 12.1213 5.14365 12.1213 4.98071C12.1213 4.73628 12.1213 4.57333 12.1213 4.49185C12.1213 4.24743 12.1213 3.92154 12.1213 3.59564C12.1213 3.26974 12.1213 3.02531 12.1213 2.86236C12.1213 2.69942 12.1213 2.45499 12.1213 2.29205C12.1213 2.04762 12.1213 1.88467 12.1213 1.80319C12.1213 1.72172 12.0383 1.55878 12.0383 1.4773C11.9553 1.39583 11.8723 1.31435 11.7892 1.23288C11.7062 1.1514 11.5402 1.1514 11.4572 1.06993C11.042 0.988454 10.5439 0.906982 9.96276 0.906982C8.63439 0.906982 7.72114 0.988459 7.38905 1.15141C7.223 1.23288 7.05695 1.31435 6.97393 1.4773C6.80789 1.64025 6.80788 1.72173 6.8909 1.72173C7.30602 1.8032 7.63811 1.96614 7.80416 2.21057L7.88719 2.37353C7.97021 2.455 7.9702 2.61794 8.05322 2.86236C8.13624 3.10679 8.13625 3.35121 8.13625 3.67711C8.13625 4.16596 8.13625 4.65481 8.13625 4.98071C8.13625 5.38808 8.05322 5.63249 8.05322 5.87692C8.05322 6.12134 7.97021 6.28429 7.88719 6.36577C7.80417 6.52872 7.80416 6.61019 7.72113 6.61019C7.72113 6.61019 7.72113 6.69166 7.6381 6.69166C7.55508 6.69166 7.47206 6.77314 7.30602 6.77314C7.223 6.77314 7.05695 6.69167 6.97393 6.61019C6.80789 6.52872 6.64184 6.36577 6.55882 6.20282C6.39277 6.03987 6.22672 5.79544 6.06067 5.46954C5.89463 5.14365 5.64555 4.81775 5.4795 4.32891L5.31347 4.00301C5.23045 3.84007 5.0644 3.51416 4.89836 3.10679C4.73231 2.69942 4.56626 2.37353 4.40022 1.96615C4.31719 1.8032 4.23418 1.72172 4.15116 1.64025H4.06813C4.06813 1.64025 3.9851 1.55878 3.90207 1.55878C3.81905 1.55878 3.73604 1.4773 3.65302 1.4773H0.664186C0.332094 1.4773 0.166051 1.55877 0.083028 1.64025L0 1.72173C0 1.72173 0 1.8032 0 1.88467C0 1.96615 5.06608e-06 2.04762 0.083028 2.21057C0.498142 3.18826 0.996277 4.16596 1.49441 5.14365C1.99255 6.03987 2.49069 6.85462 2.82279 7.42494C3.2379 7.99526 3.56999 8.56558 3.9851 9.05443C4.40022 9.54327 4.64928 9.86917 4.7323 10.0321C4.89835 10.1951 4.98137 10.2765 5.06439 10.358L5.31347 10.6024C5.47952 10.7654 5.72858 11.0098 6.06067 11.2542C6.39277 11.4987 6.80788 11.7431 7.22299 11.9875C7.6381 12.2319 8.13625 12.3949 8.63439 12.5578C9.21555 12.7208 9.71368 12.8023 10.2118 12.7208H11.4572C11.7062 12.7208 11.8723 12.6393 12.0383 12.4764L12.1213 12.3949C12.1213 12.3134 12.2044 12.3134 12.2044 12.2319C12.2044 12.1505 12.2044 12.069 12.2044 11.906C12.2044 11.5801 12.2044 11.3357 12.2874 11.0913C12.3704 10.8469 12.3704 10.6839 12.4534 10.521C12.5365 10.358 12.6195 10.2765 12.7025 10.1951C12.7855 10.1136 12.8686 10.0321 12.8686 10.0321H12.9516C13.1176 9.95064 13.3667 10.0321 13.5327 10.1951C13.7818 10.358 14.0309 10.6024 14.1969 10.8469C14.363 11.0913 14.612 11.3357 14.9441 11.6616C15.2762 11.9875 15.5253 12.2319 15.6913 12.3134L15.9404 12.4764C16.1064 12.5578 16.2725 12.6393 16.5216 12.7208C16.7706 12.8023 16.9367 12.8022 17.1027 12.8022L19.9255 12.7208C20.1746 12.7208 20.4236 12.6393 20.5897 12.5578C20.7557 12.4764 20.8387 12.3949 20.8387 12.2319C20.8387 12.1505 20.8387 11.9875 20.8387 11.906C20.6727 11.7431 20.6727 11.6616 20.6727 11.5801Z" fill="#00CCA9"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="md:hover:fill-current text-DarkGreen" d="M17.8662 3.71024C17.8662 2.24072 16.545 0.944092 15.0476 0.944092H3.68486C2.18745 0.944092 0.866211 2.24072 0.866211 3.71024V14.8613C0.866211 16.3308 2.18745 17.6274 3.68486 17.6274H9.41025V11.3172H7.29626V8.55101H9.41025V7.42726C9.41025 5.52553 10.8196 3.88312 12.5812 3.88312H14.8714V6.64927H12.5812C12.317 6.64927 12.0527 6.9086 12.0527 7.42726V8.55101H14.8714V11.3172H12.0527V17.6274H15.0476C16.545 17.6274 17.8662 16.3308 17.8662 14.8613V3.71024Z" fill="#00CCA9"/>
                </svg>
              </a>
              <a href="https://ok.ru/" target="_blank" >
                        <svg className="md:hover:fill-current text-DarkGreen" width="15" height="22" viewBox="0 0 15 22" fill="#00CCA9" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.1039 13.5359C14.6286 13.021 14.7035 12.2853 14.2538 11.5497C13.879 10.9611 13.2043 10.6669 12.4547 10.814C12.1549 10.8876 11.855 11.0347 11.5552 11.2554C9.23139 12.8003 6.08303 12.7267 3.75924 11.1818C3.60931 11.1083 3.45939 11.0347 3.30947 10.9611C2.48489 10.5933 1.66033 10.7405 1.21057 11.4761C0.68584 12.2118 0.760792 13.021 1.43544 13.683C1.58536 13.8302 1.73528 13.9037 1.81025 14.0509L1.88521 14.1244C2.93467 14.9336 4.209 15.4486 5.85815 15.6693L4.88365 16.6256C4.05908 17.4348 3.15955 18.3176 2.33498 19.1268C2.1101 19.3475 1.81025 19.7153 1.81025 20.2303C1.81025 20.8924 2.18506 21.5545 2.85971 21.8487C3.08459 21.9959 3.30947 21.9958 3.53435 21.9958C3.90916 21.9958 4.35892 21.8487 4.65877 21.4809C5.78318 20.3774 6.68272 19.4947 7.58225 18.6119C7.65721 18.5383 7.65721 18.5383 7.65721 18.5383C7.65721 18.5383 7.73217 18.5383 7.73217 18.6119C8.33186 19.274 9.00651 19.8625 9.6062 20.5246C9.90604 20.8188 10.2059 21.1131 10.5057 21.4073C10.8805 21.7752 11.1804 21.9223 11.6301 21.9223C12.3048 21.9959 13.0544 21.5545 13.3542 20.8924C13.6541 20.3039 13.5042 19.5682 12.9794 19.1268C12.2298 18.3912 11.4802 17.582 10.6556 16.8463L9.38131 15.5957C10.056 15.5222 10.8056 15.375 11.4802 15.0808C12.6046 14.7129 13.4292 14.198 14.1039 13.5359Z"/>
                          <path d="M7.65721 11.4761C10.8805 11.4761 13.5042 8.97489 13.5042 5.81161C13.5042 4.26675 12.9045 2.79546 11.7801 1.69199C10.6556 0.58852 9.23139 0 7.73217 0C4.50885 0 1.96017 2.57476 1.88521 5.66448C1.88521 7.20934 2.4849 8.60707 3.60932 9.71054C4.65877 10.8876 6.08302 11.4761 7.65721 11.4761ZM6.00807 4.11963C6.45783 3.67824 7.05752 3.45754 7.65721 3.45754C9.0065 3.45754 9.981 4.48745 9.981 5.73805C9.981 7.06221 8.93154 8.01855 7.65721 8.01855C6.30791 8.01855 5.33342 6.98865 5.33342 5.73805C5.33342 5.14953 5.5583 4.56102 6.00807 4.11963Z"/>
                          <path d="M14.1039 13.5359C14.6286 13.021 14.7035 12.2853 14.2538 11.5497C13.879 10.9611 13.2043 10.6669 12.4547 10.814C12.1549 10.8876 11.855 11.0347 11.5552 11.2554C9.23139 12.8003 6.08303 12.7267 3.75924 11.1818C3.60931 11.1083 3.45939 11.0347 3.30947 10.9611C2.48489 10.5933 1.66033 10.7405 1.21057 11.4761C0.68584 12.2118 0.760792 13.021 1.43544 13.683C1.58536 13.8302 1.73528 13.9037 1.81025 14.0509L1.88521 14.1244C2.93467 14.9336 4.209 15.4486 5.85815 15.6693L4.88365 16.6256C4.05908 17.4348 3.15955 18.3176 2.33498 19.1268C2.1101 19.3475 1.81025 19.7153 1.81025 20.2303C1.81025 20.8924 2.18506 21.5545 2.85971 21.8487C3.08459 21.9959 3.30947 21.9958 3.53435 21.9958C3.90916 21.9958 4.35892 21.8487 4.65877 21.4809C5.78318 20.3774 6.68272 19.4947 7.58225 18.6119C7.65721 18.5383 7.65721 18.5383 7.65721 18.5383C7.65721 18.5383 7.73217 18.5383 7.73217 18.6119C8.33186 19.274 9.00651 19.8625 9.6062 20.5246C9.90604 20.8188 10.2059 21.1131 10.5057 21.4073C10.8805 21.7752 11.1804 21.9223 11.6301 21.9223C12.3048 21.9959 13.0544 21.5545 13.3542 20.8924C13.6541 20.3039 13.5042 19.5682 12.9794 19.1268C12.2298 18.3912 11.4802 17.582 10.6556 16.8463L9.38131 15.5957C10.056 15.5222 10.8056 15.375 11.4802 15.0808C12.6046 14.7129 13.4292 14.198 14.1039 13.5359Z"/>
                        </svg>
                      </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {/* <div className="ml-3 pt-10 md:ml-12 md:flex md:flex-row-reverse"> */}
            <div className="mr-1.5 md:mr-16">
              <a href="/"><img src={logo}></img></a>
            </div>
             <div className="">
              <p className="leading-3 mb-2 text-left"><a href="/contacts" target="_blank" className="text-xs md:text-sm font-semibold text-BlackGray">Контакты</a></p>
              <p className="leading-3 mb-2 text-left"><a href="/collaboration" target="_blank" className="text-xs md:text-sm font-semibold text-BlackGray">Сотрудничество</a></p>
              <p className="leading-3 text-left"><a href="/politics" target="_blank" className="text-xs md:text-sm font-semibold text-BlackGray">Политика конфиденциальности</a></p>
             </div>
            {/* </div> */}
          </div>
          <p className="mt-4 font-normal text-xs leading-5 text-BlackGray text-center">All rights reserved &copy; 2021 Sdetmi.org</p>
        </div>
    </div>
  );
}

export default Footer;
