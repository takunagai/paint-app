import { useState } from "react";
import Canvas from "./components/Canvas";

function App() {
	const canvasWidth = Math.min(window.innerWidth - 40, 400);
	const canvasHeight = Math.min(window.innerHeight - 120, 600);

	const [brushSize, setBrushSize] = useState(2);
	const [currentColor, setCurrentColor] = useState("#000000");

	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#f5f5f5",
				padding: "20px",
			}}
		>
			<h1 style={{ marginBottom: "20px", fontSize: "24px", color: "#333" }}>
				ペイントアプリ
			</h1>
			<Canvas
				width={canvasWidth}
				height={canvasHeight}
				brushSize={brushSize}
				color={currentColor}
			/>
			<div
				style={{
					marginTop: "20px",
					backgroundColor: "#fff",
					padding: "15px",
					borderRadius: "8px",
					boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
					display: "flex",
					flexDirection: "column",
					gap: "15px",
					width: canvasWidth,
				}}
			>
				<div>
					<label
						htmlFor="brush-size"
						style={{
							display: "block",
							marginBottom: "5px",
							fontSize: "14px",
							color: "#666",
						}}
					>
						ブラシサイズ: {brushSize}px
					</label>
					<input
						id="brush-size"
						type="range"
						min="1"
						max="20"
						value={brushSize}
						onChange={(e) => setBrushSize(Number(e.target.value))}
						style={{
							width: "100%",
							cursor: "pointer",
						}}
					/>
				</div>
				<div>
					<fieldset style={{ border: "none", padding: 0, margin: 0 }}>
						<legend
							style={{
								display: "block",
								marginBottom: "5px",
								fontSize: "14px",
								color: "#666",
								padding: 0,
							}}
						>
							カラーパレット
						</legend>
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(8, 1fr)",
								gap: "8px",
							}}
						>
							{[
								"#000000",
								"#FFFFFF",
								"#FF0000",
								"#00FF00",
								"#0000FF",
								"#FFFF00",
								"#FF00FF",
								"#00FFFF",
								"#808080",
								"#C0C0C0",
								"#800000",
								"#008000",
								"#000080",
								"#808000",
								"#800080",
								"#008080",
							].map((color) => (
								<button
									type="button"
									key={color}
									onClick={() => setCurrentColor(color)}
									style={{
										width: "100%",
										aspectRatio: "1/1",
										backgroundColor: color,
										border:
											currentColor === color
												? "3px solid #333"
												: "1px solid #ddd",
										borderRadius: "4px",
										cursor: "pointer",
										transition: "transform 0.1s",
										transform:
											currentColor === color ? "scale(1.1)" : "scale(1)",
									}}
									aria-label={`色を${color}に設定`}
								/>
							))}
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	);
}

export default App;
