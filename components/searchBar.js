import {makeStyles, withStyles} from '@material-ui/core/styles'
import {InputLabel, MenuItem, FormControl, Select, NativeSelect, InputBase} from '@material-ui/core'

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '100px 70px 10px 70px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    margin: {
        margin: theme.spacing(1)
    },
    selectBar: {
        width: '150px'
    }
}))

export default function SearchBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl className={classes.margin}>
                <InputLabel>Search for a country ...</InputLabel>
                <BootstrapInput />
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel>Filter by Region</InputLabel>
                <Select
                    input={<BootstrapInput />}
                    className={classes.selectBar}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Africa">
                        Africa
                    </MenuItem>
                    <MenuItem value="America">
                        America
                    </MenuItem>
                    <MenuItem value="Europe">
                        Europe
                    </MenuItem>
                    <MenuItem value="Oceania">
                        Oceania
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}