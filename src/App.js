import './App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz"
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";

function App() {
  return (
    <Layout>
      <Switch>
          <Route path='/auth' component={Auth} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/quiz-creator' component={QuizCreator} />
          <Route path='/' component={QuizList} />
      </Switch>
    </Layout>
  );
}

export default App;
