import React from 'react';
// import styles from "./paint.css";

function Sky(props) {
	return (
		<div>
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 1607 633" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
				<path
					d="M95.9674 120.326C297.833 38.0647 457.468 120.326 577.967 401.826C698.467 683.326 142.987 657.826 -96.7728 580.076C-336.533 502.326 -84.3208 193.794 95.9674 120.326Z"
					fill="#D06F00"
				/>
				<path
					d="M1159.84 0H1310.84L1403.84 92.9999C1403.84 92.9999 1508.84 40.5 1578.57 119C1648.29 197.5 1567.07 312.636 1567.07 312.636L1340.34 360.5L1100.11 323.864L952.258 244C952.258 244 893.178 147.456 952.258 73.7282C1011.34 0 1139.34 92.9999 1139.34 92.9999L1159.84 0Z"
					fill="#F3B2A7"
				/>
			</svg>
		</div>
	);
}

export default Sky;