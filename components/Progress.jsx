import Chart from 'react-apexcharts';

const Progress = ({ user, level, levelid }) => {
	const points = Math.round(
		((user.kihon + user.kata + user.kumite) / level[levelid].max_points) * 100
	);

	const series = [points];
	const options = {
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				hollow: {
					margin: 0,
					size: '70%',
				},
			},
		},
		labels: ['Progress'],
	};

	const width = window.innerWidth;
	let height = 0;

	if (width < 426) {
		height = 390;
	} else if (width > 425 && width < 1440) {
		height = 500;
	} else {
		height = 1000;
	}

	return (
		<>
			<Chart
				options={options}
				series={series}
				type="radialBar"
				height={height}
				width={height}
			/>
		</>
	);
};

export default Progress;
