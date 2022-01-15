import React, { useCallback, useRef, useState } from 'react';
import { produce } from 'immer';

const numRows = 20;
const numCols = 35;

const neighbours = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, -1],
	[0, 1],
	[1, -1],
	[1, 0],
	[1, 1],
];

interface GridProps {}

export const Grid: React.FC<GridProps> = ({}) => {
	const [running, setRunning] = useState(false);
	const [dark, setDark] = useState(false);
	const [speed, setSpeed] = useState(1);
	const [grid, setGrid] = useState(() => {
		const rows: any[] = [];
		for (let i = 0; i < numRows; i++) {
			const col = [];
			for (let j = 0; j < numCols; j++) {
				col.push(0);
			}
			rows.push(col);
		}
		return rows;
	});

	const runningRef = useRef(running);
	runningRef.current = running;

	const speedRef = useRef(speed);
	speedRef.current = speed;

	const runSimulation = useCallback(() => {
		if (!runningRef.current) return;

		setGrid((prev) => {
			return produce(prev, (gridCopy) => {
				for (let i = 0; i < numRows; i++) {
					for (let j = 0; j < numCols; j++) {
						let activeNbrs = 0;
						const live = prev[i][j] ? true : false;
						neighbours.forEach((nbr) => {
							if (
								i + nbr[0] >= 0 &&
								i + nbr[0] < numRows &&
								j + nbr[1] >= 0 &&
								j + nbr[1] < numCols &&
								prev[i + nbr[0]][j + nbr[1]]
							) {
								activeNbrs++;
							}
						});
						if (live && (activeNbrs < 2 || activeNbrs > 3)) {
							gridCopy[i][j] = 0;
							continue;
						}
						if (!live && activeNbrs == 3) {
							gridCopy[i][j] = 1;
							continue;
						}
					}
				}
			});
		});

		setTimeout(runSimulation, 1000 / speedRef.current);
	}, []);

	const startStopHandler = () => {
		setRunning(!running);
		if (!running) {
			runningRef.current = true;
			runSimulation();
		}
	};

	const cellClickHandler = (i: number, j: number) => {
		setGrid(
			produce(grid, (gridcopy) => {
				gridcopy[i][j] = gridcopy[i][j] ? 0 : 1;
			})
		);
	};

	const toggleDark = () => {
		if (dark) {
			document.body.classList.remove('dark');
		} else {
			document.body.classList.add('dark');
		}
		setDark(!dark);
	};

	const randomHandler = () => {
		setGrid((prev) => {
			return produce(prev, (gridCopy) => {
				for (let i = 0; i < numRows; i++) {
					for (let j = 0; j < numCols; j++) {
						gridCopy[i][j] = Math.random() > 0.7 ? 1 : 0;
					}
				}
			});
		});
	};

	const clearHandler = () => {
		setGrid((prev) => {
			return produce(prev, (gridCopy) => {
				for (let i = 0; i < numRows; i++) {
					for (let j = 0; j < numCols; j++) {
						gridCopy[i][j] = 0;
					}
				}
			});
		});
	};

	const speedHandler = () => {
		setSpeed((prev) => {
			if (prev >= 8) return 1;
			return 2 * prev;
		});
	};

	return (
		<div className="container">
			<div className="controls">
				<div className="board-controls">
					<button className="random-button" onClick={randomHandler}>
						Random
					</button>
					<button className="clear-button" onClick={clearHandler}>
						Clear
					</button>
					<button className="speed-button" onClick={speedHandler}>
						Speed {speed}x
					</button>
				</div>
				<button className="start-button" onClick={startStopHandler}>
					{!running ? 'Start' : 'Stop'}
				</button>
				<button className="theme-button" onClick={toggleDark}>
					{!dark ? '🌞' : '🌙'}
				</button>
			</div>
			<div className="grid-container">
				{grid.map((row, rowindex) => {
					return (
						<div key={rowindex} className="row">
							{row.map((col: number, colindex: number) => {
								return (
									<div
										onClick={() => {
											cellClickHandler(
												rowindex,
												colindex
											);
										}}
										key={rowindex + '-' + colindex}
										className="col"
										style={{
											background: col
												? dark
													? '#ec7a1d'
													: '#2a6ed4'
												: dark
												? '#444'
												: '#ddd',
										}}
									></div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
