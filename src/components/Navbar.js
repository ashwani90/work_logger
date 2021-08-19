import React, { Fragment, Component } from 'react';

import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";

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
        marginRight: 5
    },
    toolbarMargin: theme.mixins.toolbar
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
                                        color="inherit"
                                        aria-label="Menu"
                                        onClick={e => this.setState({anchor:e.currentTarget})} >
                            {/*  We can place our logo here  */}
                            </IconButton>
                            <Typography className={classes.menuItems}>Home</Typography>
                            <Typography className={classes.menuItems}>About Us</Typography>
                            <Typography className={classes.menuItems}>Contact</Typography>
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