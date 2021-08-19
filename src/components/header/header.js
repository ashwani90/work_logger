import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import logo from '../../logo.jpg';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex:1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    menuItems: {
        marginLeft: 5,
        marginRight: 5,
        color: "white",
    },
    whiteClass: {
        color: "white"
    },
    toolbarMargin: theme.mixins.toolbar,
    imageSize: {
        height: 50,
        width: 50,
        borderRadius: 50,
    }
});

const ToolBar = withStyles(styles)(
    class extends Component {
        static defaultProps = {
            RightButton: () => <Button color={"inherit"}>Login</Button>
        }
        state = {anchor: null};

        render() {
            const { classes, title, MenuItems, RightButton } = this.props;
            return (
                <Fragment>
                    <AppBar>
                        <Toolbar>
                            <IconButton className={classes.menuButton}
                                        color="white"
                                        aria-label="Menu"
                                        onClick={e => this.setState({anchor:e.currentTarget})} >
                                <Link className={classes.whiteClass} to="/"><img className={classes.imageSize} src={logo} alt="Logo" /></Link>
                            </IconButton>
                            <Typography className={classes.menuItems}><Link className={classes.whiteClass} to="/">Home</Link></Typography>
                            <Typography className={classes.menuItems}><Link className={classes.whiteClass} to="/about">About Us</Link></Typography>
                            <Typography className={classes.menuItems}><Link className={classes.whiteClass} to="/contact">Contact</Link></Typography>
                            <Typography variant="title"
                                        color="inherit"
                                        className={classes.flex} >
                                {title}
                            </Typography>
                            <RightButton />
                        </Toolbar>
                    </AppBar>
                    <div className={classes.toolbarMargin} />
                </Fragment>
            );
        }
    }
);

const ToolbarAbstraction = withStyles(styles) (
    ({classes, ...props}) => (
        <div className={classes.root}>
            <ToolBar {...props} />
        </div>
    )
);

export default ToolbarAbstraction;