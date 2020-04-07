import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { Page } from './components'
import { Main } from './layout'
import { Dashboard } from './view'
import { AppProvider } from './context'

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Page layout={Main} component={Dashboard} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
