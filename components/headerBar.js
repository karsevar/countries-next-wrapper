import {AppBar, Typography, MenuItem, ListItemIcon} from '@material-ui/core'
import RestoreIcon from '@material-ui/icons/Restore'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: 'black',
        fontWeight: 800,
    },
    navigation: {
        padding: '20px 70px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconcolor: {
        color: 'black'
    },
    modeText: {
        color: 'black'
    },
    modeToggle: {
        minWidth: '30px'
    }
}))

export default function HeaderBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.navigation}>
                <Typography variant="h5" className={classes.title}>What in the world?</Typography>
                <MenuItem>
                    <ListItemIcon className={classes.modeToggle}>
                        <RestoreIcon className={classes.iconcolor} fontSize='medium' />
                    </ListItemIcon>
                    <Typography variant='p' className={classes.modeText}>Dark Mode</Typography>
                </MenuItem>
            </AppBar>
        </div>
    )
}