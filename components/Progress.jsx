import Chart from 'react-apexcharts';

const Progress = ({ userData, level, levelid }) => {
	const points = Math.round(
		((userData[0].kihon + userData[0].kata + userData[0].kumite) / level[levelid].max_points) *
			100
	);
	const series = [points];
	const options = {
		chart: {
			height: 1000,
			type: 'radialBar',
		},
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

	return (
		<>
			<Chart options={options} series={series} type="radialBar" width={800} />
		</>
	);
};

export default Progress;
