const express = require("express");
const { participants } = require("./data");

const app = express();

app.get("/participants", (_, res) => {
  res.json(participants);
});

app.get("/", (_, res) => {
  res.send(`
    <svg width="339" height="65" viewBox="0 0 339 65" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_2_713)">
  <path d="M28.4895 52.006C42.0147 52.006 52.979 41.4002 52.979 28.3173C52.979 15.2344 42.0147 4.62866 28.4895 4.62866C14.9643 4.62866 4 15.2344 4 28.3173C4 41.4002 14.9643 52.006 28.4895 52.006Z" fill="#FDFDFE"/>
  <path d="M57.7641 56.6345C73.9319 56.6345 87.0386 43.9564 87.0386 28.3172C87.0386 12.6781 73.9319 0 57.7641 0C41.5962 0 28.4895 12.6781 28.4895 28.3172C28.4895 43.9564 41.5962 56.6345 57.7641 56.6345Z" fill="#FDFDFE"/>
  <path d="M81.5834 28.3369C81.3973 35.1953 78.8859 41.2892 73.4651 46.0092C65.7792 52.7014 55.2412 54.2249 45.9746 48.89C37.8677 44.2198 33.7756 37.0124 33.9475 27.9408C34.019 24.1266 34.6891 20.1849 36.7853 16.6892C41.5131 8.81978 49.9951 3.16907 60.7593 4.65654C63.7804 5.0748 66.7328 5.90579 69.4475 7.65086C71.8042 9.16603 74.1409 10.6258 75.8218 12.8002C78.1671 15.8222 80.1716 18.9855 80.8131 22.8856C81.108 24.6528 81.4431 26.3896 81.5834 28.3369ZM55.5648 34.9848C55.5648 36.0568 55.5476 37.1315 55.5648 38.2035C55.5963 39.7325 55.9542 40.0316 57.7153 40.0593C59.3619 40.087 60.0549 39.5663 60.0806 38.173C60.1179 36.0761 60.1551 33.9765 60.0806 31.8824C60.0348 30.8132 60.4243 30.5667 61.4523 30.6027C63.4167 30.6747 65.384 30.6304 67.3513 30.6221C69.0867 30.6221 69.5992 30.0681 69.5964 28.3286C69.5964 26.6915 69.0237 26.0766 67.3656 26.0572C65.4499 26.0351 63.5313 25.999 61.6184 26.0738C60.473 26.1182 60.0005 25.8605 60.0749 24.639C60.1895 22.7443 60.1179 20.8358 60.1036 18.9329C60.1036 17.2044 59.4335 16.548 57.7926 16.5646C56.2177 16.5812 55.5934 17.21 55.5762 18.8719C55.5562 20.7749 55.4874 22.6806 55.602 24.5781C55.6793 25.8522 55.1839 26.1375 53.9783 26.0766C52.1685 25.9852 50.3473 26.0323 48.5375 26.0572C46.7277 26.0821 45.8686 26.794 45.8657 28.2732C45.8657 29.9933 46.5244 30.5972 48.506 30.6166C50.4876 30.6359 52.5408 30.6526 54.5568 30.6166C55.3643 30.5972 55.622 30.8686 55.5877 31.6276C55.5218 32.7328 55.559 33.8574 55.5648 34.9792V34.9848Z" fill="#4D7EF7"/>
  <path d="M8.7135 26.5918C9.52104 17.6144 16.302 10.526 25.036 9.09398C27.9839 8.60547 31.0133 8.89248 33.8072 9.92497C34.6176 10.202 35.1159 10.5067 34.3627 11.5177C30.2907 16.9939 28.5353 23.1847 28.8875 29.9157C29.088 33.7438 29.8039 37.486 31.6738 40.9401C32.5472 42.5578 33.0798 44.3638 34.5374 45.6491C35.1101 46.1476 35.0529 46.48 34.2511 46.7127C28.3979 48.4162 22.8167 47.9897 17.6708 44.6325C12.3388 41.1396 9.44085 36.2174 8.73927 30.0459C8.92282 28.9007 8.91412 27.7343 8.7135 26.5918V26.5918Z" fill="#062D8F"/>
  <path d="M55.5618 34.9791C55.5618 33.8573 55.5217 32.7327 55.5618 31.6136C55.5961 30.8546 55.3384 30.5832 54.5309 30.6026C52.5264 30.6497 50.4961 30.6358 48.4801 30.6026C46.4641 30.5693 45.837 29.9793 45.8399 28.2592C45.8399 26.7773 46.6703 26.0682 48.5116 26.0432C50.3529 26.0183 52.1455 25.9712 53.9524 26.0626C55.158 26.1236 55.6534 25.8383 55.5761 24.5641C55.4615 22.6694 55.5303 20.7609 55.5503 18.858C55.5675 17.196 56.1889 16.5672 57.7667 16.5506C59.4076 16.534 60.0576 17.1905 60.0777 18.9189C60.092 20.8219 60.1664 22.7276 60.049 24.625C59.9746 25.8466 60.4557 26.1042 61.5925 26.0599C63.5054 25.9851 65.424 26.0211 67.3397 26.0432C68.9863 26.0626 69.5676 26.6776 69.5705 28.3146C69.5705 30.068 69.0608 30.5998 67.3254 30.6081C65.3581 30.6081 63.3908 30.6608 61.4264 30.5887C60.3984 30.55 60.0089 30.7993 60.0548 31.8685C60.1435 33.9625 60.1034 36.0622 60.0548 38.159C60.0318 39.544 59.336 40.0703 57.6894 40.0454C55.9283 40.0177 55.5704 39.7185 55.5389 38.1895C55.5446 37.1175 55.5646 36.0511 55.5618 34.9791Z" fill="#FDFDFE"/>
  <path d="M101.055 15.2202H104.335V43.7002H101.055V15.2202ZM121.007 23.1002C125.834 23.1002 128.247 25.7535 128.247 31.0602V43.7002H125.007V31.2202C125.007 29.3535 124.634 27.9935 123.887 27.1402C123.141 26.2602 121.967 25.8202 120.367 25.8202C118.501 25.8202 117.007 26.3935 115.887 27.5402C114.767 28.6869 114.207 30.2335 114.207 32.1802V43.7002H110.967V29.2202C110.967 27.1402 110.861 25.2602 110.647 23.5802H113.727L114.047 27.1802C114.661 25.8735 115.581 24.8735 116.807 24.1802C118.034 23.4602 119.434 23.1002 121.007 23.1002ZM138.686 26.1402V37.1402C138.686 38.6335 138.992 39.6869 139.606 40.3002C140.219 40.8869 141.086 41.1802 142.206 41.1802C142.952 41.1802 143.672 41.0602 144.366 40.8202V43.5802C143.539 43.8469 142.606 43.9802 141.566 43.9802C139.646 43.9802 138.139 43.4469 137.046 42.3802C135.979 41.2869 135.446 39.6869 135.446 37.5802V26.1402H131.526V23.5802H135.446V18.4202L138.686 17.2602V23.5802H144.446V26.1402H138.686ZM165.19 23.5802V43.7002H162.03V40.2202C161.39 41.4469 160.497 42.3802 159.35 43.0202C158.203 43.6602 156.91 43.9802 155.47 43.9802C153.097 43.9802 151.297 43.3135 150.07 41.9802C148.843 40.6469 148.23 38.6735 148.23 36.0602V23.5802H151.47V35.9802C151.47 37.7935 151.843 39.1269 152.59 39.9802C153.337 40.8335 154.47 41.2602 155.99 41.2602C157.777 41.2602 159.217 40.6869 160.31 39.5402C161.403 38.3669 161.95 36.8335 161.95 34.9402V23.5802H165.19ZM178.236 43.9802C174.849 43.9802 172.169 43.1135 170.196 41.3802L171.276 38.9802C172.369 39.8335 173.476 40.4469 174.596 40.8202C175.716 41.1935 176.969 41.3802 178.356 41.3802C179.876 41.3802 181.023 41.1269 181.796 40.6202C182.596 40.0869 182.996 39.3269 182.996 38.3402C182.996 37.5402 182.729 36.9002 182.196 36.4202C181.663 35.9402 180.783 35.5669 179.556 35.3002L176.156 34.5002C174.476 34.1269 173.169 33.4602 172.236 32.5002C171.329 31.5402 170.876 30.3935 170.876 29.0602C170.876 27.3002 171.583 25.8735 172.996 24.7802C174.409 23.6602 176.276 23.1002 178.596 23.1002C180.009 23.1002 181.343 23.3269 182.596 23.7802C183.849 24.2335 184.903 24.8869 185.756 25.7402L184.676 28.1002C182.783 26.5269 180.756 25.7402 178.596 25.7402C177.156 25.7402 176.036 26.0202 175.236 26.5802C174.463 27.1135 174.076 27.8735 174.076 28.8602C174.076 29.6869 174.316 30.3402 174.796 30.8202C175.303 31.3002 176.103 31.6735 177.196 31.9402L180.596 32.7802C182.463 33.2069 183.849 33.8735 184.756 34.7802C185.663 35.6602 186.116 36.8202 186.116 38.2602C186.116 39.9935 185.409 41.3802 183.996 42.4202C182.583 43.4602 180.663 43.9802 178.236 43.9802Z" fill="#626275"/>
  <path d="M204.16 44.0602C201.36 44.0602 198.906 43.4602 196.8 42.2602C194.72 41.0602 193.12 39.3669 192 37.1802C190.88 34.9669 190.32 32.3802 190.32 29.4202C190.32 26.4869 190.88 23.9269 192 21.7402C193.12 19.5269 194.72 17.8335 196.8 16.6602C198.906 15.4602 201.36 14.8602 204.16 14.8602C206.08 14.8602 207.88 15.1669 209.56 15.7802C211.266 16.3669 212.68 17.1935 213.8 18.2602L212.12 22.0202C210.84 20.9802 209.56 20.2335 208.28 19.7802C207.026 19.3002 205.68 19.0602 204.24 19.0602C201.493 19.0602 199.36 19.9535 197.84 21.7402C196.346 23.5269 195.6 26.0869 195.6 29.4202C195.6 32.7802 196.346 35.3669 197.84 37.1802C199.333 38.9669 201.466 39.8602 204.24 39.8602C205.68 39.8602 207.026 39.6335 208.28 39.1802C209.56 38.7002 210.84 37.9402 212.12 36.9002L213.8 40.6602C212.68 41.7269 211.266 42.5669 209.56 43.1802C207.88 43.7669 206.08 44.0602 204.16 44.0602ZM237.192 23.5002V43.7002H232.272V40.4602C231.659 41.5802 230.779 42.4602 229.632 43.1002C228.485 43.7135 227.179 44.0202 225.712 44.0202C223.952 44.0202 222.392 43.5935 221.032 42.7402C219.672 41.8869 218.619 40.6735 217.872 39.1002C217.125 37.5269 216.752 35.7002 216.752 33.6202C216.752 31.5402 217.125 29.7002 217.872 28.1002C218.645 26.4735 219.712 25.2202 221.072 24.3402C222.432 23.4335 223.979 22.9802 225.712 22.9802C227.179 22.9802 228.485 23.3002 229.632 23.9402C230.779 24.5535 231.659 25.4202 232.272 26.5402V23.5002H237.192ZM227.072 40.1002C228.725 40.1002 230.005 39.5269 230.912 38.3802C231.819 37.2335 232.272 35.6202 232.272 33.5402C232.272 31.4069 231.819 29.7669 230.912 28.6202C230.005 27.4735 228.712 26.9002 227.032 26.9002C225.379 26.9002 224.085 27.5002 223.152 28.7002C222.245 29.8735 221.792 31.5135 221.792 33.6202C221.792 35.7002 222.245 37.3002 223.152 38.4202C224.085 39.5402 225.392 40.1002 227.072 40.1002ZM253.517 23.0202C254.291 23.0202 254.957 23.1269 255.517 23.3402L255.477 27.9002C254.624 27.5535 253.744 27.3802 252.837 27.3802C251.131 27.3802 249.824 27.8735 248.917 28.8602C248.037 29.8469 247.597 31.1535 247.597 32.7802V43.7002H242.637V29.2202C242.637 27.0869 242.531 25.1802 242.317 23.5002H246.997L247.397 27.0602C247.904 25.7535 248.704 24.7535 249.797 24.0602C250.891 23.3669 252.131 23.0202 253.517 23.0202ZM275.591 33.8602H261.671C261.778 36.0202 262.311 37.6202 263.271 38.6602C264.258 39.6735 265.711 40.1802 267.631 40.1802C269.844 40.1802 271.898 39.4602 273.791 38.0202L275.231 41.4602C274.271 42.2335 273.084 42.8602 271.671 43.3402C270.284 43.7935 268.871 44.0202 267.431 44.0202C264.124 44.0202 261.524 43.0869 259.631 41.2202C257.738 39.3535 256.791 36.7935 256.791 33.5402C256.791 31.4869 257.204 29.6602 258.031 28.0602C258.858 26.4602 260.018 25.2202 261.511 24.3402C263.004 23.4335 264.698 22.9802 266.591 22.9802C269.364 22.9802 271.551 23.8869 273.151 25.7002C274.778 27.4869 275.591 29.9535 275.591 33.1002V33.8602ZM266.711 26.5802C265.378 26.5802 264.284 26.9802 263.431 27.7802C262.604 28.5535 262.071 29.6869 261.831 31.1802H271.231C271.071 29.6602 270.604 28.5135 269.831 27.7402C269.084 26.9669 268.044 26.5802 266.711 26.5802Z" fill="#4D7EF8"/>
  </g>
  <defs>
  <filter id="filter0_d_2_713" x="0" y="0" width="279.591" height="64.6345" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_713"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_713" result="shape"/>
  </filter>
  </defs>
  </svg>


  `);
});

module.exports = { app };
