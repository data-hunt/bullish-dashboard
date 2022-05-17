import classes from "./featured-chart.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FeaturedChart = () => {
	return (
		<div className={classes.featured}>
			<div className={classes.top}>
				<h1 className={classes.title}>Total Revenue</h1>
				<MoreVertIcon fontSize='small' />
			</div>
			<div className={classes.bottom}>
				<div className={classes.featuredChart}>
					<CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
				</div>
				<p className={classes.title}>Total Sales Made Today</p>
				<p className={classes.amount}>$420</p>
				<p className={classes.desc}>
					Previous transactions processing. Last payments may not be included.
				</p>
				<div className={classes.summary}>
					<div className={classes.item}>
						<div className={classes.itemTitle}>Target</div>
						<div className={classes.itemResult.negative}>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className={classes.resultAmount}>$12.4K</div>
						</div>
					</div>
					<div className={classes.item}>
						<div className={classes.itemTitle}>Target</div>
						<div className={classes.itemResult.positive}>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className={classes.resultAmount}>$12.4K</div>
						</div>
					</div>
					<div className={classes.item}>
						<div className={classes.itemTitle}>Target</div>
						<div className={classes.itemResult.positive}>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className={classes.resultAmount}>$12.4K</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedChart;
