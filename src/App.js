import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import List from "./components/List";
import ThemeSwitcher from "./components/ThemeSwitcher";

import * as themes from "./styles/themes";
import ThemeContext from "./styles/themes/context";

class App extends Component {
  state = {
    theme: themes.light
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <List/>
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
