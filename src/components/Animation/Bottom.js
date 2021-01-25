import React from 'react';
import styles from "./paint.css";

function Bottom(props) {
	return (
		<div>
			<svg
				className={styles.svgBottom}
				width="100%"
				height="100%"
				viewBox="0 0 2636 1329"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					d="M0 691.999C309.5 408 715.5 713.998 1182.5 812.999C1649.5 912 2166 -22.0004 2436.5 469.5C2707 961 2636 1329 2636 1329H0V691.999Z"
					fill="#034A30"
				/>
				<path
					d="M300.544 469.71C391.102 644.709 391.102 1019.71 446.815 949.943C502.527 880.177 640.37 483.211 683.486 693.71C726.602 904.209 547.102 1156.71 640.602 1127.21C798.896 1077.27 911.044 889.21 925.102 1054.71C939.161 1220.21 683.486 1419.21 683.486 1419.21H24.0439C24.0439 1419.21 -627.014 915.176 -383.456 949.943C-139.898 984.71 105.986 1209.21 83.544 1111.71C61.1024 1014.21 -253.015 594.21 -125.456 644.71C2.10266 695.21 154.273 949.943 154.273 949.943C154.273 949.943 209.985 294.711 300.544 469.71Z"
					fill="#6A75C1"
				/>
                {/* <path
					d="M95.9674 120.326C297.833 38.0647 457.468 120.326 577.967 401.826C698.467 683.326 142.987 657.826 -96.7728 580.076C-336.533 502.326 -84.3208 193.794 95.9674 120.326Z"
					fill="#D06F00"
				/> */}
                {/* <path
					d="M1159.84 0H1310.84L1403.84 92.9999C1403.84 92.9999 1508.84 40.5 1578.57 119C1648.29 197.5 1567.07 312.636 1567.07 312.636L1340.34 360.5L1100.11 323.864L952.258 244C952.258 244 893.178 147.456 952.258 73.7282C1011.34 0 1139.34 92.9999 1139.34 92.9999L1159.84 0Z"
					fill="#F3B2A7"
				/> */}
				<path
					d="M1999.54 164.003C2049.16 151.841 2081.46 0.87931 2132.54 0.00377999C2184.66 -0.889611 2179.9 156.871 2231.54 164.004C2294.01 172.634 2368.21 114.07 2430.04 126.504C2503.3 141.237 2505.04 273.503 2450.54 338.503C2396.04 403.503 2335.88 377.828 2334.04 437.504C2332.32 493.326 2447.65 484.566 2430.04 543.503C2417.3 586.164 2374.21 607.684 2351.54 646.004C2312.41 712.153 2447.36 727.069 2402.54 789.503C2351.18 861.04 2244.84 669.815 2173.54 721.503C2141.53 744.71 2167.23 787.539 2132.54 806.503C2071.36 839.946 2030.04 646.004 1982.04 721.503C1934.04 797.003 1948.54 840.504 1876.54 823.504C1804.54 806.504 1883.04 560.504 1883.04 560.504C1883.04 560.504 1769.2 471.669 1792.02 411.729C1810.03 364.429 1883.04 386.003 1907.04 338.503C1931.04 291.003 1757.44 170.931 1818.04 126.504C1877.27 83.0833 1928.21 181.488 1999.54 164.003Z"
					fill="#F3B2A7"
				/>
				<path
					d="M1779.5 1044.5C2160 1044.5 2485 983 2492 899.499C2499 815.999 2636 818.5 2636 818.5V1326H1574C1574 1326 1553.39 1044.5 1779.5 1044.5Z"
					fill="#D06F00"
				/>
			</svg>
		</div>
	);
}

export default Bottom;
