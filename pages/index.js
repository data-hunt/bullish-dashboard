import classes from "../components/layout/layout.module.scss";
import Head from "next/head";
import Widget from "../components/home-page/Widget";
import FeaturedChart from "../components/home-page/Featured-Chart";
import SecondaryChart from "../components/home-page/Secondary-Chart";

const HomePage = () => {
	return (
		<>
			<div>
				<Head>
					<title>Bullish Dashboard</title>
					<meta
						name='description'
						content='Fearless Bulls Club Dashboard. The premier Solana NFT index fund.'
					/>
				</Head>
				<div className={classes.widgets}>
					<Widget type='magic-stats' />
					<Widget type='fbc-stats' />
					<Widget type='sol-stats' />
					<Widget type='test-stats' />
				</div>
				<div className={classes.charts}>
					<FeaturedChart />
					<SecondaryChart />
				</div>
			</div>
		</>
	);
};

export default HomePage;
