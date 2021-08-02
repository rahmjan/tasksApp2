import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

const useStyles = makeStyles({
  Paper: {
    margin: 'auto',
    maxWidth: '1400px',
    marginTop: '0.5vh',
  },
});

interface TabI {path: string, label: string, render: object};

function App() {
  const classes = useStyles();
  const tabs: TabI[] = [
    {
      path: '/',
      label: 'Home',
      render: <div>Tab 1</div>
    },
    {
      path: '/tasks',
      label: 'Tasks',
      render: <div>Tab 2</div>
    },
    {
      path: '/profil',
      label: 'Profil',
      render: <div>Tab 3</div>
    },
  ];

  return (
      <BrowserRouter>
        <Paper className={classes.Paper} elevation={2}>
          <Route
            path="/"
            render={({ location }) => (
              <>
                <Tabs
                  value={location.pathname}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
                >
                  {
                    tabs.map(t => <Tab key={t.path} label={t.label} value={t.path} component={Link} to={t.path}/>)
                  }
                </Tabs>
                
                <Switch>
                  {
                    tabs.map(t => <Route key={t.path} path={t.path} exact render={() => t.render}/>)
                  }
                </Switch>
              </>
            )}
          />
        </Paper>
      </BrowserRouter>
  );
}

export default App;
