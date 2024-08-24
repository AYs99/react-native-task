import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PersonIcon = () => {
  return (
    <Svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        opacity="0.4"
        d="M0.75 40C0.75 18.3228 18.3228 0.75 40 0.75C61.6772 0.75 79.25 18.3228 79.25 40C79.25 61.6772 61.6772 79.25 40 79.25C18.3228 79.25 0.75 61.6772 0.75 40Z"
        stroke="#6A4B5D"
        stroke-width="1.5"
      />
      <Path
        d="M27.8069 63.9075C26.2729 63.9075 25.0254 62.6601 25.0254 61.1261V56.251C25.0254 53.2793 25.9465 50.4313 27.6892 48.0141L27.8738 47.7586L27.7065 47.4914C27.249 46.7605 27.3767 45.717 27.998 45.116C29.3608 43.7475 30.9358 42.6557 32.6833 41.8657C32.929 41.7495 33.2004 41.6895 33.4773 41.6895C34.0774 41.6895 34.6653 41.9684 35.012 42.4171L35.2026 42.6651L35.5046 42.584C35.6826 42.5361 35.8611 42.4907 36.0347 42.4518L36.4014 42.3702V40.4439L36.1252 40.3196C32.5737 38.7196 30.1416 35.0039 29.9297 30.8535L29.916 30.583L29.676 30.4597C29.2847 30.2596 29.0415 29.8667 29.0415 29.4373C29.0437 29.4078 29.0425 29.2258 29.0413 28.9915C29.0391 28.6567 29.0352 27.8973 29.0515 27.6938L29.2007 27.3202L28.7856 27.1383C27.8232 26.7159 27.2583 25.541 27.5264 24.5186C28.1326 21.0021 36.9729 17.3215 39.8777 16.1129C39.9084 16.1008 39.9512 16.0923 39.9961 16.0923C40.0483 16.0923 40.0913 16.1008 40.1313 16.1162C43.0271 17.3215 51.8672 21.0021 52.4648 24.4792C52.7415 25.541 52.1765 26.7159 51.2141 27.1383L50.7993 27.3202L50.9482 27.6938C50.9648 27.8973 50.9607 28.6572 50.9583 28.9915C50.9575 29.2258 50.9563 29.4078 50.9587 29.4579C50.9583 29.8667 50.7156 30.2586 50.3242 30.4597L50.084 30.583L50.0703 30.8535C49.8584 35.0039 47.4263 38.7196 43.8745 40.3196L43.5986 40.4439V42.3702L43.9651 42.4518C44.1387 42.4907 44.3171 42.5361 44.4954 42.584L44.7974 42.6651L44.988 42.4171C45.3345 41.9684 45.9224 41.6895 46.5234 41.6895C46.7996 41.6895 47.071 41.7495 47.3086 41.8625C49.0645 42.6557 50.6389 43.7475 51.9956 45.1099C52.623 45.717 52.7505 46.7605 52.2935 47.4914L52.126 47.7586L52.3108 48.0141C54.0535 50.4313 54.9746 53.2793 54.9746 56.251V61.1261C54.9746 62.6601 53.7266 63.9075 52.1931 63.9075H27.8069ZM28.1768 48.5111C26.5647 50.789 25.7131 53.4654 25.7131 56.251V61.1261C25.7131 62.2808 26.6526 63.2203 27.8069 63.2203H52.1931C53.3472 63.2203 54.2869 62.2808 54.2869 61.1261V56.251C54.2869 53.4654 53.4348 50.789 51.8232 48.5111L51.6123 48.2129L51.271 48.3451C51.0603 48.4267 50.8354 48.4679 50.6016 48.4679C50.0737 48.4679 49.5667 48.2589 49.2109 47.8941C48.1877 46.8665 47.0054 46.0461 45.6938 45.4535C44.9968 45.1385 44.5449 44.4358 44.5422 43.6636L44.5408 43.3012C44.5408 43.3012 44.0374 43.169 43.9985 43.1597L43.5693 43.0565L43.4402 43.4789C43.2473 44.1094 42.8799 44.6781 42.3777 45.1221L42.1455 45.3279L45.2068 54.5169C45.2444 54.6323 45.22 54.7565 45.1409 54.8488L40.2654 60.5368C40.2024 60.6137 40.1079 60.655 40.0042 60.655C39.8921 60.655 39.7974 60.6142 39.7427 60.5462L34.8596 54.8493C34.78 54.7565 34.7554 54.6323 34.7939 54.516L37.8542 45.3279L37.6218 45.1221C37.1201 44.6781 36.7527 44.1094 36.5598 43.4789L36.4304 43.0565L36.0015 43.1597C35.9626 43.169 35.4597 43.3012 35.4597 43.3012L35.4578 43.6631C35.4546 44.4358 35.0024 45.1385 34.3062 45.4535C32.9946 46.0461 31.8123 46.8665 30.7925 47.8904C30.4331 48.2589 29.9263 48.4679 29.3982 48.4679C29.1643 48.4679 28.939 48.4267 28.729 48.3451L28.3877 48.2129L28.1768 48.5111ZM35.5081 54.5502L40.0005 59.7919L44.4919 54.5502L41.5447 45.7001L41.0984 45.8511C40.7483 45.9692 40.3801 46.0292 40.0042 46.0292C39.6196 46.0292 39.2517 45.9692 38.9016 45.8511L38.4553 45.7001L35.5081 54.5502ZM46.49 42.3777C45.8833 42.3777 45.3904 42.7888 45.2646 43.4025C45.1382 44.0171 45.4277 44.5914 45.9854 44.8309C47.364 45.4535 48.6143 46.3208 49.6934 47.4052C49.958 47.6541 50.2629 47.7802 50.5864 47.7802C51.0994 47.7802 51.5825 47.4548 51.7896 46.9706C51.9897 46.5008 51.8875 45.9893 51.5159 45.6017C50.2791 44.425 48.6226 43.0129 46.6443 42.3983L46.5801 42.3781L46.49 42.3777ZM33.4199 42.3781L33.3555 42.3983C31.3772 43.0129 29.7209 44.425 28.4995 45.5867C28.1125 45.9893 28.0103 46.5008 28.2102 46.9706C28.4172 47.4548 28.9001 47.7802 29.4136 47.7802C29.7371 47.7802 30.042 47.6541 30.2957 47.4155C31.3857 46.3208 32.6357 45.4535 34.0227 44.8272C34.5723 44.5914 34.8621 44.0171 34.7356 43.4025C34.6096 42.7888 34.1169 42.3777 33.5093 42.3777H33.5056L33.4199 42.3781ZM37.0886 42.4372C37.0742 43.162 37.3528 43.8647 37.874 44.4067C38.4302 44.9847 39.2021 45.3246 39.9915 45.3387C40.7979 45.3246 41.5696 44.9847 42.1257 44.4067C42.647 43.8647 42.9258 43.162 42.9111 42.4283V40.6951L42.3208 40.8541C41.5854 41.0519 40.8052 41.1523 40.0027 41.1523C39.1941 41.1523 38.4146 41.0519 37.6794 40.8541L37.0886 40.6951V42.4372ZM30.876 32.7236C32.0002 37.4018 35.5801 40.4256 39.9949 40.4256H40.0051C44.4199 40.4247 47.9993 37.4018 49.1238 32.7236L49.4482 31.3748L48.3723 32.2501C45.7378 34.394 42.9207 35.483 39.9995 35.4849C37.0793 35.483 34.2622 34.394 31.6277 32.2501L30.5518 31.3748L30.876 32.7236ZM40.0168 34.792C42.9282 34.792 45.7048 33.6556 48.2688 31.4147L49.209 30.5929H30.7908L31.731 31.4147C34.2954 33.6556 37.0718 34.792 39.9832 34.792H39.999H40.0168ZM29.729 29.9051H50.271V27.3431H29.729V29.9051ZM28.1963 24.67C28.0791 25.1332 28.187 25.6428 28.4888 26.0422C28.7832 26.4313 29.2139 26.6549 29.6704 26.6549H50.3235C50.7861 26.6549 51.2166 26.4313 51.5115 26.0422C51.8127 25.6428 51.9207 25.1332 51.8035 24.67C51.395 21.3696 40.6377 17.0576 40.178 16.8747L39.9985 16.8035L39.8967 16.8466L39.8218 16.8747C39.3623 17.0576 28.605 21.3696 28.1963 24.67Z"
        fill="#6A4B5D"
        stroke="#6A4B5D"
        stroke-width="0.4"
      />
    </Svg>
  );
};

export default PersonIcon;
