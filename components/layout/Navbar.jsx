import classes from "./navbar.module.scss";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={classes.wrapper}>
				<div className={classes.items}>
					<div className={classes.item}>
						<LanguageIcon className={classes.icon} />
						English
					</div>
					<div className={classes.item}>
						<DarkModeOutlinedIcon className={classes.icon} />
					</div>
					<div className={classes.item}>
						<NotificationsNoneOutlinedIcon className={classes.icon} />
						<div className={classes.counter}>1</div>
					</div>
					<div className={classes.item}>
						<img
							src='https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
							alt=''
							className={classes.avatar}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
