import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
	interface BreakpointOverrides {
		xxl: true;
	}
}

const primaryMain = "#7FAE7A";
const secondaryMain = "#5A295B";
const textSecondary = "#5D565E";
const textPrimary = "#231823";
const light = "#FFFFFF";

let customTheme = createTheme({
	palette: {
		primary: {
			main: "#7FAE7A",
		},
		secondary: {
			main: "#5A295B",
		},
		text: {
			primary: "#231823",
			secondary: "#5D565E",
		},
	},
	spacing: 8,
	// Typography
	typography: {
		fontFamily: "Satoshi",
		h1: {
			fontSize: 64,
			lineHeight: "86px",
			"@media(max-width:1439px)": {
				fontSize: 56,
				lineHeight: "68px",
			},
			"@media(max-width:1199px)": {
				fontSize: 48,
				lineHeight: "56px",
			},
			"@media(max-width:991px)": {
				fontSize: 36,
				lineHeight: "44px",
			},
			"@media(max-width:575px)": {
				fontSize: 32,
				lineHeight: "43px",
			},
		},
		h2: {
			fontSize: 56,
			lineHeight: "76px",
			"@media(max-width:1439px)": {
				fontSize: 48,
				lineHeight: "54px",
			},
			"@media(max-width:1199px)": {
				fontSize: 40,
				lineHeight: "48px",
			},
			"@media(max-width:991px)": {
				fontSize: 30,
				lineHeight: "42px",
			},
			"@media(max-width:575px)": {
				fontSize: 24,
				lineHeight: "32px",
			},
		},
		h4: {
			fontSize: 32,
			lineHeight: "48px",
			"@media(max-width:1399px)": {
				fontSize: 26,
				lineHeight: "38px",
			},
			"@media(max-width:991px)": {
				fontSize: 22,
				lineHeight: "28px",
			},
			"@media(max-width:575px)": {
				fontSize: 20,
				lineHeight: "28px",
			},
		},
		h5: {
			fontSize: 20,
			lineHeight: "30px",
			"@media(max-width:991px)": {
				fontSize: 18,
				lineHeight: "25px",
			},
			"@media(max-width:575px)": {
				fontSize: 16,
				lineHeight: "24px",
			},
		},
		h6: {
			fontSize: 18,
			lineHeight: "27px",
			"@media(max-width:767px)": {
				fontSize: 16,
				lineHeight: "22px",
			},
			"@media(max-width:575px)": {
				fontSize: 14,
				lineHeight: "20px",
			},
		},
		body1: {
			fontSize: 16,
			lineHeight: "22px",
			"@media(max-width:767px)": {
				fontSize: 14,
				lineHeight: "20px",
			},
		},
		body2: {
			fontSize: 14,
			lineHeight: "20px",
		},
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 992,
			xl: 1200,
			xxl: 1400,
		},
	},
});

customTheme = createTheme(customTheme, {
	components: {
		MuiInputBase: {
			styleOverrides: {
				root: {
					display: "flex",
					fontSize: "15px",
					lineHeight: "26px",
				},
				input: {
					caretColor: [customTheme.palette.primary.main],
					"::placeholder": {
						color: [customTheme.palette.text.secondary],
						opacity: 1,
					},
				},
				MuiInputAdornment: {
					"& .MuiButtonBase-root.MuiIconButton-root": {
						padding: "12px",
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: "16px",
					lineHeight: "22px",
					color: textSecondary,
					transform: "translate(16px, 13px)",

					"&.Mui-focused, &[data-shrink = true]": {
						transform: "translate(12px, -8px) scale(1)",
						fontSize: "11px",
						lineHeight: "14px",
						backgroundColor: light,
						padding: "0 2px",
					},
					"&.Mui-focused": {
						color: primaryMain,
					},
					"&.Mui-disabled": {
						color: textSecondary,
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					display: "flex",
					padding: "0",
					borderRadius: "0",
					"& .MuiOutlinedInput-notchedOutline": {
						top: "-1px",
						borderColor: "#DDDDDD",
					},
					"& .MuiOutlinedInput-notchedOutline legend": {
						display: "none",
					},
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						borderWidth: "1px",
					},
					"&.Mui-disabled": {
						color: textPrimary,
						background: "#F5F5F5",
					},
					"&:hover:not(.Mui-focused, .Mui-disabled, .Mui-error) .MuiOutlinedInput-notchedOutline":
						{ borderColor: textSecondary },
				},

				input: {
					height: "22px",
					padding: "13px 16px",
					borderColor: "#DDDDDD",
					borderRadius: "0",
					"&.Mui-disabled": {
						"-webkit-text-fill-color": [customTheme.palette.text.primary],
					},
					"&.MuiInputBase-inputAdornedEnd": {
						paddingRight: "0",
					},
				},
			},
		},
		MuiFormControl: {
			styleOverrides: {
				root: {
					marginBottom: "24px",

					"@media(max-width:767px)": {
						marginBottom: "20px"
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "capitalize",
					fontWeight: 500,
					borderRadius: "40px",
				},
				textSecondary: {
					fontSize: 16,
					lineHeight: "22px",
					fontWeight: 400,
					position:"relative",

					"&::before": {
						content: '" "',
						height: "2px",
						width: "0",
						left: "0",
						bottom: "8px",
						backgroundColor: secondaryMain,
						position: "absolute",
						transition:"width 0.5s ease"
					},

					"&:hover::before": {
						width: "100%",
					},

					"&:focus, &.Mui-focused, &:active": {
						color: primaryMain,

						"&::before": {
							backgroundColor: primaryMain,
						},
					},

					"&.MuiButton-sizeMedium": {
						padding: "13px 16px",
						
						"@media(max-width:767px)": {
							padding: "10px 16px",
						},
					},
					"&.MuiButton-sizeSmall": {
						padding: "9px 16px",
					},

				},
				outlinedPrimary: {
					borderColor: primaryMain,
					fontSize: 16,
					lineHeight: "22px",
					borderRadius: "40px",

					"&:hover": {
						backgroundColor: "rgb(0 188 231 / 12%)",
					},
					"&.MuiButton-sizeMedium": {
						paddingTop: "12px",
						paddingBottom: "12px",
						
						"@media(max-width:767px)": {
							paddingTop: "8px",
							paddingBottom: "8px",
						},
					},
					"&.MuiButton-sizeSmall": {
						padding: "11px 16px",
					},
					"&.Mui-disabled": {
						color: "rgba(0, 188, 231, 0.7)",
						border: " 1px solid rgba(0, 188, 231, 0.5)",
					},
				},

				outlinedSecondary: {
					borderColor: secondaryMain,
					fontSize: 16,
					lineHeight: "22px",
					borderRadius: "40px",

					"&:hover": {
						backgroundColor: secondaryMain,
						color: light,
					},
					"&.MuiButton-sizeMedium": {
						paddingTop: "12px",
						paddingBottom: "12px",

						"&:focus, &:active, &.Mui-focused": {
							paddingTop: "11px",
							paddingBottom: "11px",
						},

						"@media(max-width:767px)": {
							fontSize: 14,
							lineHeight: "21px",
							paddingTop: "8px",
							paddingBottom: "8px",

							"&:focus, &:active, &.Mui-focused": {
								paddingTop: "7px",
								paddingBottom: "7px",
							},
						},
					},
					"&.MuiButton-sizeSmall": {
						padding: "8px 16px",

						"&:focus, &:active, &.Mui-focused": {
							paddingTop: "7px",
							paddingBottom: "7px",
							color: light,
						},
					},
					"&:hover:not(:focus, :active, &.Mui-focused)": {
						boxShadow: "0px 4px 16px 0px rgba(90, 41, 91, 0.60)",
						backgroundColor: secondaryMain,
					},

					"&:focus, &:active, &.Mui-focused": {
						border: "2px solid #B77BB8",
						backgroundColor: secondaryMain,
						color: light,
					},

					"&:disabled, &.Mui-disabled": {
						opacity:"0.4"
					},
				},

				containedSecondary: {
					color: "#FFFFFF",
					boxShadow: "none",
					textTransform: "capitalize",
					position: "relative",
					borderRadius: "40px",
					fontSize: 16,
					lineHeight: "22px",

					"&:hover:not(:focus, :active, &.Mui-focused)": {
						boxShadow: "0px 4px 16px 0px rgba(90, 41, 91, 0.60)",
						backgroundColor: secondaryMain,
					},

					"&:focus, &:active, &.Mui-focused": {
						border: "2px solid #B77BB8",
						backgroundColor: secondaryMain, 
					},

					"&:disabled, &.Mui-disabled": {
						opacity:"0.4"
					},

					"&.MuiButton-sizeMedium": {
						padding: "13px 32px",

						"&:focus, &:active, &.Mui-focused": {
							padding: "11px 30px",
						},
						"@media(max-width:767px)": {
							padding: "8px 32px",

							"&:focus, &:active, &.Mui-focused": {
								padding: "6px 30px",
							},
						},
					},
					"&.MuiButton-sizeSmall": {
						padding: "9px 32px",

						"&:focus, &:active, &.Mui-focused": {
							paddingTop: "7px",
							paddingBottom: "7px",
						},
					},
					"&:active": {
						transform: "scale(0.97)",
					},
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					boxShadow: "none",
					backgroundColor: "transparent",
					padding: "11px 0",
					position: "fixed",
					top: "0",
					left: "0",
					right: "0",
					zIndex: "10",

					"@media(max-width: 767px)": {
						padding: "12px 0",
					},
				},
			},
		},
		MuiMenu: {
			"&.MuiPaper-root.MuiMenu-paper.MuiPaper-root.MuiPopover-paper": {
				boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.1)",
				borderRadius: "6px",
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					padding: "10px 0",
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					padding: "3px 16px",
					"&:hover:not(.active), &:focus:not(.active)": {
						backgroundColor: "rgba(0, 0, 0, 0.12)",
					},
					"@media(max-width:899px)": {
						minHeight: "32px",
					},
				},
			},
		},
		MuiAccordion: {
			styleOverrides: {
				root: {
					backgroundColor: "transparent",
					borderRadius: 0,
					boxShadow: "none",

					"&:before": {
						display: "none",
					},

					"&:not(:last-of-type):after": {
						'content': '" "',
						position: "absolute",
						height: "1px",
						width: "100%",
						backgroundColor: "#DDDDDD",
						left: "0",
						bottom: "0",
					},

					"&.Mui-expanded": {
						backgroundColor: "#FFF",
						boxShadow: "0px 4px 24px 0px rgba(35, 24, 35, 0.07)",

						"&:not(:last-of-type):after": {
							opacity: "0",
						},
					}
				}
			}
		},
		MuiTabs: {
			styleOverrides: {
				root: {
					backgroundColor: light,
					borderRadius: "40px",
					boxShadow: "0px 16px 34px 0px rgba(0, 0, 0, 0.07)",
					padding: "4px 8px",
					
					"@media(max-width:575px)": {
						minHeight: "44px",
					},
				},
				indicator:{
					display:"none",
				},
				flexContainer:{
					columnGap:"4px",
					justifyContent:"center",				
				},
			}
		},
		MuiTab: {
			styleOverrides: {
				root: {
					borderRadius: "40px",
					padding:"9px 24px",
					fontSize:"16px",
					lineHeight:"22px",
					color:textPrimary,
					fontWeight: "400",
					minHeight:"0",
					textTransform: "none",
					
					"@media(max-width:575px)": {
						fontSize: 14,
						lineHeight: "19px",
						padding:"8.5px 20px",
					},

					"&.Mui-selected":{
						backgroundColor: secondaryMain,
						color: light,
					},
					"&:hover:not(.Mui-selected)":{
						backgroundColor:"rgb(90, 41, 91, 0.09)"
					}
				},
			}
		},
	},
});

export default customTheme;