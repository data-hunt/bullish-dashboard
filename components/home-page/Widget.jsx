import classes from "./widget.module.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Widget = ({ type }) => {
	let data;

	//Temporary
	const amount = 100;
	const diff = 20;

	switch (type) {
		case "magic-stats":
			data = {
				title: "Magic Eden",
				isMoney: false,
				link: "See all users",
				icon: <PersonOutlineOutlinedIcon className='icon' />,
			};
			break;
		default:
			break;
	}

	switch (type) {
		case "fbc-stats":
			data = {
				title: "BULLISH STATS",
				isMoney: false,
				link: "See all users",
				icon: <PersonOutlineOutlinedIcon className='icon' />,
			};
			break;
		default:
			break;
	}

	switch (type) {
		case "sol-stats":
			data = {
				title: "SOLANA",
				isMoney: false,
				link: "See all users",
				icon: <PersonOutlineOutlinedIcon className='icon' />,
			};
			break;
		default:
			break;
	}

	switch (type) {
		case "test-stats":
			data = {
				title: "TEST",
				isMoney: false,
				link: "See all users",
				icon: <PersonOutlineOutlinedIcon className='icon' />,
			};
			break;
		default:
			break;
	}

	return (
		<div className={classes.widget}>
			<div className={classes.left}>
				<span className={classes.title}>{data.title}</span>
				<span className={classes.counter}>
					{data.isMoney && "$"}
					{amount}
				</span>
				<span className={classes.link}>{data.link}</span>
			</div>
			<div className={classes.right}>
				<div className={classes.percentage.positive}>
					<KeyboardArrowUpIcon />
					{diff} %
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
