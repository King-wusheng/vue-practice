<template>
    <div class="all">
        <div class="shopmain">
            <div class="center">
                <span class="backsvg">
                    <svg class="back" t="1541658183953" @click="back"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2348" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M778.965749 128.759549l-383.064442 383.063419 388.097062 388.096039-0.070608 0.033769c12.709463 13.137205 20.529569 31.024597 20.529569 50.731428 0 40.376593-32.736589 73.112158-73.115228 73.112158-19.705807 0-37.591153-7.819083-50.730405-20.528546l-0.034792 0.035816L241.890654 564.622498l0.035816-0.035816c-13.779841-13.281491-22.3838-31.915897-22.3838-52.585659 0-0.071631 0-0.106424 0-0.178055 0-0.072655 0-0.10847 0-0.144286 0-20.669762 8.603959-39.341007 22.3838-52.622498l-0.035816-0.034792L680.573835 20.337187l0.180102 0.179079c13.139252-12.5662 30.950919-20.313651 50.587142-20.313651 40.378639 0 73.115228 32.736589 73.115228 73.114205C804.455283 95.485725 794.567076 115.334795 778.965749 128.759549z" p-id="2349" fill="#fff"></path></svg>
                </span>
                
                <div class="topimg">
                    <img :src="showImg.goods_origin_url">
                </div>
                <span class="moresvg">
                    <svg t="1541647372158" class="more" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1358" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M147.01175 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C228.121046 467.194538 191.804932 430.890704 147.01175 430.890704zM511.999488 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C593.108784 467.194538 556.791647 430.890704 511.999488 430.890704zM876.987227 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273s81.108273-36.329417 81.108273-81.108273C958.094476 467.194538 921.778362 430.890704 876.987227 430.890704z" p-id="1359" fill="#fff"></path></svg>
                </span>
                
                <div>
                    <div class="sc-kgoBCf bTQvTk">
                        <div class="sc-kGXeez eBHHsD">
                            <div class="sc-kpOJdX caepzu">
                                <span>
                                    <span class="Price sc-ckVGcZ lmuUPI">
                                        <span>¥
                                        </span>{{mess.cprice}}
                                    </span>
                                    <del class="cikhXQ">￥{{ mess.price }}</del>
                                </span>
                                <span class="sc-chPdSV eCpHpu" style="background-color: rgb(255, 70, 78); border-color: rgb(255, 70, 78); color: rgb(255, 255, 255);">包邮</span>
                            </div>
                            <span class="sc-iRbamj fdvAUU">{{ showImg.join_number }}
                            </span>
                        </div>
                        <div class="sc-kkGfuU gnqCN" data-zerobuy="false">
                            <p class="sc-iAyFgw eiWZln">{{ showImg.goods_title }}</p>
                            <svg t="1541646243519" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4889" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M595.168 835.045c-6.167 6.54-11.82 12.861-17.824 18.828-12.932 12.853-25.866 25.712-39.143 38.202-8.951 8.421-20.048 13.2-32.036 15.309-3.387 0.596-7.249-1.22-10.841-2.134-12.953-3.297-22.951-11.429-32.098-20.543-20.391-20.319-40.516-40.909-60.695-61.439-9.148-9.307-18.222-18.689-27.241-28.121-10.06-10.519-19.946-21.205-30.039-31.692-18.293-19.005-36.707-37.891-55.024-56.871-17.753-18.396-35.44-36.855-53.17-55.273-19.701-20.463-39.435-40.893-59.119-61.372-10.089-10.495-20.631-20.619-29.957-31.755-6.224-7.433-10.805-16.272-15.859-24.64-3.654-6.05-6.928-12.333-10.273-18.565-2.313-4.307-4.818-8.563-6.601-13.092-3.691-9.376-7.052-18.885-10.371-28.402-2.667-7.645-5.935-15.221-7.403-23.113-2.479-13.339-4.789-26.866-5.261-40.381-0.594-16.981-0.558-34.196 1.614-50.999 1.977-15.297 4.531-30.782 10.522-45.36 4.034-9.815 6.782-20.181 11.125-29.842 4.065-9.043 8.882-17.882 14.431-26.093 7.67-11.349 15.772-22.516 24.747-32.841 7.819-8.995 16.77-17.108 25.854-24.868 6.793-5.804 14.333-10.865 22.017-15.46 8.062-4.82 16.49-9.161 25.124-12.851 10.503-4.49 21.129-9.164 32.169-11.815 17.348-4.166 35.056-6.943 53.098-5.631 7.799 0.567 15.781 0.052 23.385 1.545 15.223 2.991 30.791 4.697 45.281 10.897 12.215 5.227 25.075 9.206 36.693 15.502 12.542 6.798 24.66 14.801 35.719 23.807 14.546 11.847 27.908 25.153 41.698 37.918 1.982 1.835 3.591 4.096 5.243 6.259 2.374 3.106 4.561 3.465 7.498 0.454 8.768-8.99 17.301-18.277 26.721-26.544 10.14-8.898 20.956-17.079 31.9-24.989 8.459-6.114 17.348-11.724 26.46-16.818 7.146-3.995 14.8-7.178 22.452-10.143 11.001-4.263 22.176-8.083 33.343-11.898 2.532-0.865 5.329-0.981 8.018-1.348 2.531-0.346 5.193-0.185 7.599-0.905 19.038-5.696 38.585-4.011 57.87-3.162 10.841 0.478 21.575 4.241 32.267 6.896 7.033 1.748 13.955 4.003 20.823 6.334 3.995 1.356 7.931 3.042 11.645 5.04 13.663 7.35 27.037 15.033 39.437 24.594 15.049 11.604 28.218 24.923 39.693 39.829 7.487 9.724 13.714 20.463 20.007 31.044 4.46 7.498 8.355 15.367 11.986 23.306 2.361 5.162 3.863 10.724 5.625 16.147 2.402 7.39 4.681 14.821 7.02 22.231 0.357 1.133 0.942 2.224 1.114 3.38 1.772 11.891 3.658 23.769 5.138 35.698 0.795 6.41 0.578 12.946 1.372 19.356 0.436 3.521-0.834 4.919-3.916 4.947-9.719 0.087-19.441 0.068-29.159-0.041-3.477-0.038-4.875-1.837-5.004-5.536-0.356-10.195-0.574-20.46-2.011-30.532-1.189-8.336-3.874-16.481-6.195-24.625-2.032-7.129-4.335-14.191-6.801-21.183-1.45-4.111-3.257-8.126-5.237-12.013-8.545-16.761-17.89-33.106-30.417-47.209-13.486-15.185-28.225-28.988-46.275-38.989-9.193-5.093-18.622-9.214-28.381-13.088-25.241-10.022-51.354-9.197-77.446-7.347-10.277 0.729-20.355 4.658-30.453 7.389-5.005 1.354-9.825 3.376-14.772 4.956-12.166 3.884-23.318 9.902-33.696 17.129-12.335 8.59-24.889 17.11-36.009 27.143-17.734 15.998-34.662 32.942-48.704 52.47-2.179 3.03-4.87 5.701-6.956 8.786-2.61 3.861-4.62 2.89-7.031-0.147-12.116-15.257-23.582-31.114-36.656-45.505-15.039-16.554-31.868-31.381-51.54-42.522-9.518-5.391-18.94-10.989-28.723-15.859-5.083-2.531-10.816-3.805-16.322-5.424-9.046-2.661-18.054-5.565-27.255-7.547-6.089-1.312-12.48-1.554-18.745-1.636-11.76-0.153-23.631-0.763-35.258 0.559-9.763 1.11-19.287 4.546-28.834 7.248-5.177 1.465-10.434 3.044-15.203 5.461-8.858 4.489-17.977 8.833-25.904 14.7-10.289 7.613-19.918 16.247-29.113 25.183-11.578 11.251-21.015 24.417-28.73 38.526-5.782 10.574-10.062 21.985-14.753 33.132-2.673 6.351-5.413 12.772-7.077 19.423-2.459 9.828-4.331 19.837-5.801 29.865-1.132 7.721-1.879 15.603-1.698 23.389 0.323 13.938 0.885 27.927 2.509 41.758 0.912 7.761 4.057 15.277 6.375 22.849 1.579 5.159 3.169 10.352 5.279 15.305 4.085 9.589 8.304 19.138 12.911 28.485 4.619 9.372 9.078 18.953 14.908 27.561 5.271 7.783 12.099 14.569 18.598 21.456 11.044 11.702 22.383 23.125 33.575 34.687 20.822 21.513 41.623 43.043 62.442 64.558 10.251 10.593 20.585 21.108 30.775 31.76 20.521 21.453 40.935 43.008 61.463 64.455 8.701 9.091 17.648 17.946 26.35 27.036 14.393 15.033 28.606 30.238 43.023 45.245 14.012 14.585 28.093 29.108 42.353 43.451 3.793 3.815 8.16 7.167 12.673 10.101 1.485 0.965 5.095 0.836 6.319-0.307 12.411-11.597 24.595-23.439 36.7-35.357 6.633-6.532 12.853-13.488 19.6-19.892 1.217-1.154 4.98-1.562 6.068-0.606 8.269 7.264 16.164 14.957 24.407 22.735zM686.443 636.28c-22.331 0-44.661 0.05-66.991-0.135-1.239-0.01-3.503-1.941-3.534-3.03-0.282-9.71-0.303-19.437 0.001-29.146 0.037-1.161 2.474-3.225 3.801-3.228 44.327-0.052 88.653 0.073 132.98 0.249 4.786 0.019 7.445-1.907 7.609-6.803 0.092-2.721 0.135-5.444 0.135-8.167 0.009-39.217 0.013-78.434-0.001-117.652-0.004-10.742-0.034-10.709 10.641-10.683 6.989 0.016 13.993 0.177 20.961-0.222 3.884-0.222 4.715 1.406 4.708 4.724-0.09 42.626-0.132 85.251-0.173 127.876-0.002 1.701-0.017 3.423 0.224 5.099 0.498 3.461 2.356 5.586 6.097 5.605 2.046 0.01 4.091 0.089 6.137 0.086 42.283-0.068 84.566-0.119 126.848-0.265 2.967-0.01 4.023 1.277 4.027 3.926 0.012 9.206-0.01 18.41 0.005 27.616 0.005 2.948-1.158 4.121-4.343 4.108-43.135-0.182-86.271-0.246-129.406-0.307-7.903-0.011-9.599 1.702-9.598 9.622 0.006 42.969 0.045 85.936 0.058 128.903 0.002 7.071-0.258 7.297-7.026 6.749-7.445-0.604-14.986-0.047-22.485 0.067-5.197 0.079-6.917-1.444-6.907-6.382 0.077-41.771 0.161-83.543 0.236-125.315 0.004-2.212 0.118-4.443-0.112-6.634-0.58-5.533-2.461-7.09-7.908-7.085-21.994 0.021-43.989 0.009-65.983 0.009-0.002 0.138-0.002 0.276-0.002 0.415z" p-id="4890" fill="#8a8a8a"></path></svg>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div>
                        <div class="sc-drlKqa hoFmJx">
                            <div class="sc-dVhcbM dQnXyl">
                                <p class="sc-eqIVtm dDeMti">
                                    <span class="sc-kAzzGY iXUUuH">{{ data.jump_text?data.jump_text:'优惠' }}</span>
                                    <span class="sc-fAjcbJ byigni">{{ data.content?data.content:'暂无优惠' }}</span>
                                </p>
                                <svg t="1541647372158" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1358" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M147.01175 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C228.121046 467.194538 191.804932 430.890704 147.01175 430.890704zM511.999488 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C593.108784 467.194538 556.791647 430.890704 511.999488 430.890704zM876.987227 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273s81.108273-36.329417 81.108273-81.108273C958.094476 467.194538 921.778362 430.890704 876.987227 430.890704z" p-id="1359" fill="#bfbfbf"></path></svg>
                            </div>
                            <div class="sc-gldTML fNYoVS">
                                <p class="sc-feryYK kZCgYS">
                                    <span class="sc-cJOK evvHOT">
                                        <svg t="1541647744058" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1534" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 322c-104.92 0-190 85.08-190 190s85.08 190 190 190 190-85.06 190-190-85.08-190-190-190z" p-id="1535" fill="#ff464e"></path></svg>
                                        24小时发货</span>
                                    <span class="sc-cJOK evvHOT">
                                        <svg t="1541647744058" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1534" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 322c-104.92 0-190 85.08-190 190s85.08 190 190 190 190-85.06 190-190-85.08-190-190-190z" p-id="1535" fill="#ff464e"></path></svg>
                                        7天包退
                                        
                                    </span>
                                    <span class="sc-cJOK evvHOT">
                                        <svg t="1541647744058" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1534" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 322c-104.92 0-190 85.08-190 190s85.08 190 190 190 190-85.06 190-190-85.08-190-190-190z" p-id="1535" fill="#ff464e"></path></svg>
                                        售后补贴
                                    </span>
                                </p>
                                <svg t="1541647372158" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1358" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M147.01175 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C228.121046 467.194538 191.804932 430.890704 147.01175 430.890704zM511.999488 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273 44.792159 0 81.109296-36.329417 81.109296-81.108273C593.108784 467.194538 556.791647 430.890704 511.999488 430.890704zM876.987227 430.890704c-44.791136 0-81.108273 36.303834-81.108273 81.109296 0 44.778856 36.316114 81.108273 81.108273 81.108273s81.108273-36.329417 81.108273-81.108273C958.094476 467.194538 921.778362 430.890704 876.987227 430.890704z" p-id="1359" fill="#bfbfbf"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="sc-eilVRo biqBpV">
                <div class="Home sc-bHwgHz gsNOod sc-TFwJa AQZKI">
                    <svg t="1541660177569" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2143" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="23"><path d="M969.6 502.4l-118.4-112L528 89.6c-9.6-9.6-22.4-9.6-32 0L182.4 387.2l-9.6 9.6-118.4 112c-9.6 9.6-9.6 22.4 0 32s22.4 9.6 32 0l83.2-80v393.6c0 48 41.6 89.6 92.8 89.6h83.2c38.4 0 70.4-28.8 70.4-67.2V659.2h198.4v217.6c0 35.2 32 67.2 70.4 67.2H768c51.2 0 92.8-38.4 92.8-89.6V457.6l80 73.6c9.6 9.6 22.4 9.6 32 0 6.4-6.4 6.4-19.2-3.2-28.8z m-160 355.2c0 25.6-19.2 44.8-44.8 44.8h-83.2c-12.8 0-22.4-9.6-22.4-22.4V640c0-12.8-9.6-22.4-22.4-22.4H393.6c-12.8 0-22.4 9.6-22.4 22.4v240c0 12.8-9.6 22.4-22.4 22.4h-83.2c-25.6 0-44.8-19.2-44.8-44.8V419.2l294.4-281.6 294.4 281.6v438.4z" fill="#515151" p-id="2144"></path></svg>
                    <router-link tag="span" to="/home/goods" class="sc-itybZL jFebcI"> 首页</router-link>
                </div>
                <router-link to="/home/shopCar" tag="div" class="PopShoppingCart sc-laTMn jIGqoB sc-bnXvFD iVwfSH">
                <svg t="1541660299769" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3438" xmlns:xlink="http://www.w3.org/1999/xlink" width="23" height="23"><path d="M355.728 826.384c-26.554 0-48.061 21.507-48.061 48.061s21.507 48.061 48.061 48.061 48.061-21.507 48.061-48.061-21.507-48.061-48.061-48.061z m412.756 0c-26.554 0-48.061 21.507-48.061 48.061s21.507 48.061 48.061 48.061 48.061-21.507 48.061-48.061-21.507-48.061-48.061-48.061z m73.253-46.619H351.918c-19.974 0-39.496-7.668-54.971-21.592-15.492-13.939-25.371-32.746-27.815-52.955l-0.004-0.034-51.159-360.168-29.084-168.179-0.058-0.417c-2.246-16.221-17.087-29.925-32.408-29.925H118c-13.807 0-25-11.193-25-25s11.193-25 25-25h38.418c40.122 0 75.994 31.859 81.871 72.613l29.074 168.122 51.404 361.965c0.994 8.221 5.121 15.959 11.622 21.809 6.28 5.65 13.925 8.762 21.528 8.762h489.819c13.808 0 25 11.193 25 25s-11.191 24.999-24.999 24.999zM389.532 657.269c-12.972 0-23.937-10.019-24.906-23.163-1.015-13.77 9.325-25.755 23.094-26.771l408.873-30.139 0.59-0.016c16.205-0.428 30.604-12.955 32.781-28.521l0.132-0.841 47.394-271.179c0.016-0.086 0.024-0.151 0.032-0.216 1.395-11.716-1.94-23.753-8.703-31.425-4.64-5.25-10.736-8.037-17.613-8.037H329.09c-13.807 0-25-11.193-25-25s11.193-25 25-25h522.116c21.316 0 40.886 8.861 55.102 24.952 16.142 18.311 23.936 44.625 20.865 70.411a53.075 53.075 0 0 1-0.433 2.946l-47.323 270.777c-5.732 39.299-40.099 69.724-80.271 71.097L391.396 657.2a25.4 25.4 0 0 1-1.864 0.069z" fill="" p-id="3439"></path></svg>
                    <span class="sc-jzgbtB ktUUzU">购物车</span>
                </router-link>
                <div class="sc-eerKOB aLTFY">
                    <div class="OneBtn sc-gJWqzi eBSgt" data-disabled="false" data-newvip="0">
                        <div class="sc-bMvGRv jYITyy">立即购买</div>
                    </div>
                    <div class="TwoBtn sc-CtfFt eSPJkQ">
                        <div class="sc-bMvGRv jYITyy" @click="open">加入购物车</div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="sc-cqCuEk cyOSJK" v-show="showall">
            <div class="sc-dliRfk duugzz">
                <div class="box">
                    <div class="sc-iGrrsa jYjmxa">
                        <div class="sc-bmyXtO kdcqpr">
                            <img class="sc-iqzUVk gGteGu" :src="shopMess1.av_zpic?shopMess1.av_zpic:showImg.goods_origin_url">
                        </div>
                        <div class="sc-dEoRIm kLnIRP">
                            <div class="Cprice sc-jtggT jHnhrY">¥{{shopMess1.cprice?shopMess1.cprice:' '}}</div>
                            <div v-show="!sizeClick" class="sc-ebFjAB bECJpj">请选择 {{headTitle.zav_name?headTitle.zav_name:''}} {{headTitle.fav_name?headTitle.fav_name:''}}</div>
                            <div v-show="sizeClick" class="sc-ebFjAB bECJpj">已选择 {{clickName}} {{clickName1}}</div>
                        </div>
                        <div class="CloesdSku sc-jKVCRD jCKkwU">
                            <svg @click="closeClick" t="1541928941249" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2082" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M562.28 513.001l197.101-197.082c13.61-13.609 13.587-35.657-0.022-49.268-13.609-13.609-35.657-13.621-49.268-0.011L513.005 463.728 315.908 266.641c-13.61-13.61-35.658-13.61-49.268 0-13.609 13.609-13.609 35.669 0 49.278l197.083 197.088-197.082 197.085c-13.609 13.609-13.609 35.668 0 49.279 13.609 13.609 35.657 13.586 49.245 0l197.109-197.09 197.073 197.078c13.633 13.621 35.681 13.609 49.29 0s13.633-35.658 0.022-49.268l-197.1-197.09z" p-id="2083" fill="#8a8a8a"></path></svg>
                        </div>
                    </div>
                    <div class="classify">
                        <div class="sc-kaNhvL eePJwY">
                            <span class="sc-LKuAh djINZm">{{ headTitle.zav_name?headTitle.zav_name:'' }}</span>
                            
                            <div class="ColorSku sc-iBEsjs dRKsrh">
                                <div  @click="pitch(color)" :class="{pitch: clickName == color}" class="SpanItem sc-hzNEM kpMuTa" rel="active" v-for="color of colorArr" :key="color">{{ color }}</div>
                            </div>
                            
                            <span class="sc-LKuAh djINZm">{{ headTitle.fav_name?headTitle.fav_name:'' }}</span>
                            
                            <div class="SizeSku sc-gmeYpB iGRxGB">
                                <div  @click="pitch1(size)" :class="{pitch: clickName1 == size}"  class="SpanItem sc-hzNEM kpMuTa" rel="active" v-for="(size,index) of sizeArr" :key="index" >
                                    {{ size }}
                                </div>
                            </div>
                            
                            <div class="sc-kZmsYB hzewHz"><span class="sc-RcBXQ gJDKLw">购买数量 </span>
                                <div class="sc-fZwumE fecqhx">
                                    <button :disabled="quantity==1" @click="reduce" class="OperationIconred sc-fQejPQ dGBIdN" rel="notactive">-</button>
                                    <span class="Numbers sc-clNaTc iMLzwQ">{{ quantity }}</span>
                                    <button @click="add" class="OperationIconadd sc-fQejPQ dcPVBu" rel="active">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @click="sure" class="AddCart sc-etwtAo ixMtuT" rel="">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'utils/axios.js'
import { Indicator } from 'mint-ui';
import BScroll from 'better-scroll'
import {mapState,mapActions,mapMutations} from 'vuex'
import _ from 'lodash'
    export default{
        data(){
            return {
                mess:[],
                data:[],
                showImg:[],
                showall:false,
                type:[],
                arr:[],
                quantity:'1',
                headTitle:'',
                colorArr:[],
                sizeArr:[],
                clickName:'',
                clickName1:'',
                shopMess:[],
                shopMess1:{},
                sizeClick:false,
                discount:[]
            }
        },
        methods:{
            back(){
                this.$router.back()
            },
            closeClick(){
                this.showall = false
            },
            open(){
                this.showall = true
            },
            reduce(){
                this.quantity --
            },
            add(){
                this.quantity ++
            },
            pitch(name){
                this.sizeClick = true
                this.clickName = name
                for(var i=0;i<this.type.length;i++){
                    if(this.clickName == this.type[i].av_zvalue){
                        this.shopMess.push(this.type[i])
                    }
                }
                if(this.clickName1){
                    for(var i=0;i<this.type.length;i++){
                        if(this.clickName == this.type[i].av_zvalue){
                            if(this.clickName1 == this.type[i].av_fvalue){
                                this.shopMess1 = this.type[i]
                            }
                        }
                    }
                }
            },
            pitch1(name){
                this.sizeClick = true
                this.clickName1 = name
                for(var i=0;i<this.shopMess.length;i++){
                    if(this.clickName1 == this.shopMess[i].av_fvalue){
                        this.shopMess1=this.shopMess[i]
                    }
                }
                if(this.clickName){
                    for(var i=0;i<this.type.length;i++){
                        if(this.clickName == this.type[i].av_zvalue){
                            if(this.clickName1 == this.type[i].av_fvalue){
                                this.shopMess1 = this.type[i]
                            }
                        }
                    }
                }
                
            },
            sure(){
                this.shopMess=[]
                this.shopMess1=[]
                for(var i=0;i<this.type.length;i++){
                    if(this.clickName == this.type[i].av_zvalue){
                        if(this.clickName1 == this.type[i].av_fvalue){
                            this.shopMess1 = this.type[i]
                        }
                    }
                }
                this.showall = false
                this.shopMess1.buy_count = this.quantity
                this.shopMess1.shop_title = this.showImg.goods_title
                this.shopMess1.store_name = this.$route.query.store_name
                this.shopMess1.good_id = this.$route.query.good_id
                this.shopMess1.shop_id = this.$route.query.shop_id
                // console.log(this.$route.query.store_name)

                // this.$store.commit('goodsShow/setDate',this.shopMess1)
                this.quantity = 1

                
                this.$store.dispatch('cart/AddToCart', [this.shopMess1,this.discount])
            },
        },
        async beforeCreate()  {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })
            let id = this.$route.query.good_id
            // console.log(id)
            let message = await axios({
                method:'get',
                url:'/api/getMemberAboutInfo?goods_id='+id  
            })
            this.discount = message.discount?message.discount:''
            this.mess = message.skudata.sku[0]
            this.data = message.discount.coupon[0]?message.discount.coupon[0]:''
            this.showImg = message.skudata.info
            this.type = message.skudata.sku
            this.headTitle = message.skudata.info
            let color = []
            let size = []
            
            for(var i=0;i<this.type.length;i++){
                color[color.length] = this.type[i].av_zvalue
                this.colorArr = Array.from(new Set(color))
                
                size[size.length] = this.type[i].av_fvalue
                this.sizeArr = Array.from(new Set(size))
            }
            Indicator.close()
            let bScroll = new BScroll('.classify',{
                click:true,
                probeType:1,
                pullUpLoad: {
                    threshold: 50
                }
            })
            
        },
        mounted() {
            
        },
    }
</script>
<style lang="stylus" scoped>
@import '~styles/border.styl'
@import '~styles/shopmess.styl'

.pitch
    background  #ff464e
    color #fff
    border .01rem,#ff464e
</style>
