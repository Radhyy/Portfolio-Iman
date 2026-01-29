import React, { useState } from "react"
import { Modal, IconButton, Box, Fade, Backdrop, Zoom, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import DescriptionIcon from "@mui/icons-material/Description"

const Certificate = ({ ImgSertif, title, isPdf = false }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		if (isPdf) {
			// Buka PDF di tab baru
			window.open(ImgSertif, '_blank')
		} else {
			setOpen(true)
		}
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				className=""
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": {
							opacity: 1,
						},
						"& .hover-content": {
							transform: "translate(-50%, -50%)",
							opacity: 1,
						},
						"& .certificate-image": {
							filter: "contrast(1.05) brightness(1) saturate(1.1)",
						},
					},
				}}>
				{/* Certificate Image/PDF Preview with Initial Filter */}
				<Box
					sx={{
						position: "relative",
						"&::before": {
							content: '""',
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: isPdf ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)",
							zIndex: 1,
						},
					}}>
					{isPdf ? (
						// PDF Preview using iframe
						<Box
							className="certificate-image"
							onClick={handleOpen}
							sx={{
								width: "100%",
								height: "280px",
								position: "relative",
								overflow: "hidden",
								cursor: "pointer",
								transition: "filter 0.3s ease",
								"&:hover": {
									"& .pdf-overlay": {
										opacity: 1,
									}
								}
							}}>
							<iframe
								src={`${ImgSertif}#toolbar=0&navpanes=0&scrollbar=0`}
								style={{
									width: "100%",
									height: "400px",
									border: "none",
									pointerEvents: "none",
									transform: "scale(1.2)",
									transformOrigin: "top left",
								}}
								title={title || "PDF Certificate"}
							/>
							<Box
								className="pdf-overlay"
								sx={{
									position: "absolute",
									bottom: 0,
									left: 0,
									right: 0,
									padding: "8px 12px",
									background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
									opacity: 0.8,
									transition: "opacity 0.3s ease",
									display: "flex",
									alignItems: "center",
									gap: 1,
									zIndex: 2,
								}}>
								<DescriptionIcon sx={{ fontSize: 20, color: "rgba(168, 85, 247, 0.9)" }} />
								<Typography sx={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.8rem" }}>
									{title || "PDF Certificate"}
								</Typography>
							</Box>
						</Box>
					) : (
						// Image Preview
						<img
							className="certificate-image"
							src={ImgSertif}
							alt={title || "Certificate"}
							style={{
								width: "100%",
								height: "auto",
								display: "block",
								objectFit: "cover",
								filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
								transition: "filter 0.3s ease",
							}}
							onClick={handleOpen}
						/>
					)}
				</Box>

				{/* Hover Overlay */}
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						opacity: 0,
						transition: "all 0.3s ease",
						cursor: "pointer",
						zIndex: 2,
					}}
					onClick={handleOpen}>
					{/* Hover Content */}
					<Box
						className="hover-content"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -60%)",
							opacity: 0,
							transition: "all 0.4s ease",
							textAlign: "center",
							width: "100%",
							color: "white",
						}}>
						<FullscreenIcon
							sx={{
								fontSize: 40,
								mb: 1,
								filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
							}}
						/>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 600,
								textShadow: "0 2px 4px rgba(0,0,0,0.3)",
							}}>
							{isPdf ? "Open PDF" : "View Certificate"}
						</Typography>
					</Box>
				</Box>
			</Box>

			{/* Modal - Only for images */}
			{!isPdf && (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 300,
						sx: {
							backgroundColor: "rgba(0, 0, 0, 0.9)",
							backdropFilter: "blur(5px)",
						},
					}}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						margin: 0,
						padding: 0,
						"& .MuiBackdrop-root": {
							backgroundColor: "rgba(0, 0, 0, 0.9)",
						},
					}}>
					<Box
						sx={{
							position: "relative",
							width: "auto",
							maxWidth: "90vw",
							maxHeight: "90vh",
							m: 0,
							p: 0,
							outline: "none",
							"&:focus": {
								outline: "none",
							},
						}}>
						{/* Close Button */}
						<IconButton
							onClick={handleClose}
							sx={{
								position: "absolute",
								right: 16,
								top: 16,
								color: "white",
								bgcolor: "rgba(0,0,0,0.6)",
								zIndex: 1,
								padding: 1,
								"&:hover": {
									bgcolor: "rgba(0,0,0,0.8)",
									transform: "scale(1.1)",
								},
							}}
							size="large">
							<CloseIcon sx={{ fontSize: 24 }} />
						</IconButton>

						{/* Modal Image */}
						<img
							src={ImgSertif}
							alt="Certificate Full View"
							style={{
								display: "block",
								maxWidth: "100%",
								maxHeight: "90vh",
								margin: "0 auto",
								objectFit: "contain",
							}}
						/>
					</Box>
				</Modal>
			)}
		</Box>
	)
}

export default Certificate
