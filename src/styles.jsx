import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
	container: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	buttons: {
		marginTop: theme.spacing(5),
	},
	cardGrid: {
		padding: theme.spacing(2, 0),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', //16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6, 0),
	},
}));

export default useStyles;
