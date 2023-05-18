import React from "react"
import Tree from './Components/Tree'
import { useLocation } from "./Components/Router"
import { MainPage } from "./Components/DrinksScreen/DrinksScreen"
import LemonTea from "./Components/Drinks/LemonTea"
import Coffee from "./Components/Drinks/Coffee"
import Chocolate from "./Components/Drinks/Chocolate"


export default function App() {
  const { kind } = useLocation('kind=MainPage')
  return (
    <div className="App">
        <Tree />
        { kind === 'mainPage' && <MainPage/> }
        { kind === 'LemonDrink' && <LemonTea/> }
        { kind === 'CoffeeDrink' && <Coffee/> }
        { kind === 'ChocolateDrink' && <Chocolate/> }
    </div>
  )
}