import classes from "./layout.module.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props) => {
	return (
		<div className={classes.layout}>
			<Sidebar />
			<div className={classes.layoutContainer}>
				<Navbar />
				<main>{props.children}</main>
			</div>
		</div>
	);
};

export default Layout;
