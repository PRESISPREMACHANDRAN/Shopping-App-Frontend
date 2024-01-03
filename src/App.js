import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import NotFound from "./Components/NotFound";
import Search from "./Components/Search";
import ViewAll from "./Components/ViewAll";


function App() {
  return (
<BrowserRouter>
<Routes>

  <Route path="/" exact element={<Add/>}/>
  <Route path="*" exact element={<NotFound/>}/>
  <Route path="/search" exact element={<Search/>}/>
  <Route path="/viewAll" exact element={<ViewAll/>}/>

</Routes>

</BrowserRouter>
  );
}

export default App;
