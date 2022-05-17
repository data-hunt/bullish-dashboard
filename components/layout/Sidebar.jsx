import classes from "./sidebar.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PieChartIcon from "@mui/icons-material/PieChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const Sidebar = () => {
	return (
		<div className={classes.sidebar}>
			<div className={classes.top}>
				<span className={classes.logo}>Bullish Dashboard</span>
			</div>
			<div className={classes.center}>
				<ul>
					<p className={classes.title}>MAIN</p>
					<li>
						<DashboardIcon className={classes.icon} />
						<span>Dashboard</span>
					</li>
					<p className={classes.title}>DATA</p>
					<li>
						<AnalyticsIcon className={classes.icon} />
						<span>Performance</span>
					</li>
					<li>
						<PieChartIcon className={classes.icon} />
						<span>Portfolio</span>
					</li>
					<li>
						<PieChartIcon className={classes.icon} />
						<span>Transactions</span>
					</li>
					<li>
						<PieChartIcon className={classes.icon} />
						<span>Valuation</span>
					</li>
					<p className={classes.title}>SETTINGS</p>
					<li>
						<ManageAccountsIcon className={classes.icon} />
						<span>Users</span>
					</li>
				</ul>
			</div>
			<div className={classes.bottom}>
				<div className={classes.colorOption}></div>
			</div>
		</div>
	);
};

export default Sidebar;
