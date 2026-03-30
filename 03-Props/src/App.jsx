import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Saitama' desc='One Punch Man' img='https://imgs.search.brave.com/sw_ebwtFe2_wD1ZoFWyZv6pwNgHPX2So6hShqyA8Ilc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM4LmFscGhhY29k/ZXJzLmNvbS82Njkv/dGh1bWJiaWctNjY5/MDQ3LndlYnA' />

      <Card user='Luffy' desc='Strawhar' img='https://imgs.search.brave.com/TOazzeUgjgVKP8ms_QD-K9h2YD6qSxsJSLz3bthCZEo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdHMteW91ci1m/YXZvcml0ZS1sdWZm/eS1pbWFnZS12MC16/M3N5ejdwaDJtaWUx/LmpwZWc_d2lkdGg9/NjYwJmZvcm1hdD1w/anBnJmF1dG89d2Vi/cCZzPWIwNDEyOGJm/ZmM2ODhiMWY5YTFk/NmIwNDEwOTgyYjg4/NmY0NjMyMTE' />
    </div>
  )
}

export default App
