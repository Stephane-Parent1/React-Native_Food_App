import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Route } from "./src/navigation/route.model";
import { ResultsShowScreen } from "./src/screens/ResultsShowScreen";
import { SearchScreen } from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    [Route.SEARCH]: SearchScreen,
    [Route.SHOW_BUSINESS]: ResultsShowScreen,
  },
  {
    initialRouteName: Route.SEARCH,
    defaultNavigationOptions: {
      title: "Business Search",
    },
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: "transparent" },
    },
  }
);

export default createAppContainer(navigator);
