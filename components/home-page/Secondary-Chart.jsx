import classes from "./secondary-chart.module.scss";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "January", Total: 1200 },
	{ name: "February", Total: 2100 },
	{ name: "March", Total: 800 },
	{ name: "April", Total: 1600 },
	{ name: "May", Total: 900 },
	{ name: "June", Total: 1700 },
];

const SecondaryChart = () => {
	return (
		<div className={classes.chart}>
			<div className={classes.title}>Last 6 Months (Revenue)</div>
			<ResponsiveContainer width='100%' height='100%'>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
						</linearGradient>
						{/* <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
						</linearGradient> */}
					</defs>
					<XAxis dataKey='name' color='gray' />
					<CartesianGrid strokeDasharray='3 3' className={classes.chartGrid} />
					<Tooltip />
					<Area
						type='monotone'
						dataKey='Total'
						stroke='#8884d8'
						fillOpacity={1}
						fill='url(#total)'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SecondaryChart;